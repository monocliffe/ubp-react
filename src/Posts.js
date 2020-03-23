import React from 'react'
import axios from 'axios'

export default class Posts extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('http://0.0.0.0:3000/posts.json')
            .then(res => {
                const posts = res.data;
                this.setState({ posts });
            })
    }

    render() {
        return (
            <ul>
                { this.state.posts.map(post =>
                    <div key={post.id}>
                        <div>
                            <h3>{post.title}</h3>
                            <div dangerouslySetInnerHTML={{ __html: post.rich_body }}></div>
                        </div>
                    </div>
                )}
            </ul>
        )
    }
}