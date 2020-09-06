import React from 'react';

const Comment = (props) => {
    const {name, email, body, id, postId} = props.com;
    console.log(props);

    return (
        <div>
            <h1>{postId}</h1>
            <h5>Name: {name}</h5>
            <h5>Email: {email}</h5>
            <h5>Body: {body}</h5>
            <h5>Id: {id}</h5>
        </div>
    );
};

export default Comment;