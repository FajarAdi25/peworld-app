import Footer from "@/components/module/Footer";
import Navbar from "@/components/module/Navbar";

const ProfileLayout = ({ children }) => {
  return (
    <main className="w-screen">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default ProfileLayout;
