import React from 'react';
import styled from '@emotion/styled';
import { search } from './icons';

interface SearchInputProps {
  type: string;
  placeholder: string;
}

let Input = styled.input({
  border: 'none',
  position: 'relative',
  marginLeft: 10,
  width: 400,
  height: 30,
  '&:focus': { outline: 0, outlineOffset: 0 },
  fontSize: 12,
});
let InputWrapper = styled.div({
  width: 500,
  height: 43,
  display: 'flex',
  flexDirection: 'row',
  padding: '13px 18px 13px 18px',
  borderRadius: 67,
  alignItems: 'center',
});
let IconWrapper = styled.div({
  cursor: 'pointer',
});

function SearchField({ type, placeholder }: SearchInputProps) {
  return (
    <InputWrapper>
      <IconWrapper>{search}</IconWrapper>
      <Input type={type} placeholder={placeholder}></Input>
    </InputWrapper>
  );
}

export default SearchField;
