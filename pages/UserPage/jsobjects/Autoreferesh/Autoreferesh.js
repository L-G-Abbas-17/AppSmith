export default {
	intervalId: null,

	startAutoRefresh() {
		this.stopAutoRefresh();
		this.intervalId = setInterval(() => {
			vehicleinfo.run();
			selectVehicle.run();

		}, 9000);
	},

	stopAutoRefresh() {
		if (this.intervalId) clearInterval(this.intervalId);
		this.intervalId = null;
	},

	// 👇 this part auto runs when JS object loads
	init() {
		this.startAutoRefresh();
	}
};

// Immediately call init on load
AutoRefreshJS.init();

