import React, { useEffect, useState } from 'react'
import './Post.css'
import Avatar from "@material-ui/core/Avatar"
import firebase from 'firebase'
import { db , auth} from './firebase'


function Post({ postId, user, username, caption, imageUrl }) {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')


    useEffect(() => {
        let unsubscribe;
        if (postId) {
            unsubscribe = db
            .collection("posts")
            .doc(postId)
            .collection("comments")
            .onSnapshot((snapshot) => {
                setComments(snapshot.docs.map((doc) => doc.data()));
                
            });
        }

        return () => {
            unsubscribe();
        };
     }, [postId]);


     const postComment = (event) => {
        event.preventDefault();

        db.collection("posts").doc(postId).collection("comments").add({
            text: comment,
            username: user.displayName,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setComment('');
    }


    return (


        <div className="post">
            <div className="post__header">
            <Avatar
            className="post__avatar"
            alt="sanketh"
            src="/static/images/avatar/1.png"/>
            <h3>{username}</h3>
            </div>
            <img className="post__image" src={imageUrl} alt=""/>
           

            <h4 className="post__text"><strong>{username}: </strong>{caption}</h4>

            <div className="post__comments">
                {comments.map((comment) => (
                    <p>
                        <strong>{comment.username}</strong> {comment.text}
                        
                    </p>
                ))}
            </div>

            {user &&(
                <form className="post__commentbox">
                <input
                    className="post__input"
                    type="text"
                    placeholder="Add a Comment"
                    value={comment}
                    onChange={(e)=> setComment(e.target.value)}
                />
                <button
                    disabled={!comment}
                    className="post__button"
                    type="submit"
                    onClick={postComment}
                >
                    Post
                </button>
            </form>
            )}

            

        </div>
    )
}

export default Post
