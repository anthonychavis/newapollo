import style from './unorderedlist.module.css';

type Props = {
    children: (JSX.Element | JSX.Element[])[];
};

export const UnorderedList = ({ children }: Props) => (
    <ul className={style.ul}>{children}</ul>
);
