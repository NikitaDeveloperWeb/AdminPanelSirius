import React from 'react';
import styled from '@emotion/styled';
import Logo from './Logo';
import Link from 'next/link';
import Image from 'next/image';
let ListLinks = [
  {
    icon: '/../public/calendary.png',
    text: 'Занятия',
    path: '/',
  },
  {
    icon: '/../public/user.png',
    text: 'Учащиеся',
    path: '/',
  },
  {
    icon: '/../public/book.png',
    text: 'Тренеры',
    path: '/',
  },
  {
    icon: '/../public/ruble.png',
    text: 'Финансы',
    path: '/',
  },
  {
    icon: '/../public/ticet.png',
    text: 'Абонименты',
    path: '/',
  },
  {
    icon: '/../public/flag.png',
    text: 'Доступ в CRM',
    path: '/',
  },
  {
    icon: '/../public/email.png',
    text: 'Рассылки',
    path: '/',
  },
  {
    icon: '/../public/bar.png',
    text: 'Отчеты',
    path: '/',
  },
  {
    icon: '/../public/settings.png',
    text: 'Настройки',
    path: '/',
  },
];

let Aside = styled.aside({
  width: '210px',
  height: '100%',
  background: '#fff',
});
let LinkList = styled.ul({ marginTop: 20 });
let SingleLink = styled.li({
  width: '100%',
  padding: '17px 0px 17px 30px',
  display: 'flex',
  justifyContent: '',
  alignItems: 'center',
});
let A = styled.a({
  fontsize: 13,
  color: 'rgba(0, 0, 0, 0.5)',
  position: 'relative',
  marginLeft: 13,
});
function AsideMenu() {
  return (
    <Aside>
      <Logo />
      <LinkList>
        {ListLinks.map((link) => (
          <SingleLink>
            <Image src={link.icon} alt={link.text} width={15} height={15} />
            <Link href={link.path}>
              <A>{link.text}</A>
            </Link>
          </SingleLink>
        ))}
      </LinkList>
    </Aside>
  );
}

export default AsideMenu;
