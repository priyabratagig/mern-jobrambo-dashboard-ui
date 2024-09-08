import request from './config.api'
import { PAYMENT_DASBOARD } from './routes.api'

export const pay_dashboard_access = async () => {
    const reqConfig = {
        method: 'POST',
        url: PAYMENT_DASBOARD
    }

    const data = await request(reqConfig)

    return data.user
}
