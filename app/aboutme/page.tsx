import Image from "next/image";
export default function AboutMePage() {
  return (
    <div className="bg-[#111116] rounded-3xl p-6 flex flex-col items-center border border-gray-800 shadow-2xl">
      <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-gray-600 mb-4">
        {/* Replace with your image path */}
        <Image src="/myphoto.jpg" alt="Nasserou Guene" fill className="object-cover" />
      </div>
      <h1 className="text-xl font-bold text-white text-center">Nasserou Guene</h1>
      <p className="text-sm text-gray-400 mb-4">Computer Science Engineer</p>
      <p className="text-sm text-gray-400 text-center">
        I am a passionate computer science engineer with a strong interest in web development and software engineering. I enjoy creating innovative solutions and continuously learning new technologies to enhance my skills.
      </p>
    </div>
  );
}
