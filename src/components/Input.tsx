//import React from 'react'

interface Props {
    value: string;
    onChange: (e: any) => void;
    placeholder: string;
}

const Input = ({ value, onChange, placeholder }: Props) => {
    return (
        <input style={{ height: 40, width: '100%', border: '1px solid #c9c9c9', padding: '16px', borderRadius: 10 }} onChange={onChange} value={value} placeholder={placeholder} />
    )
}

export default Input;