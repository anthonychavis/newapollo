// stateful

import styles from './footer.module.css';
import { FooterUI } from './footer-ui';

export type MyStyles = typeof styles;

export default function Footer() {
    return (
        <FooterUI styles={styles}>
            <p>This footer will be oh so cool 🫣</p>
        </FooterUI>
    );
}
