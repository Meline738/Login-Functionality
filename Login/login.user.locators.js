function userlogin(page) {
    return {
        userSignUp: page.locator('a[href="/login"]'),
        userEmailAddress: page.locator('input[data-qa="login-email"]'),
        userPassword: page.locator('input[data-qa="login-password"]'),
        userLogin: page.locator('button[data-qa="login-button"]'),
        userLogOut: page.locator('a[href="/logout"]')
    }
}

module.exports = userlogin;