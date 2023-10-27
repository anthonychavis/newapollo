import style from './listelement.module.css';

type Props = {
    children: string | JSX.Element;
};

export const ListElement = ({ children }: Props) => (
    <li className={style.li}>{children}</li>
);
