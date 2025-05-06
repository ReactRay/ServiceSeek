import { usePostStore } from "../store/post.store";

export function About() {

    const { posts, deletePost } = usePostStore()

    return <div className="post-page">
        <h2>all posts are here !</h2>
        <ul>
            {posts.map((post, index) => {
                return (
                    <li className="post-card" key={index}>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                        <button onClick={() => deletePost(post._id)}>x</button>
                    </li>
                )
            })}
        </ul>
    </div>;
}