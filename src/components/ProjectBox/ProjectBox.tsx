import styles from "./ProjectBox.module.css";

export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;     // caminho público, ex: "/projects/smartcalc-cover.png"
  tech: string[];
  live?: string;     // URL de produção (opcional)
  repo?: string;     // URL do GitHub (opcional)
};

export default function ProjectBox(p: Project) {
  return (
    <article className={styles.card}>
      <div className={styles.cover}>
        {/* Usamos <img> com object-fit: cover pra garantir o preenchimento */}
        <img src={p.image} alt={p.title} loading="lazy" />
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{p.title}</h3>
        <p className={styles.desc}>{p.description}</p>

        {p.tech?.length > 0 && (
          <ul className={styles.techList}>
            {p.tech.map((t) => (
              <li key={t} className={styles.techChip}>{t}</li>
            ))}
          </ul>
        )}

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
  );
}
