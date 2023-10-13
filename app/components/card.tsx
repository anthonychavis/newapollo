import style from './card.module.css';

type Props = {
    children: JSX.Element[] | JSX.Element;
    className?: string;
};

export const Card = ({ children }: Props) => (
    <>
        <article className={style.card}>{children}</article>
    </>
);
