import { test, expect } from '@playwright/test';
import {register, enterAccountInformation} from '../registration/register.user.methods';
import {userData, accountData, IncompleteAccountData} from '../resources/StaticData';


test.describe("User Registration", () => {
    test.beforeEach(async ({page}) => {
        await page.goto('/');
    });

    test("Should register successfully", async ({page}) => {

        await register(page, userData);
        await page.waitForTimeout(6000);
        await enterAccountInformation(page, accountData);
        await page.waitForTimeout(4000);
        await expect(page.locator('h2[data-qa="account-created"]')).toContainText("Account Created!");
        await page.close();

    });

    test("Should show error when required fields are not filled", async ({page}) => {
        await register(page, userData);
        await page.waitForTimeout(6000);
        await enterAccountInformation(page, IncompleteAccountData);
        await page.waitForTimeout(4000);
        await page.click('button[data-qa="create-account"]');
        const passwordField = page.locator('input[id="password"]');
        await passwordField.focus();
        await passwordField.blur();

        const validationMessage = await passwordField.evaluate((el) => el.validationMessage);
        expect(validationMessage).toBe("Please fill out this field.");

    });

});




