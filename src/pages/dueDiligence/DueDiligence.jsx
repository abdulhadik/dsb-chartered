import React from 'react'
import ServicesHero from '../../components/servicesHero/ServicesHero';
import { ServicesParaDetails,ServicesHeroDetails,ServicesConsultDetails } from '../../components/ServicesData';
import ServicesPara from '../../components/servicesPara/ServicesPara';
import ServiceConsult from '../../components/serviceConsult/ServiceConsult';
export default function DueDiligence() {
  return (
    <div>
    <ServicesHero
              key={ServicesHeroDetails[1].id}
              headingServicesHero={ServicesHeroDetails[1].ServicesHeading}
              paraServicesHero={ServicesHeroDetails[1].ServicesPara}
            
           />
           <ServicesPara
        key={ServicesParaDetails[1].id}
        headingPara={ServicesParaDetails[1].ServicesParaHeading}
        p1Bolder={ServicesParaDetails[1].P1Strong}
        p1={ServicesParaDetails[1].P1}
        p2={ServicesParaDetails[1].P2}
        p3={ServicesParaDetails[1].P3}
      />
      <ServiceConsult
        key={ServicesConsultDetails[1].id}
        headingConsult={ServicesConsultDetails[1].ServicesConsultHeading}
        paraConsult={ServicesConsultDetails[1].ServicesConsultPara}
      />
    </div>
  )
}
