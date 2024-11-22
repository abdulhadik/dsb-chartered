import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarStyle from "./components/navabar/Navbar.jsx";
import Main from "./pages/main/Main";
import Footer from "./components/footer/Footer"; 
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
import EventsAndWebinar from "./pages/EventsAndWebinar/EventsAndWebinar.jsx";
import CompletedEvents from "./pages/CompletedEvents/CompletedEvents.jsx";
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
import AddEvent from "./components/Admin/AddEvent.jsx";
import { GoToTop } from "go-to-top-react";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavbarStyle />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route
            path="/accounting-and-bookkeeping"
            element={<AccountingAndBookkeeping />}
          />
          <Route path="/ifrs-compliance" element={<IFRSCompliance />} />
          <Route path="/corporate-tax" element={<CorporateTax />} />
          <Route path="/vat-consultant" element={<VatConsultant />} />
          <Route path="/customs" element={<Customs />} />
          <Route path="/cfo" element={<CFO />} />
          <Route path="/business-valuation" element={<BusinessValuation />} />
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
          <Route path="/dsb-dsbadmin@1122334455" element={<AddEvent />} />
          <Route
            path="/learning-hub-commercial-law"
            element={<LearningHubCommercialLaw />}
          />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/events-and-webinar" element={<EventsAndWebinar />} />
          <Route
            path="/completed-events-webinar"
            element={<CompletedEvents />}
          />
        </Routes>
        <Footer />
        <GoToTop />
      </BrowserRouter>
    </div>
  );
}

export default App;
