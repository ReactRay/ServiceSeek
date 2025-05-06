import { create } from 'zustand'
import { post } from '../components/FormPost'
import axios from 'axios'

export type actualPost = post & {
    _id: string,
    comments: comment[],
}

type comment = {
    _id: string,
    content: string,
    post: string,
}

const URL = 'http://localhost:3000'

type store = {
    posts: actualPost[],
    addPost: (data: post) => void
    deletePost: (id: string) => void
    updatePost: (id: string, newPost: actualPost) => void
    getPosts: () => void
    addComment: (id: string, value: string) => void
}

export const usePostStore = create<store>((set, get) => ({
    posts: [],
    addPost: async (data) => {
        const post = await axios.post(URL + '/posts/add', data)
        set((state) => ({ posts: [post.data, ...state.posts] }))
    },

    deletePost: async (id) => {
        console.log(id)
        await axios.delete(URL + '/posts/' + id)
        set((state) => ({ posts: state.posts.filter((item) => item._id !== id) }))
    }
    ,
    updatePost: async (id, prop) => {
        console.log(prop)
        const updatedPost = await axios.put(URL + '/posts/' + id, prop)
        set((state) => ({ posts: state.posts.map((item) => item._id === id ? updatedPost.data : item) }))

    },
    getPosts: async () => {
        const allPosts = await axios.get(URL + '/posts/all')

        set((state) => ({ posts: allPosts.data }))
    },
    addComment: async (postId, content) => {
        const res = await axios.post(`${URL}/comments/${postId}`, { comment: content })
        const newComment: comment = res.data

        const posts = [...get().posts]

        const index = posts.findIndex((p) => p._id === postId)
        if (index === -1) return // post not found

        posts[index].comments.push(newComment)

        set({ posts })
    }

}))