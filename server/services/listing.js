import { apiEndpoint } from '../config/config'
import createRestApiClient from './restApiClient'

const endpoint = process.env === 'development' ? apiEndpoint.dev : apiEndpoint.prod

export default () => {
  const client = createRestApiClient().withConfig({ baseURL: endpoint })
  return {
    getProducts: () => client.request({
      method: 'GET',
      url: '/products'
    })
  }
}

