MyApp.Helper = {

	date: new Date(),

	now: function() {
		return this.date.getFullYear()  + "-" + (this.date.getMonth() + 1) + "-" + this.date.getDate() + " " + this.date.getHours() + ":" + this.date.getMinutes() + ":" + this.date.getSeconds();
	},
};