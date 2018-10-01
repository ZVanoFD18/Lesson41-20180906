'use strict';
/**
 * Перечисления и константы, применимые к героям.
 **/
class HiroDefaults{
  constructor (){
    /**
     * Перечисление "Результат атаки".
     * @type {Object}
     **/
     this.AttackResult = {
        /**
         * Результат - герой победил.
         * @type {String}
         **/
        WIN: 'HIRO_WIN',
        LOSE: 'HIRO_LOSE',
        DRAW: 'HIRO_DRAW'
    };
    /**
     * Опция "Максимальное количество солдат".
     * @type {Number}
     **/
    this.MaxSoldiers = 100;
  }
}

/**
 * Класс "Герой". Прототипный стиль.
 * @type {Object}
 **/
class Hiro extends HiroDefaults{
  constructor (name){
    super();
    this.name = name;
    this.name = undefined;
    this.level = 1;
    this.battlesCount = 0;
    /**
     * @type {Array of Soldier}
     **/
    this.soldiers = [];
    this.recruitSoldiers();
  }

  getName () {
      return this.name;
  }
  getLevel () {
      return this.level;
  }
  getBattlesCount () {
      return this.battlesCount;
  }
  getSoldiersCount () {
      return this.soldiers.length;
  }
  getPower() {
      let result = this.soldiers.length * this.level;
      return result;
  }
  /**
   * Рекрутирует солдат для текущего героя.
   * @private
   **/
  recruitSoldiers () {
      let count = parseInt(Math.random() * this.MaxSoldiers);
      for (let i = 0; i <= count; i++) {
          let soldier = new Soldier();
          soldier.hiro = this;
          this.soldiers.push(soldier);
      }
  }
  /**
   * @private
   **/
  levelUp () {
      ++this.level;
  }
  /**
   * Выполняет действие "атака противника".
   * @public
   **/
  attack(enemy) {
      let myPower = this.getPower(),
          enemyPower = enemy.getPower();
      if (myPower > enemyPower) {
          this.setAttackResult(this.AttackResult.WIN);
          enemy.setAttackResult(this.AttackResult.LOSE);
      } else if (myPower < enemyPower) {
          this.setAttackResult(this.AttackResult.LOSE);
          enemy.setAttackResult(this.AttackResult.WIN);
      } else {
          this.setAttackResult(this.AttackResult.DRAW);
          enemy.setAttackResult(this.AttackResult.DRAW);
      }
  }
  /**
   * Обрадатывает результат сражения.
   * @public
   **/
  setAttackResult (attackResult) {
      ++this.battlesCount;
      switch (attackResult) {
          case this.AttackResult.WIN:
              this.levelUp();
              alert(this.getName() + '/Я победил :)');
              break;
          case this.AttackResult.LOSE:
              alert(this.getName() + '/Я проиграл :(');
              break;
          case this.AttackResult.DRAW:
              alert(this.getName() + '/Ничья. Давай еще раз ;-)');
              break;
          default:
              throw new Error('Не поддерживаемый оезультат соревнования');
      }
  }
};
