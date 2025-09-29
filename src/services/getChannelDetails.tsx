import { request } from "../utils/axios"


export const getChannelDetails = async (id:string) => {
  const data = await request.get("/channels", {
     params: {
        part: 'snippet,statistics',
        id: id,
     },
  })
  return data.data.items
}