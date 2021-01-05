import React from 'react';
import Header from '../components/Header';
import AppLayout from '../layout/AppLayout';
import styled from '@emotion/styled';
import Graph from '../components/Graph';
import InFoBlock from '../components/InFoBlock';
import { bookTwo, edit, ruble, ticcet, transaction, users, wallet } from '../components/icons';

let GraphWrapper = styled.div({
  display: 'flex',
  background: 'inherit',
  justifyContent: 'space-between',
});

let WrapperInfoBlocks = styled.div({
  background: 'inherit',
  padding: '20px 30px 20px 30px',

  display: 'flex',
});
let WrapperMiniIbfoBlocks = styled.div({
  background: 'inherit',
  marginLeft: 20,
  display: 'flex',
  flexWrap: 'wrap',
});

const InfoPlus = [
  {
    title: 'За последнюю неделю',
    information: '25',
  },
  {
    title: 'Без абонемента',
    information: '150',
  },
  {
    title: 'Неактивные',
    information: '25',
  },
  {
    title: 'Добавлено за день',
    information: '50',
  },
];

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
          revenue={11000}
          statistic={false}
          statisticDatavalue={5}
          logoPath="/../public/paypal.png"
        />
      </GraphWrapper>
      <WrapperInfoBlocks>
        <InFoBlock
          title="Колличество учеников"
          information="250"
          icons={users}
          infoPlus={true}
          body={InfoPlus}
        />
        <WrapperMiniIbfoBlocks>
          <InFoBlock title="Должников" information="12(1850,5руб)" icons={ruble} infoPlus={false} />
          <InFoBlock
            title="К оплате сегодня"
            information="121"
            icons={transaction}
            infoPlus={false}
          />
          <InFoBlock title="Без абонимента>" information="30" icons={ticcet} infoPlus={false} />
          <InFoBlock title="К оплате завтра" information="32" icons={wallet} infoPlus={false} />
          <InFoBlock
            title="Колличество тренеров"
            information="250"
            icons={bookTwo}
            infoPlus={false}
          />
          <InFoBlock
            title="Получите выписку по зарплате тренеров"
            icons={edit}
            infoPlus={false}
            active={true}
          />
        </WrapperMiniIbfoBlocks>
      </WrapperInfoBlocks>
    </AppLayout>
  );
}

export default disciples;
