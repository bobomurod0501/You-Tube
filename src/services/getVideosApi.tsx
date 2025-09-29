import { request } from "../utils/axios"


export const getVideosApi = async (selectedCategory:string) => {
  const data = await request.get("/search", {
    params: {
      q: selectedCategory,
      part: 'snippet,id',
      regionCode: 'US',
      maxResults: '100',
      order: 'date'
    },
  })
  return data.data.items
}
