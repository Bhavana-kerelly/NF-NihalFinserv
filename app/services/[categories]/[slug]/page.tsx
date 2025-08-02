"use client";

import React from "react";
import { useParams, notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import SecuredLoans from "@/components/services/securedloans/SecuredLoans";
import MortgageLoans from "@/components/services/securedloans/MortgageLoans";
import CarLoansNerAndFinancing from "@/components/services/securedloans/CarLoansNerAndFinancing";
import SchoolAndCollegeFunding from "@/components/services/securedloans/SchoolAndCollegeFunding";
import OdCc from "@/components/services/securedloans/OdCc";
import HomeLoans from "@/components/services/securedloans/HomeLoans";

import UnSecuredLoans from "@/components/services/unsecuredloans/UnSecuredLoans";
import BusinessInstallmentLoans from "@/components/services/unsecuredloans/BusinessInstallmentLoans";
import MedicalEquipmentLoans from "@/components/services/unsecuredloans/MedicalEquipmentLoans";
import IndustrialMachineryLoans from "@/components/services/unsecuredloans/IndustrialMachineryLoans";
import ConstructionEquipmentLoans from "@/components/services/unsecuredloans/ConstructionEquipmentLoans";
import EquipmentRefinancingLoans from "@/components/services/unsecuredloans/EquipmentRefinancingLoans";
import ProfessionalLoans from "@/components/services/unsecuredloans/ProfessionalLoans";
import PersonalLoans from "@/components/services/unsecuredloans/PersonalLoans";
import EducationalLoans from "@/components/services/unsecuredloans/EducationalLoans";

import Term from "@/components/services/termloans/Term";
import ShortTermLoans from "@/components/services/termloans/ShortTermLoans";
import LongTermLoans from "@/components/services/termloans/LongTermLoans";
import CreditCards from "@/components/services/termloans/CreditCards";

import CoorporateLoans from "@/components/services/corporateloans/CoorporateLoans";
import WorkingCapital from "@/components/services/corporateloans/WorkingCapital";
import AssetFinance from "@/components/services/corporateloans/AssetFinance";
import Leasing from "@/components/services/corporateloans/Leasing";
import TermLoans from "@/components/services/corporateloans/TermLoans";
import StructedFinance from "@/components/services/corporateloans/StructedFinance";

import Sme from "@/components/services/sme/Sme";
import Manufacturer from "@/components/services/sme/Manufacturer";
import Distributor from "@/components/services/sme/Distributor";
import Retailer from "@/components/services/sme/Retailer";
import ServiceProvider from "@/components/services/sme/ServiceProvider";
import Vendor from "@/components/services/sme/Vendor";

import StructuredProducts from "@/components/services/structuredproducts/StructuredProducts";
import LoanAgainstSecurities from "@/components/services/structuredproducts/LoanAgainstSecurities";
import StructuredInvestments from "@/components/services/structuredproducts/StructuredInvestments";
import LetterOfCredit from "@/components/services/structuredproducts/LetterOfCredit";
import LeaseRentalDiscounting from "@/components/services/structuredproducts/LeaseRentalDiscounting";
import LoanAgainstProperty from "@/components/services/structuredproducts/LoanAgainstProperty";

import EquipmentFinancing from "@/components/services/equipmentfinancingandleasing/EquipmentFinancing";
import CapitalGoods from "@/components/services/equipmentfinancingandleasing/CapitalGoods";
import ItHardware from "@/components/services/equipmentfinancingandleasing/ItHardware";
import OfficeInfrastructure from "@/components/services/equipmentfinancingandleasing/OfficeInfrastructure";
import Cars from "@/components/services/equipmentfinancingandleasing/Cars";
import Construction from "@/components/services/equipmentfinancingandleasing/ConstructionEquipment";
import EnergySavingEquipment from "@/components/services/equipmentfinancingandleasing/EnergySavingEquipment";
import HealthCareEquipment from "@/components/services/equipmentfinancingandleasing/HealthCareEquipment";
import SolarEquipment from "@/components/services/equipmentfinancingandleasing/SolarEquipment";
import LogisticsMachinery from "@/components/services/equipmentfinancingandleasing/LogisticsMachinery";

import AiChatBot from "@/components/services/aichatbots/AiChatBot";
import ChatGptSolutions from "@/components/services/aichatbots/ChatGptSolutions";
import AiChatbotDev from "@/components/services/aichatbots/AiChatbotDev";

const servicesMap: Record<string, React.ComponentType> = {
  securedloans: SecuredLoans,
  mortgageloans: MortgageLoans,
  carloansnerandfinancing: CarLoansNerAndFinancing,
  schoolandcollegefunding: SchoolAndCollegeFunding,
  odcc: OdCc,
  homeloans: HomeLoans,
  
  
  unsecuredloans: UnSecuredLoans,
  businessinstallmentloans: BusinessInstallmentLoans,
  medicalequipmentloans: MedicalEquipmentLoans,
  industrialmachineryloans: IndustrialMachineryLoans,
  constructionequipmentloans: ConstructionEquipmentLoans,
  equipmentrefinancingloans: EquipmentRefinancingLoans,
  professionalloans: ProfessionalLoans,
  personalloans: PersonalLoans,
  educationalloans: EducationalLoans,
  
  term: Term,
  shorttermloans: ShortTermLoans,
  longtermloans: LongTermLoans,
  creditcards: CreditCards,
  
  coorporateloans: CoorporateLoans,
  workingcapital: WorkingCapital,
  assetfinance: AssetFinance,
  leasing: Leasing,
  termloans: TermLoans,
  structuredfinance: StructedFinance,
  
  sme: Sme,
  manufacturer: Manufacturer,
  retailer: Retailer,
  distributor: Distributor,
  vendor: Vendor,
  serviceprovider: ServiceProvider,
  
  structuredproducts: StructuredProducts,
  loanagainstsecurities: LoanAgainstSecurities,
  loanagainstproperty: LoanAgainstProperty,
  structuredinvestments: StructuredInvestments,
  letterofcredit: LetterOfCredit,
  leaserentaldiscounting: LeaseRentalDiscounting,
  
  equipmentfinancingandleasing: EquipmentFinancing,
  capitalgoods: CapitalGoods,
  ithardware: ItHardware,
  officeinfrastructure: OfficeInfrastructure,
  cars: Cars,
  constructionequipment: Construction,
  energysavingequipment: EnergySavingEquipment,
  healthcareequipment: HealthCareEquipment,
  solarequipment: SolarEquipment,
  logisticsmachinery: LogisticsMachinery,
  
  aichatbots: AiChatBot,
  chatgptsolutions: ChatGptSolutions,
  aichatbotdev: AiChatbotDev,

};

export default function ServicePage() {
  const params = useParams<{ category?: string; slug?: string }>();

  const slug = params.slug?.toLowerCase(); // normalize slug
  const Component = servicesMap[slug || ""]; // fallback empty string

  console.log("Slug from URL:", slug);
  console.log("Component selected:", Component?.name);

  if (!Component) return notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-12 px-4">
        <Component />
      </main>
      <Footer />
    </>
  );
}
