import { request } from "../utils/axios"


export const getSuggestedVideo = async (id:string) => {
   const data = await request.get("/search", {
     params: {
        relatedToVideoId: id,
        part: 'id,snippet',
        type: 'video',
        maxResults: '50'
     },
  })
  return data.data.items
}