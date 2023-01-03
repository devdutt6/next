import {comments} from '../../../data/comment';

export default function handler(req, res){
  if( req.method === "GET" ){
    res.status(200).json(comments);
  }
  else if( req.method === "POST" ){
    let cmms = {
      id: Date.now(),
      comment: req.body.comment
    };

    comments.push(cmms);
    res.status(201).json(cmms);
  }
}