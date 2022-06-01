export function extractId(url: string): string {
    return url.split('/').reverse()[0];
}
