import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 px-4">
      <h1 className="text-4xl font-bold text-blue-900 mb-6 text-center">Welcome to the Simple Calculator App</h1>
      <p className="text-lg text-blue-800 mb-8 text-center max-w-md">
        Perform basic arithmetic calculations quickly and easily. Click the button below to get started.
      </p>
      <Link to="/calculator">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition-all">
          Launch Calculator
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
