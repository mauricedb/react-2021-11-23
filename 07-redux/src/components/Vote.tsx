interface Props {
  average: number;
  count: number;
  max: number;
}

export function Vote({ average, count, max }: Props) {
  return (
    <p>
      Votes:&nbsp;
      {'★'.repeat(average).padEnd(max, '☆')}
      &nbsp;({count.toLocaleString()})
    </p>
  );
}

Vote.defaultProps = {
  max: 10,
};
