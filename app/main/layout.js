import Footer from "@/components/module/Footer";
import Navbar from "@/components/module/Navbar";

const MainLayout = ({ children }) => {
  return (
    <main className="w-screen">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
