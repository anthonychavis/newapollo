import { ReactElement } from 'react';
import style from './unorderedlist.module.css';

type Props = {
    children: ReactElement<Element>[] | JSX.Element;
};

export const UnorderedList = ({ children }: Props) => (
    <ul className={style.ul}>{children}</ul>
);
