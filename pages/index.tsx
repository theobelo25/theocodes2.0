import Head from "next/head";

import PrimaryHero from "@/components/home-page/primary-hero";

import styles from "@/styles/Home.module.css";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Theocodes.dev</title>
        <meta name="description" content="My Development Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PrimaryHero />
    </>
  );
};

export default Home;
