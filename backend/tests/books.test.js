const { booksController } = require("../controllers/booksController");
let { books } = require("../controllers/booksController");
const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const { expect } = chai;
chai.use(sinonChai);

describe("Books Controller", () => {
  describe("getBooks", () => {
    it("should return all books when no ID is provided", () => {
      const req = { query: {} };
      const res = { send: sinon.spy() };

      booksController.getBooks(req, res);

      expect(res.send).to.have.been.calledWith(books);
    });

    it("should return a book when a valid ID is provided", () => {
      const req = { query: { id: "1" } };
      const res = { send: sinon.spy() };

      booksController.getBooks(req, res);

      expect(res.send).to.have.been.calledWith(books[0]);
    });

    it("should throw an error when an invalid ID is provided", () => {
      const req = { query: { id: "999" } };
      const res = { send: sinon.spy() };

      expect(() => booksController.getBooks(req, res)).to.throw(
        "Book not found"
      );
    });
  });

  describe("createBook", () => {
    it("should create a new book", () => {
      const req = {
        body: {
          title: "New Book",
          author: "Author Name",
          year_published: "2024",
          genre: "Fiction",
        },
      };
      const res = { send: sinon.spy() };

      booksController.createBook(req, res);

      expect(res.send).to.have.been.calledWith({
        id: 8,
        title: "New Book",
        author: "Author Name",
        year_published: 2024,
        genre: "Fiction",
      });
      expect(books.length).to.equal(8);
    });
  });
});
