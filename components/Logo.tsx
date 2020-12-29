import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

let Block = styled.div({
  width: '100%',
  padding: '30px 45px 30px 45px',
  background: 'inherit',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'center',
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
});

let ImageWrapper = styled.div({ marginLeft: 11, position: 'relative' });

function Logo() {
  return (
    <Block>
      <ImageWrapper>
        <Image src="/../public/logo.png" alt="Logo" width={130} height={79} />
      </ImageWrapper>
      <ImageWrapper>
        <Image src="/../public/iconsHide.png" alt="Logo" width={25} height={25} />
      </ImageWrapper>
    </Block>
  );
}

export default Logo;
