import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../routes/Home";
import { BrowserRouter } from "react-router-dom";

describe("Home", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  });

  it("contains page title", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(screen.getByTestId("title").innerHTML).toBe("Book Library");
  });

  it("contains add book button", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByText("Add Book")).toBeInTheDocument();
  });
});
