import { 
  FaBookOpen,FaGraduationCap, FaCalculator, FaCode, FaServer, FaFlask, FaAtom, FaGlobe ,FaBrain,FaJs,
  FaHtml5,
} from "react-icons/fa";
import { MdSchool,MdComputer } from "react-icons/md";


// Icon lookup map
export const IconMap: Record<string, React.ReactNode> = {
  school: <MdSchool />,
  brain: <FaBrain />,
  calculator: <FaCalculator />,
  flask: <FaFlask />,
  atom: <FaAtom />,
  code: <FaCode />,
  server: <FaServer />,
  globe: <FaGlobe />,
  MdComputer: <MdComputer/>,
  bookopen: <FaBookOpen/>,
  graduationcap: <FaGraduationCap/>,
  html: <FaHtml5/>,
  js: <FaJs/>,
};