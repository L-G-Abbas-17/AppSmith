export default {
	LoginonClick() {
		if(Email.text === "Nova" && Password.text === "Hash8labs$$25") {
			// set login true + expiry timestamp
			storeValue("isLoggedIn", true);
			navigateTo('Dashboard');
		} else {
			showAlert("Invalid User Name or Password", "error");
		}





	}
}
