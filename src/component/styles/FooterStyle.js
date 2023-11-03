import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #333;
  margin-top: 30px;
  color: white;
  padding: 2rem;
  text-align: center;
`;

export const FooterText = styled.p`
  font-size: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 1rem;
  text-align: center;
  justify-content: center;

`;

export const SocialIcon = styled.a`
  font-size: 24px;
  color: white;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #0072ff;
  }
`;