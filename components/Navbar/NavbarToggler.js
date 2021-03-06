import React from 'react';

export default function NavbarToggler({ ...rest }) {
  return (
    <button
      {...rest}
      className="cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
      type="button"
    >
      <span className={`block relative w-6 h-px rounded-sm bg-white`}></span>
      <span
        className={`block relative w-6 h-px rounded-sm bg-white mt-1`}
      ></span>
      <span
        className={`block relative w-6 h-px rounded-sm bg-white mt-1`}
      ></span>
    </button>
  );
}
