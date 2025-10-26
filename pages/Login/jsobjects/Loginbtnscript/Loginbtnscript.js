export default {
	LoginonClick() {
		if(Email.text === "nova" && Password.text === "4321") {
			navigateTo('Dashboard', {
				params: {
					user: "nova",
					loginTime: new Date().getTime()
				}
			});
		} else {
			showAlert("Invalid credentials", "error");
		}


	}
}
