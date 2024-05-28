const handleResponse = (data) => {
    return new Response(JSON.stringify(data), {
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET',
            'Access-Control-Allow-Headers': '*',
        }
    })
}
