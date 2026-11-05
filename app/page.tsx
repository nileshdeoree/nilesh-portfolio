import Link from "next/link"

import {
  about,
  contact,
  education,
  experience,
  personalInfo,
  projects,
  skills,
  stats,
} from "@/data/portfolio";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm text-blue-400">
          👋 Welcome to my portfolio
        </span>

        <h1 className="mt-6 text-6xl font-black">
          {personalInfo.name}
        </h1>

        <h2 className="mt-4 text-3xl font-semibold text-zinc-300">
          {personalInfo.title}
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
          {personalInfo.heroDescription}
        </p>

        <div className="mt-10 flex gap-4">
          <a href="#projects" className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700">
            View Projects
          </a>

          <a
            href="/Nilesh_Deore_Latex_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-zinc-700 px-6 py-3 hover:bg-zinc-900"
          >
            View Resume
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-12 md:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 text-center"
          >
            <h2 className="text-3xl font-bold text-blue-400">
              {item.value}
            </h2>

            <p className="mt-2 text-zinc-400">{item.title}</p>
          </div>
        ))}
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-6 text-4xl font-bold">{about.title}</h2>

        <p className="whitespace-pre-line leading-8 text-zinc-400">
          {about.description}
        </p>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-10 text-4xl font-bold">Skills</h2>

        {Object.entries(skills).map(([category, values]) => (
          <div key={category} className="mb-10">
            <h3 className="mb-4 text-2xl font-semibold capitalize">
              {category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {values.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-zinc-900 px-4 py-2 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Experience */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-10 text-4xl font-bold">
          Experience
        </h2>

        {experience.map((job) => (
          <div
            key={job.company}
            className="mb-8 rounded-xl border border-zinc-800 bg-zinc-900 p-8"
          >
            <h3 className="text-2xl font-bold">
              {job.role}
            </h3>

            <p className="mt-2 text-blue-400">
              {job.company}
            </p>

            <p className="mb-6 text-zinc-500">
              {job.duration}
            </p>

            <ul className="list-disc space-y-2 pl-5 text-zinc-400">
              {job.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-10 text-4xl font-bold">
          Featured Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl border border-zinc-800 bg-zinc-900 p-8"
            >
              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="mt-2 text-blue-400">
                {project.category}
              </p>

              <p className="mt-5 text-zinc-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-zinc-800 px-3 py-1 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* <div className="mt-8 flex gap-4">
                <button className="rounded bg-blue-600 px-4 py-2">
                  Live Demo
                </button>

                <button className="rounded border border-zinc-700 px-4 py-2">
                  GitHub
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-10 text-4xl font-bold">
          Education
        </h2>

        {education.map((edu) => (
          <div
            key={edu.degree}
            className="mb-6 rounded-xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <h3 className="text-xl font-semibold">
              {edu.degree}
            </h3>

            <p className="mt-2 text-zinc-400">
              {edu.college}
            </p>

            <p className="text-zinc-500">
              {edu.year}
            </p>
          </div>
        ))}
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-4xl font-bold">
          {contact.title}
        </h2>

        <p className="mt-4 max-w-2xl text-zinc-400">
          {contact.description}
        </p>

        <div className="mt-8 space-y-3">
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
          <Link href="/blogs">View Blogs</Link>
          
        </div>
      </section>
    </main>
  );
}