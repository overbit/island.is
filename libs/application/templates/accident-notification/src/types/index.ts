import { NO, YES } from './../constants'

export type CompanyInfo = {
  nationalRegistrationId: string
  companyName: string
  name: string
  email: string
  phoneNumber: string
  type: AccidentTypeEnum | WorkAccidentTypeEnum
  employee?: {
    radioButton: YesOrNo
  }
}

export type FileType = {
  url?: string | undefined
  name: string
  key: string
}

export enum DataProviderTypes {
  NationalRegistry = 'NationalRegistryProvider',
  UserProfile = 'UserProfileProvider',
}

export enum WhoIsTheNotificationForEnum {
  JURIDICALPERSON = 'juridicalPerson',
  ME = 'me',
  POWEROFATTORNEY = 'powerOfAttorney',
}

export enum AccidentTypeEnum {
  HOMEACTIVITIES = 'homeActivities',
  WORK = 'work',
  RESCUEWORK = 'rescueWork',
  STUDIES = 'studies',
  SPORTS = 'sports',
}

export type YesOrNo = typeof NO | typeof YES

export enum AttachmentsEnum {
  INJURYCERTIFICATE = 'injuryCertificate',
  HOSPITALSENDSCERTIFICATE = 'hospitalSendsCertificate',
  SENDCERTIFICATELATER = 'sendCertificateLater',
  INJUREDSENDSCERTIFICATE = 'injuredSendsCertificate',
}

export enum GeneralWorkplaceAccidentLocationEnum {
  ATTHEWORKPLACE = 'atTheWorkplace',
  TOORFROMTHEWORKPLACE = 'GeneralWorkplaceAccidentLocation.toOrFromTheWorkplace',
  OTHER = 'GeneralWorkplaceAccidentLocation.other',
}

export enum FishermanWorkplaceAccidentLocationEnum {
  ONTHESHIP = 'onTheShip',
  TOORFROMTHEWORKPLACE = 'FishermanWorkplaceAccidentLocation.toOrFromTheWorkplace',
  OTHER = 'FishermanWorkplaceAccidentLocation.other',
}

export enum FishermanWorkplaceAccidentShipLocationEnum {
  SAILINGORFISHING = 'FishermanWorkplaceAccidentShipLocation.sailingOrFishing',
  HARBOR = 'FishermanWorkplaceAccidentShipLocation.harbor',
  OTHER = 'FishermanWorkplaceAccidentShipLocation.other',
}

export enum ProfessionalAthleteAccidentLocationEnum {
  SPORTCLUBSFACILITES = 'sportClubsFacilites',
  TOORFROMTHESPORTCLUBSFACILITES = 'toOrFromTheSportClubsFacilites',
  OTHER = 'ProfessionalAthleteAccidentLocation.other',
}

export enum AgricultureAccidentLocationEnum {
  ATTHEWORKPLACE = 'agriculture.atTheWorkplace',
  TOORFROMTHEWORKPLACE = 'agriculture.toOrFromTheWorkplace',
  OTHER = 'AgricultureAccidentLocation.other',
}

export enum WorkAccidentTypeEnum {
  GENERAL = 'general',
  FISHERMAN = 'fisherman',
  PROFESSIONALATHLETE = 'professionalAthlete',
  AGRICULTURE = 'agriculture',
}

export enum RescueWorkAccidentLocationEnum {
  DURINGRESCUE = 'duringRescue',
  TOORFROMRESCUE = 'toOrFromRescue',
  OTHER = 'rescueWork.other',
}

export enum StudiesAccidentTypeEnum {
  INTERNSHIP = 'internship',
  APPRENTICESHIP = 'apprenticeship',
  VOCATIONALEDUCATION = 'vocationalEducation',
}

export enum StudiesAccidentLocationEnum {
  ATTHESCHOOL = 'atTheSchool',
  DURINGSTUDIES = 'duringStudies',
  OTHER = 'studiesLocation.other',
}

export enum PowerOfAttorneyUploadEnum {
  UPLOADNOW = 'uploadNow',
  UPLOADLATER = 'uploadLater',
  FORCHILDINCUSTODY = 'forChildInCustody',
}

export enum ReviewSectionState {
  inProgress = 'In progress',
  received = 'Received',
  missing = 'Missing documents',
  pending = 'Pending',
  approved = 'Approved',
  objected = 'Objected',
}
