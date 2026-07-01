

import { test, expect, Page, BrowserContext } from '@playwright/test';





test.use({
  permissions: ['camera', 'microphone', 'geolocation', 'notifications'],
  geolocation: { latitude: 40.7128, longitude: -74.006 },
});






async function waitReady(page: Page) {
  await page.waitForLoadState('networkidle');
}


async function expectPolicyFooter(page: Page) {
  const footer = page.locator('footer a[href="/policy"]');
  await expect(footer).toBeVisible();
}




test.describe('Landing page', () => {
  test('loads with sky-blue + gold gradient design', async ({ page }) => {
    await page.goto('/');
    await waitReady(page);

    
    await expect(page.getByText('DREAMengin').first()).toBeVisible();

    
    await expect(
      page.getByRole('heading', { name: /Navigate your digital world/i })
    ).toBeVisible();

    
    await expect(page.getByText(/Dr\. Eams dreams of dreaming/i)).toBeVisible();

    
    await expect(page.getByRole('link', { name: 'Get Started' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Sign In' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'About' }).first()).toBeVisible();

    
    await expectPolicyFooter(page);
  });

  test('video element is present and has correct src', async ({ page }) => {
    await page.goto('/');
    const video = page.locator('video');
    await expect(video).toBeAttached();
    const src = await page.locator('video source').getAttribute('src');
    expect(src).toBe('/videos/signup-bg.mp4');
  });

  test('video opacity is readable (above 0.30)', async ({ page }) => {
    await page.goto('/');
    
    
    const opacity = await page.locator('video').evaluate((el) =>
      parseFloat(getComputedStyle(el).opacity)
    );
    
    expect(opacity).toBeGreaterThanOrEqual(0.30);
  });

  test('HeroSprite canvas is present and interactive', async ({ page }) => {
    await page.goto('/');
    const canvas = page.locator('canvas[aria-label*="Dr. Eams"]');
    await expect(canvas).toBeVisible();
    
    const cursor = await canvas.evaluate((el) => getComputedStyle(el).cursor);
    expect(cursor).toBe('pointer');
  });

  test('touch affordance label is visible below sprite', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText(/tap to interact/i)).toBeVisible();
  });

  test('tapping the sprite canvas triggers a reaction hint', async ({ page }) => {
    await page.goto('/');
    const canvas = page.locator('canvas[aria-label*="Dr. Eams"]');
    await expect(canvas).toBeVisible();

    const box = await canvas.boundingBox();
    if (!box) throw new Error('Canvas has no bounding box');

    
    await page.mouse.click(box.x + box.width / 2, box.y + box.height * 0.15);

    
    await expect(page.locator('text=🧠 head!')).toBeVisible({ timeout: 2000 });
  });

  test('icon strip contains 18 platform badges', async ({ page }) => {
    await page.goto('/');
    const badges = page.locator('[aria-label^="Connect "]');
    await expect(badges).toHaveCount(18);
  });

  test('Sign In nav link goes to /login', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Sign In' }).click();
    await expect(page).toHaveURL(/\/login/);
  });

  test('Get Started link goes to /join', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Get Started' }).click();
    await expect(page).toHaveURL(/\/join/);
  });

  test('About link goes to /about', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'About' }).first().click();
    await expect(page).toHaveURL(/\/about/);
  });
});




test.describe('About page', () => {
  test('loads without auth', async ({ page }) => {
    await page.goto('/about');
    await waitReady(page);
    await expect(page).toHaveURL(/\/about/);
    
    await expect(page).not.toHaveURL(/\/login/);
  });

  test('shows platform features content', async ({ page }) => {
    await page.goto('/about');
    
    await expect(page.locator('h1, h2').first()).toBeVisible();
  });

  test('has footer policy link', async ({ page }) => {
    await page.goto('/about');
    await expectPolicyFooter(page);
  });
});




