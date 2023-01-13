import React, { memo } from 'react'

export default memo(function Alert(props) {
    const capatalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.alert && <div className='container'> <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capatalize(props.alert.type)}:{props.alert.msg}</strong>
        </div>
        </div>
    )
})
