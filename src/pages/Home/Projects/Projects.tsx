import React from "react";
import styles from "./Projects.module.css";
import { PROJECTS } from "../../../data/projects";
import image from '../../../assets/images/smartcalc-cover.png'


const Projects: React.FC = () => {
  const p = PROJECTS[0];

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Projeto em destaque</h2>
          <p className={styles.subtitle}>
            Um case recente que reúne front-end moderno, UX e testes.
          </p>
        </header>

        <article className={styles.card} aria-labelledby="proj-title">
          <div className={styles.mediaWrap}>  
          <img
            src={image}
            alt={p.title}
            className={styles.cover}
            loading="lazy"
          />
          </div>

          <div className={styles.content}>
            <h3 id="proj-title" className={styles.cardTitle}>
              {p.title}
            </h3>
            <p className={styles.desc}>{p.description}</p>

            <ul className={styles.techList} aria-label="Tecnologias">
              {p.tech.map((t) => (
                <li key={t} className={styles.techChip}>
                  {t}
                </li>
              ))}
            </ul>

            <div className={styles.actions}>
              {p.live && (
                <a
                  className={`${styles.btn} ${styles.btnPrimary}`}
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abrir projeto
                </a>
              )}
              {p.repo && (
                <a
                  className={`${styles.btn} ${styles.btnGhost}`}
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Código no GitHub
                </a>
              )}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
