import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import CreateProposal from './CreateProposal';

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
        <Proposal onClick={toggleCreateProposal}>Create Proposal</Proposal>
        <Title to={'/'}>Hackython</Title>
        <Hamburger
          onClick={consume}
          className='fa-solid fa-bars'
          $hamburgerEaten={hamburgerEaten}
        />
        <NavContainer $hamburgerEaten={hamburgerEaten}>
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

const Proposal = styled.p`
  position: absolute;
  top: 2vh;
  left: 2vw;
  font-size: larger;
  font-weight: 500;
  color: var(--color-primary);
  text-decoration: inherit;
  &:hover {
    color: var(--color-accent);
  }
  cursor: pointer;
`;

const HeaderWrapper = styled.div`
  height: 8vh;
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
  font-size: 50px;
  font-weight: 700;
`;

const Hamburger = styled.i<{ $hamburgerEaten: boolean }>`
  position: absolute;
  top: 2vh;
  right: 2vw;
  font-size: xx-large;
  cursor: pointer;
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
