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

// maybe not helper fxn ??
export const adviceFxn = async (
    url: string,
    stateSetter: (dataStr: string) => void,
    errorSetter: (error: string) => void
) => {
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('Network response was not ok');
        const data = await res.json();
        stateSetter(data.slip.advice);
    } catch (err: any) {
        // err as Error;
        errorSetter(err.message);
    }
}; // better alternative than "any" type for the err w/in catch ?? -- have setError(err as Error) then use [errMssg, setErrMssg] --> setErrMssg(error.message) ?? better alternative ??
