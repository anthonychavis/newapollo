// stateful

import { HeaderUI } from './header-ui';
import styles from './header.module.css';
import { ListMapArg, listMapFxn } from '../HelperFxns/helper-fxns';

export type MyStyles = typeof styles;

const mainNavListArr = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Safety', href: '/safety' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contacts', href: '/contacts' },
    { name: 'Sign Up', href: '#' },
];
// remove href from sign up ??

const args: ListMapArg = { arr: mainNavListArr, styles: styles };

export default function Header() {
    return <HeaderUI styles={styles}>{listMapFxn(args)}</HeaderUI>;
}
