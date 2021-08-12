import { ReviewGroup } from '@island.is/application/ui-components'
import { GridColumn, GridRow } from '@island.is/island-ui/core'
import React, { FC } from 'react'
import {
  complainee as complaineeMessages,
  complaintOverview,
} from '../../lib/messages'
import { ComplaineeTypes } from '../../shared'
import { ValueLine } from './ValueLine'

type Props = {
  type: ComplaineeTypes
  name: string
  description: string
}

export const ComplaintInformation: FC<Props> = ({
  type,
  name,
  description,
}) => {
  const complainee =
    type === ComplaineeTypes.GOVERNMENT
      ? complaineeMessages.labels.governmentComplaint
      : complaineeMessages.labels.otherComplaint
  return (
    <ReviewGroup>
      <GridRow>
        <GridColumn span={['12/12', '12/12', '6/12']}>
          <ValueLine
            label={complaintOverview.labels.complainee}
            value={complainee}
          />
        </GridColumn>
        <GridColumn span={['12/12', '12/12', '6/12']}>
          <ValueLine
            label={complaintOverview.labels.complaineeName}
            value={name}
          />
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn span={'12/12'}>
          <ValueLine
            label={complaintOverview.labels.complaintDescription}
            value={description}
          />
        </GridColumn>
      </GridRow>
    </ReviewGroup>
  )
}
