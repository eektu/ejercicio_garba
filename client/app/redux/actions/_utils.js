import { CustomError } from './../../../../common/CustomError'

export const extractError = (response) => {
    const { message, type, status } = JSON.parse(JSON.stringify(response)).response.data
    return new CustomError(message, type, status) 
}