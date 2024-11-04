import { test, expect } from '@playwright/test';
import {login} from '../Login/login.user.methods';
import {accountData} from "../resources/StaticData";

test.describe("Login functionality", () => {
    test.beforeEach(async ({page}) => {
        await page.goto('/');
    });

    test("Login successfully after registration", async ({page}) => {
        const registeredEmail =  "testuser8781@example.com";

        await login(page,registeredEmail, accountData.password);
        await page.waitForTimeout(6000);
        const currentUrl = page.url();
        expect(currentUrl).toContain("login");
    });

});