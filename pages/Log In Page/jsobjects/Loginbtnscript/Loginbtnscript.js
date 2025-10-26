export default {
    LoginonClick() {
        if(Email.text === "nova" && Password.text === "4321") {
    			storeValue("isLoggedIn", true);  // ✅ global variable
    			navigateTo('DashBoard');
				} 
				else {
    			showAlert("Invalid credentials", "error");
				}

    }
}
