export default {
	LoginonClick() {
		if(Email.text === "nova" && Password.text === "4321") {
			// set login true + expiry timestamp
			let expiryTime = new Date().getTime() + 5 * 60 * 60 * 1000; // 5 hours in ms
			storeValue("isLoggedIn", true);
			storeValue("loginExpiry", expiryTime);
			navigateTo('Dashboard');
		} else {
			showAlert("Invalid credentials", "error");
		}





	}
}
