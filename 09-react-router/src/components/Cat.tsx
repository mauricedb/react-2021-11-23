import { ReactElement } from 'react';
import imageSource from './cat.jpg';

export function Cat(): ReactElement {
  return (
    <div>
      <h2>A cute cat</h2>

      <img src={imageSource} alt="A cute cat" width="800" />
    </div>
  );
}
