import React, { useState, useEffect } from "react";

export default function Posts(props) {
    const [posts, setPosts] = useState([
        {
            posts: []
        }
    ]);

    async function fetchPostsData() {
        const response = await fetch(
            `http://0.0.0.0:3000/posts.json`
        );
        setPosts(await response.json());
    }

    useEffect(() => {
        fetchPostsData(props.id);
    }, [props.id]);

    return (
        <ul>
            { posts.map(post =>
                <div key={post.id}>
                    <div>
                        <h3>{post.title}</h3>
                        <div dangerouslySetInnerHTML={{__html: post.rich_body}}/>
                    </div>
                </div>
            )}
        </ul>
    );
}