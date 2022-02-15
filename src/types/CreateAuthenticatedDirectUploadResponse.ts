/* eslint-disable camelcase */
export type CreateAuthenticatedDirectUploadResponse = {
    errors: Array<string>,
    messages: Array<string>,
    result: {
        id: string,
        uploadURL: string
    },
    result_info: string | null,
    success: boolean
}
