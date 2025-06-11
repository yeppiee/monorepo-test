# Test Suite

This project includes a comprehensive test suite using **Vitest** with proper organization across different domains.

## Test Structure

```
./tests/
├── ui/              # UI components and Svelte state management
├── server/          # Server functionality and API tests  
├── utils/           # Utility function tests
├── models/          # Model validation and type tests
├── setup.ts         # Test environment setup
└── README.md        # This file
```

## Test Categories

### 📱 **UI Tests** (`./tests/ui/`)
- **State Management**: Tests for Svelte stores and state updates
- **Component Tests**: (Basic setup provided - Svelte 5 requires additional config for full component testing)

### 🖥️ **Server Tests** (`./tests/server/`)
- **API Tests**: Mock server responses and error handling
- **Network Tests**: URL validation and request handling

### 🛠️ **Utils Tests** (`./tests/utils/`)
- **Formatting Functions**: Text wrapping, zone formatting, distance formatting
- **Color Utilities**: RGB to CSS conversion
- **Data Transformation**: Seed info formatting, edible parts formatting

### 📋 **Model Tests** (`./tests/models/`)
- **Type Validation**: Interface structure validation
- **Data Structure Tests**: USDA zones, distances, seed packet models

## Running Tests

```bash
# Run tests in watch mode (development)
npm run test

# Run tests once (CI/production)
npm run test:run

# Run tests with UI (interactive)
npm run test:ui

# Run tests with coverage report
npm run test:coverage
```

## Test Configuration

- **Framework**: Vitest (Vite-native testing)
- **Environment**: jsdom (for DOM testing)
- **Mocking**: Built-in Vitest mocking capabilities
- **Setup**: Browser API mocks for testing environment

## Writing Tests

### Example Utility Test
```typescript
import { describe, it, expect } from 'vitest'
import { formatDistance } from '../../src/utils/formatting'

describe('formatDistance', () => {
  it('should format inches with abbreviated unit', () => {
    const distance = { value: 8, unit: 'inches' }
    expect(formatDistance(distance)).toBe('8 in')
  })
})
```

### Example State Test
```typescript
import { describe, it, expect } from 'vitest'
import { get } from 'svelte/store'
import seedPacketsState from '../../src/lib/seed-packets.state'

describe('State Management', () => {
  it('should update loading state', () => {
    seedPacketsState.update(state => ({ ...state, loading: true }))
    expect(get(isLoading)).toBe(true)
  })
})
```

## Coverage

Run `npm run test:coverage` to generate a coverage report showing:
- Line coverage
- Function coverage  
- Branch coverage
- Statement coverage

## Adding New Tests

1. **Choose the right folder** based on what you're testing
2. **Follow naming convention**: `*.test.ts`
3. **Import test utilities**: `describe`, `it`, `expect` from vitest
4. **Mock external dependencies** as needed
5. **Focus on behavior**, not implementation details 