import { JSX } from "solid-js";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Hero from "~/components/Hero";

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div class="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <div class="container mx-auto py-10 flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
