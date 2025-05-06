import { useState } from "react";
import { actualPost, usePostStore } from "../store/post.store";
import { EditModal } from "./EditModal";

export function About() {
    const [comment, setComment] = useState('')
    const [selectedPost, setSelectedPost] = useState<actualPost | null>(null)
    const { posts, deletePost, updatePost, addComment } = usePostStore()

    function handleSelect(post: actualPost) {
        setSelectedPost(() => {
            if (selectedPost) {
                return null
            }
            return post
        })
    }

    async function handleAddComment(postId: string): void {

        await addComment(postId, comment)

        setComment('')
    }



    return <div className="post-page">
        {selectedPost && <EditModal post={selectedPost} setPost={setSelectedPost} />}

        <h2>all posts are here !</h2>
        <ul>
            {posts.map((post, index) => {
                return (
                    <li className="post-card" key={index} >
                        <div className="first-half">
                            <h4 onClick={() => handleSelect(post)}>{post.title}</h4>
                            <p>{post.body}</p>

                            <input type="text" placeholder="add a comment" value={comment} onChange={(e) => { setComment(e.target.value) }} />
                            <button onClick={() => handleAddComment(post._id)}>submit comment</button>
                        </div>
                        <div className="comment-display">
                            {post.comments.map((comment, index) => {
                                return (
                                    <div key={comment._id} className="comment">
                                        {comment.content}
                                    </div>
                                )
                            })}
                        </div>

                        <button className="delete" onClick={() => deletePost(post._id)}>x</button>
                    </li>
                )
            })}
        </ul>

    </div>;
}