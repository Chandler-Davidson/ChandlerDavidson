import Link from 'next/link';
import styles from 'styles/Index.module.css';
import { RotatingCube } from 'partials/rotatingCube';
import { useMediaQuery } from 'hooks/useMediaQuery';
import isDev from 'utils/isDev';

const tld = isDev() ? '.com' : '.dev';
const link = <Link href={`https://chandlerdavidson${tld}`}>{tld}</Link>;
const cubeFaces = ['coding', 'with 👪', 'skating', link, 'at the 🏖️',];

export default function Home() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const nameComponent = <h1> Chandler {isMobile ? <br /> : <></>} Davidson</h1>;

  return (
    <div className={styles.container}>
      {nameComponent}
      <div className={styles.row}>
        <h2 style={{ whiteSpace: 'nowrap' }}>I'm probably</h2>
        <RotatingCube contents={cubeFaces} />
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
        <Link href="mailto:chandlermdavidson@gmail.com">
          Email
        </Link>
      </div>
    </div>
  );
}
