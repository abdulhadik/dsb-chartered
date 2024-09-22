import React, { useState } from "react";
import { Link } from "react-router-dom";
import "@coreui/coreui/dist/css/coreui.min.css";

import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarToggler,
  CCollapse,
  CNavbarNav,
  CNavItem,
  CNavLink,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
} from "@coreui/react";
import "./Navbar.css";
import logoDSB from "../../images/logoDSB.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function NavbarStyle() {
  const [visible, setVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [servicesDropdownVisible, setServicesDropdownVisible] = useState(false);
  const [aboutUsDropdownVisible, SetAboutUsDropdownVisible] = useState(false);
  const [learningHubDropdownVisible, setLearningHubDropdownVisible] = useState(false);
  const [eventsDropdownVisible, setEventsDropdownVisible] = useState(false);

  const services = [
    "Audit & Assurance",
    "Accounting & Financial Reporting",
    "Taxation",
    "Statutory Compliances",
    "CFO Services",
    "Business Valuation",
    "Business Services",
  ];

  const rightContent = [
    [
      { name: "Due Diligence Audit", link: "/audit-and-assurance" },
      { name: "Statutory Audit", link: "/statutory-audit" },
      { name: "Internal Audit", link: "/internal-audit" },
      { name: "Liquidation Report", link: "/liquidation-report" },
      { name: "In Country Valuation", link: "/in-country-valuation" },
    ],
    [
      { name: "Accounting & Bookkeeping", link: "/accounting-and-bookkeeping" },
      { name: "IFRS Compliant", link: "/ifrs-compliance" },
      { name: "IFRS for SMEs Compliant", link: "/business-consultancy" },
      { name: "IND-AS Compliant", link: "/mergers-acquisition" },
      
    ],
    [
      { name: "Corporate Tax", link: "/corporate-tax" },
      { name: "VAT Consultancy", link: "/vat-consultant" },
      { name: "International Taxation", link: "/international-taxation" },
      { name: "Excise Duty", link: "/excise-duty" },
      { name: "Customs", link: "/excise-tax" },
      
    ],
    [
      { name: "ESR", link: "/esr" },
      { name: "AML", link: "/aml" },
      { name: "UBO", link: "/ubo" },
      { name: "FATCA, CRS", link: "/fatca" },

    ],
    [
      { name: "CFO Services", link: "/cfo-services" },
      
    ],
    [
      { name: "Business Valuation", link: "/business-valuation" },
      
    ],
  
    [
      { name: "Business Set up", link: "/business-set-up" },
      { name: "PRO & Visa Services", link: "/pro-visa-services" },
      
    ],
  ];
  
  return (
    <div>
      <CNavbar expand="lg" className="bg-body-tertiary">
        <CContainer fluid>
          <div className="navbar-logo">
            <img src={logoDSB} alt="logo" className="navbarLogo" />
          </div>
          <CNavbarToggler
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav>
              <CNavItem>
                <CNavLink>
                  <Link
                    to={"/"}
                    style={{ textDecoration: "none", color: "#535353" }}
                  >
                    Home
                  </Link>
                </CNavLink>
                </CNavItem>
               
                
              <CDropdown
                variant="nav-item"
                popper={false}
                onMouseEnter={() => setServicesDropdownVisible(true)}
                onMouseLeave={() => setServicesDropdownVisible(false)}
                visible={servicesDropdownVisible}
              >
                <CDropdownToggle>Our Expertise</CDropdownToggle>
                <CDropdownMenu>
                  <div className="navbar-dropdown">
                    <div className="navbar-dropdown-left">
                      <ul className="navbar-dropdown-left-list">
                        {services.map((service, index) => (
                          <li
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                          >
                            <span className="navbar-dropdown-text">
                              {service}
                            </span>
                            <FontAwesomeIcon
                              icon={faChevronRight}
                              className="arrow-right"
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="navbar-dropdown-right">
                      <ul className="navbar-dropdown-right-list">
                      {hoveredIndex !== null &&
                          rightContent[hoveredIndex].map((content, index) => (
                            <li key={index}>
                              <Link to={content.link}>{content.name}</Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </CDropdownMenu>
              </CDropdown>
              
              <CNavItem>
              <CDropdown variant="nav-item" popper={false}
                onMouseEnter={() => setLearningHubDropdownVisible(true)}
                onMouseLeave={() => setLearningHubDropdownVisible(false)}
                visible={learningHubDropdownVisible}>
                <CDropdownToggle>Learning Hub</CDropdownToggle>
                <CDropdownMenu>
                <div className="navbar-dropdown aboutUs-dropdown">
                <div className="navbar-dropdown-left aboutUs-dropdown-left">
                <ul className="navbar-dropdown-left-list aboutUs-dropdown-left-list">
                <Link to='/learning-hub-ifrs'><li>IFRS</li></Link>
                <Link to='/learning-hub-corporate-tax'><li>Corporate Tax</li></Link>
                
                <Link to='/learning-hub-transfer-pricing'><li>Transfer Pricing</li></Link>
                <Link to='/learning-hub-vat'><li>VAT</li></Link>
                <Link to='/learning-hub-esr'><li>ESR</li></Link>
                <Link to='/learning-hub-commercial-law'><li>Commercial Law</li></Link>
                <Link to='/learning-hub-aml'><li>AML</li></Link>
                <Link to='/learning-hub-ubo'><li>UBO</li></Link>
                <Link to='/learning-hub-blogs'><li>BLOGS</li></Link>
                </ul>
                </div>
                </div>
                </CDropdownMenu>
              </CDropdown>
              </CNavItem>
              <CNavItem>
              <CDropdown variant="nav-item" popper={false}
                onMouseEnter={() => setEventsDropdownVisible(true)}
                onMouseLeave={() => setEventsDropdownVisible(false)}
                visible={eventsDropdownVisible}>
                <CDropdownToggle>Events & Webinars</CDropdownToggle>
                <CDropdownMenu>
                <div className="navbar-dropdown aboutUs-dropdown">
                <div className="navbar-dropdown-left aboutUs-dropdown-left">
                <ul className="navbar-dropdown-left-list aboutUs-dropdown-left-list">
                <li>Upcoming Webinars / Events</li>
                <li>Completed Webinars / Events</li>
                
                </ul>
                </div>
                </div>
                </CDropdownMenu>
              </CDropdown>
              </CNavItem>
              
              
              <CNavItem>
                <CNavLink>
                  <Link
                    to={"/audit-and-assurance"}
                    style={{ textDecoration: "none", color: "#535353" }}
                  >
                    News Letters
                  </Link>
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink>
                  <Link
                    to={"/contact"}
                    style={{ textDecoration: "none", color: "#535353" }}
                  >
                    Contact Us
                  </Link>
                </CNavLink>
              </CNavItem>
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </div>
  );
}