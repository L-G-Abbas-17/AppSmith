export default {
	lastLocation: "",
	start() {
		// ✅ Run every 5 seconds
		setInterval(() => {
			vehicleinfo.run(() => {
				const loc = vehicleinfo.data[0]?.GeoFenceName || "Location Not Found";
				console.log("Current:", loc, "Previous:", this.lastLocation);

				// ✅ Notification logic
				if (loc === "TEC" && loc !== this.lastLocation) {
					showAlert("🚗 Vehicle entered TEC Zone!", "success");
					notification.setPlaying(true);
				}
				// ✅ Update last location
				this.lastLocation = loc;
			});
		}, 5000);
	}
}
