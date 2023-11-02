import styled from 'styled-components';

export const ContainerStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 4px;

@media (min-width: 768px) {
  grid-template-columns: repeat(2, 1fr); 
}

@media (min-width: 1024px) {
  grid-template-columns: repeat(3, 1fr);
}
`;

export const CardContainer = styled.div`
    border: 1px solid #5977CE;
    border-radius: 10px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    height: 24rem;
    padding-left: 1rem;
    padding-right: 1rem;
`;



export const Button = styled.button`
    color: #5977CE;
    font-size: 1em;
    margin-top: 4px;
    padding: 4px 10px;
    border: 2px solid #7659CE;
    border-radius: 8px;
`