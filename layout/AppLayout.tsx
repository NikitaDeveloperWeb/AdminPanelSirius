import styled from '@emotion/styled';
import React from 'react';
import Head from 'next/head';
import AsideMenu from '../components/AsideMenu';

interface AppLayoutProps {
  title: string;
  children?: JSX.Element | Element | JSX.Element[] | Element[];
}

export let Container = styled.div({
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'row',
});

let Main = styled.main({
  width: '100%',
  height: '100%',
  background: '#f1f4f8',
});

export default function AppLayout({ children, title }: AppLayoutProps) {
  return (
    <>
      <Head>
        <title>Sirius Future | {title}</title>
        <meta name="keywords" content="Sirius Future" />
        <meta name="description" content="Test tusk" />
        <meta charSet="utf-8" />
      </Head>
      <Container>
        <AsideMenu title={title} />
        <Main>{children}</Main>
      </Container>
    </>
  );
}
