import {useRouteError, isRouteErrorResponse} from 'react-router-dom'

export default function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  if (isRouteErrorResponse(error)) { //有错误
    return (
      <div>
        <h1>Oops!</h1>
        <h2>{error.status}</h2>
        <p>{error.statusText}</p>
        {error.error?.message && <p>{error.error.message}</p>}
      </div>
    )
  } else {
    return <div>Oops</div>
  }
}


