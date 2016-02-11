import skills from './skills.js';
import Avatar from './Avatar.js';
import AI from './AI.js';
import _ from 'lodash';
import Battle from './Battle.js';

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
