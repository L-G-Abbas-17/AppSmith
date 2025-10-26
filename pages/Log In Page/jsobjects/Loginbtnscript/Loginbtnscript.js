export default {
	LoginonClick() {
		if(Email.text === "Nova" && Password.text === "Hash8labs$$25") {
			storeValue("isLoggedIn", true);  // ✅ global variable
			navigateTo('DashBoard');
		} 
		else {
			showAlert("Invalid credentials", "error");
		}

	}
}
