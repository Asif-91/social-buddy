import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const PostDetail = (props) => {

    const [detail, setDetail] = useState([]);
    const { id } = useParams();
    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [])

    const [comment, setComment] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setComment(data))
    }, [])

        const pstStyles={
            border: '1px solid green',
            margin: '10px',
            padding: '15px'
        }


    return (
    <div>
        <div style={pstStyles}>
            <h1>This is post details: {id}</h1>
            <h2>title:  {detail.title}</h2>
            <h2>Body:  {detail.body}</h2>         
        </div>

            {
                comment.map(comments => <Comment comments={comments}></Comment> )
            }

    </div>
    );
};

export default PostDetail;