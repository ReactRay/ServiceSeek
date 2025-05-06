import { create } from 'zustand'
import { post } from '../components/FormPost'
import axios from 'axios'

export type actualPost = post & {
    _id: string,
}


type store = {
    posts: actualPost[],
    addPost: (data: post) => void
    deletePost: (id: string) => void
    updatePost: (id: string, newPost: actualPost) => void
    getPosts: () => void
}

export const usePostStore = create<store>((set, get) => ({
    posts: [],
    addPost: async (data) => {
        const post: actualPost = await axios.post('http://localhost:3000/posts/add', data)
        set((state) => ({ posts: [post, ...state.posts] }))
    },

    deletePost: (id) => {
        set((state) => ({ posts: state.posts.filter((item) => item._id !== id) }))
    }
    ,
    updatePost: (id, prop) => {
        set((state) => ({ posts: state.posts.map((item) => item._id === id ? prop : item) }))

    },
    getPosts: async () => {
        const allPosts = await axios.get('http://localhost:3000/posts/all')

        set((state) => ({ posts: allPosts.data }))
    }

}))