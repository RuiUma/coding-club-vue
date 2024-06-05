export async function onRequest(context) {
    context.request.headers.set('Access-Control-Allow-Origin', '*');
    context.request.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    context.request.headers.set('Access-Control-Allow-Headers', '*');
    context.request.headers.set('Access-Control-Allow-Credentials', 'true');


    context.response.headers.set('Access-Control-Allow-Origin', '*');
    context.response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    context.response.headers.set('Access-Control-Allow-Headers', '*');
    context.response.headers.set('Access-Control-Allow-Credentials', 'true');
    context.response.headers.set('Access-Control-Expose-Headers', '*');

    try {
      return await context.next();
    } catch (err) {
      return new Response(`${err.message}\n${err.stack}`, { status: 500 });
    }
  }