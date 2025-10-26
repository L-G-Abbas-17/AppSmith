export default {
    LoginonClick() {
        // get the value from Email widget
        let email = Email.text;
				let password = Password.text;

        if(email === "nova" && password == "Hash8labs$$25") {
            // Success - navigate to Dashboard page
            navigateTo('DashBoard');  // 'Dashboard' is your page name in Appsmith
        } else {
            // Fail - show alert
            showAlert("Invalid User Name or Password", "error");
        }
    }
}
