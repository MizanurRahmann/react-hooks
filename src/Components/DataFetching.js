import React, {useState, useEffect} from 'react'
import axios from 'axios';

function DataFetching() {
    const [posts, setPost] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res);
            setPost(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])


    return (
        <div>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default DataFetching
