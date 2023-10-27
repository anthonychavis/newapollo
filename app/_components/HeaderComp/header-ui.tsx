// stateless

import Image from 'next/image';
import { MyStyles } from './header-state';

interface Props {
    children: JSX.Element[] | JSX.Element;
    styles: MyStyles;
}

export const HeaderUI = ({ children, styles }: Props) => (
    <header className={styles.header}>
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li key={'nav-logo'} className={styles.li}>
                    {/* look into using Image w/ Link  & choosing icon */}
                    {/* check if onClick option in native image component */}
                    {/* check if able to pass className into native image component */}
                    <a href="/" className={styles.logoLight}>
                        <Image
                            src="/temp-assets/vercel.svg"
                            alt="some alt, for sure"
                            width={85}
                            height={85}
                            priority
                        />
                    </a>
                    <a href="/" className={styles.logoDark}>
                        <Image
                            src="/temp-assets/vercel.svg"
                            alt="some alt, for sure"
                            width={85}
                            height={85}
                            priority
                        />
                    </a>
                </li>
                {/* make Home collapsible */}
                {children}
            </ul>
        </nav>
    </header>
);
