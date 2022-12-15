import styled from 'styled-components';

export const ButtonContainer = styled.button`
    background-color: #565656;
    border-radius: 22px;
    position: relative;

    color: #fff;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;

    ${({ variant }) => variant !== "primary" && `
    
        min-width: 167px;
        height: 33px;
        background-color: #e41050;
        &:hover {
            opacity: 0.6;
            cursor: pointer;
        }
        &::after {
            content: '';
            position: absolute;
            border: 1px solid #e41050;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    
    `}
`