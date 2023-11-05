import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import CreateProposal from './CreateProposal';
import logo from '../assets/enginenear.png';

const Header = () => {
  const [hamburgerEaten, setHamburgerEaten] = useState<boolean>(false);
  const [createProposalOpen, setCreateProposalOpen] = useState<boolean>(false);

  const consume = () => {
    setHamburgerEaten(!hamburgerEaten);
  };

  const closeBurger = () => {
    setHamburgerEaten(false);
  };

  const toggleCreateProposal = () => {
    setCreateProposalOpen(!createProposalOpen);
  };

  return (
    <>
      <HeaderWrapper>
        <Logo src={logo}></Logo>
        <Title to={'/'}>EngineNEAR</Title>
        <Hamburger
          onClick={consume}
          className='fa-solid fa-bars'
          $hamburgerEaten={hamburgerEaten}
        />
        <NavContainer $hamburgerEaten={hamburgerEaten}>
          <Proposal onClick={toggleCreateProposal}>Create Proposal</Proposal>
          <Link to={'/'} onClick={closeBurger}>
            Home
          </Link>
          <Link to={'/proposals'} onClick={closeBurger}>
            Proposals
          </Link>
          <Link to={'/projects'} onClick={closeBurger}>
            Projects
          </Link>
          <CloseButton className='fa-solid fa-xmark' onClick={consume} />
        </NavContainer>
      </HeaderWrapper>
      <Spacer />
      {createProposalOpen && <CreateProposal onClose={toggleCreateProposal} />}
    </>
  );
};

const Logo = styled.img`
  position: absolute;
  top: 0vh;
  left: 2vw;
  height: 70px;
  width: 70px;
`;

const Proposal = styled.p`
  font-size: large;
  font-weight: 500;
  color: var(--color-primary);
  text-decoration: inherit;
  z-index: 11;
  &:hover {
    color: var(--color-secondary);
  }
  cursor: pointer;
  @media (max-width: 768px) {
    /* display: none; */
    top: 95vh;
    left: 50vw;
    transform: translate(-50%, -50%);
    background-color: var(--color-accent);
    border-radius: 24px;
    padding: 10px;
    font-size: 1rem;
    font-weight: 400;
    color: var(--color-background);
    text-align: center;
  }
`;

const HeaderWrapper = styled.div`
  height: 80px;
  position: fixed;
  top: 0;
  background-color: black;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const Title = styled(Link)`
  text-align: center;
  margin: 0;
  width: max-content;
  font-size: 3rem;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: start;
    position: absolute;
    left: 2vw;
  }
`;

const Hamburger = styled.i<{ $hamburgerEaten: boolean }>`
  position: absolute;
  top: 2vh;
  right: 2vw;
  font-size: xx-large;
  cursor: pointer;
  text-shadow: black 0 0 10px;
  &:hover {
    color: var(--color-accent);
  }
  ${(props) => props.$hamburgerEaten && 'display: none'}
`;

const NavContainer = styled.div<{ $hamburgerEaten: boolean }>`
  position: absolute;
  top: 2vh;
  right: 2vw;
  font-size: larger;
  display: none;
  gap: 1.5rem;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    justify-content: center;
    background-color: var(--color-background-alt);
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    padding: 10px;
    font-size: 1rem;
    font-weight: 400;
    color: var(--color-background);
    text-align: center;
    top: 8vh;
    right: 0;
    left: 0;
    z-index: 11;
    ${(props) => props.$hamburgerEaten && 'display: flex'};
  }
  ${(props) => props.$hamburgerEaten && 'display: flex'}
`;

const Spacer = styled.div`
  height: 8vh;
  z-index: -10;
  top: 0;
`;

const CloseButton = styled.i`
  text-shadow: black 0 0 10px;
  cursor: pointer;
  &:hover {
    color: var(--color-accent);
  }
`;

export default Header;
