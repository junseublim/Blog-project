import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const StyledButton = styled.button`
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.25rem 1rem;
    color: white;
    outline: none;
    cursor: pointer;

    background: ${palette.gray[8]};
    &:hover {
        background: ${palette.gray[6]};
    }
`;
//그냥 StyledButton 보내도 되지만 렌더링 해준 이유는 추후 이 컴포넌트를 사용할 때 자동 import 되게 하기 위함.
const Button = props => <StyledButton {...props}/>
export default Button;