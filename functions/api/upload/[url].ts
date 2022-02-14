/* eslint-disable */
export async function onRequest({request}): Promise<Response> {
    // return new Response(JSON.stringify(await request.body.text()), responseInit);
    const body = await request.text();
    return new Response(body, {
        headers: {
            'content-type': 'text/plain',
            'Access-Control-Allow-Origin': '*',
        }
    });
}
