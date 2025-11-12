import React from 'react';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  const error = useRouteError();
  console.error(error);

  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText || error.data;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    errorMessage = 'Unknown error';
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-lavender-200 text-gray-800 p-4">
      <h1 className="text-5xl font-bold text-red-600 mb-4">Oops!</h1>
      <p className="text-xl text-gray-700 mb-8">Sorry, an unexpected error has occurred.</p>
      <p className="text-lg text-gray-600 italic">
        <i>{errorMessage}</i>
      </p>
      <p className="mt-8 text-md text-gray-500">
        Please try navigating back to the <a href="/" className="text-blue-600 hover:underline">home page</a>.
      </p>
    </div>
  );
};

export default ErrorPage;
