import { Outlet } from "react-router-dom";
import Footer from "@/ui/Footer.jsx";
import Navbar from "@/ui/Navbar.jsx";
import ScrollToTop from "@/ui/ScrollToTop.jsx";

export default function SiteLayout() {
  return (
    <div className="min-h-dvh">
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
