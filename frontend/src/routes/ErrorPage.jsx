import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Oops!</h1>
      <p>Sorry, an error has occurred.</p>
      <p>
        <b>{error.status} </b>
        <i>{error.statusText}</i>
      </p>
    </div>
  );
}
