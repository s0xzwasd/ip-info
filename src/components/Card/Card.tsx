import React from 'react';
import Description from '../Description/Description';
import CardWrapper from '../CardWrapper/CardWrapper';
import Spinner from '../Spinner/Spinner';

type Props = {
  className?: string;
  description?: string;
  data: React.ReactElement | string;
  large?: boolean;
};

const Card: React.FC<Props> = ({
  className, description, data, large,
}) => (
  <section className={className}>
    <Description>{description!}</Description>
    <CardWrapper large={large}>{data || <Spinner />}</CardWrapper>
  </section>
);

export default Card;
