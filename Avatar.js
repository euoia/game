'use strict';
const weightedRandom = require('weighted-random');
const _ = require('lodash');

module.exports = class Avatar {
  constructor (skills, speed, name) {
    this.skills = skills;
    this.speed = speed;
    this.skillWeights = [];
    this.maxHp = 20;
    this.hp = this.maxHp;
    this.maxMp = 20;
    this.mp = this.maxMp;
    this.name = name;
  }

  reset () {
    this.hp = this.maxHp;
    this.mp = this.maxMp;
  }

  setWeight (skill, weight) {
    this.skillWeights.push({ skill, weight });
  }

  drawSkills () {
    this.draw = [];
    for (let i of _.range(5)) {
      const weights = _.map(this.skillWeights, 'weight');
      const skillIdx = weightedRandom(weights);
      const skill = this.skillWeights[skillIdx].skill;
      this.draw.push(skill);
    }
  }
}