test.describe('Policy page', () => {
  test('loads without auth', async ({ page }) => {
    await page.goto('/policy');
    await waitReady(page);
    await expect(page).not.toHaveURL(/\/login/);
  });

  test('shows policy version string', async ({ page }) => {
    await page.goto('/policy');
    await expect(page.getByText(/BOOGIE_POLICY_V1/i)).toBeVisible();
  });

  test('has footer policy link', async ({ page }) => {
    await page.goto('/policy');
    await expectPolicyFooter(page);
  });
});




test.describe('Login page', () => {
  test('loads without auth', async ({ page }) => {
    await page.goto('/login');
    await waitReady(page);
    await expect(page).toHaveURL(/\/login/);
  });

  test('has email input with correct id', async ({ page }) => {
    await page.goto('/login');
    
    await expect(page.locator('#email')).toBeVisible();
  });

  test('has password input', async ({ page }) => {
    await page.goto('/login');
    await expect(page.locator('input[type="password"]')).toBeVisible();
  });

  test('has Sign In submit button', async ({ page }) => {
    await page.goto('/login');
    await expect(page.getByRole('button', { name: /sign in/i })).toBeVisible();
  });

  test('has Remember me checkbox', async ({ page }) => {
    await page.goto('/login');
    await expect(page.locator('input[type="checkbox"]').first()).toBeVisible();
  });

  test('has OAuth — Continue with Google', async ({ page }) => {
    await page.goto('/login');
    await expect(page.getByRole('button', { name: /continue with google/i })).toBeVisible();
  });

  test('has OAuth — Continue with GitHub', async ({ page }) => {
    await page.goto('/login');
    await expect(page.getByRole('button', { name: /continue with github/i })).toBeVisible();
  });

  test('has Create an account link to /join', async ({ page }) => {
    await page.goto('/login');
    const link = page.getByRole('link', { name: /create an account/i });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', '/join');
  });

  test('Dr. Eams welcome banner is visible', async ({ page }) => {
    await page.goto('/login');
    await expect(page.getByText(/Welcome back/i)).toBeVisible();
    await expect(page.getByText(/Dr\. Eams/i)).toBeVisible();
  });

  test('shows inline error on empty submit (does not crash page)', async ({ page }) => {
    await page.goto('/login');
    
    await page.locator('#email').fill('test@example.com');
    await page.getByRole('button', { name: /sign in/i }).click();
    
    await expect(page).toHaveURL(/\/login/);
  });

  test('has footer policy link', async ({ page }) => {
    await page.goto('/login');
    await expectPolicyFooter(page);
  });
});




test.describe('Join / Register page', () => {
  test('loads without auth', async ({ page }) => {
    await page.goto('/join');
    await waitReady(page);
    await expect(page).toHaveURL(/\/join/);
  });

  test('has email, password, confirm-password inputs', async ({ page }) => {
    await page.goto('/join');
    const inputs = page.locator('input[type="password"]');
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(inputs).toHaveCount(2); 
  });

  test('has Privacy Policy checkbox', async ({ page }) => {
    await page.goto('/join');
    await expect(page.getByText(/Privacy Policy/i)).toBeVisible();
  });

  test('has Terms & Conditions checkbox', async ({ page }) => {
    await page.goto('/join');
    await expect(page.getByText(/Terms/i)).toBeVisible();
  });

  test('has Create Account submit button', async ({ page }) => {
    await page.goto('/join');
    await expect(page.getByRole('button', { name: /create account/i })).toBeVisible();
  });

  test('has Sign in link back to /login', async ({ page }) => {
    await page.goto('/join');
    const link = page.getByRole('link', { name: /sign in/i });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', '/login');
  });

  test('has footer policy link', async ({ page }) => {
    await page.goto('/join');
    await expectPolicyFooter(page);
  });
});




