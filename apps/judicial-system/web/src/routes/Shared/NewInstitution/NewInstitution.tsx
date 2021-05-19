import { useMutation } from '@apollo/client'
import { Institution } from '@island.is/judicial-system-web/src/graphql/schema'
import { PageLayout } from '@island.is/judicial-system-web/src/shared-components'
import { CreateInstitutionMutation } from '@island.is/judicial-system-web/src/utils/mutations'
import { useRouter } from 'next/router'
import React from 'react'
import NewInstitutionForm from './NewInstitutionForm'
import * as constants from '@island.is/judicial-system-web/src/utils/constants'

const NewInstitution = () => {
  const router = useRouter()

  const [
    createInstitutionMutation,
    { loading: creatingInstitution },
  ] = useMutation(CreateInstitutionMutation)

  const createInstitution = async (institution: Institution): Promise<void> => {
    if (creatingInstitution === false) {
      await createInstitutionMutation({
        variables: {
          input: {
            name: institution.name,
          },
        },
      })
    }

    router.push(constants.USER_LIST_ROUTE)
  }

  return (
    <PageLayout showSidepanel={false} notFound={false} isLoading={false}>
      <NewInstitutionForm onSave={createInstitution} />
    </PageLayout>
  )
}

export default NewInstitution
