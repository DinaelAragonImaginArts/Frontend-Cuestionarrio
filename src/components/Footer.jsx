import Quienes from './Quienes';
import Politica from './Politica';

const Footer = () => {
  return (
    <div className='bg-quienes w-full lg:py-[20rem] py-10 flex flex-col justify-center items-center'>
      <div className='lg:w-4/6 md:w-3/4 lg:p-1 md:p-1 p-4 '>
        <Quienes />
      </div>
      <div className='lg:w-4/6 md:w-3/4 lg:p-1 md:p-1 p-4'>
        <Politica />
      </div>
    </div>
  )
}

export default Footer;