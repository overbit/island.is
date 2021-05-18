import { useMutation } from '@apollo/client'
import { PageLayout } from '@island.is/judicial-system-web/src/shared-components'
import React from 'react'
import NewInstitutionForm from './NewInstitutionForm'

const NewInstitution = () => {
  // TODO
  // const [createInstitutionMutation, { loading: creatingInstitution }] = useMutation(
  //   CreateInstitutionMutation,
  // )

  return (
    <PageLayout showSidepanel={false} notFound={false} isLoading={false}>
      <NewInstitutionForm />
    </PageLayout>
  )
}

export default NewInstitution
