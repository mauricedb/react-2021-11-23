import { ReactElement } from 'react';
import { useParams } from 'react-router';
import imageSource from './cat.jpg';

export function Cat(): ReactElement {
  const params = useParams<'catName'>();
  const { catName } = params;

  return (
    <div>
      <h2>A cute cat {catName}</h2>

      <img src={imageSource} alt="A cute cat" width="800" />
    </div>
  );
}
