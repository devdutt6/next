import {comments} from '../../../data/comment';

export default async function handler(req,res){
  if( req.method === "GET" ){
    let cmms = comments.filter((cmm) => {
      if(cmm.id === parseInt(req.query.commentId)) return true;
      return false;
    })
    res.status(200).json(cmms);
  }
  else if(req.method === "DELETE"){
    let deletedComm = comments.find((comm) => comm.id == req.query.commentId);
    let inde = comments.findIndex((comm) => comm.id == req.query.commentId);
    comments.splice(inde, 1);
    res.status(200).json({comment: deletedComm});
  }
  else{
    res.status(200).json({message: "WHATTT"});
  }
}