import { request } from "../utils/axios"


export const getChannelVideos = async (id:string) => {
  const data = await request.get("/search", {
     params: {
        channelId: id,
        part: 'snippet,id',
        order: 'date',
        maxResults: '50'
     },
  })
  return data.data.items
}