/* eslint-disable */
export async function onRequest({params}): Promise<Response> {
    return new Response(params.url)
}