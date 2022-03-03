export type PropertyJson = {
    id: string,
    img: string,
    type: string,
    sleeps: number,
    bedrooms: number,
    bathrooms: number,
    fromPrice: number,
    toPrice: number,
    description: string,
    destinations: Array<string>;
}

export type CreatePropertyResponse = {
    data: {
        createProperty: PropertyJson
    } | null,
    errors: Array<{
        message: string
    }> | null
}

const headers = {
    'Content-Type': 'application/json',
    authorization: 'Basic Zm5BRU1SYWpUTkFDQmpQVlFsNzQtbV9wSFJkeWR1T2c2UWJ6NDVVQTpDYW1wYXlhOmFkbWlu'
}

const CLOUDFLARE_IMAGES_TOKEN = 'LAMQDyFL3OBuD3m_wgZw7Hi9O6k26X_PJ36P0a5n';
const CLOUDFLARE_URL = 'https://api.cloudflare.com/client/v4/accounts/e99830206bd812aabbb09d70684a8828/images/v1';
const CLOUDFLARE_DIRECT = 'https://api.cloudflare.com/client/v4/accounts/e99830206bd812aabbb09d70684a8828/images/v2/direct_upload';

export async function test(url: string): Promise<string> {
    try {
        const response: Response = await fetch('https://campaya.pages.dev/api/upload/test', {
            method: 'GET'
        });
        if (response.ok) {
            return await response.json();
        }
        return 'Error';
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
        return 'Error';
    }
}

export async function directUpload(url: string): Promise<boolean> {
    const image = 'https://dqif0xfu9mg0a.cloudfront.net/imageCache/property/ih-images.interhome.com/ES5365.603.1/partner-xlarge/F2D993D001441EEBB9B38AD08551D6D6';
    try {
        const response: Response = await fetch(image);
        if (response.ok) {
            const blob = await response.blob();
            const file = new File([blob], 'blob.jpg', { type: 'image/jpeg', lastModified: new Date().getTime() });
            const data: FormData = new FormData();
            data.append('file', file, 'unique'); // this is file name!!
            const directResponse = await fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json'
                },
                body: data
            });
            if (directResponse.ok) {
                const directResult = await directResponse.json();
                console.log(directResult);
                return true;
            }
        }
        return false;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
        return false;
    }
}

export async function uploadImage(url: string): Promise<boolean> {
    try {
        const response: Response = await fetch(url);
        if (response.ok) {
            const blob = await response.blob();
            if (blob) {
                console.log(blob);
                const data: FormData = new FormData();
                data.append('file', blob);
                data.append('type', 'file');
                try {
                    const uploadUrlResponse = await fetch(CLOUDFLARE_DIRECT, {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            Authorization: 'Bearer ' + CLOUDFLARE_IMAGES_TOKEN
                        }
                    });
                    if (uploadUrlResponse.ok) {
                        const result = await uploadUrlResponse.json();
                        console.log(result);
                        return true;
                    }
                    return false;
                    /* const uploadResponse = await fetch(CLOUDFLARE_URL, {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            Authorization: 'Bearer ' + CLOUDFLARE_IMAGES_TOKEN
                        },
                        body: data
                    });
                    debugger */
                } catch (error) {
                    if (error instanceof Error) {
                        console.log(error.message);
                    }
                    return false;
                }
            }
            return false;
        }
        return false;
    } catch (error) {
        return false;
    }
}

export async function createProperty(property: PropertyJson): Promise<[PropertyJson | null, Error | null]> {
    try {
        const query = JSON.stringify({
            query: `mutation {
                createProperty(data: {
                    id: "${property.id}"
                    bathrooms: ${property.bathrooms}
                    bedrooms: ${property.bedrooms}
                    description: "${property.description}"
                    destinations: ${JSON.stringify(property.destinations)}
                    fromPrice: ${property.fromPrice}
                    img: "${property.img}"
                    sleeps: ${property.sleeps}
                    toPrice: ${property.toPrice}
                    type: "${property.type}"
                })
                {
                    id
                    bathrooms
                    bedrooms
                    description
                    destinations
                    fromPrice
                    img
                    sleeps
                    toPrice
                    type
                }
            }`
        });
        const response: Response = await fetch('https://graphql.fauna.com/graphql', {
            method: 'POST',
            headers,
            body: query
        });
        if (response.ok) {
            const result: CreatePropertyResponse = await response.json();
            if (result.data) {
                return [result.data.createProperty, null];
            }
            if (result.errors && result.errors[0]) {
                return [null, new Error(result.errors[0].message)]
            }
        }
        return [null, new Error('error')];
    } catch (error) {
        if (error instanceof Error) {
            return [null, error];
        }
        return [null, new Error('error')];
    }
}

export async function getFaunaProperties(): Promise<[Array<PropertyJson> | null, Error | null]> {
    try {
        const response: Response = await fetch('https://graphql.fauna.com/graphql', {
            method: 'POST',
            headers,
            body: `{
                "query": "query properties {
                    properties(_size: 10) {
                        data {
                            id
                            description
                            fromPrice
                            toPrice
                            img
                        }
                    }
                }"
            }`
        });
        if (response.ok) {
            const propertiesPage:Array<PropertyJson> = await response.json();
            return [propertiesPage, null];
        }
        return [null, new Error('error')];
    } catch (error) {
        if (error instanceof Error) {
            return [null, error];
        }
        return [null, new Error('error')];
    }
}

