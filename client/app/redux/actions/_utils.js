import { CustomError } from './../../../../common/CustomError'

export const extractError = (response) => {
    return JSON.parse(JSON.stringify(response)).response.data
}