import { XRoadMemberClass } from '@island.is/utils/api'

const devConfig = {
  production: false,
  auth: {
    issuer: 'https://identity-server.dev01.devland.is',
    audience: '@island.is',
  },
  port: 3370,
  rsk: {
    xroad: {
      basePath: process.env.XROAD_BASE_PATH_WITH_ENV,
      memberClass: XRoadMemberClass.GovernmentInstitution,
      memberCode: process.env.XROAD_RSK_MEMBER_CODE,
      apiPath: process.env.XROAD_RSK_API_PATH,
      clientId: process.env.XROAD_RSK_CLIENT_ID,
    },
    username: process.env.RSK_USERNAME,
    password: process.env.RSK_PASSWORD,
  },
  nationalRegistry: {
    xroad: {
      basePath: process.env.XROAD_BASE_PATH_WITH_ENV,
      memberClass: XRoadMemberClass.GovernmentInstitution,
      memberCode: process.env.XROAD_NATIONAL_REGISTRY_MEMBER_CODE,
      apiPath: process.env.XROAD_NATIONAL_REGISTRY_API_PATH,
      clientId: process.env.XROAD_NATIONAL_REGISTRY_CLIENT_ID,
    },
  },
}

const prodConfig = {
  production: true,
  auth: {
    audience: '@island.is',
    issuer: process.env.IDS_ISSUER,
  },
  port: 3333,
  rsk: {
    xroad: {
      basePath: process.env.XROAD_BASE_PATH_WITH_ENV,
      memberClass: XRoadMemberClass.GovernmentInstitution,
      memberCode: process.env.XROAD_RSK_MEMBER_CODE,
      apiPath: process.env.XROAD_RSK_API_PATH,
      clientId: process.env.XROAD_RSK_CLIENT_ID,
    },
    username: process.env.RSK_USERNAME,
    password: process.env.RSK_PASSWORD,
  },
  nationalRegistry: {
    xroad: {
      basePath: process.env.XROAD_BASE_PATH_WITH_ENV,
      memberClass: XRoadMemberClass.GovernmentInstitution,
      memberCode: process.env.XROAD_NATIONAL_REGISTRY_MEMBER_CODE,
      apiPath: process.env.XROAD_NATIONAL_REGISTRY_API_PATH,
      clientId: process.env.XROAD_NATIONAL_REGISTRY_CLIENT_ID,
    },
  },
}

export default process.env.NODE_ENV === 'production' ? prodConfig : devConfig
