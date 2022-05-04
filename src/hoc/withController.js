import React from 'react';

export const withController = (Controller) => (Component) => () => {
    return(
        <Controller>
            <Component />
        </Controller>
    )
}