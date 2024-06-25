import axios from "axios";
const base_url = "http://localhost:4000/books";

async function getBooks(id) {
  const queryString = id === undefined ? "" : `?id=${id}`;
  const res = await axios.get(base_url + queryString);
  return res.data;
}

async function createBook(body) {
  const res = await axios.post(base_url, body);
  return res.data;
}

async function updateBook(body) {
  const res = await axios.put(base_url, body);
  return res.data;
}

async function deleteBook(id) {
  const res = await axios.delete(base_url + `/${id}`);
  return res.data;
}

export { getBooks, createBook, updateBook, deleteBook };
