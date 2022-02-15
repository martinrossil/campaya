import { PropertiesRequest } from '../types/PropertiesRequest'

/* eslint-disable */
export async function onRequest({env, request}): Promise<Response> {
    try {
        const propertiesRequest: PropertiesRequest = await request.json();
        const size = propertiesRequest.size;
        const cursor: string | null = propertiesRequest.cursor;
        let query: string;
        if (cursor) {
            query = JSON.stringify({
                query: `query properties {
                    properties(_size: ${size}, _cursor: "${cursor}") {
                        data {
                            bathrooms
                            bedrooms
                            description
                            destinations
                            fromPrice
                            _id
                            id
                            img
                            picture
                            sleeps
                            toPrice
                            type
                        }
                        before
                        after
                    }
                }`
            });
        } else {
            query = JSON.stringify({
                query: `query properties {
                    properties(_size: ${size}) {
                        data {
                            bathrooms
                            bedrooms
                            description
                            destinations
                            fromPrice
                            _id
                            id
                            img
                            picture
                            sleeps
                            toPrice
                            type
                        }
                        before
                        after
                    }
                }`
            });
        }
        const response: Response = await fetch('https://graphql.fauna.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: 'Basic ' + env.FAUNA_TOKEN,
            },
            body: query
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