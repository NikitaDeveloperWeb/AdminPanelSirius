import React from 'react';
import Header from '../components/Header';
import AppLayout from '../layout/AppLayout';
import styled from '@emotion/styled';

let GraphWrapper = styled.div({});

function disciples() {
  return (
    <AppLayout title="Учащиеся">
      <Header />
      <GraphWrapper></GraphWrapper>
    </AppLayout>
  );
}

export default disciples;
