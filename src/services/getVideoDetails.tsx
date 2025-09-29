import { request } from "../utils/axios"


export const getVideoDetailsApi = async (id:string) => {
  const data = await request.get("/videos", {
     params: {
        part: 'contentDetails,snippet,statistics',
        id: id
     },
  })
  return data.data.items
}
