import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';

interface LinkElemProps {
  _id?: number;
  title: string;
  path: string;
  image: JSX.Element | Element | JSX.Element[] | Element[];
  location: string;
}

let SingleLink = styled.li({
  width: '100%',
  height: 45,
  padding: '17px 5px 17px 0px',
  display: 'flex',
  justifyContent: '',
  alignItems: 'center',
  background: '',
  cursor: 'pointer',
});
let A = styled.a({
  fontsize: 13,
  color: 'rgba(0, 0, 0, 0.5)',
  position: 'relative',
  marginLeft: 13,
});
let Line = styled.div({
  width: ' 3px',
  height: '45px',
  // background: '#fff',
  borderRadius: '6px 0px',
});

let WrapperLinks = styled.div({
  marginLeft: '30px',
  display: 'flex',
  alignItems: 'center',
});

let SvgWrapper = styled.div({
  display: 'flex',
});

function LinkElem({ title, path, image, location }: LinkElemProps) {
  return (
    <SingleLink className={location === title ? 'active' : ''}>
      <Line className={location === title ? 'active__line' : ''} />
      <WrapperLinks className={location === title ? 'wrapperLinks' : ''}>
        <SvgWrapper className={location === title ? 'svgWrapper' : ''}>{image}</SvgWrapper>
        <Link href={path}>
          <A style={location === title ? { color: 'rgba(0, 0, 0, 1)' } : {}}>{title}</A>
        </Link>
      </WrapperLinks>
    </SingleLink>
  );
}

export default LinkElem;
