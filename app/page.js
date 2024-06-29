import { Hero } from '@/components/Hero';
import Head from 'next/head';

import './app.css';


export default function Home() {
  return (
    <div className="mx-auto md:max-w-lg lg:max-w-5xl px-14">
      <Hero id="home" />
    </div>
  );
}