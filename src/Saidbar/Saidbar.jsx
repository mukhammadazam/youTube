import "./Saidbar.scss";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { DiCodeigniter } from "react-icons/di";
import { FiCopy } from "react-icons/fi";
import { VscFileSubmodule } from "react-icons/vsc";
import { FiFile } from "react-icons/fi";
import { SiTimescale } from "react-icons/si";
import { BsStar } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";
import { CiMusicNote1 } from "react-icons/ci";
import { GrGamepad } from "react-icons/gr";
import { FiChevronDown } from "react-icons/fi";

const Saidbar = () => {
  return (
    <div className="bar">
      <NavLink className='bar__link'>
        <AiOutlineHome className='icons' />
        <span></span>
      </NavLink>

      <NavLink className='bar__link'>
        <DiCodeigniter className='icons' />
      </NavLink>

      <NavLink className='bar__link'>
        <FiCopy className='icons' />
      </NavLink>

      <NavLink className='bar__link'>
        <VscFileSubmodule className='icons' />
      </NavLink>

      <NavLink className='bar__link'>
        <FiFile className='icons' />
      </NavLink>

      <NavLink className='bar__link'>
        <SiTimescale className='icons' />
      </NavLink>

      <NavLink className='bar__link'>
        <BsStar className='icons' />
      </NavLink>

      <NavLink className='bar__link'>
        <BiHeart className='icons' />
      </NavLink>

      <NavLink className='bar__link'>
        <CiMusicNote1 className='icons' />
      </NavLink>

      <NavLink className='bar__link'>
        <GrGamepad className='icons' />
      </NavLink>

      <NavLink className='bar__link'>
        <FiChevronDown className='icons' />
      </NavLink>
    </div>
  );
};

export default Saidbar;
