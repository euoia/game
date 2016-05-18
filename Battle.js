'use strict';
const _ = require('lodash');
const skills = require('./skills');
const constants = require('./constants');

module.exports = class Battle {
  constructor (player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.nextAvatarIdx = 0;
  }

  start () {
    this.player1.reset();
    this.player2.reset();

    const p1Avatars = _.clone(this.player1.avatars);
    const p2Avatars = _.clone(this.player2.avatars);

    p1Avatars.forEach(a => {a.player = this.player1});
    p2Avatars.forEach(a => {a.player = this.player2});

    this.avatars = _([...p1Avatars, ...p2Avatars])
      .sortBy('speed')
      .reverse()
      .value();

    this.avatars.forEach(a => a.drawSkills());
  }

  turn () {
    const nextAvatar = this.avatars[this.nextAvatarIdx % this.avatars.length];
    const skillName = nextAvatar.player.pickSkill(nextAvatar);
    const skill = _.find(skills, {name: skillName});

    let possibleTargets;
    switch (skill.targets) {
      case constants.ENEMIES:
        possibleTargets = _.filter(this.avatars, a => a.player !== nextAvatar.player);
        break;
      case constants.ALLIES:
        possibleTargets = _.filter(this.avatars, a => a.player === nextAvatar.player);
        break;
      default:
          throw new Error(`Unhandled target type ${skill.targets}}`);
    }

    const target = nextAvatar.player.pickTarget(nextAvatar, possibleTargets);
    console.log(nextAvatar.player.name, 'picks', skillName, 'targetting', target.name);
    console.log(nextAvatar.name, ' hp:', nextAvatar.hp, ' mp:', nextAvatar.mp);
    console.log(target.name, ' hp:', target.hp, ' mp:', target.mp);
    this.applySkill(skill, nextAvatar, target);

    this.nextAvatarIdx += 1;
  }


  applySkill (skill, avatar, target) {
    skill.effect(avatar, target);
    avatar.mp -= skill.mp;
  }
}
