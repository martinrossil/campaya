/* eslint-disable */
const responseInit = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'content-type': 'text/plain'
        //'content-type': 'application/json;charset=UTF-8'
    }
}

export async function onRequest({request}): Promise<Response> {
    return new Response(JSON.stringify(await request.body.text()), responseInit);
}
