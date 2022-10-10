import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ic_photos from '../assets/images/photos.jpg';
import ic_posts from '../assets/images/posts.png';
import ic_todos from '../assets/images/todos.png';
import ic_users from '../assets/images/users.png';
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sample Next App</title>
        <meta name="description" content="Sample next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>Sample NextJS App</h2>
        <ul className={styles.grid}>
          <li>
            <Link key="posts" href={`/posts`}>
              <div className={styles.card}>
                <h2>Posts</h2>
                <Image
                  src={ic_posts}
                  alt="Posts"
                  width={100}
                  height={100}
                />
              </div>
            </Link>
          </li>
          <li>
            <Link key="Todos" href={`/todos`}>
              <div className={styles.card}>
                <h2>Todos</h2>
                <Image
                  src={ic_todos}
                  alt="Todos"
                  width={100}
                  height={100}
                />
              </div>
            </Link>
          </li>
          <li>
            <Link key="Users" href={`/users`}>
              <div className={styles.card}>
                <h2>Users</h2>
                <Image
                  src={ic_users}
                  alt="Users"
                  width={100}
                  height={100}
                />
              </div>
            </Link>
          </li>
          <li>
            <Link key="Photos" href={`/photos`}>
              <div className={styles.card}>
                <h2>Photos</h2>
                <Image
                  src={ic_photos}
                  alt="Photos"
                  width={100}
                  height={100}
                />
              </div>
            </Link>
          </li>
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
