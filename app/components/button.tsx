import style from './button.module.css';

type Props = {
    children: string;
};

export const Button = ({ children }: Props) => (
    <button className={style.btn}>{children}</button>
);
