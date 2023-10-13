import style from './main.module.css';

type Props = {
    className?: string;
    children: JSX.Element[] | JSX.Element;
};

export const Main = ({ children }: Props) => {
    return (
        <>
            <main className={style.main}>{children}</main>
        </>
    );
};
