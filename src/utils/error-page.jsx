import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="flex flex-col justify-center">
      <div className="text-3xl font-semibold">Oops!</div>
      {error.statusText || error.message}
      <a href="/"> Back to Home</a>
    </div>
  )
}