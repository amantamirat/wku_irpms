export const MyService = {
    getItems<T>(apiurl: string): Promise<T[]> {
        return fetch(apiurl, { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.data as T[]);
    },
};