import request from '@/config/request'

const baseURL = 'http://127.0.0.1:8788'

export function sendEmail(data) {
    return request.post(
        // baseURL + '/api/email/sendEmail',
        '/api/email',
        {
            data
        }
    )
}


