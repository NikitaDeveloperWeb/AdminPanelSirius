import React from 'react';
import styled from '@emotion/styled';
import document from 'next/document';

interface SortDateBlockProps {
  _id: number;
  value: string;
  key?: string;
  className?: string;
}

let Block = styled.div({
  background: 'inherit',
  marginLeft: 10,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  borderRadius: 4,
  padding: '14px 15px 14px 15px',
  cursor: 'pointer',
  color: 'rgba(0, 0, 0, 0.5)',
});

function SortDateBlock({ _id, value, key, className }: SortDateBlockProps) {
  return (
    <Block key={key} className={className}>
      {value}
    </Block>
  );
}

export default SortDateBlock;
