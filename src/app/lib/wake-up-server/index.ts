import { healthCheckService } from 'shared/api'

export const wakeUpServer = () => {
  setInterval(() => healthCheckService.health().catch((_) => {}), 6e5)
}
