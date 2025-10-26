export default {
	LoginonClick() {
		if(Email.text === "nova" && Password.text === "4321") {
			// set login true + expiry timestamp
			let expiryTime = new Date().getTime() + 2 * 60 * 1000; // 2 mins
			storeValue("isLoggedIn", true);
			storeValue("loginExpiry", expiryTime);
			navigateTo('Dashboard');
		} else {
			showAlert("Invalid credentials", "error");
		}





	}
}
