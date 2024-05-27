// npm run build; cp ./_routes.json ./dist/_routes.json
// import {sendEmail} from '@/config/email/index'




const onRequestPost = async (context) => {
    console.log('post called');

    const body = await context.request.json();
    console.log('body');
    console.log(body);


    return new Response (JSON.stringify({
        "status": "success",
        "method": context,
        "message": body
    }))
}



export { onRequestPost }