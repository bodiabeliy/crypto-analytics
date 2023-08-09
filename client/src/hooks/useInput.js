import { useState } from "react";

export default function useInput(inputValue) {
    const [value, setValue] = useState(inputValue)

    const onChange =(e) => {
        setValue(e.target.value)  
    }
    return {
        value,
        onChange
    }
}