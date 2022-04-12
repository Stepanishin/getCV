import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';

const Description = ({ isPrimary, isSecondary, className,  children, ...attrs }) => {

    const classes = classNames('ui-text', className, {
        isPrimary,
        isSecondary,
    })

    return (
        <p
            className={classes} 
            {...attrs} 
            contentEditable 
            suppressContentEditableWarning 
            spellCheck={false}
        >
            {children}
        </p>
    );
};

Description.propTypes = {
    isPrimary: propTypes.bool,
    isSecondary: propTypes.bool,
    className: propTypes.string,
    children: propTypes.node.isRequired,
}

Description.defaultTypes = {
    isPrimary: false,
    isSecondary: false,
    className: '',
}

export default Description;