import Link from 'next/link';
import Main from './_components/MainComp/main';

export default function NotFound() {
    return (
        <Main>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/">Return Home</Link>
        </Main>
    );
}

// confirmed works 😊 -- adjust styling
