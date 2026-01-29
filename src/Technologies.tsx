import type { JSX } from "react";
import { useInView } from "./hooks/useInView";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython
} from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiCplusplus,
  SiVite,
  SiNpm
} from "react-icons/si";

import "./Technologies.css";

function Technologies(): JSX.Element {
  const { ref, isVisible } = useInView<HTMLDivElement>();

  return (
    <main
      id="technologies"
      ref={ref}
      className={`technologies-section ${isVisible ? "enter" : ""}`}
    >
      <section className="Technologies-layout">

        <div className="Technologies-top">
          <h2>Technologies</h2>
        </div>

        {/* ROW 1 */}
        <div className="tech-row">
          <div className="tech-block">
            <h3>Frontend</h3>
            <div className="tech-icons">
              <FaReact data-icon="react" />
              <SiTypescript data-icon="typescript" />
              <SiJavascript data-icon="javascript" />
              <FaHtml5 data-icon="html" />
              <FaCss3Alt data-icon="css" />
              <SiTailwindcss data-icon="tailwind" />
            </div>
          </div>

          <div className="tech-block">
            <h3>Backend</h3>
            <div className="tech-icons">
              <FaNodeJs data-icon="node" />
              <SiExpress data-icon="express" />
            </div>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="tech-row">
          <div className="tech-block">
            <h3>Databases</h3>
            <div className="tech-icons">
              <SiPostgresql data-icon="postgresql" />
              <SiMysql data-icon="mysql" />
              <SiFirebase data-icon="firebase" />
            </div>
          </div>

          <div className="tech-block">
            <h3>Programming Languages</h3>
            <div className="tech-icons">
              <SiTypescript data-icon="typescript" />
              <SiJavascript data-icon="javascript" />
              <SiCplusplus data-icon="cplusplus" />
              <FaPython data-icon="python" />
            </div>
          </div>
        </div>

        {/* ROW 3 */}
        <div className="tech-row single">
          <div className="tech-block">
            <h3>Tools & Workflow</h3>
            <div className="tech-icons">
              <FaGitAlt data-icon="git" />
              <FaGithub data-icon="github" />
              <SiVite data-icon="vite" />
              <SiNpm data-icon="npm" />
            </div>
          </div>
        </div>

        {/* SCROLL */}
        <div className="scroll-projects">
          <a href="#education-contact">
            <span>Education & Contact</span>
            <span className="arrow-down">↓</span>
          </a>
        </div>

      </section>
    </main>
  );
}

export default Technologies;
