import { apiEndpoint } from '../config/config'
import createRestApiClient from './restApiClient'

const endpoint = process.env === 'development' ? apiEndpoint.dev : apiEndpoint.prod

export default () => {
  const client = createRestApiClient().withConfig({ baseURL: endpoint })
  return {
    blacklistProduct: (productId, status) => client.request({
      method: 'PATCH',
      url: `/products/${productId}`,
      data: { enabled: status }
    })
  };
};

