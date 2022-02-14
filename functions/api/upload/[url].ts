/* eslint-disable */
export async function onRequest({request}): Promise<Response> {
    // return new Response(JSON.stringify(await request.body.text()), responseInit);
    // const body = await request.body.text();
    return new Response('test', {
        headers: {
            'content-type': 'text/plain',
            'Access-Control-Allow-Origin': '*',
        }
    });
}
