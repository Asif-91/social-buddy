import React from 'react';


const cmtStyles={
    border: '2px solid lightblue',
    margin: '10px',
    padding: '20px'
}

const Comment = (props) => {
    const {name, email, body, id, postId} = props.comments;
    console.log(props);

   

    return (
        <div style={cmtStyles}>
            <h1 style={cmtStyles}>{postId}</h1>
            <h5 style={cmtStyles}>Name: {name}</h5>
            <h5 style={cmtStyles}>Email: {email}</h5>
            <h5 style={cmtStyles}>Body: {body}</h5>
            <h5 style={cmtStyles}>Id: {id}</h5>
        </div>
    );
};

export default Comment;