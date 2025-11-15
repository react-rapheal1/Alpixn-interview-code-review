import React from 'react';

export const NewsletterForm = () => {
  const [email, setEmail] = React.useState('');

  const handleSubmit = () => {
    console.log('Email submitted:', email);
  };

  return (
    <div className="text-center mb-12">
      <h3 className="text-2xl font-semibold text-white mb-6">
        Subscribe To Our Newsletter
      </h3>
      <div className="flex max-w-md mx-auto gap-0">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="flex-1 px-4 py-3 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSubmit}
          className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};