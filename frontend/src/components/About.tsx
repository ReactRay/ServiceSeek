import { useState } from "react";
import { actualPost, usePostStore } from "../store/post.store";
import { EditModal } from "./EditModal";

export function About() {

    const [selectedPost, setSelectedPost] = useState<actualPost | null>(null)
    const { posts, deletePost, updatePost } = usePostStore()

    function handleSelect(post: actualPost) {
        setSelectedPost(() => {
            if (selectedPost) {
                return null
            }
            return post
        })
    }

    console.log(posts, 'yo')

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

                            <input type="text" placeholder="add a comment" />
                            <button>submit comment</button>
                        </div>
                        <div className="comment-display">

                        </div>

                        <button className="delete" onClick={() => deletePost(post._id)}>x</button>
                    </li>
                )
            })}
        </ul>

    </div>;
}