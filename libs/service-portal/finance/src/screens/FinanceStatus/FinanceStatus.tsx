import React from 'react'
import flatten from 'lodash/flatten'
import { gql, useQuery } from '@apollo/client'
import { ServicePortalModuleComponent, m } from '@island.is/service-portal/core'
import { Table as T } from '@island.is/island-ui/core'
import { Query } from '@island.is/api/schema'
import {
  Box,
  Text,
  Stack,
  Columns,
  Column,
  Button,
  SkeletonLoader,
  AlertBanner,
  Hidden,
} from '@island.is/island-ui/core'
import { useLocale, useNamespaces } from '@island.is/localization'
import {
  FinanceStatusDataType,
  FinanceStatusOrganizationType,
} from './FinanceStatusData.types'
import { ExpandHeader, ExpandRow } from '../../components/ExpandableTable'
import amountFormat from '../../utils/amountFormat'
import { exportGreidslustadaFile } from '../../utils/filesGreidslustada'
import DropdownExport from '../../components/DropdownExport/DropdownExport'
import FinanceStatusTableRow from '../../components/FinanceStatusTableRow/FinanceStatusTableRow'

const GetFinanceStatusQuery = gql`
  query GetFinanceStatusQuery {
    getFinanceStatus
  }
`

const FinanceStatus: ServicePortalModuleComponent = () => {
  useNamespaces('sp.finance-status')
  const { formatMessage } = useLocale()

  const { loading, error, ...statusQuery } = useQuery<Query>(
    GetFinanceStatusQuery,
  )
  const financeStatusData: FinanceStatusDataType =
    statusQuery.data?.getFinanceStatus || {}

  function getChargeTypeTotal() {
    const organizationChargeTypes = financeStatusData?.organizations?.map(
      (org) => org.chargeTypes,
    )
    const allChargeTypes = flatten(organizationChargeTypes)

    const chargeTypeTotal =
      allChargeTypes.length > 0
        ? allChargeTypes.reduce((a, b) => a + b.totals, 0)
        : 0
    return amountFormat(chargeTypeTotal)
  }

  return (
    <Box marginBottom={[6, 6, 10]}>
      <Stack space={2}>
        <Text variant="h1" as="h1">
          {formatMessage({
            id: 'sp.finance-status:title',
            defaultMessage: 'Staða við ríkissjóð og stofnanir',
          })}
        </Text>
        <Columns collapseBelow="sm">
          <Column width="8/12">
            <Text variant="intro">
              {formatMessage({
                id: 'sp.finance-status:intro',
                defaultMessage:
                  'Hér er að finna gögn um fjárhagslega stöðu þína við hið opinbera. Hafið samband við viðeigandi stofnun fyrir frekari upplýsingar.',
              })}
            </Text>
          </Column>
        </Columns>
        <Box marginTop={[3, 4, 4, 4, 5]}>
          {loading && (
            <Box padding={3}>
              <SkeletonLoader space={1} height={40} repeat={5} />
            </Box>
          )}
          {error && (
            <Box>
              <AlertBanner
                description={formatMessage(m.errorFetch)}
                variant="error"
              />
            </Box>
          )}
          {financeStatusData?.message && (
            <Box paddingY={2}>
              <AlertBanner
                description={financeStatusData?.message}
                variant="warning"
              />
            </Box>
          )}
          {financeStatusData?.organizations?.length > 0 ? (
            <>
              <Hidden print={true}>
                <Columns space="p2" align="right">
                  <Column width="content">
                    <Button
                      colorScheme="default"
                      icon="print"
                      iconType="filled"
                      onClick={() => window.print()}
                      preTextIconType="filled"
                      size="default"
                      type="button"
                      variant="utility"
                    >
                      {formatMessage(m.print)}
                    </Button>
                  </Column>
                  <Column width="content">
                    <DropdownExport
                      onGetCSV={() =>
                        exportGreidslustadaFile(financeStatusData, 'csv')
                      }
                      onGetExcel={() =>
                        exportGreidslustadaFile(financeStatusData, 'xlsx')
                      }
                    />
                  </Column>
                </Columns>
              </Hidden>
              <Box marginTop={2}>
                <T.Table>
                  <ExpandHeader
                    data={[
                      { value: formatMessage(m.feeCategory) },
                      { value: formatMessage(m.guardian) },
                      { value: formatMessage(m.status), align: 'right' },
                    ]}
                  />
                  <T.Body>
                    {financeStatusData.organizations.map(
                      (org: FinanceStatusOrganizationType) =>
                        org.chargeTypes.map((chargeType) => (
                          <FinanceStatusTableRow
                            chargeType={chargeType}
                            organization={org}
                            key={`${org.id}-${chargeType.id}`}
                          />
                        )),
                    )}
                    <ExpandRow
                      last
                      data={[
                        { value: formatMessage(m.total) },
                        { value: '' },
                        { value: getChargeTypeTotal(), align: 'right' },
                      ]}
                    />
                  </T.Body>
                </T.Table>
              </Box>
            </>
          ) : null}
        </Box>
      </Stack>
    </Box>
  )
}

export default FinanceStatus
