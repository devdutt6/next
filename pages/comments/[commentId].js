import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function CommentDetail(){
  const [comment, setComment] = useState([]);
  let router = useRouter();

  useEffect(() => {
    let fetcherComment = async () => {
      let resp = await fetch(`/api/comment/${router.query.commentId}`);
      let comm = await resp.json();
      console.log(comm);
      setComment(comm);
    }
    fetcherComment();
  }, []);

  return (
    <>
      <h2>Detailed comment</h2>
      {
        comment.map(comm => {
          return (
            <div key={comm.id}>
              <p>{comm.id} - {comm.comment}</p>
            </div>
          )
        })
      }
    </>
  )
}

export default CommentDetail;