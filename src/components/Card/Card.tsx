import React from 'react';
import Description from '../Description/Description';
import CardWrapper from '../CardWrapper/CardWrapper';
import Spinner from '../Spinner/Spinner';

type Props = {
  description: string;
  data: React.ReactElement | string;
};

const Card: React.FC<Props> = ({ description, data }) => (
  <section>
    <Description>{description}</Description>
    <CardWrapper>{data || <Spinner />}</CardWrapper>
  </section>
);

export default Card;
