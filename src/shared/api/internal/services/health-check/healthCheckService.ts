import { BasicService } from '../../config'

class HealthCheckService extends BasicService<string> {
  health() {
    return this._instance({
      method: 'get',
      url: this._baseUrl(),
    })
  }
}
export const healthCheckService = new HealthCheckService('health')
