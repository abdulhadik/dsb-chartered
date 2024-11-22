import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link

export default function MobMenu({ Menus }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);
  const [subMenuClicked, setSubMenuClicked] = useState(null); // State for nested submenus

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };

  return (
    <div>
      <button className="lg:hidden z-[999] relative" onClick={toggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      </button>

      <motion.div
        className="fixed left-0 right-0 top-20 overflow-y-auto h-full bg-white text-black p-6 pl-0 pb-20" // Changed bg to white and text to black
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
      >
        <ul>
          {Menus.map(({ name, link, subMenu }, i) => {
            const isClicked = clicked === i;
            const hasSubMenu = subMenu?.length;

            return (
              <li key={name} className="mb-4">
                {hasSubMenu ? (
                  <span
                    className="flex justify-between items-center  p-2 font-semibold text-[20px] hover:bg-gray-200 rounded-md cursor-pointer" // Added hover:bg-gray-200
                    onClick={() => setClicked(isClicked ? null : i)}
                  >
                    {name}
                    <ChevronDown
                      className={`ml-auto transition-transform ${
                        isClicked ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                ) : (
                  <Link
                    to={link || "#"} 
                    className="block p-2 font-semibold text-[20px] hover:bg-gray-200 rounded-md no-underline text-inherit"
                    style={{ textDecoration: "none", color: "inherit" }}
                    onClick={() => {
                      setIsOpen(false); 
                      setClicked(null); 
                    }}
                  >
                    {name}
                  </Link>
                )}

                {/* Submenu */}
                {hasSubMenu && isClicked && (
                  <motion.ul
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="ml-7 pl-0"
                  >
                    {subMenu.map(({ name, subMenu, link }) => {
                      const isSubMenuClicked = subMenuClicked === name;

                      return (
                        <li key={name} className="mb-2 ">
                          {/* Submenu Item */}
                          {subMenu?.length ? (
                            <span
                              className="flex justify-between  items-center p-2 font-medium text-[16px] hover:bg-gray-200 rounded-md cursor-pointer " // Added hover:bg-gray-200
                              onClick={() =>
                                setSubMenuClicked(
                                  isSubMenuClicked ? null : name
                                )
                              }
                            >
                              {name}
                              <ChevronDown
                                className={`ml-auto transition-transform ${
                                  isSubMenuClicked ? "rotate-180" : ""
                                }`}
                              />
                            </span>
                          ) : (
                            <Link
                              to={link || "#"}
                              className="block p-2 hover:bg-gray-200 rounded-md no-underline text-inherit"
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
                              onClick={() => {
                                setIsOpen(false); 
                                setSubMenuClicked(null);
                              }}
                            >
                              {name}
                            </Link>
                          )}

                          {subMenu?.length && isSubMenuClicked && (
                            <motion.ul
                              initial="exit"
                              animate={isSubMenuClicked ? "enter" : "exit"}
                              variants={subMenuDrawer}
                              className="ml-5 pl-2"
                            >
                              {subMenu.map(({ name, link }) => (
                                <li key={name} className="pt-3 ">
                                  <Link
                                    to={link || "#"}
                                    className="block text-sm font-light p-1 text-[14px] hover:bg-gray-200 rounded-md no-underline text-inherit"
                                    style={{
                                      textDecoration: "none",
                                      color: "inherit",
                                    }}
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {name}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </li>
                      );
                    })}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}
