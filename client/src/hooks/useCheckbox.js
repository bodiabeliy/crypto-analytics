import { useState } from "react";

export default function useCheckbox(inputValue) {
    const [value, setValue] = useState(inputValue)

    const onChange =(e) => {
        setValue(e.target.checked)  
    }
    return {
        value,
        onChange
    }
}