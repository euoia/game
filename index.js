'use strict';
const AI = require('./AI');
const Avatar = require('./Avatar');
const Battle = require('./Battle');
const _ = require('lodash');
const skills = require('./skills');

const ai1Avatar = new Avatar(_(skills).sampleSize(3).map('name').value(), _.random(5), 'Bobba');
const ai1 = new AI([ai1Avatar], 'Bob');
ai1.pickWeights();
ai1.drawSkills();

const ai2Avatar = new Avatar(_(skills).sampleSize(3).map('name').value(), _.random(5), 'Jeffa');
const ai2 = new AI([ai2Avatar], 'Jeff');
ai2.pickWeights();
ai2.drawSkills();

const b = new Battle(ai1, ai2);
b.start();

for (let i in _.range(20)) {
  b.turn();
}
