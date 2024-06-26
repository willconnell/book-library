import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

// clear jsdom after each test
afterEach(() => {
  cleanup();
});
