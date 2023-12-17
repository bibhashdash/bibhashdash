'use client';

import FaceIcon from '@mui/icons-material/Face';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import {usePathname} from "next/navigation";

export const MainNavigation = () => {

  const path = usePathname();
  const activeClass = "text-rose-600 font-semibold";
  return (
    <div className="flex items-center justify-evenly md:flex-col md:justify-start gap-4 w-ful md:w-fit h-fit md:gap-8 bg-gray-100">
      <a className={`cursor-pointer text-gray-700 hover:text-gray-400 flex flex-col md:flex-row items-center md:gap-4 md:w-full p-2 rounded-md ${path === '/' && activeClass}`}
      href={'/'}
      >
        <FaceIcon />
        About
      </a>
      <a className={`cursor-pointer text-gray-700 hover:text-gray-400 flex flex-col md:flex-row items-center md:gap-4 md:w-full p-2 rounded-md ${path === '/work' && activeClass}`}
         href={'/work'}
      >
        <WorkHistoryIcon />
        Work
      </a>
      <a className={`cursor-pointer text-gray-700 hover:text-gray-400 flex flex-col md:flex-row items-center md:gap-4 md:w-full p-2 rounded-md ${path === '/career' && activeClass}`}
         href={'/career'}
      >
        <AltRouteIcon />
        Career
      </a>
    </div>
  )
}
