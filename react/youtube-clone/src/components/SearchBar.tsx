import React from 'react';

export function SearchBar() {
  return (
    <div className="relative mx-auto w-3/4 lg:w-96">
      <div className="flex items-center">
        <input
          id="default-search"
          className="w-full py-2 px-4 text-gray-800 border border-gray-300 rounded-l-full focus:outline-none focus:shadow-outline"
          type="search"
          placeholder="Search"
          required
        />
        <button className="bg-red-500 text-white py-2 px-4 rounded-r-full">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z "
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
