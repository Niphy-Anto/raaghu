import { RdsPalette } from './common-interfaces';
/**
 * Palette Options
 *
 * Colours can be defined in additional stylesheets or using attributes.
 */
export class RdsPaletteOptions {
  popup?: RdsPalette = { background: '#000000', text: '#fff', link: '#fff' };

  button?: RdsPalette = { background: 'transparent', border: '#f8e71c', text: '#f8e71c' };

  highlight?: RdsPalette = { background: '#f8e71c', border: '#f8e71c', text: '#000000' };

}
