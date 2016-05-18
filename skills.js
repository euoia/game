'use strict';
const constants = require('./constants');

// Effect functions for each skill

//TODO: Real calculations for effects
var useSlice = function (user, target) {
    target.hp += -5 + (user.strength / 2);
}

var useSwipe = function (user, target) {
    target.hp += -3 + (user.strength / 2);
}

var useSmallHeal = function (user, target) {
    target.hp += 3 + (user.strength / 2);
}

var useBigHeal = function (user, target) {
    target.hp += 8 + (user.strength / 2);
}

var useCounterAttack = function (user, target) {
    target.hp -= 4 + (user.strength / 2);
}

var useArmour = function (user, target) {
    target.endurance += 1 + (user.strength / 2);
}

var useDrain = function (user, target) {
    target.strength -= 1 + (user.strength / 2);
}

module.exports = [
{
    name: 'slice',
    type: constants.ATTACKING,
    effect: useSlice,
    mp: 5,
    targets: constants.ENEMIES
  },
  {
    name: 'swipe',
    type: constants.ATTACKING,
    effect: useSwipe,
    mp: 3,
    targets: constants.ENEMIES
  },
  {
    name: 'small heal',
    type: constants.HEALING,
    effect: useSmallHeal,
    mp: 2,
    targets: constants.ALLIES
  },
  {
    name: 'big heal',
    type: constants.HEALING,
    mp: 5,
    effect: useBigHeal,
    targets: constants.ALLIES
  },
  {
    name: 'counter attack',
    type: constants.COUNTER,
    mp: 4,
    effect: useCounterAttack,
    targets: constants.ENEMIES
  },
  {
    name: 'armour',
    type: constants.BUF,
    mp: 2,
    effect: useArmour,
    targets: constants.ALLIES
  },
  {
    name: 'drain',
    type: constants.DEBUF,
    mp: 4,
    effect: useDrain,
    targets: constants.ENEMIES
  }
];
