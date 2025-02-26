import React from 'react';

export default function Footer() {
  return (
    <footer className="text-center text-white fw-bold bg-dark py-3">
      <p className="m-4">© {new Date().getFullYear()} Movie Hub.All rights reserved</p>
      <p>🎬 Enjoy watching the best movies and actors!</p>
    </footer>
  );
}