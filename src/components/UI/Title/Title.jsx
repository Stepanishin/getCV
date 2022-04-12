import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';

const Title = ({ size, className, children, ...attrs }) => {

    const classes = classNames(`ui-title-${size}`, className)

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

Title.propTypes = {
    size: propTypes.oneOf(['1', '2', '3']),
    className: propTypes.string,
    children: propTypes.node.isRequired
}

Title.defaultTypes = {
    size: '1',
    className: '',
}

export default Title;