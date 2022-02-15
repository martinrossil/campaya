import { Property } from './Property';

export type PropertiesResponse = {
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
