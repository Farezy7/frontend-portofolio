import React, { useState } from "react";
import ProfileSection from "../components/ProfileSection";
import SkillList from "../components/SkillList";
import ProjectList from "../components/ProjectList";
import ExperienceList from "../components/ExperienceList";
import EducationList from "../components/EducationList";
import TrainingList from "../components/TrainingList";
import AchievementList from "../components/AchievementList";
import CertificationList from "../components/CertificationList";
import ContactList from "../components/ContactList";
import SectionTitle from "../components/SectionTitle";

function Home() {
  // State untuk Tab Navigasi Pengalaman
  const [activeTab, setActiveTab] = useState("experience");

  const tabs = [
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "training", label: "Training" },
  ];

  return (
    <div>
      <div id="profil" className="scroll-mt-20 my-10">
        <ProfileSection />
        <SkillList />
      </div>

      <div id="proyek" className="scroll-mt-20 my-10">
        <ProjectList />
      </div>

      {/* SECTION PENGALAMAN & LATAR BELAKANG */}
      <div id="pengalaman" className="scroll-mt-20 my-10">
        <SectionTitle title="Pengalaman & Latar Belakang" />

        {/* 1. TOMBOL NAVIGASI TAB */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mx-4 mb-5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-red-600 text-white shadow-md scale-105"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 2. KONTEN TAMPIL SESUAI TAB AKTIF */}
        {activeTab === "experience" && <ExperienceList />}
        {activeTab === "education" && <EducationList />}
        {activeTab === "training" && <TrainingList />}
      </div>

      <div id="prestasi" className="scroll-mt-20 my-10">
        <SectionTitle title="Prestasi" />
        <AchievementList />
        <SectionTitle title="Sertifikasi" />
        <CertificationList />
      </div>

      <div id="kontak" className="scroll-mt-20 my-10">
        <ContactList />
      </div>
    </div>
  );
}

export default Home;
