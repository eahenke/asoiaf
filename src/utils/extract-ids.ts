export function extractBookId(url: string): string {
    return url.split('/').reverse()[0];
}
