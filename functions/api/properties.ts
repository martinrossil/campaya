import { PropertiesRequest } from '../types/PropertiesRequest'

/* eslint-disable */
export async function onRequest({env, request}): Promise<Response> {
    try {
        const propertiesRequest: PropertiesRequest = await request.json();
        const response: Response = await fetch('https://graphql.fauna.com/graphql', {
            method: 'POST',
            headers: {
                'content-type': 'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin': '*',
                authorization: 'Basic ' + env.FAUNA_TOKEN,

            },
            body: `{
                "query": "query properties {
                    properties(_size: ${propertiesRequest.size}, _cursor: ${propertiesRequest.cursor}) {
                        data {
                            bedrooms
                            description
                            img
                            fromPrice
                            id
                            bathrooms
                            type
                            sleeps
                            toPrice
                            destinations
                        }
                        before
                        after
                    }
                }"
            }`
        });
        return new Response(await response.json());
    } catch (error) {
        return new Response(JSON.stringify(error));
    }
}