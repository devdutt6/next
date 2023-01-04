import Footer from '../components/Footer';

function Me(){
  return <div className="container">Yeah Me!</div>
}

export default Me;

Me.getLayout = function PageLayout(page){
  return (
    <>
      {page}
      <Footer />
    </>
  )
}