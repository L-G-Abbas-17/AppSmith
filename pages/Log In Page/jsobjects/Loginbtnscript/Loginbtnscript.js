export default {
    LoginonClick() {
        // get the value from Email widget
        let email = Email.text;
				let password = Password.text;

        if(email === "nova" && password == "Hash8labs$$25") {
            // Success - navigate to Dashboard page
            navigateTo('Dashboard', { 
                params: { token: "secret123" }  // secret token pass panrom
            });
        } else {
            // Fail - show alert
            showAlert("Invalid User Name or Password", "error");
        }
    }
}
