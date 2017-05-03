$(document).ready(function () {

	let url = "http://localhost:3000/Personage";

	let app = new Vue({ //Vue.js variable
		el: '#app',
		data: {
			personage: {
			},
			like: {
				type: Boolean
			},
			peopleLike: [],

			newPerson: {
				nom: "",
				prenom: "",
				noteBac: 0,
				age: 0,
				photo: "",
				birthday: "",
				noteBac: 0,
				sexe: true,
				ville: "",
				biographie: "",
				langue: ""
			},
			botDelete: false,
		},

		created: function () {
			// fonction (hook) qui se grefe dès la création de l'instance
			let url = "http://localhost:3000/Personage";

			// Requete en AJAX de typ)e GET derriere une URL
			this.$http.get(url).then(function (reponse) {
				app.personage = reponse.body; // body: corps de ma réponse
				console.log(app.personage);
			});

		},

		methods: {
			supprimer: function (person) {
				let position = this.personage.indexOf(person);
				this.personage.splice(position, 1);

			},

			funcLike: function (pers) {
				if (this.like) {
					this.peopleLike.push(pers.prenom);
					console.log(this.peopleLike);
				}
			},

			ajouter: function () {
				this.personage.push(this.newPerson);

				// post
				// POST /someUrl
				console.log(this.newPerson);
				this.$http.post('http://localhost:3000/Personage', {
					nom: this.newPerson.nom,
					prenom: this.newPerson.prenom, age: this.newPerson.age, noteBac: this.newPerson.noteBac, photo: this.newPerson.photo, ville: this.newPerson.ville, sexe: this.newPerson.sexe
				}).then(function (reponse) {
					console.log("deleted");
				});

			},// end ajouter

			deleteBla: function () {
				this.botDelete = true;
			},


		},//end methods

		computed: {

			filtrados: function () {
				console.log("bla")
				let arr = this.personage;
				if (this.botDelete === true) {
					arr = this.personage.filter(function (elt) {
						return elt.noteBac > 10;
					});
				}
				else {
					arr = this.personage;
				}
				console.log(arr);
				return arr;
			},


		}

	},//end computed

		watch: {


		}, // end watch
	});// let app

});//document