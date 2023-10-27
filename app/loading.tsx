// 'use client';

import Main from './_components/MainComp/main';

export default function Loading() {
    // console.log('loading');
    return (
        <Main>
            <h2>Loading...</h2>
            <p>Won't take long</p>
        </Main>
    );
}

// confirmed works 😊 -- adjust styling -- sorta working?? not working as expected w/setTimeout <--import & use w/ternary (unless native next way to do it)
// smooth this out to avoid abrupt flashes ??
