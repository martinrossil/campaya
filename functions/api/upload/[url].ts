/* eslint-disable */
export async function onRequest({request, env}): Promise<Response> {
    // return new Response(JSON.stringify(await request.body.text()), responseInit);
    const text = await request.text();
    const body = JSON.stringify({
        text,
        fauna: env.FAUNA_TOKEN,
        images: env.IMAGES_TOKEN
    });
    return new Response(body, {
        headers: {
            'content-type': 'application/json;charset=UTF-8',
            // 'content-type': 'text/plain',
            'Access-Control-Allow-Origin': '*',
        }
    });
}
