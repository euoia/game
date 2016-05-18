'use strict';
const constants = require('./constants');

module.exports = [
  {
    name: 'slice',
    type: constants.ATTACKING,
    mp: 5,
    hp: -5,
    targets: constants.ENEMIES
  },
  {
    name: 'swipe',
    type: constants.ATTACKING,
    mp: 3,
    hp: -3,
    targets: constants.ENEMIES
  },
  {
    name: 'small heal',
    type: constants.HEALING,
    mp: 2,
    hp: 2,
    targets: constants.ALLIES
  },
  {
    name: 'big heal',
    type: constants.HEALING,
    mp: 5,
    hp: 8,
    targets: constants.ALLIES
  },
  {
    name: 'counter attack',
    type: constants.COUNTER,
    mp: 4,
    hp: -4,
    targets: constants.ENEMIES
  },
  {
    name: 'armour',
    type: constants.BUF,
    mp: 2,
    def: 1,
    targets: constants.ALLIES
  },
  {
    name: 'drain',
    type: constants.DEBUF,
    mp: 4,
    att: 1,
    targets: constants.ENEMIES
  }
];
