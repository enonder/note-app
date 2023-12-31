

interface Props {
    title: string;
    onClick?: () => void;
}

const NoteCard = ({ onClick, title }: Props) => {
    return (
        <h3 onClick={onClick} style={{ padding: "16px", border: '1px solid #c9c9c9', width: 250, borderRadius: 10 }}>
            {title}
        </h3>


    )
}

export default NoteCard;