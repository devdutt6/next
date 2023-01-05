export default function handler(req, res){
  res.setPreviewData({name:"devdutt"});
  res.redirect(req.query.redirect);
}