import { ReactElement } from 'react';
import imageSource from './dog.jpg';

export function Dog(): ReactElement {
  return (
    <div>
      <h2>A cute dog</h2>

      <img src={imageSource} alt="A cute dog" width="800" />
    </div>
  );
}
