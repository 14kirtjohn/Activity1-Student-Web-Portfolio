// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="text-[20px]">Kirt John D. Balasabas
//     <p>My Portfolio...</p>
//     <p></p>
//     </div>
//   )
// }

// export default App
import { useState } from "react";
import "./App.css";
import kirtID from "../img/kirtid.jpg";

function App() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const Section = ({ title, id, children }) => (
    <div className="border border-gray-700 rounded-2xl mb-4 overflow-hidden">
      <button
        onClick={() => toggleSection(id)}
        className="w-full text-left px-6 py-4 bg-gray-800 hover:bg-gray-700 transition font-semibold text-lg"
      >
        {title}
      </button>

      <div
        className={`transition-all duration-500 ease-in-out ${
          openSection === id
            ? "max-h-[1200px] opacity-100 p-6"
            : "max-h-0 opacity-0 p-0"
        } overflow-hidden bg-gray-900`}
      >
        {children}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-10">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
          <img
            src={kirtID}
            alt="Kirt John Balasabas"
            className="w-40 h-40 rounded-2xl object-cover border-4 border-gray-700 shadow-lg"
          />
          <div>
            <h1 className="text-3xl font-bold">
              Kirt John Dionson Balasabas
            </h1>
            <p className="text-gray-400 mt-2">
              Student • Aspiring Web & Software Developer
            </p>
          </div>
        </div>

        {/* ABOUT ME */}
        <Section title="About Me" id="about">
          <p className="leading-relaxed text-gray-300">
            I am Kirt John Dionson Balasabas, born and raised in Santa Cruz,
            Occidental Mindoro. I have two younger sisters and currently reside
            in Poblacion 2, Santa Cruz, Occidental Mindoro.
            <br /><br />
            My interest in technology started when I was in Grade 1, from trying
            video games in a computer shop. Over time, my curiosity grew into
            exploring how software systems work and how technology can be used
            to create helpful and creative solutions.
          </p>
        </Section>

        {/* ACCOMPLISHMENTS */}
        <Section title="Accomplishments & Interests" id="accomplishments">
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>CSS NC II Holder</li>
            <li>District Multimedia Head of our Church</li>
            <li>
              Ranked 1st in Project System Presentation (2025) among 3rd year
              students
            </li>
          </ul>

          <p className="mt-4 text-gray-300">
            I am interested in software editing tools and understanding how
            software systems are developed using creative ideas to build truly
            helpful applications.
          </p>
        </Section>

        {/* SKILLS */}
        <Section title="Skills" id="skills">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Programming Languages</h3>
              <p className="text-gray-300">
                HTML, CSS, JavaScript, PHP (Beginner)
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Tools & Frameworks</h3>
              <p className="text-gray-300">
                React, Bootstrap, Tailwind CSS, Visual Studio Code, Git (Beginner)
              </p>
            </div>
          </div>
        </Section>

        {/* PROJECTS */}
        <Section title="Projects" id="projects">
          <div className="space-y-4 text-gray-300">
            <div>
              <h4 className="font-semibold">
                Hardware Price Management System
              </h4>
              <p>
                An academic project designed to manage hardware prices using
                arrays as a simple database.
              </p>
              <p className="text-sm text-gray-400">
                Technologies: HTML, CSS, JavaScript, PHP
              </p>
            </div>

            <div>
              <h4 className="font-semibold">
                Scholarship Grant Monitoring System
              </h4>
              <p>
                A system created to monitor scholarship grants without using a
                database.
              </p>
              <p className="text-sm text-gray-400">
                Technologies: Visual Basic, HTML, CSS
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Church Multimedia Projects</h4>
              <p>
                Video editing, presentation design, and visual content creation
                for church events.
              </p>
            </div>
          </div>
        </Section>

        {/* REFLECTION */}
        <Section title="Reflection" id="reflection">
          <div className="space-y-4 text-gray-300">
            <p>
              <strong>Technologies used and why:</strong> I used HTML, CSS,
              JavaScript, PHP, React, Bootstrap, and Tailwind CSS because they
              are essential for web development and suitable for my current
              skill level.
            </p>

            <p>
              <strong>Easiest part:</strong> Writing the About Me section was
              easiest because it is based on my personal experience.
            </p>

            <p>
              <strong>Most challenging part:</strong> Explaining my projects
              technically was the most challenging.
            </p>

            <p>
              <strong>Technologies I want to learn:</strong> Advanced web
              development, AI, mobile app development, and database management.
            </p>

            <p>
              <strong>Future applications:</strong> I want to build creative
              and practical software systems that can help people in real-life
              situations.
            </p>
          </div>
        </Section>

      </div>
    </div>
  );
}

export default App;