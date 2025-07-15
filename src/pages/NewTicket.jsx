import React from 'react';
import Sidebar from '../components/Sidebar1';
import './NewTicket.css';

const NewTicket = () => {
  return (
    <main className="p-8 w-full">
      <h2 className="text-3xl font-bold mb-6 text-center">Create New Ticket</h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <input type="text" placeholder="Ticket No." className="input" />
        <input type="date" placeholder="Date" className="input" />
        <input type="text" placeholder="Name" className="input" />
        <input type="text" placeholder="Department" className="input" />
        <input type="text" placeholder="Subject" className="col-span-2 input" />
        <input type="text" placeholder="Category" className="input" />
        <textarea placeholder="Description" className="input h-24 md:row-span-2" />
        <input type="text" placeholder="Type" className="input" />
        <input type="text" placeholder="Priority" className="input" />

        {/* Fake reCAPTCHA */}
        <div className="col-span-2 flex items-center space-x-4 mt-4">
          <input type="checkbox" />
          <span>I'm not a robot</span>
        </div>

        <button
          type="submit"
          className="col-span-2 bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 rounded"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default NewTicket;
