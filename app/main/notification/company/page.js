"use client";
import { getHireCompany } from "@/services/notification";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";

const NotificationCompany = () => {
  const [hire, setHire] = useState([]);
  const getUserHire = async () => {
    try {
      const response = await getHireCompany();
      setHire(response);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserHire();
  }, []);
  return (
    <main>
      <div className="bg-[#5E50A1] h-50 flex items-center justify-center">
        <h1 className="text-white w-11/12 mx-auto px-6 text-2xl font-semibold">
          Jobs
        </h1>
      </div>
      {hire.map((worker, index) => (
        <div key={index} style={{ display: "flex", marginTop: 10 }}>
          <div style={{ marginRight: 100 }}>
            {worker.worker_photo ? (
              <Image
                // className={Styles.contentimg}
                src={worker.worker_photo}
                alt="naim"
                width={150}
                height={150}
              />
            ) : (
              <FaUser
                style={{
                  height: 100,
                  width: 100,
                  marginRight: 20,
                  marginLeft: 30,
                  // marginTop: 50,
                }}
              />
            )}
          </div>
          <div>
            <div style={{ display: "flex" }}>
              <p style={{ marginRight: 10 }}>Name :</p>
              <p>{worker.worker_name}</p>
            </div>
            <div style={{ display: "flex" }}>
              <p style={{ marginRight: 10 }}>Email :</p>
              <p>{worker.email_request_hire}</p>
            </div>
            <div style={{ display: "flex" }}>
              <p style={{ marginRight: 10 }}>Phone :</p>
              <p>{worker.worker_phone}</p>
            </div>
            <div style={{ display: "flex" }}>
              <p style={{ marginRight: 10 }}>Description :</p>
              <p>{worker.desciption_request_hire}</p>{" "}
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default NotificationCompany;
