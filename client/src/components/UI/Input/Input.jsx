import React from 'react';

const Input = React.forwardRef((props, ref) => {
    return (
        <>
            <input
                id={props.id}
                ref={ref}
                {...props}
                type={props.type} 
                onChange={props.onChange}
                checked={props.checked}
                disabled={props.disabled}
                />
                <label className={props.labelClass} for={props.id}>{props.labelChidren}</label>
                
        </>
    );
});

export default Input;
