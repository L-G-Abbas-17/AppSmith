export default {
	LoginonClick() {
		const users = All_user_list.data; // from API
		const username = Email.text;
		const password = Password.text;

		// find user from API data
		const foundUser = users.find(
			u => u.userName === username && u.password === password
		);

		if (!foundUser) {
			showAlert("❌ Invalid User Name or Password", "error");
			return;
		}

		// login success
		storeValue("isLoggedIn", true);
		storeValue("loggedUser", foundUser.userName);

		// navigate based on role
		if (foundUser.role === "admin") {
			showAlert(`Welcome Admin ${foundUser.userName}!`, "success");
			navigateTo('AdminPage');
		} else {
			showAlert(`Welcome ${foundUser.userName}!`, "success");
			navigateTo('UserPage');
		}
	}
}
