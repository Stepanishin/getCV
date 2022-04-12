import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Wrapper = styled.div`
    width: 10rem;
    height: 10rem;
    margin-right: 4rem;
    border-radius: ${(props) => props.isSquare ? '10px' : '50%'};
    background-color: #bfbfbf;
    cursor: pointer;
`



const Avatar = ({ isSquare, onClick }) => {
    return (
        <Wrapper isSquare={isSquare} onClick={onClick} />
    );
};

Avatar.propTypes = {
    isSquare: propTypes.bool,
    onClick: propTypes.func,
}

Avatar.defaultProps = {
    isSquare: true,
    onClick: () => {},
}

export default Avatar;