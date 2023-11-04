import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [hamburgerEaten, setHamburgerEaten] = useState<boolean>(false);

  const consume = () => {
    setHamburgerEaten(!hamburgerEaten);
  };

  return (
    <>
      <HeaderWrapper>
        <Link to={'/'}>
          <Title>Hackython</Title>
        </Link>
        <Hamburger
          onClick={consume}
          className='fa-solid fa-bars'
          $hamburgerEaten={hamburgerEaten}
        />
        <NavContainer $hamburgerEaten={hamburgerEaten}>
          <Link to={'/'}>Home</Link>
          <Link to={'/proposals'}>Proposals</Link>
          <Link to={'/projects'}>Projects</Link>
          <CloseButton className='fa-solid fa-xmark' onClick={consume} />
        </NavContainer>
      </HeaderWrapper>
      <Spacer />
    </>
  );
};

const HeaderWrapper = styled.div`
  height: 8vh;
  position: fixed;
  top: 0;
  background-color: black;
  width: 100%;
`;

const Title = styled.h1`
  text-align: center;
  margin: 0;
`;

const Hamburger = styled.i<{ $hamburgerEaten: boolean }>`
  position: absolute;
  top: 2vh;
  right: 2vw;
  font-size: xx-large;
  ${(props) => props.$hamburgerEaten && 'display: none'}
`;

const NavContainer = styled.div<{ $hamburgerEaten: boolean }>`
  position: absolute;
  top: 2vh;
  right: 2vw;
  font-size: larger;
  display: none;
  gap: 10px;
  align-items: center;
  ${(props) => props.$hamburgerEaten && 'display: flex'}
`;

const Spacer = styled.div`
  height: 8vh;
  z-index: -10;
  top: 0;
`;

const CloseButton = styled.i`
  cursor: pointer;
  &:hover {
    color: var(--color-accent);
  }
`;

export default Header;
