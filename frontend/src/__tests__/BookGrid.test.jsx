import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BookGrid from "../components/BookGrid";

describe("BookGrid", () => {
  const mockBooks = [
    {
      id: 1,
      title: "All the Pretty Horses",
      author: "Cormac McCarthy",
      year_published: 1992,
      genre: "Western Fiction",
    },
    {
      id: 2,
      title: "Trust",
      author: "Hernan Diaz",
      year_published: 2022,
      genre: "Historical Fiction",
    },
  ];

  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <BookGrid books={mockBooks} />
      </BrowserRouter>
    );
  });

  it("contains the proper amount of book children", () => {
    render(
      <BrowserRouter>
        <BookGrid books={mockBooks} />
      </BrowserRouter>
    );
    expect(screen.getByTestId("book-grid").children.length).toBe(2);
  });
});
