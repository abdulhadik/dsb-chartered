import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarStyle from "./components/navabar/Navbar"; // Check for correct import path and spelling
import Main from "./pages/main/Main"; // Adjust import paths as needed
import Footer from "./components/footer/Footer"; // Adjust import paths as needed
import AuditAndAssurance from "./pages/auditandAssurance/AuditAndAssurance.jsx"; // Adjust import paths as needed
import StatutoryAudit from "./pages/auditandAssurance/statutoryAudit.jsx"; // Adjust import paths as needed
import LiquidationReport from "./pages/auditandAssurance/liquidationReport.jsx"; // Adjust import paths as needed
import InternalAudit from "./pages/auditandAssurance/internalAudit.jsx";

import InCountryValuation from "./pages/auditandAssurance/inCountryValuation.jsx";
import AccountingAndBookkeeping from "./pages/auditandAssurance/accountingAndBookkeeping.jsx";
import IFRSCompliance from "./pages/auditandAssurance/IFRSCompliance.jsx";
import IFRSforSME from "./pages/auditandAssurance/IFRSforSME.jsx";
import CorporateTax from "./pages/auditandAssurance/CorporateTax.jsx";
import VatConsultant from "./pages/auditandAssurance/VatConsultant.jsx";
import InternationalTaxation from "./pages/auditandAssurance/InternationalTaxation.jsx";
import ExciseTax from "./pages/auditandAssurance/ExciseTax.jsx";
import Customs from "./pages/auditandAssurance/Customs.jsx";
import ESR from "./pages/auditandAssurance/ESR.jsx";
import CFO from "./pages/auditandAssurance/CFO.jsx";
import BusinessValuation from "./pages/auditandAssurance/BusinessValuation.jsx";
import UBO from "./pages/auditandAssurance/UBO.jsx";
import AML from "./pages/auditandAssurance/AML.jsx";
import  EventsAndWebinar from "./pages/auditandAssurance/EventsAndWebinar.jsx";
import FATCA from "./pages/auditandAssurance/FATCA.jsx";
import LearningHubIFRS from "./components/LearningHubIFRS.jsx";
import LearningHubCorporateTax from "./components/LearningHubCorporateTax.jsx";
import LearningHubTransferPricing from "./components/LearningHubTransferPricing.jsx";
import LearningHubVAT from "./components/LearningHubVAT.jsx";
import LearningHubAML from "./components/LearningHubAML.jsx";
import LearningHubUBO from "./components/LearningHubUBO.jsx";
import LearningHubESR from "./components/LearningHubESR.jsx";
import LearningHubBlogs from "./components/LearningHubBlogs.jsx";
import LearningHubCommercialLaw from "./components/LearningHubCommercialLaw.jsx";
import ContactUs from "./components/Contact/ContactUs.jsx";
import Newsletter from "./components/Newsletter/Newsletter.jsx";
// import Customs from "./components/Newsletter/Customs.jsx";

// import { ThemeProvider } from "@material-tailwind/react";
// import AboutUs from './components/aboutUs/AboutUs.jsx';
// import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <div>
  
      <BrowserRouter>
        <NavbarStyle />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/audit-and-assurance" element={<AuditAndAssurance />} />
          <Route path="/statutory-audit" element={<StatutoryAudit />} />
          <Route path="/internal-audit" element={<InternalAudit />} />
          <Route path="/liquidation-report" element={<LiquidationReport />} />
          <Route
            path="/in-country-valuation"
            element={<InCountryValuation />}
          />
          <Route
            path="/accounting-and-bookkeeping"
            element={<AccountingAndBookkeeping />}
          />
          <Route path="/ifrs-compliance" element={<IFRSCompliance />} />
          <Route path="/corporate-tax" element={<CorporateTax />} />
          <Route path="/vat-consultant" element={<VatConsultant />} />
          <Route path="/customs" element={<Customs/>} />
          <Route path="/cfo" element={<CFO/>} />
          <Route path="/business-valuation" element={<BusinessValuation/>} />
          <Route
            path="/international-taxation"
            element={<InternationalTaxation />}
          />
          <Route path="/excise-duty" element={<ExciseTax />} />
          <Route path="/esr" element={<ESR />} />
          <Route path="/ubo" element={<UBO />} />
          <Route path="/aml" element={<AML />} />
          <Route path="/fatca" element={<FATCA />} />
          <Route path="/learning-hub-ifrs" element={<LearningHubIFRS />} />
          <Route
            path="/learning-hub-corporate-tax"
            element={<LearningHubCorporateTax />}
          />
          <Route
            path="/learning-hub-transfer-pricing"
            element={<LearningHubTransferPricing />}
          />
          <Route path="/learning-hub-vat" element={<LearningHubVAT />} />
          <Route path="/ifrs-for-sme" element={<IFRSforSME />} />
          <Route path="/learning-hub-aml" element={<LearningHubAML />} />
          <Route path="/learning-hub-ubo" element={<LearningHubUBO />} />
          <Route path="/learning-hub-esr" element={<LearningHubESR />} />
          <Route path="/learning-hub-blogs" element={<LearningHubBlogs />} />
          <Route
            path="/learning-hub-commercial-law"
            element={<LearningHubCommercialLaw />}
          />
          <Route
            path="/contact"
            element={<ContactUs/>}
          />
          <Route
            path="/events-and-webinar"
            element={<EventsAndWebinar/>}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
     
    </div>
  );
}

export default App;
