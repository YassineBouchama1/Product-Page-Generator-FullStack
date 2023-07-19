import Hero from "@/components/HomePage/Hero";
import UserLayout from "@/components/Layout/UserLayout";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "product Page Generator",
  description: "Generate Page To Sall Your Product  ",
};
export default function Home() {
  return (
    <main>
      <UserLayout>
        <Hero />
      </UserLayout>
    </main>
  );
}
