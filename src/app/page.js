import fs from "fs";
import path from "path";


export default function Home() {
  const filePath = path.join(process.cwd(), "src/app/data/data.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const resumeData = JSON.parse(jsonData);
  const { name, title, contact, skills, experience, education, languages, interests } = resumeData;

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
        <h2 className="text-xl text-gray-600 mt-2">{title}</h2>
        <p className="text-gray-500 mt-1">{contact.location}</p>
        <p className="text-gray-500">{contact.phone} | {contact.email}</p>
      </header>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 border-b pb-1 mb-4">Skills</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 border-b pb-1 mb-4">Experience</h2>
        <div className="space-y-6">
          {experience.map((job, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
              <p className="text-gray-600 italic">{job.role} | {job.duration}</p>
              <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                {job.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
              <p className="text-gray-600 mt-2 font-semibold">Environnement Technique:</p>
              <p className="text-gray-600">{job.tech_environment}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 border-b pb-1 mb-4">Education</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          {education.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Languages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 border-b pb-1 mb-4">Languages</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          {languages.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
      </section>

      {/* Interests */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 border-b pb-1 mb-4">Interests</h2>
        <p className="text-gray-600">{interests.join(", ")}</p>
      </section>
    </div>
  );
}
