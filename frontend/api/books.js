import axios from "axios";
const base_url = "http://localhost:4000/books";

async function getBooks(id) {
  const queryString = id === undefined ? "" : `?id=${id}`;
  const res = await axios.get(base_url + queryString);
  return res.data;
}

export { getBooks };
