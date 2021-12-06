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
      &nbsp;({count.toString()})
    </p>
  );
}

Vote.defaultProps = {
  max: 10,
};
