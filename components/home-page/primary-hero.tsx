import Image from "next/image";

import styles from "@/components/home-page/hero.module.scss";
import Link from "next/link";

const PrimaryHero: React.FC = () => {
  return (
    <section className={styles.primaryHero} aria-label="Home page">
      <div className={styles.imageContainer}>
        <Image
          src="/images/site/theo.jfif"
          alt="A picture of Theo"
          width={300}
          height={300}
        />
      </div>
      <h1>Theodore Belo</h1>
      <h2>A Full-Stack Developer</h2>
      <Link href="/portfolio">Check out my projects</Link>
    </section>
  );
};

export default PrimaryHero;
