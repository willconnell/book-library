import { create } from "zustand";

const useStore = create((set) => ({
  books: [],
  errorMessage: "",
  setBooks: (books) => set(() => ({ books: books })),
  setErrorMessage: (errorMessage) =>
    set(() => ({ errorMessage: errorMessage })),
}));

export default useStore;
