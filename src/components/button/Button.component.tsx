import * as React from 'react'
import style from './Button.module.scss';

type Props = {
    onClick: () => void;
}

export const Button: React.FunctionComponent<Props> =
({
    onClick,
    children
}) => (
    <button
        className={style.button}
        onClick={onClick}
    >{children}</button>
);
