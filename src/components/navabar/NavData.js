

const Menus = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "Our Expertise",
    subMenu: [
      {
        name: "Accounting & Financial Reporting",
        subMenu: [
          { name: "Accounting & Bookkeeping", link: "/accounting-and-bookkeeping" },
          { name: "IFRS Compliant", link: "/ifrs-compliance" },
          { name: "IFRS for SMEs", link: "/ifrs-for-sme" },
        ]
      },
      {
        name: "Taxation",
        subMenu: [
          { name: "Corporate Tax", link: "/corporate-tax" },
          { name: "VAT Consultancy", link: "/vat-consultant" },
          { name: "International Taxation", link: "/international-taxation" },
          { name: "Excise Duty", link: "/excise-duty" },
          { name: "Customs", link: "/customs" },
        ]
      },
      {
        name: "Statutory Compliances",
        subMenu: [
          { name: "ESR", link: "/esr" },
          { name: "AML", link: "/aml" },
          { name: "UBO", link: "/ubo" },
          { name: "FATCA, CRS", link: "/fatca" },
        ]
      },
      {
        name: "CFO Services",
        subMenu: [{ name: "CFO Services", link: "/cfo" }]
      },
      {
        name: "Business Valuation",
        subMenu: [{ name: "Business Valuation", link: "/business-valuation" }]
      }
    ]
  },
  {
    name: "Learning Hub",
    subMenu: [
      { name: "IFRS", link: "/learning-hub-ifrs" },
      { name: "Corporate Tax", link: "/learning-hub-corporate-tax" },
      { name: "Transfer Pricing", link: "/learning-hub-transfer-pricing" },
      { name: "VAT", link: "/learning-hub-vat" },
      { name: "ESR", link: "/learning-hub-esr" },
      { name: "Commercial Law", link: "/learning-hub-commercial-law" },
      { name: "AML", link: "/learning-hub-aml" },
      { name: "UBO", link: "/learning-hub-ubo" },
      { name: "BLOGS", link: "/learning-hub-blogs" }
    ]
  },
  {
    name: "Events & Webinars",
    subMenu: [
      { name: "Upcoming Events & Webinars", link: "/events-and-webinar" },
      { name: "Completed Events & Webinars", link: "/completed-events-webinar" }
    ]
  },
  {
    name: "News Letters",
    link: "/newsletter"
  },
  {
    name: "Contact",
    link: "/contact"
  }
];




export const MenusDesk = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "Our Expertise",
   
    subMenu: [
      {
        name: "Accounting & Financial Reporting",
        subMenu: [
          { desc: "Accounting & Bookkeeping", link: "/accounting-and-bookkeeping" },
          { desc: "IFRS Compliant", link: "/ifrs-compliance" },
          { desc: "IFRS for SMEs", link: "/ifrs-for-sme" },
        ]
      },
      {
        name: "Taxation",
        subMenu: [
          { desc: "Corporate Tax", link: "/corporate-tax" },
          { desc: "VAT Consultancy", link: "/vat-consultant" },
          { desc: "International Taxation", link: "/international-taxation" },
          { desc: "Excise Duty", link: "/excise-duty" },
          { desc: "Customs", link: "/customs" },
        ]
      },
      {
        name: "Statutory Compliances",
        subMenu: [
          { desc: "ESR", link: "/esr" },
          { desc: "AML", link: "/aml" },
          { desc: "UBO", link: "/ubo" },
          { desc: "FATCA, CRS", link: "/fatca" },
        ]
      },
      {
        name: "CFO Services",
        subMenu: [{ desc: "CFO Services", link: "/cfo" }]
      },
      {
        name: "Business Valuation",
        subMenu: [{ desc: "Business Valuation", link: "/business-valuation" }]
      }],gridCols: 2},
  
  {
    name: "Learning Hub",
    subMenu: [
      { name: "IFRS", link: "/learning-hub-ifrs" },
      { name: "Corporate Tax", link: "/learning-hub-corporate-tax" },
      { name: "Transfer Pricing", link: "/learning-hub-transfer-pricing" },
      { name: "VAT", link: "/learning-hub-vat" },
      { name: "ESR", link: "/learning-hub-esr" },
      { name: "Commercial Law", link: "/learning-hub-commercial-law" },
      { name: "AML", link: "/learning-hub-aml" },
      { name: "UBO", link: "/learning-hub-ubo" },
      { name: "BLOGS", link: "/learning-hub-blogs" }
    ],
    gridCols: 1,
  },
  {
    name: "Events And Webinars",
    
    subMenu: [
      { name: "Upcoming Events & Webinars", link: "/events-and-webinar" },
      { name: "Completed Events & Webinars", link: "/completed-events-webinar" }
      
    ],
    gridCols: 1,
  },
  {
    name: "News Letters",
    link: "/newsletter"
  },
  {
    name: "Contact",
    link:"/contact"
  },
];
export default { Menus, MenusDesk };
