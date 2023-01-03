import Link from 'next/link';
import { useRouter } from 'next/router';

function ProductDetail(){
  const router = useRouter();
  const id = router.query.productId;
  return (
    <>
      <Link href={`/product`}>Product</Link>
      <h1>Detail about Product {id}</h1>
    </>
  )
}

export default ProductDetail;