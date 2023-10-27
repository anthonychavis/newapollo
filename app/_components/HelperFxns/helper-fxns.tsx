import Link from 'next/link';
import { MyStyles } from '../HeaderComp/header-state';

export interface ListMapArg {
    arr: { name: string; href: string }[];
    styles: MyStyles;
}

export const listMapFxn = ({ arr, styles }: ListMapArg) =>
    // export const listMapFxn = (
    //     arr: { name: string; href: string }[],
    //     styles: MyStyles
    // ) =>
    arr.map(el => (
        <li key={el.name} className={styles.li}>
            <Link href={el.href}>{el.name}</Link>
        </li>
    ));
