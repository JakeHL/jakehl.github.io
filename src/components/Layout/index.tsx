import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Theme, { styled } from '../../theme';

import Stripes from '../shapes/stripes';

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
  min-height: 100vh;
`;

const FixedBackground = styled.div`
    background-color: ${Theme.Colors.black};  
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
`;

const Layout: React.FC = ({ children }: { children: React.ReactNode }) => (<>
 <FixedBackground>
      <Stripes />
  </FixedBackground>
  <RootContainer>
    <GlobalStyles />
    {children}
  </RootContainer>
</>);
export default Layout;
