import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BookCard from "../components/BookCard";
import { deleteBook, getBooks } from "../api/books";

vi.mock("../api/books", () => ({
  deleteBook: vi.fn(),
  getBooks: vi.fn(),
}));

const mockSetBooks = vi.fn();
const mockSetErrorMessage = vi.fn();

vi.mock("../store/store", () => ({
  __esModule: true,
  default: () => ({
    setBooks: mockSetBooks,
    setErrorMessage: mockSetErrorMessage,
  }),
}));

describe("BookCard", () => {
  const mockBook = {
    id: 1,
    title: "All the Pretty Horses",
    author: "Cormac McCarthy",
    year_published: 1992,
    genre: "Western Fiction",
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

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

    expect(screen.getByText(mockBook.title)).toBeInTheDocument();
  });

  it("contains book author", () => {
    render(
      <BrowserRouter>
        <BookCard book={mockBook} />
      </BrowserRouter>
    );

    expect(screen.getByText(`by ${mockBook.author}`)).toBeInTheDocument();
  });

  it("contains book year published", () => {
    render(
      <BrowserRouter>
        <BookCard book={mockBook} />
      </BrowserRouter>
    );

    expect(screen.getByText(mockBook.year_published)).toBeInTheDocument();
  });

  it("contains book genre", () => {
    render(
      <BrowserRouter>
        <BookCard book={mockBook} />
      </BrowserRouter>
    );

    expect(screen.getByText(mockBook.genre)).toBeInTheDocument();
  });

  it("asks for confirmation on delete", async () => {
    deleteBook.mockResolvedValueOnce();
    window.confirm = vi.fn(() => true);

    render(
      <BrowserRouter>
        <BookCard book={mockBook} />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText("Delete"));

    expect(window.confirm).toHaveBeenCalledWith(
      `Are you sure you want to delete ${mockBook.title}?`
    );
  });

  it("calls deleteBook() and getBooks() on delete", async () => {
    window.confirm = vi.fn(() => true);

    deleteBook.mockResolvedValueOnce();
    getBooks.mockResolvedValueOnce([mockBook]);

    render(
      <BrowserRouter>
        <BookCard book={mockBook} />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText("Delete"));

    expect(window.confirm).toHaveBeenCalledWith(
      `Are you sure you want to delete ${mockBook.title}?`
    );
    expect(deleteBook).toHaveBeenCalledWith(mockBook.id);

    await waitFor(() => expect(getBooks).toHaveBeenCalled());
    await waitFor(() => expect(mockSetBooks).toHaveBeenCalledWith([mockBook]));
  });

  it("sets error message on delete failure", async () => {
    window.confirm = vi.fn(() => true);

    deleteBook.mockRejectedValueOnce(new Error("Delete failed"));

    render(
      <BrowserRouter>
        <BookCard book={mockBook} />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText("Delete"));

    expect(deleteBook).toHaveBeenCalledWith(mockBook.id);

    await waitFor(() =>
      expect(mockSetErrorMessage).toHaveBeenCalledWith(
        `There was an issue deleting book ${mockBook.title}`
      )
    );
  });

  it("navigates to edit page on edit button click", () => {
    render(
      <BrowserRouter>
        <BookCard book={mockBook} />
      </BrowserRouter>
    );

    const editButton = screen.getByText("Edit").closest("a");
    expect(editButton).toHaveAttribute("href", `/edit/${mockBook.id}`);
  });
});
