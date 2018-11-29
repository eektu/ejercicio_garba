import { apiEndpoint } from '../config/config'
import createRestApiClient from './restApiClient'

const endpoint = process.env === 'dev' ? apiEndpoint.dev : apiEndpoint.prod

export default () => {
  const client = createRestApiClient().withConfig({ baseURL: endpoint })
  return {
    getDetails: ({ id }) => client.request({
      method: 'GET',
      url: `/products/${id}`
    })
  }
}

