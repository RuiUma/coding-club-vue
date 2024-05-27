

const onRequestPost = async (context) => {

    const body = await context.request.json();
    console.log(body);
    await fetch('http://localhost:3000/api/email', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    return new Response(JSON.stringify(body))
}



export { onRequestPost }