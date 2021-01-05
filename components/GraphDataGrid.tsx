import React, { PureComponent } from 'react';
import styled from '@emotion/styled';

const SummList = [5, 4, 3, 2, 1];
const Date = [23, 24, 25, 26, 27];
let SummData = styled.div({
  color: 'rgba(0, 0, 0, 0.5)',
});
let LineBlock = styled.li({
  marginTop: 20,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});
let Line = styled.div({
  background: 'rgba(0, 0, 0, 0.1)',
  width: '478px',
  height: 1,
  marginLeft: 15,
});

let DateList = styled.li({
  color: 'rgba(0, 0, 0, 0.5)',
  marginLeft: 40,
  position: 'relative',
});
let ListData = styled.ul({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
});
export default class GraphDataGrid extends PureComponent {
  render() {
    return (
      <ul>
        {SummList.map((obj, index) => (
          <LineBlock key={`${obj}+${index}`}>
            <SummData className="summ">{obj} тыс.</SummData>
            <Line></Line>
          </LineBlock>
        ))}
        <ListData>
          {Date.map((obj, index) => (
            <DateList key={`${obj}+${index}`}>{obj} сен.</DateList>
          ))}
        </ListData>
      </ul>
    );
  }
}
