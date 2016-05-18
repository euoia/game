'use strict';
const weightedRandom = require('weighted-random');
const _ = require('lodash');

module.exports = class Avatar {
  constructor (skills, strength, endurance, speed, name) {
    this.name = name;

    this.skills = skills;
    this.skillWeights = [];
    
    this.maxHp = 20;
    this.hp = this.maxHp;
    
    this.maxMp = 20;
    this.mp = this.maxMp;
      
    // Stats that modify skill effect calculations
    this.strength = strength;
    this.endurance = endurance;
    this.speed = speed;
      
    // Number of skills that are drawn per turn.
    this.drawQty = 5; 
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
    for (let i of _.range(this.drawQty)) {
      const weights = _.map(this.skillWeights, 'weight');
      const skillIdx = weightedRandom(weights);
      const skill = this.skillWeights[skillIdx].skill;
      this.draw.push(skill);
    }
  }
}
