import { CreateAuthenticatedDirectUploadResponse } from '../types/CreateAuthenticatedDirectUploadResponse';
import { Properties } from '../types/Properties';

export async function properties(size = 12, cursor: string | null = null): Promise<[Properties | null, Error | null]> {
    try {
        const response: Response = await fetch('https://campaya.pages.dev/api/properties', {
            method: 'POST',
            body: JSON.stringify({
                size,
                cursor
            })
        });
        if (response.ok) {
            const result: Properties = await response.json();
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

function catchError(error: unknown): [null, Error] {
    if (error instanceof Error) {
        return [null, error];
    }
    return [null, new Error('Unknown Error')];
}
