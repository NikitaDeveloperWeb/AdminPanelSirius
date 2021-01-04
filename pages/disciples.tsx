import React from 'react';
import Header from '../components/Header';
import AppLayout from '../layout/AppLayout';
import styled from '@emotion/styled';
import Graph from '../components/Graph';

let GraphWrapper = styled.div({
  display: 'flex',
  background: 'inherit',
});

function disciples() {
  return (
    <AppLayout title="Учащиеся">
      <Header />
      <GraphWrapper>
        <Graph
          revenue={19000}
          statistic={true}
          statisticDatavalue={5}
          logoPath="/../public/yandex.png"
        />
        <Graph
          revenue={19000}
          statistic={false}
          statisticDatavalue={5}
          logoPath="/../public/paypal.png"
        />
      </GraphWrapper>
    </AppLayout>
  );
}

export default disciples;
