/* import ChallengerView from './view.js'; */
import Model from './model.js';

const Controller = {
	CurrentChallengerIndex : 0,

	start() {
		//Tegn vår "view"
		ChallengerView.start();

		//set neste utfordrer til første ellement på listen
		Model.CurrentChallenger = Model.Challengers[this.CurrentChallengerIndex];
	},

	IntroduceChallenger() {
		if (Model.CurrentChallenger != null) {
			ChallengerView.clearScreen();
			ChallengerView.addText('The next challenger is: ');
			ChallengerView.addText(Model.CurrentChallenger.name);
			ChallengerView.addText(Model.CurrentChallenger.warcry);
		}
	},

	CheckHealth() {
		if (Model.CurrentChallenger.health > 0) {
			ChallengerView.addText(
				'The challenger has: ' + Model.CurrentChallenger.health + ' hp left'
			);
		} else {
			ChallengerView.clearScreen();
			ChallengerView.addText(Model.CurrentChallenger.name + ' has been defeated!');
		}
	},

	Attack() {
		Model.currentAttack = Math.random() * 13 + 1;
		Model.currentAttack = Math.floor(Model.currentAttack);

		ChallengerView.addText(
			'The player attacked ' +
				Model.CurrentChallenger.name +
				' dealing ' +
				Model.currentAttack +
				' damage.'
		);

		if (Model.CurrentChallenger.health > 0)
			Model.CurrentChallenger.health -= Model.currentAttack;

		this.CheckHealth();
	},

	Next() {
		if (Model.CurrentChallenger.health <= 0) {
			if (Model.Challengers.length - 1 > this.CurrentChallengerIndex) {
				this.CurrentChallengerIndex++;
				Model.CurrentChallenger = Model.Challengers[this.CurrentChallengerIndex];
				this.IntroduceChallenger();
			} else {
				ChallengerView.addText('All challengers have been defeated! Nice!');
			}
		} else {
			ChallengerView.addText(
				'Cannot move forward until you have defeated ' +
					Model.CurrentChallenger.name
			);
		}
	}
};
export default Controller;
