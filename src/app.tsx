import { useState } from 'react';

import { Data } from './types';

import Header from './components/header';
import Footer from './components/footer';
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
        <h1 className="relative py-2 px-3 text-center text-vnm font-sans-display-bold text-[60px] leading-[85%] uppercase md:px-4 md:text-[110px] md:leading-[85%]">
          <Typer onComplete={() => { setAnimation(false) }} />
        </h1>
        <div
          className={`mx-auto space-y-4 w-full max-w-xl pt-10 px-4 transition duration-1000 ease-in-out ${
            animation ? 'pointer-events-none opacity-0' : ''
          }`}
        >
          <div className="grid gap-4 md:grid-cols-3">
            <div className="relative float-label-input">
              <input
                id="est"
                name="est"
                placeholder=" "
                value={data.est}
                className="relative border border-vnm outline-hidden rounded-full w-full h-10 px-6 bg-main text-vnm text-base md:h-[52px]"
                onChange={(e) => { handleChange('est', e.target.value) }}
              />
              <label
                htmlFor="est"
                className="pointer-events-none absolute top-2.5 left-2 rounded-full px-2 text-vnm font-sans-std text-sm transition duration-200 ease-in-out md:top-4"
              >
                Bên trái
              </label>
              <p className="mt-1 px-2 text-note text-xs">Để trống cũng được</p>
            </div>
            <div className="relative float-label-input">
              <input
                id="name"
                name="name"
                placeholder=" "
                value={data.name}
                className="relative border border-vnm outline-hidden rounded-full w-full h-10 px-6 bg-main text-vnm text-base md:h-[52px]"
                onChange={(e) => { handleChange('name', e.target.value) }}
              />
              <label
                htmlFor="name"
                className="pointer-events-none absolute top-2.5 left-2 rounded-full px-2 text-vnm font-sans-std text-sm transition duration-200 ease-in-out md:top-4"
              >
                Trung tâm
              </label>
              <p className="mt-1 px-2 text-note text-xs">Viết sao cũng được</p>
            </div>
            <div className="relative float-label-input">
              <input
                id="year"
                name="year"
                placeholder=" "
                value={data.year}
                className="relative border border-vnm outline-hidden rounded-full w-full h-10 px-6 bg-main text-vnm text-base md:h-[52px]"
                onChange={(e) => { handleChange('year', e.target.value) }}
              />
              <label
                htmlFor="year"
                className="pointer-events-none absolute top-2.5 left-2 rounded-full px-2 text-vnm font-sans-std text-sm transition duration-200 ease-in-out md:top-4"
              >
                Bên phải
              </label>
              <p className="mt-1 px-2 text-note text-xs">
                Số hay chữ gì cũng được
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="relative">
              <input
                type="color"
                id="bgcolor"
                name="bgcolor"
                value={data.bgColor}
                className="mx-auto border border-vnm outline-vnm outline-offset-4 rounded-full block w-10 h-10 bg-main md:w-[52px] md:h-[52px] focus:outline-2"
                onChange={(e) => { handleChange('bgColor', e.target.value) }}
              />
              <p className="mt-1 px-2 text-center text-note text-xs">
                <label htmlFor="bgcolor">Màu nền</label>
              </p>
            </div>
            <div className="relative">
              <input
                type="color"
                id="color"
                name="color"
                value={data.color}
                className="mx-auto border border-vnm outline-vnm outline-offset-4 rounded-full block w-10 h-10 bg-main md:w-[52px] md:h-[52px] focus:outline-2"
                onChange={(e) => { handleChange('color', e.target.value) }}
              />
              <p className="mt-1 px-2 text-center text-note text-xs">
                <label htmlFor="color">Màu chữ</label>
              </p>
            </div>
            <div className="relative checkbox-input">
              <input
                type="checkbox"
                id="uppercase"
                name="uppercase"
                placeholder=" "
                checked={data.uppercase}
                className="absolute opacity-0"
                onChange={(e) => { handleChange('uppercase', e.target.checked) }}
              />
              <label
                htmlFor="uppercase"
                className="mx-auto border border-vnm rounded-full flex justify-center items-center aspect-square h-10 bg-main text-vnm text-2xl font-bold md:h-[52px]"
              >
                {data.uppercase && '✓'}
              </label>
              <p className="mt-1 px-2 text-center text-note text-xs">
                Viết hoa
              </p>
            </div>
          </div>
          {!animation && <Preview data={data} />}
        </div>
      </main>
      <Footer />
    </>
  );
}
