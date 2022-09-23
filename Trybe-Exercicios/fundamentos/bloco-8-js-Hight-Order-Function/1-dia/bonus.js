
//Bonus Parte 1
const mage = {
	healthPoints: 130,
	intelligence: 45,
	mana: 125,
	damage: undefined,
  };
  
  const warrior = {
	healthPoints: 200,
	strength: 30,
	weaponDmg: 2,
	damage: undefined,
  };
  
  const dragon = {
	healthPoints: 350,
	strength: 50,
	damage: undefined,
  };
// TENTATIVA NO DIA 25 DE JUNHO DE 2022,MAS MEU CODIGO FICOU MAIS TOP A PARTE1
//   const battleMembers = { mage, warrior, dragon };
//   const generatorDamage = (min,max) =>{
// 	  min = Math.ceil(min);
// 	  max = Math.floor(max);
// 	  return  Math.floor(Math.random() * (max - min)) + min;
//   }
//   let damageDragon = () => generatorDamage(15,50);
//   let damageWarrior = () => generatorDamage(30,60);
//   let damageMage = (attack) =>{
// if(attack === true){
// 	let damageMages = (generatorDamage(45,90));
// 	mage.mana -= 15;
// 	if(mage.mana <= 15){
// 		return 'Nao possui mana Suficiente';
// 	}
//   }
// };
// //Parte 2
// const gameActions = (damageDragon,damageWarrior, damageMage) => {
	
//   };
const dragonAttack = (dragon) => {
	const minDmg = 15;
	const dragonDmg = Math.floor((Math.random() * (dragon.strength - minDmg + 1) + minDmg));
	return dragonDmg;
  };
  const warriorAttack = (warrior) => {
	const minDmg = warrior.strength;
	const maxDmg = minDmg * warrior.weaponDmg;
	const warriorDamage = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
	return warriorDamage;
  };
  const mageAttack = (mage) => {
	const mageMana = mage.mana;
	const minDmg = mage.intelligence;
	const maxDmg = minDmg * 2;
	const turnStats = {
	  manaSpent: 0,
	  damageDealt: 'Not enough mana...',
	};
  
	if (mageMana > 15) {
	  const mageDamage = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
	  turnStats.manaSpent = 15;
	  turnStats.damageDealt = mageDamage;
	  return turnStats;
	}
	return turnStats;
  };
  const gameActions = {
	warriorTurn: (warriorAttack) => {
	  const warriorDamage = warriorAttack(warrior);
	  warrior.damage = warriorDamage;
	  dragon.healthPoints -= warriorDamage;
	},
	mageTurn: (mageAttack) =>{
		const mageTurnStats = mageAttack(mage);
		mageDamage = mageTurnStats.damageDealt;
		mage.damage = mageDamage;
		mage.mana -= mageTurnStats.manaSpent;
		dragon.healthPoints -= mageAttack;

	},
	dragonTurn: (dragonAttack) => {
		const dragonDamage = dragonAttack(dragon);
		dragon.damage = dragonDamage;
		mage.healthPoints -= dragonDamage;
		warrior.healthPoints -= dragonDamage;
  },
  turnResults: () => battleMembers,
};
  
  gameActions.warriorTurn(warriorAttack);
  gameActions.mageTurn(mageAttack);
  gameActions.dragonTurn(dragonAttack);
  console.log(gameActions.turnResults());