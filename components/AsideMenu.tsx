import React from 'react';
import styled from '@emotion/styled';
import LinkElem from './LinkElem';
import { bar, book, calendary, crm, email, finances, hide, setting, ticket, user } from './icons';
import Logo from './Logo';

let Aside = styled.aside({
  width: '210px',
  height: '100%',
  background: '#fff',
});

let LinkList = styled.ul({ marginTop: 20 });
function AsideMenu({ title }) {
  return (
    <Aside>
      <Logo />
      <LinkList>
        <LinkElem path="/" image={calendary} title="Занятия" location={title} />
        <LinkElem path="/disciples" image={user} title="Учащиеся" location={title} />
        <LinkElem path="/trainers" image={book} title="Тренеры" location={title} />
        <LinkElem path="/finances" image={finances} title="Финансы" location={title} />
        <LinkElem path="/subscriptions" image={ticket} title="Абонименты" location={title} />
        <LinkElem path="/crm" image={crm} title="Доступ в CRM" location={title} />
        <LinkElem path="/email" image={email} title="Рассылки" location={title} />
        <LinkElem path="/bar" image={bar} title="Отчеты" _id={8} location={title} />
        <LinkElem path="/settings" image={setting} title="Настройки" location={title} />
      </LinkList>
    </Aside>
  );
}

export default AsideMenu;
