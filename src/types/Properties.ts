import { Property } from './Property';

export type Properties = {
    data: {
        properties: {
            data: Array<Property>,
            before: string | null,
            after: string | null
        }
    } | null,
    errors: Array<{
        message: string,
        locations: Array<{
            line: number,
            column: number
        }> | undefined
    }>
}
