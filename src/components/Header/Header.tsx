import { Link } from "react-router-dom";
import DarkModeSwitcher from "./DarkModeSwitcher";
import Logo from "../../assets/images/elogo.png";
import { HeaderProps } from "./types";
import SidebarButton from "./SidebarButton";

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4">
          <SidebarButton sidebarOpen={props.sidebarOpen} setSidebarOpen={props.setSidebarOpen} />

          <Link className="block flex-shrink-0 lg:hidden" to="/">
            <img src={Logo} style={{ maxWidth: "10vw" }} alt="Logo" />
          </Link>
        </div>


        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <DarkModeSwitcher />
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
