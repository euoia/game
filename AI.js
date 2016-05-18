'use strict';
const _ = require('lodash');

module.exports = class AI {
  constructor (avatars, name) {
    this.name = name;
    this.avatars = avatars;
  }

  /**
   * Pick weights for all avatars.
   */
  pickWeights () {
    this.avatars.forEach(a => a.skills.forEach(s => a.setWeight(s, _.random(40))));
  }

  drawSkills () {
    this.avatars.forEach(a => a.drawSkills());
  }

  reset () {
    this.avatars.forEach(a => a.reset());
  }

  pickSkill (avatar) {
    return _.sample(avatar.skills);
  }

  pickTarget (avatar, targets) {
    return _.sample(targets);
  }
}
