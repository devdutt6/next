import { useRouter } from 'next/router'

function ReviewDetails(){
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return <h1>Review for product {productId} Details {reviewId}</h1>
}

export default ReviewDetails;