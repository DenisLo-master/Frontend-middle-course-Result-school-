import axios from 'axios'
export const COMMENTS_URL: string = 'https://jsonplaceholder.typicode.com/comments'

export interface Post {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export const getData = async (url: string): Promise<Post[]> => {
  const response = await axios.get(url)
  return response.data
}
