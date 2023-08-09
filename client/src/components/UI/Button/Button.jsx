import React from 'react';

const Button = ({children, ...props}) => {
    return (

        props.typeLink !="link" ? 
        <button {...props} className={[props.className].join(' ')} onClick={props.onClick}>
            {children}
        </button>
        :
        <a href='https://secure.wayforpay.com/donate/d65a3a859dcbe' {...props} className={[props.className].join(' ')} onClick={props.onClick}>
        {children}
        </a>
    );
};

export default Button;
