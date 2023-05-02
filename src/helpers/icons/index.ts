import { ReactComponent as Delete } from './delete.svg';
import { ReactComponent as Female } from './female.svg';
import { ReactComponent as Male } from './male.svg';
import { ReactComponent as Plus } from './plus.svg';
import { ReactComponent as NoPetSvg } from './noPetImage.svg';

interface IIcons {
  [key: string]: React.ComponentType<any>;
}

export const SVG: IIcons = {
  Delete,
  Female,
  Male,
  Plus,
  NoPetSvg,
};
