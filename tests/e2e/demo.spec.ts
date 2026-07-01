


import { test, expect } from '@playwright/test';

test.describe('Demo Page', () => {
  test('should load demo page with torus grid', async ({ page }) => {
    await page.goto('/demo');
    
    
    await expect(page.locator('h1')).toContainText('DREAMengin Demo');
    
    
    await expect(page.locator('p')).toContainText('Torus grid');
    
    
    await expect(page.getByText('Use arrow keys or swipe to navigate')).toBeVisible();
  });

  test('should navigate between pages with arrow keys', async ({ page }) => {
    await page.goto('/demo');
    
    
    await page.waitForSelector('text=Page 0,0', { timeout: 5000 });
    
    
    await expect(page.locator('text=Page 0,0')).toBeVisible();
    
    
    await page.keyboard.press('ArrowRight');
    
    
    await expect(page.locator('text=Page 1,0')).toBeVisible();
  });

  test('should show grid visualization', async ({ page }) => {
    await page.goto('/demo');
    
    
    await page.waitForSelector('text=(0, 0)', { timeout: 5000 });
    
    
    await expect(page.locator('text=(0, 0)')).toBeVisible();
    await expect(page.locator('text=(1, 0)')).toBeVisible();
    await expect(page.locator('text=(0, 1)')).toBeVisible();
    await expect(page.locator('text=(1, 1)')).toBeVisible();
  });
});
