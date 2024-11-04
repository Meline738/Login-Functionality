const userlogin = require('./login.user.locators');
// const {accountData} = require("../resources/StaticData");

async function login(page, email, password) {
    await userlogin(page).userSignUp.click();
    await userlogin(page).userEmailAddress.fill(email);
    await userlogin(page).userPassword.fill(password);
    await userlogin(page).userLogin.click();
    await userlogin(page). userLogOut.click();
}

module.exports = { login }