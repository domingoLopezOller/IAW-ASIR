import styles from './card.module.css';
export function Card({ title, content }: { title: string; content: string }) {
  return (
    <div className={"border rounded-lg p-4"}>
      <h2 className={styles.title}>{title}</h2>
      <p>{content}</p>
    </div>
  )
}
