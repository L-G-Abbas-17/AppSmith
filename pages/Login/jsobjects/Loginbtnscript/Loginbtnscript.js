export default {
	LoginonClick() {
		if(Email.text === "Nova" && Password.text === "Hash8labs$$25") {
			// set login true + expiry timestamp
			let expiryTime = new Date().getTime() + 5 * 60 * 60 * 1000; // 5 hours in ms
			storeValue("isLoggedIn", true);
			storeValue("loginExpiry", expiryTime);
			navigateTo('Dashboard');
		} else {
			showAlert("Invalid User Name or Password", "error");
		}





	}
}
