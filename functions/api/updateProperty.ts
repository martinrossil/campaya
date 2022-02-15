import { Property } from '../../src/types/Property';

/* eslint-disable */
export async function onRequest({env, request}): Promise<Response> {
    try {
        const property: Property = await request.json();
        const query = JSON.stringify({
            query: `mutation {
                updateProperty(id: "${property.id}", data: {
                    bathrooms: ${property.bathrooms}
                    bedrooms: ${property.bedrooms}
                    description: "${property.description}"
                    destinations: ${JSON.stringify(property.destinations)}
                    fromPrice: ${property.fromPrice}
                    id: "${property.id}"
                    img: "${property.img}"
                    sleeps: ${property.sleeps}
                    picture: "${property.picture}"
                    toPrice: ${property.toPrice}
                    type: "${property.type}"
                })
                {
                    bathrooms
                    bedrooms
                    description
                    destinations
                    fromPrice
                    id
                    img
                    sleeps
                    picture
                    toPrice
                    type
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