import axios from "axios";

export const request = axios.create({
  baseURL: "https://youtube-v31.p.rapidapi.com",
  headers: {
    'x-rapidapi-key': '47f00afb2emsh3c2b2fde11d19d6p1d3e76jsn5dfd39c32426',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  },
});