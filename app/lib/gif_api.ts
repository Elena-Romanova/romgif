const API_KEY = "lGTO5ox4WgckV7w3oAVHLLvPoox6c79t"

export async function getPopularGifs() {
    const gifs: any = await (await fetch("https://api.giphy.com/v1/gifs/trending?" + `api_key=${API_KEY}` + "&limit=30")).json()
    return gifs.data
}

export async function searchGifs(search: string) {
    const gifs: any = await (await fetch("https://api.giphy.com/v1/gifs/search?" + `api_key=${API_KEY}` + `&q=${search}` + "&limit=30")).json()
    return gifs.data
}