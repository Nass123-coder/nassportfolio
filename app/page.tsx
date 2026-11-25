/* src/app/page.tsx */
"use client";

import React from "react";
import Image from "next/image";
import { 
  Home, Briefcase, Monitor, Smartphone, Code, 
  Settings, MessageSquare, Download, CheckCircle, 
  ExternalLink, Server, Database, Layout, Globe
} from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <main className="min-h-screen p-4 md:p-8 flex justify-center items-start">
      <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* ================= LEFT SIDEBAR ================= */}
        <aside className="lg:col-span-3 flex flex-col gap-6">
          
          {/* Profile Card */}
          <div className="bg-[#111116] rounded-3xl p-6 flex flex-col items-center border border-gray-800 shadow-2xl">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-gray-600 mb-4">
              {/* Replace with your image path */}
              <Image src="/myphoto.jpg" alt="Nasserou Guene" fill className="object-cover" />
            </div>
            <h1 className="text-xl font-bold text-white text-center">Nasserou Guene</h1>
            <p className="text-sm text-gray-400 mb-4">Computer Science Engineer</p>
            
            <div className="flex gap-2 mb-6">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-black px-4 py-1.5 rounded-full text-sm font-semibold transition">Available</button>
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-1.5 rounded-full text-sm font-semibold transition flex items-center gap-1">
                <Download size={14} /> CV
              </button>
            </div>

            {/* Navigation */}
            <nav className="w-full flex flex-col gap-1">
              <NavItem icon={<Home size={18} />} label="Home" active />
              <NavItem icon={<Briefcase size={18} />} label="About me" />
              <NavItem icon={<Monitor size={18} />} label="Services" />
              <NavItem icon={<Code size={18} />} label="Projects" />
              <NavItem icon={<Smartphone size={18} />} label="Skills" />
              <NavItem icon={<Settings size={18} />} label="Tools" />
              <NavItem icon={<MessageSquare size={18} />} label="Contact" />
            </nav>
          </div>

          {/* Languages Card */}
          <div className="bg-[#111116] rounded-3xl p-6 border border-gray-800 shadow-2xl">
            <h3 className="text-gray-400 text-sm mb-4">Languages</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-white">French</span>
                  <span className="text-cyan-400">Native</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-1.5"><div className="bg-cyan-400 h-1.5 rounded-full w-full"></div></div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-white">English</span>
                  <span className="text-cyan-400">Proficient (C1/C2)</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-1.5"><div className="bg-cyan-400 h-1.5 rounded-full w-5/6"></div></div>
              </div>
            </div>
          </div>

        </aside>

        {/* ================= MAIN CONTENT ================= */}
        <div className="lg:col-span-9 flex flex-col gap-6">
          
          {/* Hero Section */}
          <section className="bg-[#111116] rounded-3xl p-8 md:p-12 border border-gray-800 shadow-2xl relative overflow-hidden flex flex-col md:flex-row justify-between items-center">
            <div className="z-10 md:max-w-xl">
              <p className="text-cyan-400 font-medium mb-2">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Nasserou<br />Guene
              </h1>
              <p className="text-gray-400 text-lg mb-8">
                A motivated Computer Science Engineer specializing in Web Development with Python (Flask) and Mobile Development with Flutter. Currently based in Budapest, Hungary.
              </p>
              <div className="flex gap-4">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-3 px-8 rounded-full transition flex items-center gap-2">
                  <MessageSquare size={18} /> Let's Talk
                </button>
              </div>
            </div>
            
            {/* Abstract Background Decoration */}
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none">
              <div className="absolute right-[-10%] top-[-10%] w-[400px] h-[400px] bg-cyan-500 rounded-full blur-[120px]"></div>
            </div>
          </section>

          {/* Top Skills / Services Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <SkillBadge icon={<Code size={20} />} name="Python / Flask" />
            <SkillBadge icon={<Layout size={20} />} name="HTML / CSS / JS" />
            <SkillBadge icon={<Smartphone size={20} />} name="Flutter / Dart" />
            <SkillBadge icon={<Database size={20} />} name="MySQL" />
          </div>

          {/* About / Education & Experience Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Experience Card */}
            <div className="bg-[#111116] rounded-3xl p-8 border border-gray-800 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-cyan-400" />
                <h2 className="text-2xl font-bold text-white">Experience</h2>
              </div>
              <div className="space-y-6 relative border-l border-gray-700 ml-3">
                
                <TimelineItem 
                  title="French Teacher (Online)" 
                  company="FIFL Abroad Careers" 
                  date="Jan 2026 - Current" 
                  desc="Online French Teacher."
                />
                <TimelineItem 
                  title="Junior Developer" 
                  company="Wezi Tech Institute of Technology" 
                  date="Sep 2025 - Dec 2025" 
                  desc="Software Creation powered by AI and Machine Learning."
                />
                <TimelineItem 
                  title="Computer Technical Support" 
                  company="IFFIE EDUCATION CONSULTANT" 
                  date="Mar 2020 - Current" 
                  desc="Maintenance of computers, document creation, and translation (French to English)."
                />
              </div>
            </div>

            {/* Education Card */}
            <div className="bg-[#111116] rounded-3xl p-8 border border-gray-800 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="text-cyan-400" />
                <h2 className="text-2xl font-bold text-white">Education</h2>
              </div>
              <div className="space-y-6 relative border-l border-gray-700 ml-3">
                
                <TimelineItem 
                  title="MSc in Info & Comm Tech" 
                  company="Eötvös Loránd University, Budapest" 
                  date="Sep 2026 - Current" 
                  desc="EQF Level 8"
                />
                <TimelineItem 
                  title="B.Tech in Computer Science" 
                  company="Andhra University, India" 
                  date="Oct 2022 - Apr 2026" 
                  desc="EQF Level 6"
                />
                <TimelineItem 
                  title="High School Degree" 
                  company="Lycée Moderne d'Abengourou" 
                  date="2016 - 2018" 
                  desc="Mathematics and Physics"
                />
              </div>
            </div>

          </div>

          {/* Stats Section (From your CV details) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard number="4+" label="Years Tech Experience" />
            <StatCard number="3" label="Languages Spoken" />
            <StatCard number="2" label="Countries Studied In" />
            <StatCard number="10+" label="Projects Completed" />
          </div>

        </div>
      </div>
    </main>
  );
}

// ================= REUSABLE COMPONENTS =================

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <button className={`flex items-center gap-3 w-full p-3 rounded-xl transition ${active ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'}`}>
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}

function SkillBadge({ icon, name }: { icon: React.ReactNode, name: string }) {
  return (
    <div className="bg-[#111116] rounded-2xl p-4 border border-gray-800 flex items-center gap-3 shadow-lg hover:border-cyan-500/50 transition cursor-default">
      <div className="text-cyan-400 bg-gray-800 p-2 rounded-lg">{icon}</div>
      <span className="text-sm text-gray-200 font-medium">{name}</span>
    </div>
  );
}

function TimelineItem({ title, company, date, desc }: { title: string, company: string, date: string, desc: string }) {
  return (
    <div className="ml-6 relative">
      <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-cyan-500 rounded-full border-4 border-[#111116]"></div>
      <h4 className="text-white font-semibold">{title}</h4>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
        <span className="text-sm text-gray-400">{company}</span>
        <span className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded-full mt-1 sm:mt-0">{date}</span>
      </div>
      <p className="text-sm text-gray-500 leading-relaxed mt-1">{desc}</p>
    </div>
  );
}

function StatCard({ number, label }: { number: string, label: string }) {
  return (
    <div className="bg-[#111116] rounded-2xl p-6 border border-gray-800 text-center flex flex-col justify-center items-center shadow-lg">
      <h3 className="text-3xl font-bold text-white mb-1">{number}</h3>
      <p className="text-xs text-gray-400">{label}</p>
    </div>
  );
}