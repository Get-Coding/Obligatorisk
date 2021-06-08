import Controller from './controller.js';

const ChallengerView = {
	start() {
		this.ViewContainer = document.getElementById('ViewContainer');
		this.ViewContainer.innerHTML = '';
		this.drawScreen();
	},

	drawScreen() {
		let currentView = `
			<div class="action-box">
				<div class="display">
					<textarea id="TextView" cols="30" rows="10" /></textarea> 
				</div>

				<button id="attk_btn">Attack</button>
				<button id="run_btn">Next Challenger</button>
                Health: <input id="hp_bar"></input> 
		
			</div>`;

		this.ViewContainer.innerHTML = currentView;
		this.TextView = document.getElementById('TextView');

		this.AttackAction = document.getElementById('attk_btn');
		this.NextAction = document.getElementById('run_btn');

		this.AttackAction.addEventListener('click', this.Attack);
		this.NextAction.addEventListener('click', this.Next);
	},

	// Dette skal egentlig være mulig å gjøre dette uten å refferere til
	// Controller her. Med andre ord "binde" funksjonene utenfor selve View-objectet
	Attack() {
		return Controller.Attack();
	}, 

	Next() {
		return Controller.Next();
	},

	addText(newlinetext) {
		this.TextView.value += '\n' + newlinetext + '\n';
		this.TextView.scrollTop = this.TextView.scrollHeight;
	},

	clearScreen() {
		this.TextView.value = '';
	}
};

export default ChallengerView;
