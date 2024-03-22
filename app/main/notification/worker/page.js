"use client";
import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";

const NotificationWorker = () => {
  const [hire, setHire] = useState([]);
  const getUserHire = async () => {
    try {
      const response = await getHireWorker();
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
          <FaUser style={{ height: 90, width: 90, marginRight: 170 }} />
          <div>
            <div style={{ display: "flex" }}>
              <p style={{ marginRight: 10 }}>Name :</p>
              <p>{worker.recruiter_name}</p>
            </div>
            <div style={{ display: "flex" }}>
              <p style={{ marginRight: 10 }}>Email :</p>
              <p>{worker.email_request_hire}</p>
            </div>
            <div style={{ display: "flex" }}>
              <p style={{ marginRight: 10 }}>Phone :</p>
              <p>{worker.phone_request_hire}</p>
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

export default NotificationWorker;
