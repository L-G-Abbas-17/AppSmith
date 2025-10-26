export default {
    checkLogin(email, password) {
        if(email === "nova" && password === "4321") {
            return { success: true };
        } else {
            return { success: false };
        }
    }
}
