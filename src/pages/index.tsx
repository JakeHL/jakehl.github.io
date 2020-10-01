import React from 'react';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { styled } from '../theme';

import Layout from '../components/Layout';
import ToolBar, { ToolBaritem } from '../components/toolbar';
import Bio from '../components/Bio';

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FooterContent = styled.div``;

export default function Home() {
  return (
    <Layout>
      <FlexColumn>
        <LinksContainer>
          <ToolBar>
            <ToolBaritem
              text="Github"
              href="https://github.com/jakehl"
              icon={faGithub}
            />
          </ToolBar>
        </LinksContainer>
        <MainContent>
          <Bio />
        </MainContent>
        <FooterContent>1</FooterContent>
      </FlexColumn>
    </Layout>
  );
}
