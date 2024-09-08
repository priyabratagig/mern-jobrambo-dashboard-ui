import request from './config.api'
import { LOGGEDIN_USER } from './routes.api'

export const get_loggedin_user = async () => {
    const reqConfig = {
        method: 'GET',
        url: LOGGEDIN_USER
    }

    const data = await request(reqConfig)

    return data.user
}
