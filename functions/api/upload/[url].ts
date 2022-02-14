/* eslint-disable */
export async function onRequest({request, env}): Promise<Response> {
    const URL = 'https://api.cloudflare.com/client/v4/accounts/' + env.ACCOUNT_ID + '/images/v2/direct_upload';
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + env.IMAGES_TOKEN
            }
        });
        if (response.ok) {
            const result = await response.json();
            return getResponse(JSON.stringify(result));
        }
        return getResponse('Error');
    } catch (error) {
        return getResponse(JSON.stringify(error));
    }
}

function getResponse(body: string): Response {
    return new Response(body, {
        headers: {
            'content-type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
        }
    });
}
