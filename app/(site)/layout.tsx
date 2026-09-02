import { Intro } from "@/components/Intro";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Intro />
      <SmoothScroll />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
