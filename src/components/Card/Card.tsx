import React from 'react';
import PropTypes from 'prop-types';
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

Card.propTypes = {
  description: PropTypes.string.isRequired,
  data: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
};

export default Card;
