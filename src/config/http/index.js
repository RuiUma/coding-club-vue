import request from '@/config/request'

export function sendEmail(data) {
    return request.post(
        'http://127.0.0.1:8788/api/email/sendEmail',
        {
            data
        }
    )
}
