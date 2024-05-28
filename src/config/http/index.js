import request from '@/config/request'

export function sendEmail(data) {
    return request.post(
        '/api/email/sendEmail',
        {
            data
        }
    )
}
