interface Props {
    value: string;
    onChange: (e: any) => void;
}

const TextArea = ({ value, onChange }: Props) => {
    return (
        <textarea style={{ height: 300, width: '100%', border: '1px solid #c9c9c9', padding: '16p', borderRadius: 10 }} onChange={onChange} value={value}> </textarea>
    )
}

export default TextArea;