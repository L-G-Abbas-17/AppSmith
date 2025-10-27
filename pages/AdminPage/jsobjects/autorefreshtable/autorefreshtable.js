export default {
  intervalId: null, // to store timer reference

  startAutoRefresh() {
    // stop old interval if running
    this.stopAutoRefresh();

    // start new auto refresh every 5 seconds
    this.intervalId = setInterval(() => {
      AllVehicleList.run();  // your API name here
    }, 5000); // 5000 = 5 seconds
  },

  stopAutoRefresh() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
};
