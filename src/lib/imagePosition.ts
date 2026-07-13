import type { ImagePosition } from '../data/coaching';

const positionClasses: Record<ImagePosition, string> = {
  top: 'img-cover-top',
  face: 'img-cover-face',
  center: 'object-cover object-center',
  'bottom-right': 'img-cover-bottom-right',
};

export function imagePositionClass(position: ImagePosition = 'center'): string {
  return positionClasses[position];
}