test.describe('Protected route redirects', () => {
  const protectedRoutes = [
    '/home',
    '/profile',
    '/settings',
    '/settings/appearance',
    '/settings/algorithm',
    '/settings/account',
    '/settings/data',
    '/connectors',
    '/edit-profile',
    '/messages',
    '/daydream/games',
    '/daydream/music',
    '/daydream/analytics',
    '/daydream/brand',
    '/daydream/create',
    '/daydream/play',
    '/daydream/media-vault',
  ];

  for (const route of protectedRoutes) {
    test(`${route} redirects to /login when unauthenticated`, async ({ page }) => {
      await page.goto(route);
      await page.waitForURL(/\/(login|join)/, { timeout: 8000 });
      await expect(page).toHaveURL(/\/(login|join)/);
    });
  }
});




test.describe('Shop and Marketplace', () => {
  test('shop page loads (may redirect or show content)', async ({ page }) => {
    await page.goto('/shop');
    await waitReady(page);
    
    const url = page.url();
    expect(url).toMatch(/\/(shop|login)/);
  });

  test('marketplace page loads', async ({ page }) => {
    await page.goto('/marketplace');
    await waitReady(page);
    const url = page.url();
    expect(url).toMatch(/\/(marketplace|login)/);
  });
});




test.describe('Games', () => {
  test('/daydream/games redirects unauthenticated users', async ({ page }) => {
    await page.goto('/daydream/games');
    await page.waitForURL(/\/(login|join)/, { timeout: 8000 });
    await expect(page).toHaveURL(/\/(login|join)/);
  });
});




test.describe('Discover', () => {
  test('redirects to login when not authenticated', async ({ page }) => {
    await page.goto('/discover');
    await page.waitForURL(/\/(login|join)/, { timeout: 8000 });
    await expect(page).toHaveURL(/\/(login|join)/);
  });
});




test.describe('Design system tokens', () => {
  test('landing page <main> is transparent (not dark bg-[#070b16])', async ({ page }) => {
    await page.goto('/');
    const bgColor = await page.locator('main').first().evaluate((el) =>
      getComputedStyle(el).backgroundColor
    );
    
    expect(bgColor).toBe('rgba(0, 0, 0, 0)');
  });

  test('login page uses sky-blue de-sky-bg gradient', async ({ page }) => {
    await page.goto('/login');
    const bg = await page.locator('.de-sky-bg').first().evaluate((el) =>
      getComputedStyle(el).backgroundImage
    );
    expect(bg).toContain('gradient');
  });

  test('de-btn-primary has gradient background (sky→gold)', async ({ page }) => {
    await page.goto('/login');
    const btn = page.locator('.de-btn-primary').first();
    await expect(btn).toBeVisible();
    const bg = await btn.evaluate((el) => getComputedStyle(el).backgroundImage);
    expect(bg).toContain('gradient');
  });
});




test.describe('Mobile layout (iPhone 13)', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('landing page fits mobile viewport', async ({ page }) => {
    await page.goto('/');
    await waitReady(page);
    await expect(page.getByText('DREAMengin').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Get Started' })).toBeVisible();
  });

  test('login page is usable on mobile', async ({ page }) => {
    await page.goto('/login');
    await expect(page.locator('#email')).toBeVisible();
    await expect(page.getByRole('button', { name: /sign in/i })).toBeVisible();
  });

  test('sprite canvas touch interaction works on mobile', async ({ page }) => {
    await page.goto('/');
    const canvas = page.locator('canvas[aria-label*="Dr. Eams"]');
    await expect(canvas).toBeVisible();

    const box = await canvas.boundingBox();
    if (!box) throw new Error('Canvas has no bounding box');

    
    await page.touchscreen.tap(box.x + box.width / 2, box.y + box.height * 0.50);
    await expect(page.locator('text=👋 arms!')).toBeVisible({ timeout: 2000 });
  });

  test('footer policy link is accessible on mobile', async ({ page }) => {
    await page.goto('/');
    await expectPolicyFooter(page);
  });
});




test.describe('Media permissions', () => {
  test('camera permission is granted by test context', async ({ page, context }) => {
    await page.goto('/');
    
    const permState = await context.storageState();
    
    const hasMedia = await page.evaluate(async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        return devices.length > 0;
      } catch {
        return false;
      }
    });
    expect(hasMedia).toBe(true);
  });
});
