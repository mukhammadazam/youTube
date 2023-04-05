import "./Navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { BsCameraReels } from "react-icons/bs";
import { GiAbstract063 } from "react-icons/gi";
import logo from "./imges/logo.svg";
import path from "./imges/ui-11.svg";
import userpic from "./imges/userpic.svg";
const Navbar = () => {
  return (
    <div className='navbar '>
      <div className='flex items-center justify-between bg-light '>
        <div className='nav flex items-center '>
          <GiHamburgerMenu className='nav__burger hidden md:block' />
          <img className='px-0 pe-1 sm:px-10' src={logo} alt='logo' />
          <div className='nav__enner relative'>
            <input
              type='text'
              className='pe-10 md:pe-20   block nav__input max-w-[500px] '
              placeholder='Search'
            />
            <FiSearch className='absolute nav__log  right-3 md:right-7 top-4 ' />
          </div>
        </div>
        <div className='flex items-center gap-5'>
          <BsCameraReels className=' nav__vedio none hidden md:block' />
          <GiAbstract063 className='nav__cubik none hidden md:block' />
          <img className='nav__qund hidden md:block' src={path} alt='msv' />
          <img className=' ps-1 ' src={userpic} alt='msv' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
