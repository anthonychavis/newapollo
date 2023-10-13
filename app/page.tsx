import Link from 'next/link';
import { H1 } from './components/h1';
import { Header } from './components/header';
import { ListElement } from './components/listelement';
import { Main } from './components/main';
import { NavBar } from './components/navbar';
import { UnorderedList } from './components/unorderedlist';
import styles from './page.module.css';

export default function Page() {
    return (
        <>
            <Header>
                <NavBar>
                    <UnorderedList>
                        <ListElement>
                            {/* go to home page */}
                            <Link href={''}>Icon</Link>
                        </ListElement>
                        <ListElement>
                            <Link href={''}>Home</Link>
                        </ListElement>
                        <ListElement>
                            <Link href={''}>Features</Link>
                        </ListElement>
                        <ListElement>
                            <Link href={''}>Safety</Link>
                        </ListElement>
                        <ListElement>
                            <Link href={''}>Blog</Link>
                        </ListElement>
                        <ListElement>
                            <Link href={''}>Contacts</Link>
                        </ListElement>
                        <ListElement>
                            {/* make butoon ?? */}
                            <Link href={''}>SIGN IN</Link>
                        </ListElement>
                    </UnorderedList>
                </NavBar>
            </Header>
            <Main>
                <H1>BuyCoin Blockchain</H1>
            </Main>
        </>
    );
}

// import Image from 'next/image'
// import styles from './page.module.css'

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <div className={styles.description}>
//         <p>
//           Get started by editing&nbsp;
//           <code className={styles.code}>app/page.tsx</code>
//         </p>
//         <div>
//           <a
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{' '}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className={styles.vercelLogo}
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className={styles.center}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className={styles.grid}>
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Docs <span>-&gt;</span>
//           </h2>
//           <p>Find in-depth information about Next.js features and API.</p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Learn <span>-&gt;</span>
//           </h2>
//           <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Templates <span>-&gt;</span>
//           </h2>
//           <p>Explore the Next.js 13 playground.</p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Deploy <span>-&gt;</span>
//           </h2>
//           <p>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   )
// }
