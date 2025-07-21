"use client";
import Image from "next/image";
import Doctor from "./medical-specialist/page";
import SpecialityClinics from "./speciality-clinics/page";

export default function Home() {
  return (
    <div className="">
      <main className="">
        {/* <Doctor/> */}
        <SpecialityClinics/>
      </main>
    
    </div>
  );
}
