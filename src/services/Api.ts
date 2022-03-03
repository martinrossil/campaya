import { CreateAuthenticatedDirectUploadResponse } from '../types/CreateAuthenticatedDirectUploadResponse';
import { PropertiesResponse } from '../types/PropertiesResponse';
import { Property } from '../types/Property';
import { UploadImageResponse } from '../types/UploadImageResponse';

export async function updateProperty(property: Property): Promise<[Property | null, Error | null]> {
    try {
        const response: Response = await fetch('https://campaya.pages.dev/api/updateProperty', {
            method: 'POST',
            body: JSON.stringify(property)
        });
        if (response.ok) {
            const result = await response.json();
            return [result, null];
        }
        return [null, new Error('Response Error')];
    } catch (error) {
        return catchError(error);
    }
}

export async function properties(size = 12, cursor: string | null = null): Promise<[PropertiesResponse | null, Error | null]> {
    try {
        const response: Response = await fetch('https://campaya.pages.dev/api/properties', {
            method: 'POST',
            body: JSON.stringify({
                size,
                cursor
            })
        });
        if (response.ok) {
            const result: PropertiesResponse = await response.json();
            return [result, null];
        }
        return [null, new Error('Response Error')];
    } catch (error) {
        return catchError(error);
    }
}

export async function createAuthenticatedDirectUpload(): Promise<[CreateAuthenticatedDirectUploadResponse | null, Error | null]> {
    try {
        const response: Response = await fetch('https://campaya.pages.dev/api/createAuthenticatedDirectUpload', {
            method: 'GET'
        });
        if (response.ok) {
            const result: CreateAuthenticatedDirectUploadResponse = await response.json();
            return [result, null];
        }
        return [null, new Error('Response Error')];
    } catch (error) {
        return catchError(error);
    }
}

export async function getPropertyImageBlob(img: string): Promise<[Blob | null, Error | null]> {
    try {
        const response: Response = await fetch(img);
        if (response.ok) {
            return [await response.blob(), null];
        }
        return [null, new Error('Response Error')];
    } catch (error) {
        return catchError(error);
    }
}

export async function uploadImage(uploadURL: string, blob: Blob, filename: string): Promise<[UploadImageResponse | null, Error | null]> {
    try {
        const file = new File([blob], 'blob.jpg', { type: 'image/jpeg', lastModified: new Date().getTime() });
        const data: FormData = new FormData();
        data.append('file', file, filename);
        const response = await fetch(uploadURL, {
            method: 'POST',
            headers: {
                Accept: 'application/json'
            },
            body: data
        });
        if (response.ok) {
            return [await response.json(), null];
        }
        return [null, new Error('Response Error')];
    } catch (error) {
        return catchError(error);
    }
}

function catchError(error: unknown): [null, Error] {
    if (error instanceof Error) {
        return [null, error];
    }
    return [null, new Error('Unknown Error')];
}
