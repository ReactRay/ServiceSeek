import { useState } from "react";
import { actualPost, usePostStore } from "../store/post.store";


type editModal = {
    post: actualPost
    setPost: React.Dispatch<React.SetStateAction<actualPost | null>>,
}
export function EditModal({ post, setPost }: editModal) {
    const [postToEdit, setPostToEdit] = useState<actualPost | null>(post)

    const { updatePost } = usePostStore()
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;

        setPostToEdit((prev) => {
            if (!prev) return prev
            return {
                ...prev,
                [name]: value,
            }
        });
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (!postToEdit) return
        updatePost(postToEdit._id, postToEdit)
        setPost(null)
    }


    return <div>

        <form onSubmit={handleSubmit}>

            <input type="text" value={postToEdit?.title} onChange={handleChange} name="title" />
            <input type="text" value={postToEdit?.body} onChange={handleChange} name="body" />
            <button className="btn">change</button>
        </form>


    </div>;
}