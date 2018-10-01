'use strict';
/**
 * Класс "Солдат".  Прототипный стиль.
 * @type {Object}
 **/
class Soldier {
  constructor (hiro){
    this._hiro = hiro;
  }

  /**
   * @param {Hiro} hiro
   * @public
   **/
  set hiro(hiro) {
      if (undefined !== this.hiro) {
          alert('Мой герой "' + data.hiro.getName() + '"! Не стану дезертировать!');
          throw new Error('Герой уже привязан.');
      }
      this._hiro = hiro;
  }

  get hiro() {
    return this._hiro;
  }
};
