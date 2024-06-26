import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Home from "../routes/Home";
import { BrowserRouter } from "react-router-dom";

describe("Button", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  });
});
