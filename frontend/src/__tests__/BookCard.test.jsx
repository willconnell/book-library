import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BookCard from "../components/BookCard";

describe("BookCard", () => {
  const mockBook = {
    id: 1,
    title: "All the Pretty Horses",
    author: "Cormac McCarthy",
    year_published: 1992,
    genre: "Western Fiction",
  };

  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <BookCard book={mockBook} />
      </BrowserRouter>
    );
  });

  it("contains delete button", () => {
    render(
      <BrowserRouter>
        <BookCard book={mockBook} />
      </BrowserRouter>
    );

    expect(screen.getByText("Delete")).toBeInTheDocument();
  });

  it("contains edit button", () => {
    render(
      <BrowserRouter>
        <BookCard book={mockBook} />
      </BrowserRouter>
    );

    expect(screen.getByText("Edit")).toBeInTheDocument();
  });

  it("contains book title", () => {
    render(
      <BrowserRouter>
        <BookCard book={mockBook} />
      </BrowserRouter>
    );

    expect(screen.getByText("All the Pretty Horses")).toBeInTheDocument();
  });

  it("contains book author", () => {
    render(
      <BrowserRouter>
        <BookCard book={mockBook} />
      </BrowserRouter>
    );

    expect(screen.getByText("by Cormac McCarthy")).toBeInTheDocument();
  });

  it("contains book year published", () => {
    render(
      <BrowserRouter>
        <BookCard book={mockBook} />
      </BrowserRouter>
    );

    expect(screen.getByText("1992")).toBeInTheDocument();
  });

  it("contains book genre", () => {
    render(
      <BrowserRouter>
        <BookCard book={mockBook} />
      </BrowserRouter>
    );

    expect(screen.getByText("Western Fiction")).toBeInTheDocument();
  });
});
