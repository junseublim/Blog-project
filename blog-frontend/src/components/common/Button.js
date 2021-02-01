import React from 'react';
import styled, {css}from 'styled-components';
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
    ${props =>
        props.fullWidth && css`
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            width: 100%;
            font-size: 1.125rem;
    `}
    ${props =>
        props.cyan && css`
            background: ${palette.cyan[5]};
            &:hobver {
                background: ${palette.cyan[4]};
            }
    `}

    
`;
//그냥 StyledButton 보내도 되지만 렌더링 해준 이유는 추후 이 컴포넌트를 사용할 때 자동 import 되게 하기 위함.
const Button = props => <StyledButton {...props}/>
export default Button;