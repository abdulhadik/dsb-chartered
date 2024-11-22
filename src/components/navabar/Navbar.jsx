import Logo from "../../images/logoDSB.png";

import MenusData from "./NavData"; // Adjust the path as necessary



import MobMenu from "./MobMenu.jsx";
import DesktopMenu from "./DesktopMenu.jsx";
export default function NavbarStyle() {
  const { Menus, MenusDesk } = MenusData;
  return (
    <div className="pt-20">
      <header className="h-20 text-[15px] fixed inset-0 flex-center bg-[#ffffff] z-50 "
      style={{boxShadow: "rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset",
        borderBottom: "1.5px solid #ccc"}}>
        <nav className=" px-3.5 flex-center-between w-full max-w-7xl mx-auto center-text">
          <div className="flex-center gap-x-1 z-[999] relative">
            <img src={Logo} alt="" className="w-12" />
            {/* <h3 className="text-lg font-bold mb-0 text-[24px]"style={{color:"525252"}}>DSB</h3> */}
          </div>

          <ul className="gap-x-1 lg:flex-center hidden mb-0 font-medium text-[14px]">
            {MenusDesk.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>
          <div className="flex-center gap-x-5">
            {/* <button
              aria-label="sign-in"
              className="bg-white/5 z-[999] relative px-3 py-1.5 shadow rounded-xl flex-center"
            >
              Sign In
            </button> */}
            <div className="lg:hidden">
              <MobMenu Menus={Menus} />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

