import Logo from "../../images/logoDSB.png";
import MenusData from "./NavData";
import MobMenu from "./MobMenu.jsx";
import DesktopMenu from "./DesktopMenu.jsx";
export default function NavbarStyle() {
  const { Menus, MenusDesk } = MenusData;
  return (
    <div className="pt-20">
      <header
        className="h-20 text-[15px] fixed inset-0 flex-center bg-[#ffffff] z-50 "
        style={{
          boxShadow:
            "rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset",
          borderBottom: "1.5px solid #ccc",
        }}
      >
        <nav className=" px-3.5 flex-center-between w-full max-w-7xl mx-auto center-text">
          <div className="flex-center gap-x-1 z-[999] relative">
            <img src={Logo} alt="" className="w-12" />
          </div>

          <ul className="gap-x lg:flex-center hidden mb-0 font-medium text-[16px]">
            {MenusDesk.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>
          <div className="flex-center gap-x-5">
            <div className="lg:hidden">
              <MobMenu Menus={Menus} />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
