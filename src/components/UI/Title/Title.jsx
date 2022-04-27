import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-bottom: 1rem;
    button {
        display: inline-block;
        transition: 0.1s all ease;
        opacity: 0 !important;
    }
    &:hover button {
        opacity: 1 !important;
    }
    p {
        display: inline-block;
        margin-bottom: 0;
    }
`


const Title = ({ size, isUppercase, isShowButton, className, onClick, children, ...attrs }) => {

    const classes = classNames(`ui-title-${size}`, className, { isUppercase })

    return (
        <Wrapper>
            <p 
                className={classes} 
                {...attrs} 
                contentEditable 
                suppressContentEditableWarning 
                spellCheck={false} 
            >
                {children}
            </p>
            {
                isShowButton && (
                <button className='ui-button isLink' onClick={onClick}>+</button>
                )
            }
           
        </Wrapper>
    );
};

Title.propTypes = {
    size: propTypes.oneOf(['1', '2', '3']),
    isUppercase: propTypes.bool,
    isShowButton: propTypes.bool,
    className: propTypes.string,
    onClick: propTypes.func,
    children: propTypes.node.isRequired
}

Title.defaultTypes = {
    size: '1',
    className: '',
    isShowButton: false,
    onClick: () => {},
    isUppercase: false,
}

export default Title;