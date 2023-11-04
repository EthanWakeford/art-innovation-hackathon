import styled from 'styled-components';

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <Title>Hackython</Title>
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

const Spacer = styled.div`
  height: 8vh;
  z-index: -10;
  top: 0;
`;

export default Header;
