import { request } from "../utils/axios"


export const getVideoComentsApi = async (id:string) => {
   const data = await request.get("/commentThreads", {
     params: {
        part: 'snippet',
        videoId: id,
        maxResults: '100'
     },
  })
  return data.data.items
}
