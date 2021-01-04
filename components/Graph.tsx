import React from 'react';
import styled from '@emotion/styled';
import SortDateBlock from './SortDateBlock';
import { down, up } from './icons';
import Image from 'next/image';

interface GraphProps {
  revenue: number;
  statistic: boolean;
  statisticDatavalue: number;
  logoPath: string;
}

let GraphSection = styled.section({
  background: 'rgba(241, 244, 248, 1)',
  paddingLeft: 30,
});
let DateIntervalPanel = styled.div({
  background: 'inherit',
  display: 'flex',
});

let DateType = styled.div({
  background: 'inherit',
  borderRadius: 4,
  cursor: 'pointer',
  color: 'rgba(0, 0, 0, 0.5)',
});

const ListDateBlocks = [
  { id: 1, value: 'День' },
  { id: 2, value: 'Неделя' },
  { id: 3, value: 'Месяц' },
];

let GraphView = styled.div({
  width: 575,
  height: 315,
  padding: 20,
  marginTop: 10,
  marginLeft: 10,
});

let GraphHeader = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
});
let Revenue = styled.div({});
let RevenueTitle = styled.p({ color: 'rgba(0, 0, 0, 0.5) ', fontSize: 13 });
let RevenueSum = styled.p({
  fontSize: 26,
});
let RevenueData = styled.div({ display: 'flex', alignItems: 'center' });
let StatisticWrapper = styled.div({ display: 'flex', alignItems: 'center', marginLeft: 12 });
let StatisticData = styled.p({
  marginLeft: 5,
});
let Logo = styled.div({});
function Graph({ revenue, statistic, statisticDatavalue, logoPath }: GraphProps) {
  const [activeItem, setActiveItem] = React.useState(0);

  const selectItemHandler = (index: number) => {
    setActiveItem(index);
    console.log(index, activeItem);
  };
  return (
    <GraphSection>
      <DateIntervalPanel>
        {ListDateBlocks.map((obj, index) => (
          <DateType
            key={`${obj}+${index}`}
            onClick={() => {
              selectItemHandler(index);
            }}>
            <SortDateBlock
              _id={obj.id}
              value={obj.value}
              className={activeItem === index ? 'activeSortDate' : ''}></SortDateBlock>
          </DateType>
        ))}
      </DateIntervalPanel>
      <GraphView>
        <GraphHeader>
          <Revenue>
            <RevenueTitle>Выручка:</RevenueTitle>
            <RevenueData>
              <RevenueSum>{revenue} руб.</RevenueSum>
              <StatisticWrapper className={statistic ? 'up' : 'down'}>
                {(statistic && up) || down}
                <StatisticData>{statisticDatavalue}%</StatisticData>
              </StatisticWrapper>
            </RevenueData>
          </Revenue>
          <Logo>
            <Image src={logoPath} alt="Logo" width={120} height={32} />
          </Logo>
        </GraphHeader>
      </GraphView>
    </GraphSection>
  );
}

export default Graph;
