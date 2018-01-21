import { SpriteInterface } from 'lib/model/sprite';
import Random from 'lib/helper/random';

export interface CollectionInterface {
  get(random: Random): SpriteInterface;
}

export default class Collection implements CollectionInterface {
  private sprites: SpriteInterface[];

  /**
   * @param sprites
   */
  constructor(sprites: SpriteInterface[]) {
    this.sprites = sprites;
  }

  /**
   * Returns a sprite
   *
   * @param random
   */
  get(random: Random): SpriteInterface {
    return null;
  }
}
