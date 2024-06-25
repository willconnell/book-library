import { create } from "zustand";

const useStore = create((set) => ({
  books: [],
  errorMessage: "Default Message",
  setBooks: (books) => set(() => ({ books: books })),
  setErrorMessage: (errorMessage) =>
    set(() => ({ errorMessage: errorMessage })),
}));

export default useStore;
