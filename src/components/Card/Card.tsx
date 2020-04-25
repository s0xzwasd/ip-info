import React from 'react';
import Description from '../Description/Description';
import CardWrapper from '../CardWrapper/CardWrapper';

type Props = {
  description: string;
  data: JSX.Element | string;
};

const Card: React.FC<Props> = ({ description, data }) => (
  <section>
    <Description>{description}</Description>
    <CardWrapper>{data}</CardWrapper>
  </section>
);

export default Card;
