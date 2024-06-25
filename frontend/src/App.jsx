import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import BookForm from "./components/BookForm.jsx";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/create",
    element: <BookForm mode="create" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/edit/:bookId",
    element: <BookForm mode="edit" />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
