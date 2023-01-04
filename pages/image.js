import Image from 'next/image';
import img from '../public/1.jpg';
import img2 from '../public/2.jpg';

function ImageList(){
  return (
    <>
    <h2>Pet lists</h2>
    <Image src={img} alt='pet' placeholder='blur' width='140' height='210' />
    <Image src={img2} alt='pet' placeholder='blur' blurDataURL='/3.jpg' width='140' height='210' />
    {
      ['1', '2', '3', '4', '5'].map(path => {
        return (<div key={path}>
          <Image src={`/${path}.jpg`} alt="pet" width='140' height='210' />
        </div>);
      })
    }
    </>
  )
}

export default ImageList;