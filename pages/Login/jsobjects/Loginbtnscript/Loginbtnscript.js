export default {
	LoginonClick() {
		if(Email.text === "Nova" && Password.text === "Hash8labs$$25") {
			// set login true + expiry timestamp
			storeValue("isLoggedIn", true);
			navigateTo('AdminPage');
		} 
		else if(Email.text === "Mahesh" && Password.text === "1234"){
			storeValue("isLoggedIn", true);
			navigateTo('UserPage');
		}
		else {
			showAlert("Invalid User Name or Password", "error");
		}





	}
}
