export default {
	intervalId: null,

	startAutoRefresh() {
		this.stopAutoRefresh();
		this.intervalId = setInterval(() => {
			// AllVehicleList.run();
			// dashboard.run();
			// geofencelist.run();
			// listUsers.run();
			mapinfo.run();
			// speeding.run();
			// stop.run();
			// trip.run();
			// vehiclestatus.run();
		}, 3000);
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

