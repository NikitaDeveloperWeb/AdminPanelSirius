import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { notification } from './icons';

interface UserPreviewProps {
  username: string;
  imagePath: string;
  notificationState: boolean;
}

let WrapperUserPreview = styled.div({
  background: 'inherit',
  display: 'flex',
  width: 240,
  justifyContent: 'space-between',
  alignItems: 'center',
});
let Line = styled.div({
  height: '100%',
  width: 1,
  background: 'rgba(0, 0, 0, 0.1)',
});
let WrapperNotification = styled.div({
  background: 'inherit',
  cursor: 'pointer',
});
let UsernameBlock = styled.p({ background: 'inherit', cursor: 'pointer' });
let AvatarBlock = styled.div({ background: 'inherit', cursor: 'pointer' });
let NitificationIndicator = styled.div({
  background: 'rgb(46,113,243,1)',
  width: 6,
  height: 6,
  borderRadius: 100,
  position: 'absolute',
  marginTop: -23,
  marginLeft: 9,
});

function UserPreview({ username, imagePath, notificationState }: UserPreviewProps) {
  return (
    <WrapperUserPreview>
      <WrapperNotification>
        {notification}
        {notificationState && <NitificationIndicator />}
      </WrapperNotification>
      <Line></Line>
      <UsernameBlock>{username}</UsernameBlock>
      <AvatarBlock className="avatarblock">
        <Image src={imagePath} alt="Logo" width={43} height={43} />
      </AvatarBlock>
    </WrapperUserPreview>
  );
}

export default UserPreview;
