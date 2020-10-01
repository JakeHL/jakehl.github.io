import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Theme, { styled } from '../../theme';

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0px;
        min-height: 100vh;
    }

    * {
        font-family: ${Theme.Fonts.main};
    }
`;

const RootContainer = styled.div`
  background-color: ${Theme.Colors.black};
  min-height: 100vh;
`;

const Layout: React.FC = ({ children }: { children: React.ReactNode }) => (
  <RootContainer>
    <GlobalStyles />
    {children}
  </RootContainer>
);
export default Layout;
