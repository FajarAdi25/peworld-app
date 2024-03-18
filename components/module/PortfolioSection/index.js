"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const PortfolioSection = () => {
  const [portofolio, setPortofolio] = useState([]);

  const getPortofolio = async () => {
    const res = await axios.get("/v1/portfolio");
    setPortofolio(res.data.data);
  };

  useEffect(() => {
    getPortofolio();
  }, []);

  const deletePortfolio = async (id) => {
    try {
      await axios.delete(`/v1/portfolio/${id}`, { withCredentials: true });
      Swal.fire({
        icon: "success",
        title: "Portofolio has been deleted",
      });
      getPortofolio();
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Delete failed",
      });
    }
  };

  return (
    <div className="flex flex-wrap gap-x-4 gap-y-6">
      {portofolio?.map((item) => (
        <article className="relative" key={item.id}>
          <button
            className="absolute z-[1] -right-[0.5vw] -top-[0.6vw] bg-red-600 hover:bg-red-600/80 text-gray-200 px-[0.7vw] h-[2vw] pb-1 flex justify-center items-center rounded-full"
            onClick={() => deletePortfolio(item?.id)}
          >
            x
          </button>

          <div className="relative w-[36vw] h-[20vw] sm:w-[16vw] sm:h-[10vw] mx-auto">
            <Image src={item.image} alt="portfolio" fill />
          </div>
          <p className="text-gray-800 text-xs sm:text-base text-center mt-1">
            {item.application_name}
          </p>
        </article>
      ))}
    </div>
  );
};

export default PortfolioSection;
