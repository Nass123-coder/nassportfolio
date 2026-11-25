/* app/page.tsx */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Home, Briefcase, Monitor, Smartphone, Code, 
  Settings, MessageSquare, Download, Globe, Database, Layout, CheckCircle, Wrench, GraduationCap, Users
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { requestCVDownload } from "./actions";

type Tab = "home" | "about" | "services" | "projects" | "skills" | "tools" | "contact";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<Tab>("home");
  const [isDownloading, setIsDownloading] = useState(false);

  const handleCVClick = async () => {
    setIsDownloading(true);
    await requestCVDownload();
    const link = document.createElement("a");
    link.href = "/Nasserou_Guene_CV.pdf"; 
    link.download = "Nasserou_Guene_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setIsDownloading(false), 2000);
  };

  return (
    <main className="min-h-screen p-4 md:p-8 flex justify-center items-start font-sans bg-[#0a0a0a]">
      <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* ================= LEFT SIDEBAR ================= */}
        <aside className="lg:col-span-3 flex flex-col gap-6">
          {/* Profile Card */}
          <div className="bg-[#111116] rounded-3xl p-6 flex flex-col items-center border border-gray-800 shadow-2xl">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-gray-600 mb-4">
              <Image src="/myphoto.jpg" alt="Nasserou Guene" fill className="object-cover" />
            </div>
            <h1 className="text-xl font-bold text-white text-center">Nasserou Guene</h1>
            <p className="text-sm text-gray-400 mb-4">Computer Science Engineer</p>
            
            <div className="flex gap-2 mb-6">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-black px-4 py-1.5 rounded-full text-sm font-semibold transition">
                Available
              </button>
              <button 
                onClick={handleCVClick}
                disabled={isDownloading}
                className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-1.5 rounded-full text-sm font-semibold transition flex items-center gap-1 disabled:opacity-50"
              >
                {isDownloading ? <CheckCircle size={14} className="text-green-400" /> : <Download size={14} />} 
                {isDownloading ? "Sent!" : "CV"}
              </button>
            </div>

            {/* Navigation */}
            <nav className="w-full flex flex-col gap-1">
              <NavItem icon={<Home size={18} />} label="Home" active={activeTab === "home"} onClick={() => setActiveTab("home")} />
              <NavItem icon={<Briefcase size={18} />} label="About me" active={activeTab === "about"} onClick={() => setActiveTab("about")} />
              <NavItem icon={<Monitor size={18} />} label="Services" active={activeTab === "services"} onClick={() => setActiveTab("services")} />
              <NavItem icon={<Code size={18} />} label="Projects" active={activeTab === "projects"} onClick={() => setActiveTab("projects")} />
              <NavItem icon={<Smartphone size={18} />} label="Skills" active={activeTab === "skills"} onClick={() => setActiveTab("skills")} />
              <NavItem icon={<Settings size={18} />} label="Tools" active={activeTab === "tools"} onClick={() => setActiveTab("tools")} />
              <NavItem icon={<MessageSquare size={18} />} label="Contact" active={activeTab === "contact"} onClick={() => setActiveTab("contact")} />
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

        {/* ================= MAIN CONTENT AREA ================= */}
        <div className="lg:col-span-9 flex flex-col gap-6 relative min-h-[80vh]">
          
          <AnimatePresence mode="wait">
            
            {/* 1. HOME TAB (The layout from your image) */}
            {activeTab === "home" && (
              <motion.div key="home" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex flex-col gap-6">
                
                {/* Hero Section */}
                <section className="bg-[#111116] rounded-3xl p-8 md:p-12 border border-gray-800 shadow-2xl relative overflow-hidden flex flex-col justify-center min-h-[280px]">
                  <div className="z-10 md:max-w-xl">
                    <p className="text-cyan-400 font-medium mb-2">Hello, I'm</p>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Nasserou<br />Guene</h1>
                    <p className="text-gray-400 text-lg mb-8">
                      A motivated Computer Science Engineer specializing in Web Development with Python (Flask) and Mobile Development with Flutter. Currently based in Budapest, Hungary.
                    </p>
                  </div>
                  <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none">
                    <div className="absolute right-[-10%] top-[-10%] w-[400px] h-[400px] bg-cyan-500 rounded-full blur-[120px]"></div>
                  </div>
                </section>

                {/* Top Skills Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <SkillBadge icon={<Code size={20} />} name="Python / Flask" />
                  <SkillBadge icon={<Layout size={20} />} name="HTML / CSS / JS" />
                  <SkillBadge icon={<Smartphone size={20} />} name="Flutter / Dart" />
                  <SkillBadge icon={<Database size={20} />} name="MySQL" />
                </div>

                {/* Experience & Education Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Experience Card */}
                  <div className="bg-[#111116] rounded-3xl p-8 border border-gray-800 shadow-2xl">
                    <div className="flex items-center gap-3 mb-6">
                      <Briefcase className="text-cyan-400" />
                      <h2 className="text-2xl font-bold text-white">Experience</h2>
                    </div>
                    <div className="space-y-6 relative border-l border-gray-700 ml-3">
                      <TimelineItem title="French Teacher (Online)" company="FIFL Abroad Careers" date="Jan 2026 - Current" desc="Online French Teacher." />
                      <TimelineItem title="Junior Developer" company="Wezi Tech Institute of Technology" date="Sep 2025 - Dec 2025" desc="Software Creation powered by AI and Machine Learning." />
                      <TimelineItem title="Computer Technical Support" company="IFFIE EDUCATION CONSULTANT" date="Mar 2020 - Current" desc="Maintenance of computers, document creation, and translation (French to English)." />
                    </div>
                  </div>

                  {/* Education Card */}
                  <div className="bg-[#111116] rounded-3xl p-8 border border-gray-800 shadow-2xl">
                    <div className="flex items-center gap-3 mb-6">
                      <Globe className="text-cyan-400" />
                      <h2 className="text-2xl font-bold text-white">Education</h2>
                    </div>
                    <div className="space-y-6 relative border-l border-gray-700 ml-3">
                      <TimelineItem title="MSc in Info & Comm Tech" company="Eötvös Loránd University, Budapest" date="Sep 2026 - Current" desc="EQF Level 8" />
                      <TimelineItem title="B.Tech in Computer Science" company="Andhra University, India" date="Oct 2022 - Apr 2026" desc="EQF Level 6" />
                      <TimelineItem title="High School Degree" company="Lycée Moderne d'Abengourou" date="2016 - 2018" desc="Mathematics and Physics" />
                    </div>
                  </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <StatCard number="4+" label="Years Tech Experience" />
                  <StatCard number="3" label="Languages Spoken" />
                  <StatCard number="2" label="Countries Studied In" />
                  <StatCard number="10+" label="Projects Completed" />
                </div>
              </motion.div>
            )}

            {/* 2. SKILLS TAB (New comprehensive skills based on CV) */}
            {activeTab === "skills" && (
              <motion.div key="skills" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="bg-[#111116] rounded-3xl p-8 md:p-12 border border-gray-800 shadow-2xl">
                <h2 className="text-3xl font-bold text-white mb-8">My Skill Set</h2>
                
                <div className="space-y-8">
                  {/* Technical Skills */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Code className="text-cyan-400" size={24} />
                      <h3 className="text-xl font-semibold text-white">Technical Skills</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Tag label="Python (Flask)" />
                      <Tag label="Flutter & Dart" />
                      <Tag label="HTML / CSS / JavaScript" />
                      <Tag label="MySQL & Database Management" />
                      <Tag label="AI & Machine Learning (Basic)" />
                      <Tag label="Web Development" />
                      <Tag label="Mobile App Development" />
                      <Tag label="Microsoft Office Suite" />
                    </div>
                  </div>

                  {/* Professional & Soft Skills (Gained from Experience/Teaching) */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="text-cyan-400" size={24} />
                      <h3 className="text-xl font-semibold text-white">Professional & Soft Skills</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Tag label="Technical Support & Maintenance" />
                      <Tag label="Document Translation (FR/EN)" />
                      <Tag label="Teaching & Mentoring" />
                      <Tag label="Cross-cultural Communication" />
                      <Tag label="Problem Solving" />
                      <Tag label="Project Management" />
                    </div>
                  </div>

                  {/* Education Highlight */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <GraduationCap className="text-cyan-400" size={24} />
                      <h3 className="text-xl font-semibold text-white">Academic Foundation</h3>
                    </div>
                    <div className="bg-gray-800/30 p-4 rounded-2xl border border-gray-800 text-gray-300 text-sm leading-relaxed">
                      My skills are backed by a strong academic background in <strong className="text-white">Computer Science Engineering</strong> (B.Tech from Andhra University) and ongoing Master's studies in <strong className="text-white">Info & Communication Technologies</strong> (ELTE). These programs have provided me with a solid understanding of algorithms, software architecture, and modern development frameworks.
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 3. ABOUT ME TAB */}
            {activeTab === "about" && (
              <motion.div key="about" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="bg-[#111116] rounded-3xl p-8 md:p-12 border border-gray-800 shadow-2xl">
                <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>Hello! I am Nasserou Guene, a highly motivated Computer Science Engineer currently based in Budapest, Hungary. I have a strong passion for building software that solves real-world problems.</p>
                  <p>My expertise lies in <strong className="text-white">Web Development</strong> using Python (Flask) and <strong className="text-white">Mobile Development</strong> using Flutter. I hold a Bachelor of Technology in Computer Science from Andhra University and am currently pursuing my Master's at Eötvös Loránd University.</p>
                  <p>Beyond coding, I am fluent in French and English, and I enjoy teaching French online in my free time. I thrive in multicultural environments and love collaborating on innovative tech projects.</p>
                </div>
              </motion.div>
            )}

            {/* 4. SERVICES TAB */}
            {activeTab === "services" && (
              <motion.div key="services" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="bg-[#111116] rounded-3xl p-8 md:p-12 border border-gray-800 shadow-2xl">
                <h2 className="text-3xl font-bold text-white mb-6">My Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ServiceCard icon={<Code size={28} />} title="Web Development" desc="Building scalable backend systems with Python and Flask, alongside responsive frontends." />
                  <ServiceCard icon={<Smartphone size={28} />} title="Mobile App Development" desc="Creating cross-platform mobile applications for iOS and Android using Flutter and Dart." />
                  <ServiceCard icon={<Database size={28} />} title="Database Management" desc="Designing and optimizing MySQL databases for efficient data storage and retrieval." />
                  <ServiceCard icon={<Wrench size={28} />} title="IT Support & Maintenance" desc="Comprehensive technical support, computer maintenance, and document translation." />
                </div>
              </motion.div>
            )}

            {/* 5. PROJECTS TAB */}
            {activeTab === "projects" && (
              <motion.div key="projects" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="bg-[#111116] rounded-3xl p-8 md:p-12 border border-gray-800 shadow-2xl">
                <h2 className="text-3xl font-bold text-white mb-6">Featured Projects</h2>
                <div className="space-y-4">
                  <ProjectItem title="AI-Powered Software" type="Wezi Tech Institute" desc="Developed intelligent software solutions leveraging AI and Machine Learning models." />
                  <ProjectItem title="E-Commerce Platform" type="Web App" desc="A full-stack Flask application with MySQL integration for inventory management." />
                  <ProjectItem title="Language Learning App" type="Mobile App" desc="A Flutter-based mobile app designed to help users learn French interactively." />
                </div>
              </motion.div>
            )}

            {/* 6. TOOLS TAB */}
            {activeTab === "tools" && (
              <motion.div key="tools" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="bg-[#111116] rounded-3xl p-8 md:p-12 border border-gray-800 shadow-2xl">
                <h2 className="text-3xl font-bold text-white mb-6">My Toolkit</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <SkillBadge icon={<Code size={20} />} name="Python / Flask" />
                  <SkillBadge icon={<Layout size={20} />} name="VS Code" />
                  <SkillBadge icon={<Smartphone size={20} />} name="Android Studio" />
                  <SkillBadge icon={<Database size={20} />} name="MySQL Workbench" />
                  <SkillBadge icon={<Globe size={20} />} name="Microsoft Office" />
                </div>
              </motion.div>
            )}

            {/* 7. CONTACT TAB */}
            {activeTab === "contact" && (
              <motion.div key="contact" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="bg-[#111116] rounded-3xl p-8 md:p-12 border border-gray-800 shadow-2xl flex flex-col justify-center items-center text-center min-h-[400px]">
                <MessageSquare size={48} className="text-cyan-400 mb-6" />
                <h2 className="text-3xl font-bold text-white mb-4">Let's work together!</h2>
                <p className="text-gray-400 mb-8 max-w-md">I am currently available for freelance work and open to new opportunities.</p>
                <a href="mailto:guenenasserou@gmail.com" className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-3 px-8 rounded-full transition">
                  Send an Email
                </a>
                <p className="text-gray-500 mt-4">guenenasserou@gmail.com</p>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}

// ================= REUSABLE COMPONENTS =================

function NavItem({ icon, label, active = false, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick: () => void }) {
  return (
    <button onClick={onClick} className={`flex items-center gap-3 w-full p-3 rounded-xl transition ${active ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'}`}>
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}

function SkillBadge({ icon, name }: { icon: React.ReactNode, name: string }) {
  return (
    <div className="bg-[#111116] rounded-2xl p-4 border border-gray-800 flex flex-col items-center justify-center gap-3 shadow-lg hover:border-cyan-500/50 transition cursor-default text-center">
      <div className="text-cyan-400 bg-gray-800 p-3 rounded-lg">{icon}</div>
      <span className="text-sm text-gray-200 font-medium">{name}</span>
    </div>
  );
}

function TimelineItem({ title, company, date, desc }: { title: string, company: string, date: string, desc: string }) {
  return (
    <div className="ml-6 relative mb-6">
      <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-cyan-500 rounded-full border-4 border-[#111116]"></div>
      <h4 className="text-white font-semibold">{title}</h4>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
        <span className="text-sm text-gray-400">{company}</span>
        <span className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded-full mt-1 sm:mt-0 whitespace-nowrap">{date}</span>
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

function ProjectItem({ title, type, desc }: { title: string, type: string, desc: string }) {
  return (
    <div className="p-5 bg-gray-800/30 rounded-2xl border border-gray-800 hover:border-gray-600 transition">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <span className="text-xs bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded-md">{type}</span>
      </div>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  );
}

function ServiceCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700">
      <div className="text-cyan-400 mb-3">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span className="bg-gray-800 text-gray-200 border border-gray-700 px-4 py-2 rounded-xl text-sm font-medium">
      {label}
    </span>
  );
}