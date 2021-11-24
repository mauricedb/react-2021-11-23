import React, { ReactElement } from 'react';

interface Props {
  greeting: string;
}

export default function HelloWorld({ greeting }: Props): ReactElement {
  return <div>Hello {greeting}!</div>;
}
