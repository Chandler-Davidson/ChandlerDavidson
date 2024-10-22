import styles from 'styles/Index.module.css';
import { RotatingCube } from 'partials/rotatingCube';
import Link from 'next/link';
import { useMediaQuery } from 'hooks/useMediaQuery';

const activities = ['coding', 'with 👪', 'skating', 'at the 🏖️', 'biking'];

export default function Home() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const nameComponent = <h1> Chandler {isMobile ? <br /> : <></>} Davidson</h1>;

  return (
    <div className={styles.container}>
      {nameComponent}
      <div className={styles.row}>
        <h2 style={{ whiteSpace: 'nowrap' }}>I'm probably</h2>
        <RotatingCube texts={activities} />
      </div>
      <div className={styles.links}>
        <Link href="https://github.com/chandler-davidson">
          Github
        </Link>
        <Link href="https://instagram.com/chandler_marx_davidson/">
          Instagram
        </Link>
        <Link href="https://www.linkedin.com/in/chandler-davidson-0248ba250/">
          LinkedIn
        </Link>
      </div>
    </div>
  );
}
