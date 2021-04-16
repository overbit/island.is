import {
  Application,
  ApplicationStatus,
  ApplicationTemplateHelper,
  ApplicationTypes,
  DefaultEvents,
} from '@island.is/application/core'
import { CRCApplication, Answers, ExternalData } from '../types'
import ChildrenResidenceChangeTemplate from './ChildrenResidenceChangeTemplate'
import { ApplicationStates } from './constants'

function buildApplication(
  state = ApplicationStates.DRAFT,
  answers = defaultAnswers,
  externalData = defaultExternalData,
): CRCApplication {
  return {
    id: '12345',
    assignees: [],
    applicant: '123456-7890',
    typeId: ApplicationTypes.CHILDREN_RESIDENCE_CHANGE,
    created: new Date(),
    modified: new Date(),
    attachments: {},
    answers,
    state,
    status: ApplicationStatus.IN_PROGRESS,
    externalData,
  }
}

const applicantEmail = 'email@email'

const defaultAnswers: Answers = {
  approveTerms: ['childSupport', 'effect', 'childBenefit'],
  approveTermsParentB: ['childSupport', 'effect', 'childBenefit'],
  approveExternalData: true,
  selectedChildren: ['childs child'],
  parentA: { email: applicantEmail, phoneNumber: '1112222' },
  counterParty: { email: 'anotherEmail@anotherEmail', phoneNumber: '2221111' },
  parentB: { email: 'anotherEmail@anotherEmail', phoneNumber: '2221111' },
  confirmResidenceChangeInfo: ['yes'],
  durationType: 'permanent',
  interviewParentA: 'yes',
  interviewParentB: 'yes',
  useMocks: 'no',
  mockData: { parents: [], children: [] },
}

const defaultExternalData: ExternalData = {
  nationalRegistry: {
    date: Date.now.toString(),
    data: {
      children: [],
      nationalId: '1122334455',
      fullName: 'Test testers',
      address: {
        streetName: 'Some street',
        postalCode: '00',
        city: 'anywhere',
      },
    },
  },
  userProfile: {
    date: Date.now.toString(),
    data: {
      email: applicantEmail,
      emailVerified: true,
      mobilePhoneNumber: '1112222',
      mobilePhoneNumberVerified: true,
    },
  },
}

