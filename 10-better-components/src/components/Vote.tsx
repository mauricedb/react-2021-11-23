import PropsTypes from 'prop-types';
import { FC } from 'react';

interface Props {
  average: number;
  count: number;
  max: number;
}

export function Vote({ average, count, max }: Props) {
  return (
    <p>
      Votes:&nbsp;
      {'★'.repeat(Math.min(average, max)).padEnd(max, '☆')}
      &nbsp;({count.toLocaleString()})
    </p>
  );
}

Vote.propTypes = {
  count: PropsTypes.number.isRequired,
};

Vote.defaultProps = {
  max: 10,
};
