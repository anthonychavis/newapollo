// stateless

import { MyStyles } from './footer-state';

interface Props {
    children: JSX.Element;
    // children: React.ReactNode;
    styles: MyStyles;
} // which is the better type here ?? why ?? --JSX.Element is more specific, right?

export const FooterUI = ({ children, styles }: Props) => (
    <footer className={styles.footer}>{children}</footer>
);
