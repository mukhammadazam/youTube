import "./Saidbar.scss";


import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { DiCodeigniter } from "react-icons/di";
import { FiCopy, FiFile, FiChevronDown } from "react-icons/fi";
import { VscFileSubmodule } from "react-icons/vsc";
import { SiTimescale } from "react-icons/si";
import { BsStar } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";
import { CiMusicNote1 } from "react-icons/ci";
import { GrGamepad } from "react-icons/gr";
const Saidbar = () => {
  return (
    <div className='bar '>
      <NavLink className='bar__link flex items-center'>
        <AiOutlineHome className='icons' />
        <span className='bar__text block w-20'>Home</span>
      </NavLink>

      <NavLink className='bar__link flex items-center'>
        <DiCodeigniter className='icons' />
        <span className='bar__text block w-20'>Trending</span>
      </NavLink>

      <NavLink className='bar__link flex items-center pb-16'>
        <FiCopy className='icons' />
        <span className='bar__text block w-28'>Subscriptions</span>
      </NavLink>

      <NavLink className='bar__link flex items-center'>
        <VscFileSubmodule className='icons' />
        <span className='bar__text block w-20'>Library</span>
      </NavLink>

      <NavLink className='bar__link flex items-center'>
        <FiFile className='icons' />
        <span className='bar__text block w-20'>History</span>
      </NavLink>

      <NavLink className='bar__link flex items-center'>
        <SiTimescale className='icons' />
        <span className='bar__text block w-24'>WatchLater</span>
      </NavLink>

      <NavLink className='bar__link flex items-center'>
        <BsStar className='icons' />
        <span className='bar__text block w-24'>Favourites</span>
      </NavLink>

      <NavLink className='bar__link flex items-center'>
        <BiHeart className='icons' />
        <span className='bar__text block w-24'>LikedVideos</span>
      </NavLink>

      <NavLink className='bar__link flex items-center'>
        <CiMusicNote1 className='icons' />
        <span className='bar__text block w-20'>Music</span>
      </NavLink>

      <NavLink className='bar__link flex items-center'>
        <GrGamepad className='icons' />
        <span className='bar__text block w-20'>Games</span>
      </NavLink>

      <NavLink className='bar__link flex items-center'>
        <FiChevronDown className='icons' />
        <span className='bar__text block w-24'>Show more</span>
      </NavLink>
      <div className='sub'>
        <p className='sub__text w-24'>Subscriptions</p>
      </div>
    </div>
  );
};

export default Saidbar;
