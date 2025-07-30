"use client";

import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import MortgageLoans from "@/components/services/securedloans/MortgageLoans";
import CarLoansNerAndFinancing from "@/components/services/securedloans/CarLoansNerAndFinancing";
import SchoolAndCollegeFunding from "@/components/services/securedloans/SchoolAndCollegeFunding";
import OdCc from "@/components/services/securedloans/OdCc";
import HomeLoans from "@/components/services/securedloans/HomeLoans";

const componentsMap: Record<string, React.ComponentType> = {
  "securedloans/mortgageloans": MortgageLoans,
  "securedloans/carloansnerandfinancing": CarLoansNerAndFinancing,
  "securedloans/schoolandcollegefunding": SchoolAndCollegeFunding,
  "securedloans/odcc": OdCc,
  "securedloans/homeloans": HomeLoans,
};

export default function ServicePage() {
  const params = useParams<{ slug?: string[] }>();
  const slugArray = params?.slug ?? [];
  const pathKey = slugArray.map((s) => s.toLowerCase()).join("/");

  const PageComponent = componentsMap[pathKey];

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-12 min-h-screen">
        {PageComponent ? (
          <PageComponent />
        ) : (
          <h1 className="text-2xl font-bold text-red-600">
            Page Not Found: {pathKey}
          </h1>
        )}
      </main>
      <Footer />
    </>
  );
}
