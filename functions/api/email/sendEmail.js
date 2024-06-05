

const onRequestPost = async (context) => {

    const body = await context.request.json();

    
    const response = await fetch('http://localhost:3000/api/email', {
        method: 'POST',
        body: JSON.stringify(body),
        // headers: {
        //     'Content-type': 'application/json; charset=UTF-8',
        //     'Access-Control-Allow-Origin': '*',
        //     'Access-Control-Allow-Methods': 'DELETE,PUT,POST,GET,OPTIONS',
        //     'Access-Control-Allow-Headers': '*'
    
        // },
    })
    const res = await response.json();
    console.log('log response');
    console.log(res);
    return new Response(JSON.stringify(res), {
        headers: {
            'Content-type': 'application/json',
        },
    
    })
}





export { onRequestPost }