import Head from "next/head";
import styles from "@right-choice/styles/Home.module.css";

export async function getStaticProps() {
  return {
    props: {
      testProp: "TEST",
    },
  };
}

export default function Home({ testProp }: { testProp: string }) {
  return (
    <>
      <Head>
        <title>Test</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <div>Test test</div>
          <div>{testProp}</div>
          <div>More content</div>
        </div>
      </main>
    </>
  );
}
