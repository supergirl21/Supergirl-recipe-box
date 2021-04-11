// import React, {useState, useEffect} from 'react';


// export default function PostForm(props) {
//     const [post, setPost] = useState({})


//     useEffect(() => {
//       if (props.id) {
//         someAsyncGetPostById(props.id)
//         .then(post => setPost(post))
//       }
//     })
//     const submit = (e) => {
//       e.preventDefault()
//       props.handleSubmit(post)
//     }
//   return (
//       <form onSubmit={submit}>
//         <label for="title">Title: {post.content}</label>
//         <input
//          type="text"
//          value={post.title}
//          name="title"
//          onChange={e => setPost({ ...post, title: e.target.value })}
//         />
//         <br />
//         <label for="content">Post Content: </label>
//         <textarea 
//          name="content"
//         >
//          {post.content}
//         </textarea>
//         <br />
//         <input
//          type="submit"
//          value={props.id ? "Save Post" : "Create Post"}
//         />
//       </form>
//     )
//   }
  

import React from 'react';
import {TextField, Button, Typography} from '@material-ui/core';


export const Form = ({ onSubmit }) => {
    console.log(onSubmit);
    


return (
<form onSubmit={onSubmit}>
    <Typography >Add Recipe </Typography>
    <div className="form-group">
        <Typography >Recipe Title</Typography>
        <TextField className="form-control" id="outlined-basic" label="" variant="outlined" onChange=''/>
    </div> 
    
    <div className="form-group">
        <Typography >Ingredients</Typography>
        <TextField className="form-control" id="outlined-basic" label="" variant="outlined" />
    </div>

    <div className="form-group">
        <Button variant="contained" color="">Close</Button>
        <Button variant="contained" color="primary" onSubmit={Form} >Submit</Button>
    </div>
</form>
)
};
export default Form;