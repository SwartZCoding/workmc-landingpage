import React from 'react';
import content from '../content';

export default function Navigation() {
  return (
    <div
      style={{
        background: '#091c29',
      }}
    >
      <div className="flex items-center justify-between w-10/12 mx-auto py-3 text-white font-dosis">
        <h1 className="text-3xl font-bold">
          {content.nav.logo}{' '}
          <span className="w-4 h-3 bg-blue-500 inline-block rounded-full"></span>
        </h1>
        <div>
          <button onClick={event => window.open("https://discord.gg/AFeBFSK7Qw")} className="bg-indigo-500 px-10 py-3 text-xl uppercase mt-auto rounded-lg">
            {content.header.btnText}
          </button>

          <button onClick={event => window.open("/market")} className="m-3 bg-red-500 px-10 py-3 text-xl uppercase mt-auto rounded-lg">
            {content.header.marketText}
          </button>
        </div>
      </div>
    </div>
  );
}
