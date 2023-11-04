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
  height: 4vh;
  position: sticky;
  top: 0;
`;

const Title = styled.h1`
  text-align: center;
`;

const Spacer = styled.div`
  height: 4vh;
`;

export default Header;
