import React from 'react';
import { useState ,useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';


const Comment = ({postId}) => {
    
    const [comments,setComments] = useState([])
    const [images,setImages] = useState([])

    useEffect(()=>{
         fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
         .then(res => res.json())
         .then(data =>setComments(data))
         
         fetch("https://randomuser.me/api/?results=10")
         .then(res => res.json())
         .then(data => {
           setImages(data.results);
        
         })
    },[])

    let pictures = [];
    for(let i = 0; i <images.length; i++){
        const item = images[i];
        const pics = item.picture;
        // console.log(pics)
        const largeImage = pics.large;
        pictures.push(largeImage);
        // console.log(largeImage);
    }

    return (
        <div>
            <h1> Comments:</h1>

            {
                comments.map((comment,index) => 
                    <div>
                        <div className="comment__top">
                            <Avatar alt="MIF" src={pictures[index]} />
                            <h3> {comment.name} </h3>
                        </div>
                        <p style={{color:"#880e4f"}}> Post Id: {comment.postId} </p>
                        <p> Email: {comment.email} </p>
                        <p>{comment.body}</p>
                    </div>
                )
            }
        </div>
    );
};

export default Comment;