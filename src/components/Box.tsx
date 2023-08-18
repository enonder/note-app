import { CSSProperties, ReactNode } from "react";

interface Props {
    children: ReactNode;
    style?: CSSProperties;
}

const Box = ({ style, children }: Props) => {
    return (
        <div style={style}>{children}</div>
    )
}

export default Box;