import React from 'react';
import styled from '@emotion/styled';

interface InfoBlockProps {
  title: string;
  information?: string;
  icons: JSX.Element | Element | JSX.Element[] | Element[];
  infoPlus: boolean;
  body?: {
    title: string;
    information: string;
  }[];
  active?: boolean;
}
let WrapperInfoBlock = styled.div({
  width: 300,
  padding: 20,

  position: 'relative',
  marginLeft: 20,
  marginTop: 20,
});
let HeaderInfoBlock = styled.div({
  display: 'flex',
  alignItems: 'center',
  background: 'inherit',
});
let IconsInfoBlock = styled.div({ background: 'inherit' });
let WrapperHeaderInfoBlock = styled.div({
  marginLeft: 17,
  background: 'inherit',
});
let TitleInfoBlock = styled.p({
  color: 'rgba(0, 0, 0, 0.5)',
  background: 'inherit',
});
let InformationInfoBlock = styled.div({ fontSize: '26px', background: 'inherit' });
let BodyInfoBlock = styled.ul({
  marginTop: 17,
});
let BodyInfoBlockInformation = styled.li({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 10,
  position: 'relative',
  flexDirection: 'row',
  alignItems: 'center',
});
let BodyInfoBlockInformationTitle = styled.div({
  color: 'rgba(0, 0, 0, 0.5)',
});
let BodyInfoBlockInformationQuerty = styled.div({});
let BodyInfoBlockInformationLine = styled.div({
  height: 1,
});

function InFoBlock({ title, infoPlus, information, icons, body, active }: InfoBlockProps) {
  return (
    <WrapperInfoBlock className={active ? 'activeInfoblock' : ''}>
      <HeaderInfoBlock>
        <IconsInfoBlock className="iconsInfoBlock">{icons}</IconsInfoBlock>
        <WrapperHeaderInfoBlock>
          <TitleInfoBlock>{title}:</TitleInfoBlock>
          <InformationInfoBlock>{information}</InformationInfoBlock>
        </WrapperHeaderInfoBlock>
      </HeaderInfoBlock>
      {infoPlus && (
        <BodyInfoBlock>
          {body &&
            body.map((obj, index) => (
              <BodyInfoBlockInformation key={`${obj}+${index}`}>
                <BodyInfoBlockInformationTitle>{obj.title}</BodyInfoBlockInformationTitle>
                <BodyInfoBlockInformationLine></BodyInfoBlockInformationLine>
                <BodyInfoBlockInformationQuerty>{obj.information}</BodyInfoBlockInformationQuerty>
              </BodyInfoBlockInformation>
            ))}
        </BodyInfoBlock>
      )}
    </WrapperInfoBlock>
  );
}

export default InFoBlock;
