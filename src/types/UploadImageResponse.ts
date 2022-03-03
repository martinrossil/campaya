/* eslint-disable camelcase */
export type UploadImageResponse = {
    errors: Array<string>,
    messages: Array<string>,
    result: Array<{
        filename: string,
        id: string,
        requireSignedURLs: boolean,
        uploaded: string,
        variants: Array<string>
    }>,
    result_info: string | null,
    success: boolean
}
