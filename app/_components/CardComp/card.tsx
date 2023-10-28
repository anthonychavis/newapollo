import { useEffect, useState } from 'react';
import { adviceFxn } from '../HelperFxns/helper-fxns';
import styles from './card.module.css';

type Props = {
    children?: JSX.Element[] | JSX.Element;
    className?: string;
    type?: string;
};

export const Card = ({ children, type, className }: Props) => {
    switch (type) {
        case 'api':
            const [advice, setAdvice] = useState(
                'There should be some advice appearing here...'
            );
            const [error, setError] = useState('');

            // fetch outside of component for performance & reduced calls ?? useMemo/useCallback ?? other hook ??
            useEffect(() => {
                adviceFxn(
                    `https://api.adviceslip.com/advice`,
                    setAdvice,
                    setError
                );
            });
            return (
                <article className={`${styles.apiCard} ${styles.card}`}>
                    {error ? <h2>Error: {error}</h2> : <h2>{advice}</h2>}
                </article>
            );
        default:
            return <article className={styles.card}>{children}</article>;
    }
};

// use stateful/stateless ??
