import React, { useState } from 'react';
import styled from 'styled-components';
import Description from '../Description/Description';

const Wrapper = styled.div`
  display: inline-block;
  width: 33%;
  margin: 0.4rem 0;
`

const Input = styled.input`
  width: 97%;
  height: 6px;
  margin: 0 0.4rem;
  overflow: hidden;
  cursor: pointer;
  -webkit-appearance: none;
  &::-webkit-slider-runnable-track {
    background: #ddd;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 40px;
    background: dodgerblue;
    box-shadow: -100vw 0 0 100vw dodgerblue;
    border: 1px solid #999;
  }
`

const Range = () => {

    const [value, setValue] = useState(80)

    return (
        <Wrapper>
            <Description>
                Name - {value}
            </Description>
            <Input type="range" 
            name="" 
            id="" 
            onChange={(e) => setValue(e.target.value)}
            value={value}
            step ='10'
            min='0'
            max='100'
        />
        </Wrapper>
    );
};

export default Range;