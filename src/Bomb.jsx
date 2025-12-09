// Exercise 4.2 – Component that always throws
import React from 'react';

export default function Bomb() {
  throw new Error('Boom!');
}
