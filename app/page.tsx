// does this mess w/fetching data from the server ??
'use client';

import Link from 'next/link';
import { ListElement } from './components/listelement';
import { NavBar } from './components/navbar';
import { UnorderedList } from './components/unorderedlist';
import styles from './page.module.css';
import { Card } from './components/card';
import { ProgressBar } from './components/progressbar';
import { Button } from './components/button';
import { useState } from 'react';
import { LargeContainer } from './components/large-container';
import { TextEl } from './components/text';

interface ListObjNameHref {
    name: string;
    href: string;
}

const navListElArr = [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Safety', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contacts', href: '#' },
    { name: 'Sign In', href: '#' },
];

const secondCardFooterArr = [
    { name: 'FB', href: '#' },
    { name: 'LI', href: '#' },
    { name: 'IG', href: '#' },
];

const listElLoopFxn = (objArr: ListObjNameHref[]) =>
    objArr.map(({ name, href }) => (
        <ListElement key={name}>
            <Link href={href}>{name}</Link>
        </ListElement>
    ));

export default function Page() {
    const [authorized, setAuthorized] = useState(false);

    return (
        <>
            <LargeContainer className={styles.header} type={'header'}>
                <NavBar>
                    <UnorderedList>
                        <ListElement key={'logo'}>
                            <Link href={'/'}>logo</Link>
                        </ListElement>
                        {listElLoopFxn(navListElArr)}
                    </UnorderedList>
                </NavBar>
            </LargeContainer>
            <LargeContainer className={styles.main} type={'main'}>
                <Card>
                    <TextEl type={'h1'}>BuyCoin Blockchain</TextEl>
                    <TextEl>Secure & Easy Way To Trade</TextEl>
                    <Link href={'#'}>
                        <Button>GET STARTED</Button>
                    </Link>
                    <Link href={'#'}>
                        <Button>WHITEPAPER</Button>
                    </Link>
                </Card>
                <Card>
                    <TextEl type={'h2'}>BuyCoin ICO:</TextEl>
                    <TextEl>Discount 33% from final price</TextEl>
                    {/* how to do the progress bar & related text for it ?? 🤔 */}
                    <ProgressBar>progress bar for something</ProgressBar>
                    <TextEl>Fixed token edition 3,000,000 BITS</TextEl>
                    <Link href={'#'}>
                        <Button>BUY TOKENS</Button>
                    </Link>
                    <UnorderedList>
                        {listElLoopFxn(secondCardFooterArr)}
                    </UnorderedList>
                </Card>
            </LargeContainer>
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
