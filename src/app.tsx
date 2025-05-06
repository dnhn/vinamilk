import { useState } from 'react';

import { Data } from './types';

import Header from './components/header';
import Footer from './components/footer';
import Form from "./components/form.tsx";
import Typer from './components/typer';
import Preview from './components/preview';

export default function App() {
  const [data, setData] = useState<Data>({
    bgColor: '#0213b0',
    color: '#fffff1',
    est: '',
    name: '',
    uppercase: true,
    year: '',
  });
  const [animation, setAnimation] = useState(true);

  function handleChange(field: string, value: string | boolean) {
    setData((prevData) => ({ ...prevData, [field]: value }));
  }

  return (
    <>
      <Header />
      <main
        className={`flex-1 py-10 ${
          animation ? 'overflow-hidden' : 'overflow-auto'
        }`}
      >
        <h1 className="relative py-2 px-3 text-center text-vnm font-sans-display-bold text-[3.75rem] leading-[85%] uppercase md:px-4 md:text-[6.875rem]">
          <Typer onComplete={() => { setAnimation(false) }} />
        </h1>
        <div
          className={`mx-auto space-y-4 w-full max-w-xl pt-10 px-4 transition duration-1000 ease-in-out ${
            animation ? 'pointer-events-none opacity-0' : ''
          }`}
        >
          <Form data={data} handleChange={handleChange} />
          {!animation && <Preview data={data} />}
        </div>
      </main>
      <Footer />
    </>
  );
}
