import React, { useState } from 'react'
import { Box, Input, Text } from '@island.is/island-ui/core'
import {
  FormContentContainer,
  FormFooter,
} from '@island.is/judicial-system-web/src/shared-components'
import * as constants from '@island.is/judicial-system-web/src/utils/constants'
import { Institution } from '@island.is/judicial-system/types'
import { validate } from '@island.is/judicial-system-web/src/utils/validate'
import { FormSettings } from '@island.is/judicial-system-web/src/utils/useFormHelper'

interface Props {
  onSave: (institution?: Institution) => void
}

const NewInstitutionForm: React.FC<Props> = (props) => {
  const { onSave } = props
  const [name, setName] = useState<string>('')
  const [nameErrorMessage, setNameErrorMessage] = useState<string>()
  const [institution, setInstitution] = useState<Institution>()
  const validateName = validate(name, 'empty')

  const validations: FormSettings = {
    name: {
      validations: ['empty'],
      errorMessage: nameErrorMessage,
      setErrorMessage: setNameErrorMessage,
    },
  }

  const validateAndSetError = (field: string, value: string) => {
    const fieldValidation = validations[field]

    const error = fieldValidation.validations
      ?.map((v) => validate(value, v))
      .find((v) => v.isValid === false)

    if (error && fieldValidation.setErrorMessage) {
      fieldValidation.setErrorMessage(error.errorMessage)
    }
  }

  return (
    <>
      <FormContentContainer>
        <Box marginBottom={7}>
          <Text as="h1" variant="h1">
            Stofnun
          </Text>
        </Box>
        <Box marginBottom={2}>
          <Input
            name="institutionName"
            label="Nafn stofnunar"
            placeholder="Nafn stofnunar"
            onChange={(evt) => setName(evt.target.value)}
            onBlur={(evt) => validateAndSetError('name', evt.target.value)}
            hasError={nameErrorMessage !== undefined}
            errorMessage={nameErrorMessage}
            required
          />
        </Box>
      </FormContentContainer>
      <FormContentContainer isFooter>
        <FormFooter
          onNextButtonClick={() => onSave(institution)}
          nextIsDisabled={!validateName.isValid}
          nextIsLoading={false}
          nextButtonText="Vista"
          previousUrl={constants.USER_LIST_ROUTE}
        />
      </FormContentContainer>
    </>
  )
}

export default NewInstitutionForm
