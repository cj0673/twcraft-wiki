import styles from './comment.module.css';

export default function Comment({children}) {
  return (
    <div className={styles.comment}>
      {children}
    </div>
  );
}
