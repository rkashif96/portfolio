import { useState } from 'react';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const confirmationMessage = `
      Name: ${formData.name}
      Email: ${formData.email}
      Feedback: ${formData.feedback}
    `;
    const isConfirmed = window.confirm(`Please confirm your details:\n\n${confirmationMessage}`);
    if (isConfirmed) {
      console.log('Submitting feedback:', formData);
      setFormData({
        name: '',
        email: '',
        feedback: ''
      });
      alert('Thank you for your valuable feedback!');
    }
  };

  return (
    <>
      <nav className="text-center text-2xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 hover:text-white mt-8 mb-4">
        Get in Touch
      </nav>
      <form onSubmit={handleSubmit} className="feedback-form max-w-lg mx-auto bg-transparent border border-blue-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-sans font-thin bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 hover:text-white mb-4">We would Love to Hear From You!</h2>
        <p className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 hover:from-purple-400 hover:via-pink-500 hover:to-red-500 mb-6">Please share your feedback with us.</p>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400 caret-white"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400 caret-white"
          />
        </div>
        <div className="mb-4">
          <textarea
            name="feedback"
            placeholder="Your Feedback"
            value={formData.feedback}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400 caret-white"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-transparent text-white p-2 rounded-lg border border-gray-300 hover:border-red-600 hover:text-red-600 transition-colors duration-300"
        >
          Submit Feedback
        </button>
      </form>
    </>
  );
};

export default Feedback;