describe('Children Residence Change Template', () => {
  describe('state transitions', () => {
    it('should transition from draft to other parent if applicant is asking for shared rights', () => {
      const helper = new ApplicationTemplateHelper(
        (buildApplication() as unknown) as Application,
        ChildrenResidenceChangeTemplate,
      )
      const [hasChanged, newState, newApplication] = helper.changeState({
        type: DefaultEvents.ASSIGN,
      })
      expect(hasChanged).toBe(true)
      expect(newState).toBe('otherParentApproval')
      expect(newApplication.assignees).toEqual([otherParentId])
    })

    it('should transition from draft to employer approval if applicant is not asking for shared rights', () => {
      const otherParentId = '098765-4321'
      const helper = new ApplicationTemplateHelper(
        buildApplication({
          answers: {
            requestRights: {
              isRequestingRights: 'no',
            },
            otherParentId,
            employer: {
              isSelfEmployed: 'no',
            },
          },
        }),
        ParentalLeaveTemplate,
      )
      const [hasChanged, newState, newApplication] = helper.changeState({
        type: DefaultEvents.SUBMIT,
      })
      expect(hasChanged).toBe(true)
      expect(newState).toBe('employerWaitingToAssign')
      // There should be no one assigned until employer accepts to be assigned
      expect(newApplication.assignees).toEqual([])
    })

    it('should assign the application to the employer when transitioning to employer approval from other parent approval', () => {
      const otherParentId = '098765-4321'
      const helper = new ApplicationTemplateHelper(
        buildApplication({
          answers: {
            requestRights: {
              isRequestingRights: 'yes',
            },
            otherParentId,
            employer: {
              isSelfEmployed: 'no',
            },
          },
        }),
        ParentalLeaveTemplate,
      )
      const [hasChanged, newState, newApplication] = helper.changeState({
        type: DefaultEvents.SUBMIT,
      })
      expect(hasChanged).toBe(true)
      expect(newState).toBe('otherParentApproval')
      expect(newApplication.assignees).toEqual([otherParentId])

      const finalHelper = new ApplicationTemplateHelper(
        newApplication,
        ParentalLeaveTemplate,
      )
      const [
        hasChangedAgain,
        finalState,
        finalApplication,
      ] = finalHelper.changeState({
        type: DefaultEvents.APPROVE,
      })
      expect(hasChangedAgain).toBe(true)
      expect(finalState).toBe('employerWaitingToAssign')
      expect(finalApplication.assignees).toEqual([])
    })

    it('should assign the application to the other parent approval and then to VMST when the applicant is self employed', () => {
      const otherParentId = '098765-4321'
      const helper = new ApplicationTemplateHelper(
        buildApplication({
          answers: {
            requestRights: {
              isRequestingRights: 'yes',
            },
            otherParentId,
            employer: {
              isSelfEmployed: 'yes',
            },
          },
        }),
        ParentalLeaveTemplate,
      )
      const [hasChanged, newState, newApplication] = helper.changeState({
        type: DefaultEvents.SUBMIT,
      })
      expect(hasChanged).toBe(true)
      expect(newState).toBe('otherParentApproval')
      expect(newApplication.assignees).toEqual([otherParentId])

      const finalHelper = new ApplicationTemplateHelper(
        newApplication,
        ParentalLeaveTemplate,
      )
      const [
        hasChangedAgain,
        finalState,
        finalApplication,
      ] = finalHelper.changeState({
        type: DefaultEvents.APPROVE,
      })
      expect(hasChangedAgain).toBe(true)
      expect(finalState).toBe('vinnumalastofnunApproval')
      expect(finalApplication.assignees).toEqual([])
    })
  })

  describe('edit flow', () => {
    it('should create a temp copy of periods when going into the Edit flow', () => {
      const periods = [
        {
          ratio: '100',
          endDate: '2021-05-15T00:00:00Z',
          startDate: '2021-01-15',
        },
        {
          ratio: '100',
          endDate: '2021-06-16',
          startDate: '2021-06-01',
        },
      ]
      const helper = new ApplicationTemplateHelper(
        buildApplication({
          answers: {
            periods,
          },
          state: ApplicationStates.APPROVED,
        }),
        ParentalLeaveTemplate,
      )
      const [hasChanged, newState, newApplication] = helper.changeState({
        type: DefaultEvents.EDIT,
      })
      expect(hasChanged).toBe(true)
      expect(newState).toBe(ApplicationStates.EDIT_OR_ADD_PERIODS)
      expect(newApplication.answers.tempPeriods).toEqual(periods)
    })

    it('should remove the temp copy of periods when canceling out of the Edit flow', () => {
      const periods = [
        {
          ratio: '100',
          endDate: '2021-05-15T00:00:00Z',
          startDate: '2021-01-15',
        },
        {
          ratio: '100',
          endDate: '2021-06-16',
          startDate: '2021-06-01',
        },
      ]
      const helper = new ApplicationTemplateHelper(
        buildApplication({
          answers: {
            periods,
            tempPeriods: periods,
          },
          state: ApplicationStates.EDIT_OR_ADD_PERIODS,
        }),
        ParentalLeaveTemplate,
      )
      const [hasChanged, newState, newApplication] = helper.changeState({
        type: DefaultEvents.ABORT,
      })
      expect(hasChanged).toBe(true)
      expect(newState).toBe(ApplicationStates.APPROVED)
      expect(newApplication.answers.tempPeriods).toEqual(undefined)
    })

    it('should assign the application to the employer when the user submits their edits', () => {
      const helper = new ApplicationTemplateHelper(
        buildApplication({
          answers: {
            employer: {
              isSelfEmployed: 'no',
            },
          },
          state: ApplicationStates.EDIT_OR_ADD_PERIODS,
        }),
        ParentalLeaveTemplate,
      )

      const [hasChanged, newState, newApplication] = helper.changeState({
        type: DefaultEvents.SUBMIT,
      })
      expect(hasChanged).toBe(true)
      expect(newState).toBe(
        ApplicationStates.EMPLOYER_WAITING_TO_ASSIGN_FOR_EDITS,
      )
      expect(newApplication.assignees).toEqual([])
    })
  })
})
