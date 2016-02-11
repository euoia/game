export const ATTACKING='attacking';
export const HEALING='healing';
export const COUNTER='counter';
export const BUF='buf';
export const DEBUF='debuf';

export const ALLIES='allies';
export const ENEMIES='enemies';

export default [
  {
    name: 'slice',
    type: ATTACKING,
    mp: 5,
    hp: -5,
    targets: ENEMIES
  },
  {
    name: 'swipe',
    type: ATTACKING,
    mp: 3,
    hp: -3,
    targets: ENEMIES
  },
  {
    name: 'small heal',
    type: HEALING,
    mp: 2,
    hp: 2,
    targets: ALLIES
  },
  {
    name: 'big heal',
    type: HEALING,
    mp: 5,
    hp: 8,
    targets: ALLIES
  },
  {
    name: 'counter attack',
    type: COUNTER,
    mp: 4,
    hp: -4,
    targets: ENEMIES
  },
  {
    name: 'armour',
    type: BUF,
    mp: 2,
    def: 1,
    targets: ALLIES
  },
  {
    name: 'drain',
    type: DEBUF,
    mp: 4,
    att: 1,
    targets: ENEMIES
  }
];
