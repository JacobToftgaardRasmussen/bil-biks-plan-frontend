import Customer from "./customer";
import RentalAgreement from "./rentalAgreement";
import User from "./user";
import Vehicle from "./vehicle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Vehicle />
      {/* <Customer />
      <User />
      <RentalAgreement /> */}
    </main>
  );
}
