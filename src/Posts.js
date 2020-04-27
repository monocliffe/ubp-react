import React, { useState, useEffect } from 'react';
import { myConfig } from './modules/config';

export default function Posts(props) {
    const [posts, setPosts] = useState([
        {
            posts: []
        }
    ]);

    async function fetchPostsData() {
        const response = await fetch(
            myConfig.apiUrl + myConfig.ptsEnd
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