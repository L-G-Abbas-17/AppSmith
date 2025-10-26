export default {
    LoginonClick() {
        let email = Email.text;
        let password = Password.text;

        if(email === "Nova" && password === "Hash8labs$$25") {
            storeValue("isLoggedIn", true);   // store a global variable
            navigateTo('DashBoard');          // move to dashboard
        } else {
            showAlert("Invalid credentials", "error");
        }
    }
}
