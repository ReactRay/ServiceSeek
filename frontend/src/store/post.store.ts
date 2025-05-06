import { create } from 'zustand'
import { post } from '../components/FormPost'

type actualPost = post & {
    _id: string,
}


type store = {
    posts: actualPost[],
    addPost: (data: post) => void
    deletePost: (id: string) => void
}

export const usePostStore = create<store>((set, get) => ({
    posts: [],
    addPost: (data) => {
        const post: actualPost = { ...data, _id: Date.now().toString() }
        set((state) => ({ posts: [post, ...state.posts] }))
    },

    deletePost: (id) => {
        set((state) => ({ posts: state.posts.filter((item) => item._id !== id) }))
    }

}))