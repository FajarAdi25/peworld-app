import React from "react";
import SkillForm from "../SkillForm";
import Experienceform from "../ExperienceForm";
import PortfolioForm from "../PortfolioForm";
import BiodataForm from "../BiodataForm";

const EditWorkerSection = () => {
  return (
    <section className="w-full sm:w-[55%] xl:w-[80%] ">
      <form>
        <BiodataForm />

        <SkillForm />

        <Experienceform />

        <PortfolioForm />
      </form>
    </section>
  );
};

export default EditWorkerSection;
