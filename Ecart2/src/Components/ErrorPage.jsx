import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-500 animate-bounce">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mt-4 animate-fade-in">
          Oops! Page not found.
        </p>
        <p className="text-gray-600 mt-2 animate-fade-in">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/"><button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors animate-bounce-slow">
          Go Back Home
        </button></Link>
      </div>
    </div>
  );
};

export default ErrorPage;
