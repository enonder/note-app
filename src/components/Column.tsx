import { CSSProperties, ReactNode } from "react";

interface Props {
    children: ReactNode;
    style?: CSSProperties;
}

const Column = ({ style, children }: Props) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 12, ...style }}>{children}</div>
    )
}

export default Column