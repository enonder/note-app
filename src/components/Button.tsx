import { CSSProperties } from "react";

interface Props {
    style?: CSSProperties
    type: string;
    children: string;
    onClick: () => void;
}

const Button = ({ style, type, children, onClick }: Props) => {
    return (
        <button style={style} className={'btn btn-' + type} onClick={onClick} >{children}</button>
    )
}

export default Button;