/* eslint-disable */

export async function onRequest({request}): Promise<Response> {
    return new Response(JSON.stringify(request.body), responseInit);
}

const responseInit = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'content-type': 'text/plain'
        //'content-type': 'application/json;charset=UTF-8'
    }
}