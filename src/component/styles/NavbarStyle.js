import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  background: linear-gradient(135deg, #0072ff, #00c6ff);
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.li`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;
