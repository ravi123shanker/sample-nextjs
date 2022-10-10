import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.id}`
  );
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}

export default function Detail({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sample Next App</title>
        <meta name="description" content="Sample next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>Todos Detail</h2>
        <div className={styles.card}>
          <h3>ID: {data.id}</h3>
          <h3>Title: {data.title}</h3>
          <h4>Completed: {data.completed ? "Yes" : "No"}</h4>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
