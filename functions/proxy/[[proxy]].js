const onRequest = async (context) => {

    console.log('called');

    const { request, response, env } = context;
    const pathname = new URL(request.url).pathname;
    console.log(request.url);
    if (pathname.startsWith('/proxy')) {

        const pattern = /^(http?:\/\/[^\/]+\/)proxy\//;
		const newBase = 'https://coding-club-nextjs.vercel.app/';
		
		
		const url = new URL(request.url.replace(pattern, newBase));

		console.log(url);
		
		if (url.toString() === request.url) {
			return new Response('cannot modify URL');
		}

		// make subrequests with the global `fetch()` function
		let res = await fetch(url, request);

		// optionally, modify the respone
		res = new Response(res.body, res);
		res.headers.set('X-My-Header', 'My Header Value');
		

		return res;
    }

}

export default { onRequest }