import { useState } from "react";

function Comment(){
  let [comments, setComments] = useState([]);
  let [comment, setComment] = useState('');

  const fetchComments = async () => {
    let resp = await fetch('/api/comment');
    let comment = await resp.json();
    setComments(comment);
  }

  const sendComment = async () => {
    let resp = await fetch('api/comment', { method: 'POST', body: JSON.stringify({ comment }), headers: {"Content-Type": "application/json"} });
    const data = await resp.json();
    console.log(data);
  }

  return (
    <>
    <input type="text" value={comment} onChange={e => setComment(e.target.value)}/>
    <button onClick={sendComment}>Send Comment</button>
    <button onClick={fetchComments}>Load Comments</button>
    {
      comments.map(comment => {
        return (
          <div key={comment.id}>
            <h3>{comment.id} - {comment.comment}</h3>
          </div>
        )
      })
    }
    </>
  )
}

export default Comment;