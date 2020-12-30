import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { hide } from './icons';

let Block = styled.div({
  width: '100%',
  padding: '15px 25px 15px 25px',
  background: 'inherit',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'center',
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
});

export let ImageWrapper = styled.div({ marginLeft: 11, position: 'relative' });

function Logo() {
  return (
    <Block>
      <ImageWrapper>
        <Image src="/../public/logo.png" alt="Logo" width={120} height={80} />
      </ImageWrapper>
      <ImageWrapper style={{ cursor: 'pointer' }}>{hide}</ImageWrapper>
    </Block>
  );
}

export default Logo;
