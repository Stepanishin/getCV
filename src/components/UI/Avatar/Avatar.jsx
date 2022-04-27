import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { ReactComponent as CameraIcon } from '../../icons/camera.svg'

const Wrapper = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: ${(props) => (props.isSquare ? '10px' : '50%')};
  background-color: #bfbfbf;
  input {
    display: none;
  }
  label,
  label div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
    height: 10rem;
    cursor: pointer;
    border-radius: ${(props) => (props.isSquare ? '10px' : '50%')};
  }
`



const Avatar = ({ isSquare, onClick }) => {

    const [selectedFile, setSelectedFile] = useState(null)
    const [preview, setPreview] = useState(null)

    useEffect(() => {
        const objectUrl = selectedFile && URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    return (
        <Wrapper isSquare={isSquare} onClick={onClick}>
            <input 
                type="file" 
                id='Avatar' 
                name='Avatar' 
                onChange={(e) => setSelectedFile(e.target.files[0])} 
                value=''
            />
            <label htmlFor='Avatar'>
            {
                preview 
                ? <div style={{
                    backgroundImage: `url(${preview})`, 
                    backgroundSize: 'cover',
                }} />
                : (<CameraIcon />)
            }
            </label>
        </Wrapper>
    );
};

Avatar.propTypes = {
    isSquare: propTypes.bool,
}

Avatar.defaultProps = {
    isSquare: false,
}

export default Avatar;