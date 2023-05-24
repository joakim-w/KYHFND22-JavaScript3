import { afterEach, expect } from 'vitest'
import matchers from '@testing-library/jest-dom/matchers'
import { cleanup } from '@testing-library/react';

// förlänger funktionaliteten från expect så vi kan använda funktioner så som .toBeVisible mm.
expect.extend(matchers);


// rensar upp jsdom efter varje test är klart så dom inte blir beroende av varandra
afterEach(() => {
  cleanup()
})
