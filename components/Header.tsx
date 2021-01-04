import React from 'react';
import styled from '@emotion/styled';
import SearchField from './SearchField';
import UserPreview from './UserPreview';

let HeaderWrapper = styled.header({
  width: '100%',
  padding: '30px 30px 30px 30px',
  background: 'inherit',
  display: 'flex',
  justifyContent: 'space-between',
});
function Header() {
  return (
    <HeaderWrapper>
      <SearchField type="text" placeholder="Поиск клиента" />
      <UserPreview
        username="Alexander Gerasimuk"
        imagePath="/../public/avatar.png"
        notificationState={true}
      />
    </HeaderWrapper>
  );
}

export default Header;
