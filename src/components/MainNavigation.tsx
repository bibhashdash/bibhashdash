import FaceIcon from '@mui/icons-material/Face';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import AltRouteIcon from '@mui/icons-material/AltRoute';

export const MainNavigation = () => {
  return (
    <div className="flex items-center justify-evenly md:flex-col md:justify-start gap-4 w-full h-full md:gap-8">
      <a className="flex flex-col md:flex-row items-center md:gap-4 w-full"><FaceIcon /> About</a>
      <a className="flex flex-col md:flex-row items-center md:gap-4 w-full"><WorkHistoryIcon /> Work</a>
      <a className="flex flex-col md:flex-row items-center md:gap-4 w-full"><AltRouteIcon /> Career</a>
    </div>
  )
}
