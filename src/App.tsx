import { Fragment, useState } from 'react';

import { IData } from './Types';

import Preview from './components/Preview';

export default function App() {
  const [data, setData] = useState<IData>({
    name: '',
    est: '',
    year: '',
    bgColor: '#0213b0',
    color: '#fffff1',
    uppercase: true,
  });

  function handleChange(field: string, value: string | boolean) {
    setData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  }

  return (
    <Fragment>
      <div className="flex flex-col h-screen bg-main">
        <div className="py-4 bg-main">
          <img
            src="/images/logo.svg"
            width={115}
            height={38}
            alt="header"
            className="mx-auto"
          />
        </div>
        <div className="flex-1 py-10 overflow-auto">
          <h1 className="py-2 px-3 text-center text-vnm font-sans-display-bold text-[60px] leading-[85%] uppercase md:px-4 md:text-[110px] md:leading-[85%]">
            Vinamilk est. 1976,
            <br /> còn bạn?
          </h1>
          <div className="mx-auto w-full max-w-xl pt-10 px-4 font-inter">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="relative float-label-input">
                <input
                  id="est"
                  name="est"
                  placeholder=" "
                  value={data.est}
                  className="relative border border-vnm outline-none rounded-full w-full h-10 px-6 bg-main text-vnm text-base md:h-[52px]"
                  onChange={(e) => handleChange('est', e.target.value)}
                />
                <label
                  htmlFor="est"
                  className="pointer-events-none absolute top-2.5 left-2 rounded-full px-2 text-vnm font-sans-std text-sm transition duration-200 ease-in-out md:top-4"
                >
                  Bên trái
                </label>
                <p className="mt-1 px-2 text-note text-xs">
                  Có hay không cũng được
                </p>
              </div>
              <div className="relative float-label-input">
                <input
                  id="name"
                  name="name"
                  placeholder=" "
                  value={data.name}
                  className="relative border border-vnm outline-none rounded-full w-full h-10 px-6 bg-main text-vnm text-base md:h-[52px]"
                  onChange={(e) => handleChange('name', e.target.value)}
                />
                <label
                  htmlFor="name"
                  className="pointer-events-none absolute top-2.5 left-2 rounded-full px-2 text-vnm font-sans-std text-sm transition duration-200 ease-in-out md:top-4"
                >
                  Chính giữa
                </label>
                <p className="mt-1 px-2 text-note text-xs">
                  Viết sao cũng được
                </p>
              </div>
              <div className="relative float-label-input">
                <input
                  id="year"
                  name="year"
                  placeholder=" "
                  value={data.year}
                  className="relative border border-vnm outline-none rounded-full w-full h-10 px-6 bg-main text-vnm text-base md:h-[52px]"
                  onChange={(e) => handleChange('year', e.target.value)}
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
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="relative float-label-input">
                <input
                  type="color"
                  id="bgcolor"
                  name="bgcolor"
                  value={data.bgColor}
                  className="mx-auto border border-vnm outline-vnm outline-offset-4 rounded-full block w-10 h-10 bg-main md:w-[52px] md:h-[52px] focus:outline-2"
                  onChange={(e) => handleChange('bgColor', e.target.value)}
                />
                <p className="mt-1 px-2 text-center text-note text-xs">
                  <label htmlFor="bgcolor">Màu nền</label>
                </p>
              </div>
              <div className="relative float-label-input">
                <input
                  type="color"
                  id="color"
                  name="color"
                  value={data.color}
                  className="mx-auto border border-vnm outline-vnm outline-offset-4 rounded-full block w-10 h-10 bg-main md:w-[52px] md:h-[52px] focus:outline-2"
                  onChange={(e) => handleChange('color', e.target.value)}
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
                  onChange={(e) => handleChange('uppercase', e.target.checked)}
                />
                <label
                  htmlFor="uppercase"
                  className="mx-auto border border-vnm rounded-full flex justify-center items-center aspect-square h-10 bg-main text-vnm text-2xl font-bold md:h-[52px]"
                >
                  {data.uppercase && '✓'}
                </label>
                <p className="mt-1 px-2 text-center text-note text-xs">
                  In hoa
                </p>
              </div>
            </div>
            <Preview data={data} classes="mt-4" />
          </div>
        </div>
        <div className="py-4 text-center bg-vnm text-white font-inter text-xs">
          <div className="px-4">
            Phát triển dựa trên{' '}
            <a
              className="underline font-sans-std"
              href="https://est1976.vinamilk.com.vn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vinamilk est. 1976
            </a>
            .
          </div>
          <div className="mt-1 px-4">
            Mã nguồn được lưu trữ trên GitHub{' '}
            <a
              className="underline"
              href="https://github.com/dnhn/vinamilk"
              target="_blank"
              rel="noopener noreferrer"
            >
              @dnhn/vinamilk
            </a>
            .
          </div>
        </div>
      </div>
    </Fragment>
  );
}
