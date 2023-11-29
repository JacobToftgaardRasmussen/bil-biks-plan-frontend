"use client";

import Collapse from "./components/Collapse";
import Customer from "./customer";
import RentalAgreement from "./rentalAgreement";
import User from "./user";
import Vehicle from "./vehicle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 max-w-2xl mx-auto">
      <Collapse title="Vehicle">
        <Vehicle />
      </Collapse>
      <Collapse title="User">
        <User />
      </Collapse>
      <Collapse title="Rental agreements">
        <RentalAgreement />
      </Collapse>
    </main>
  );
}
