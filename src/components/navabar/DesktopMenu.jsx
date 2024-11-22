import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function DesktopMenu({ menu }) {
  const [isHover, toggleHover] = useState(false);
  const [isSubMenuHover, setIsSubMenuHover] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const handleMouseEnter = () => {
    toggleHover(true);
  };

  const handleMouseLeave = () => {
    if (!isSubMenuHover) { 
      toggleHover(false);
    }
  };
  const handleSubMenuMouseEnter = () => {
    setIsSubMenuHover(true);
  };

  const handleSubMenuMouseLeave = () => {
    setIsSubMenuHover(false); 
    toggleHover(false); 
  };
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  const hasSubMenu = menu?.subMenu?.length;

  return (
    <motion.li
      className="group/link"
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave} 
      key={menu.name}
    >
      <span className="flex-center gap-1 hover:bg-white/5 cursor-pointer px-3 py-1 rounded-xl">
        <Link to={menu.link || "#"} style={{ textDecoration: "none", color: "inherit" }}>
          {menu.name}
        </Link>
        {hasSubMenu && (
          <ChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-200" />
        )}
      </span>
      {hasSubMenu && (
        <motion.div
          className="sub-menu bg-white/70"
          initial="exit"
          animate={isHover || isSubMenuHover ? "enter" : "exit"} 
          variants={subMenuAnimate}
          onMouseEnter={handleSubMenuMouseEnter} 
          onMouseLeave={handleSubMenuMouseLeave} 
        >
          <div
            className={`grid gap-2 ${
              menu.gridCols === 3
                ? "grid-cols-3"
                : menu.gridCols === 2
                ? "grid-cols-2"
                : "grid-cols-1"
            }`}
          >
            {menu.subMenu.map((submenu, i) => (
              <div key={i} className="relative cursor-pointer">
                {submenu.subMenu && submenu.subMenu.length > 0 ? (
                  <div>
                    <h6 className="font-semibold ml-2">{submenu.name}</h6>
                    <div className="grid gap-2">
                      {submenu.subMenu.map((sub, index) => (
                        <div
                          key={index}
                          className="flex-center gap-x-4 group/menubox"
                          onMouseEnter={() => setHoveredIndex(index)}
                          onMouseLeave={() => setHoveredIndex(null)}
                        >
                          <Link
                            to={sub.link || "#"}
                            style={{
                              textDecoration: "none",
                              color: hoveredIndex === index ? "#767676" : "inherit",
                            }}
                          >
                            <div>
                              <p
                                className="text-sm mb-0 ml-3"
                                style={{
                                  color: hoveredIndex === index ? "#727272":"#494949",
                                }}
                              >
                                {sub.desc}
                              </p>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div
                    className="flex-center gap-x-4 group/menubox"
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <Link
                      to={submenu.link || "#"}
                      style={{
                        textDecoration: "none",
                        color: hoveredIndex === i ? "#767676" : "inherit",
                      }}
                    >
                      <div>
                        <h6 className="font-semibold">{submenu.name}</h6>
                        {submenu.desc && (
                          <p
                            className="text-sm mb-0 ml-3"
                            style={{
                              color: hoveredIndex === i ? "#767676" : "#4d4d4d",
                            }}
                          >
                            {submenu.desc}
                          </p>
                        )}
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
}
