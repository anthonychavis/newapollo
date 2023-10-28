// does this mess w/fetching data from the server ?? ssg vs ssr ??
'use client';

import Link from 'next/link';
import { ListElement } from './_components/listelement';
import { UnorderedList } from './_components/unorderedlist';
import { Card } from './_components/CardComp/card';
import { ProgressBar } from './_components/progressbar';
import { Button } from './_components/ButtonComp/button';
import { TextEl } from './_components/TextComp/text';
import Main from './_components/MainComp/main';
// import styles from './page.module.css';

interface ListObjNameHref {
    name: string;
    href: string;
}

const secondCardFooterArr = [
    { name: 'Visa', href: '#' },
    { name: 'Paypal', href: '#' },
    { name: 'MasterCard', href: '#' },
];

const listElLoopFxn = (objArr: ListObjNameHref[]) =>
    objArr.map(({ name, href }) => (
        <ListElement key={name}>
            <Link href={href}>{name}</Link>
        </ListElement>
    ));

export default function Page() {
    return (
        <Main>
            {/* set size boundaries for Cards */}
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
                    {/* make not clickable ?? */}
                    {listElLoopFxn(secondCardFooterArr)}
                </UnorderedList>
            </Card>
            <Card type="api" />
        </Main>
    );
}
