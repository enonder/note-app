import { CSSProperties, ReactNode } from "react";

interface Props {
    children: ReactNode;
    style?: CSSProperties;
}

const Row = ({ children, style }: Props) => {
    return (
        <div style={{ display: 'flex', gap: 24, ...style }}>{children}</div>
    )
}

export default Row