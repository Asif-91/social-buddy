import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';


const Home = () => {
    // const classes = useStyles();
    
    const [posts, setPosts] = useState([0, 10]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
 

    return (
        <div>
            <h1>Posts: {posts.length}</h1>
            
            {
                posts.map(posts => <Post post={posts}></Post>)
            }

        </div>
    );
};

export default Home;