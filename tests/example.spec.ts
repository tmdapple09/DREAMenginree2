import { test, expect } from '@playwright/test';

test('login to home', async ({ page }) => {
  await page.goto('/login');
  
  
  await page.fill('[name="email"]', 'test@example.com');
  
  
  await page.click('button[type="submit"]');
  
  
  await expect(page.locator('text=Check your email')).toBeVisible();
});

test('profile public', async ({ page }) => {
  await page.goto('/profile/jose');
  
  
  await expect(page.locator('text=Jose')).toBeVisible();
});

test('discover page loads', async ({ page }) => {
  await page.goto('/discover');
  
  
  await expect(page.locator('text=Discover')).toBeVisible();
});

test('shop page loads', async ({ page }) => {
  await page.goto('/shop');
  
  
  await expect(page.locator('text=Shop')).toBeVisible();
});

test('lab page loads', async ({ page }) => {
  await page.goto('/lab');
  
  
  await expect(page).toHaveURL(/.*\/login/);
});

test('about vision content', async ({ page }) => {
  await page.goto('/about');

  await expect(page.locator('text=Unified Interface & Navigation Vision')).toBeVisible();
  await expect(page.getByRole('heading', { name: /Home Anchor/ })).toBeVisible();
});