const URL = 'https://filmdb.pages.dev/api/campaya/';

export async function getPropertiesPage(page: number): Promise<Array<PropertyJson>> {
    const properties: Array<PropertyJson> = [];
    try {
        const response: Response = await fetch(URL + page, {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain'
              }
        });
        const html = await response.text();
        return getProperties(html);
    } catch (error) {
        return properties;
    }
}

function getProperties(page: string): Array<PropertyJson> {
    const properties: Array<PropertyJson> = [];
    const liexp = new RegExp('<li class="campaya-search-property', 'g');
    const liMatch = page.matchAll(liexp);
    const a = Array.from(liMatch);
    let start = -1;
    let end = page.length;
    for (let i = a.length - 1; i >= 0; i--) {
        const index = a[i].index;
        if (index !== undefined) {
            start = index;
            const li = page.substring(start, end);
            const id = getPropertyId(li);
            const img = getImageUrl(li);
            const type = getType(li);
            const sleeps = getSleeps(li);
            const bedrooms = getBedrooms(li);
            const bathrooms = getBathrooms(li);
            const fromPrice = getFromPrice(li);
            const toPrice = getToPrice(li);
            const description = getDescription(li);
            const destinations = getDestinations(li);
            const property: PropertyJson = {
                id,
                img,
                type,
                sleeps,
                bedrooms,
                bathrooms,
                fromPrice,
                toPrice,
                description,
                destinations
            }
            properties.push(property)
            end = start - 1;
        }
    }
    return properties;
}

function getPropertyId(li: string): string {
    const needle = 'data-shortlist="';
    const start = li.indexOf(needle);
    const end = li.indexOf('"', start + needle.length);
    return li.substring(start + needle.length, end).trim();
}

function getImageUrl(li: string): string {
    const needle = '<meta itemprop="url" content="';
    const start = li.indexOf(needle);
    const end = li.indexOf('"', start + needle.length);
    return li.substring(start + needle.length, end).trim();
}

function getType(li: string): string {
    const needle = '<li class="col-6 p-0 house">';
    const start = li.indexOf(needle);
    const end = li.indexOf('</li>', start + needle.length);
    return li.substring(start + needle.length, end).trim();
}

function getSleeps(li: string): number {
    const needle = '<li class="col-6 p-0 people">';
    const start = li.indexOf(needle);
    const end = li.indexOf('S', start + needle.length);
    const value = parseInt(li.substring(start + needle.length, end).trim());
    return isNaN(value) ? 0 : value;
}

function getBedrooms(li: string): number {
    const needle = '<li class="col-6 p-0 bed">';
    const start = li.indexOf(needle);
    const end = li.indexOf('S', start + needle.length);
    const value = parseInt(li.substring(start + needle.length, end).trim());
    return isNaN(value) ? 0 : value;
}

function getBathrooms(li: string): number {
    const needle = '<li class="col-6 p-0 shower">';
    const start = li.indexOf(needle);
    const end = li.indexOf('B', start + needle.length);
    const value = parseInt(li.substring(start + needle.length, end).trim());
    return isNaN(value) ? 0 : value;
}

function getFromPrice(li: string): number {
    const needle = '<meta itemprop="priceRange" content="Kr.';
    const start = li.indexOf(needle);
    const end = li.indexOf('-', start + needle.length);
    const value = parseInt(li.substring(start + needle.length, end).trim());
    return isNaN(value) ? 0 : value;
}

function getToPrice(li: string): number {
    const needle = '<meta itemprop="priceRange" content="Kr.';
    const start = li.indexOf(needle);
    const start2 = li.indexOf('-', start) + 1;
    const end = li.indexOf('/', start2 + needle.length);
    const value = parseInt(li.substring(start2, end).trim());
    return isNaN(value) ? 0 : value;
}

function getDescription(li: string): string {
    const needle = '<meta itemprop="name" content="';
    const start = li.indexOf(needle);
    const end = li.indexOf('"', start + needle.length);
    const description = li.substring(start + needle.length, end).trim();
    return sanitize(description);
}

function getDestinations(li: string): Array<string> {
    const destinations: Array<string> = [];
    const matches = li.matchAll(/<li><span class="searchid">/g);
    const startNeedle = '<li><span class="searchid">';
    const needle = '</span></li>';
    const a = Array.from(matches);
    for (const m of a) {
        const start = m.index !== undefined ? m.index : 0;
        const end = li.indexOf(needle, start);
        const destination = sanitize(li.substring(start + startNeedle.length, end).trim());
        destinations.push(destination);
    }
    return destinations;
}

function sanitize(value: string): string {
    let sanitized = value;
    if (sanitized.indexOf('&#') !== -1) {
        const matches = sanitized.matchAll(/&#(\d\d\d);/g);
        const a = Array.from(matches);
        for (const m of a) {
            sanitized = sanitized.replaceAll(m[0], String.fromCharCode(parseInt(m[1])));
        }
    }
    return sanitized;
}
