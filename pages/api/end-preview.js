export default function handler(req, res){
  console.log(process.env.DB_USER);
  res.clearPreviewData({});
  res.end("Preview Mode ended");
}