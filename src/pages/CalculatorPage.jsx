import React, { useState } from 'react';

const CalculatorPage = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setExpression('');
      setResult('');
    } else if (value === '=') {
      try {
        // eslint-disable-next-line no-eval
        const evalResult = eval(expression);
        setResult(evalResult);
      } catch {
        setResult('Error');
      }
    } else {
      setExpression((prev) => prev + value);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', 'C', '+',
    '='
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 px-4">
      <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-sm">
        <div className="bg-gray-800 text-white rounded-lg px-4 py-3 text-right font-mono text-2xl mb-2">
          {expression || '0'}
        </div>
        <div className="text-right font-mono text-xl text-green-600 mb-4 min-h-[28px]">
          {result}
        </div>
        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn) => (
            <button
              key={btn}
              className={`rounded-lg p-4 text-lg font-semibold transition-all duration-150 
              ${btn === '=' 
                ? 'bg-green-500 text-white hover:bg-green-600' 
                : btn === 'C' 
                  ? 'bg-red-500 text-white hover:bg-red-600' 
                  : '/+-*/'.includes(btn) 
                    ? 'bg-blue-100 hover:bg-blue-200 text-blue-700' 
                    : 'bg-gray-100 hover:bg-gray-300 text-gray-800'}`}
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
