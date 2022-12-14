import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export async function getServerSideProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}

export default function Posts({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sample Next App</title>
        <meta name="description" content="Sample next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>Users List</h2>
        <ul className={styles.grid}>
          {data.map((item) => {
            return (
              <Link key={item.id} href={`users/${item.id}`}>
                <div className={styles.card}>
                  <h3>ID: {item.id}</h3>
                  <h3>Name: {item.name}</h3>
                  <h3>Email: {item.email}</h3>
                  <p> {item.phone} {item.website}</p>
                </div>
              </Link>
            );
          })}
        </ul>
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
