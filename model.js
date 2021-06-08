const Model = {
    currentAttack : Math.random() * 13 + 1,


	CurrentChallenger : null,

	Challengers       : [
		{
			name    : 'Peter the master',
			warcry  : 'I am peter!',
			health  : 100,
			attack  : 10,
			defence : 10,
			luck    : 2
		},
		{
			name    : 'Evan Evergreen',
			warcry  : 'I will grow into your brain!',
			health  : 100,
			attack  : 15,
			defence : 3,
			luck    : 10
		},
		{
			name    : 'Ohanraho The Elven Wench',
			warcry  : "I'd love to make stew! ... of you ...",
			health  : 50,
			attack  : 15,
			defence : 3,
			luck    : 10
		}
	]
};


export default Model;
