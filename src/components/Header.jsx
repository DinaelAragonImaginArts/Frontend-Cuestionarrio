import logo from '../logo.png';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <div className='bg-[#89259E] w-full text-white p-4 gap-3'>
      <div className='flex lg:flex-row md:flex-row flex-col justify-center px-4 items-center lg:justify-between md:justify-between'>
        <Link to='/'>
          <img className='lg:w-[270px] md:w-[240px] w-[300px]' src={logo} />
        </Link>
        <div className='flex items-center w-full justify-around lg:w-1/4 md:w-1/4 md:flex-col md:gap-5 lg:flex-row'>
          <Link to='/quienes' className='text-center font-bold'>QUIÉNES SOMOS</Link>
          <Link to='/politica' className='text-center font-bold'>POLÍTICA DE PRIVACIDAD</Link>
        </div>
      </div>
    </div>
  )
}

export default Header