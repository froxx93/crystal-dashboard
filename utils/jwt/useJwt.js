// TODO: Either remove this whole package or refactor current JWT usage to fit this example
import JwtService from './jwtService'

export default function useJwt(axiosIns, jwtOverrideConfig) {
  const jwt = new JwtService(axiosIns, jwtOverrideConfig)

  return {
    jwt,
  }
}
