import { PropertiesRequest } from '../types/PropertiesRequest'

/* eslint-disable */
export async function onRequest({env, request}): Promise<Response> {
    try {
        const propertiesRequest: PropertiesRequest = await request.json(); // , _cursor: "${propertiesRequest.cursor}"
        const size = propertiesRequest.size;
        const cursor: string | null = propertiesRequest.cursor;
        const query = JSON.stringify({
            query: `query properties {
                properties(_size: ${size}) {
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
            }`
        });
        const response: Response = await fetch('https://graphql.fauna.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: 'Basic ' + env.FAUNA_TOKEN,
            },
            body: query
            /* body: `{
                "query": "query properties {
                    properties(_size: ${size}) {
                        data {
                            id
                            description
                            fromPrice
                            toPrice
                            img
                        }
                    }
                }"
            }` */
            /* body: `{
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
            }` */
        });
        return new Response(JSON.stringify(await response.json()), {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
    } catch (error) {
        return new Response(JSON.stringify(error));
    }
}