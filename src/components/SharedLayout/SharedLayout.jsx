import { GlobalStyles } from 'components/GlobalStyles';
import { Outlet } from 'react-router-dom';
import { Container } from 'components/Shared/Container.styled';
import { StyledHeader } from './SharedLayout.styled';
import { HeaderNavigation } from './HeaderNavigation/HeaderNavigation';

export const SharedLayout = () => (
  <>
    <GlobalStyles />
    <StyledHeader>
      <Container>
        <HeaderNavigation />
      </Container>
    </StyledHeader>
    <main>
      <Outlet />
    </main>
  </>
);
