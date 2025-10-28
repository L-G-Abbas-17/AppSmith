export default {
	
	checkTimeExpOrLogedin () {
		//	write code here
		//	this.myVar1 = [1,2,3]
		
	const isLoggedIn = appsmith.store.isLoggedIn;
	const loginTime = appsmith.store.loginTime;
	const role = appsmith.store.role;

	if (!isLoggedIn || !loginTime) {
		navigateTo("LoginPage");
	} else {
		const now = Date.now();
		const hours = (now - loginTime) / (1000 * 60 * 60);
		
		if (hours > 0.033) {
			showAlert("⏰ Session expired. Please log in again.", "warning");
			removeValue("isLoggedIn");
			removeValue("loggedUser");
			removeValue("loginTime");
			removeValue("role");
			navigateTo("Login");
		}
	}


	}
	
}