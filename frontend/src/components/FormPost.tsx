import { useState } from "react";
import { usePostStore } from "../store/post.store";
export type post = {
    title: string,
    body: string
}
export function FormPost() {


    const [post, setPost] = useState<post>({ title: '', body: '' })

    const { addPost } = usePostStore()

    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setPost((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault()
        addPost(post)
        setPost({ title: '', body: '' })
    }

    return <div className="post-page"><h2>
        lets post something!</h2>

        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input type="text" placeholder="title" name='title' value={post.title} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <input type="text" placeholder="body" name='body' value={post.body} onChange={handleChange} required />
            </div>

            <button className="btn">Submit</button>
        </form>

    </div>;
}