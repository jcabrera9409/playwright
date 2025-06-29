import { test, expect } from '@playwright/test';

const BASE_URL = 'https://www.saucedemo.com/';

test.beforeEach(async ({ page }) => {
  await page.goto(BASE_URL);
});

test.describe('Sauce Labs Login Tests', () => {
    test('should log in with valid credentials', async ({ page }) => {
        await page.locator("id=user-name").fill("standard_user");
        await page.locator("id=password").fill("secret_sauce");
        await page.locator("id=login-button").click();
        await expect(page).toHaveURL(`${BASE_URL}inventory.html`);
    });
});

test.describe('Sauce Labs Shopping Cart Tests', () => {
    test('should add a product to the cart', async ({ page }) => {
        await login(page, `${BASE_URL}inventory.html`);

        await addAllItemsToCart(page);

        await page.locator("id=shopping_cart_container").click();
        await expect(page).toHaveURL(`${BASE_URL}cart.html`);

        await page.locator("id=checkout").click();
        await expect(page).toHaveURL(`${BASE_URL}checkout-step-one.html`);

        await checkoutStepOne(page);
        await page.locator("id=continue").click();
        await expect(page).toHaveURL(`${BASE_URL}checkout-step-two.html`);

        await page.locator("id=finish").click();
        await expect(page).toHaveURL(`${BASE_URL}checkout-complete.html`);

    });
});

async function login(page, expectPageUrl) {
    await page.locator("id=user-name").fill("standard_user");
    await page.locator("id=password").fill("secret_sauce");
    await page.locator("id=login-button").click();
    await expect(page).toHaveURL(expectPageUrl);
}

async function addAllItemsToCart(page) {
    const allItems = await page.locator("//div[@data-test='inventory-item']").all();

    for(let item of allItems) {
        await item.locator("//button").click();
    }
}

async function checkoutStepOne(page) {
    await page.locator("id=first-name").fill("John");
    await page.locator("id=last-name").fill("Doe");
    await page.locator("id=postal-code").fill("12345");
}