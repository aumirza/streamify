import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";

class IntersectionObserverMock {
  constructor() // callback: IntersectionObserverCallback
  // options?: IntersectionObserverInit
  {}

  observe() {
    // Mock behavior when observing an element
  }

  unobserve() {
    // Mock behavior when unobserving an element
  }

  disconnect() {
    // Mock behavior when disconnecting the observer
  }

  takeRecords() {
    return [];
  }
}

beforeAll(() => {
  // Assign the mock to the global window object
  Object.defineProperty(global, "IntersectionObserver", {
    writable: true,
    configurable: true,
    value: IntersectionObserverMock,
  });
});

afterEach(() => {
  cleanup();
});
