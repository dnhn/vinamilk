import { Fragment, useState } from 'react';

import { IData } from './Data';

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
      <div className="relative flex flex-col h-screen bg-main">
        <div className="flex items-center justify-center py-4 transition-all transform bg-main duration-350 h-14">
          <img src="/images/logo.svg" alt="header" />
        </div>
        <div className="flex flex-col items-center flex-1 pt-10 overflow-auto">
          <div className="lg:text-[110px] md:text-[110px] leading-[85%] md:leading-[85%] text-[60px] py-2 text-center px-3 md:px-4 text-vnm font-sans-display-bold uppercase">
            Vinamilk est. 1976,
            <br /> còn bạn?
          </div>
          <div className="mx-auto py-10 w-full max-w-xl px-4 flex flex-col gap-4 font-inter">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="relative float-label-input">
                <input
                  id="est"
                  name="est"
                  placeholder=" "
                  value={data.est}
                  className="relative flex-col justify-center w-full h-10 md:h-[52px] px-6 text-base border rounded-full outline-none text-vnm border-vnm bg-main"
                  onChange={(e) => handleChange('est', e.target.value)}
                />
                <label
                  htmlFor="est"
                  className="absolute rounded-full font-sans-std px-2 text-sm transition duration-200 ease-in-out bg-transparent pointer-events-none text-vnm left-2 top-2.5 md:top-4"
                >
                  Bên trái
                </label>
                <p className="px-2 mt-1 text-xs text-note">
                  Có hay không cũng được
                </p>
              </div>
              <div className="relative float-label-input">
                <input
                  id="name"
                  name="name"
                  placeholder=" "
                  value={data.name}
                  className="relative flex-col justify-center w-full h-10 md:h-[52px] px-6 text-base border rounded-full outline-none text-vnm border-vnm bg-main"
                  onChange={(e) => handleChange('name', e.target.value)}
                />
                <label
                  htmlFor="name"
                  className="absolute rounded-full font-sans-std px-2 text-sm transition duration-200 ease-in-out bg-transparent pointer-events-none text-vnm left-2 top-2.5 md:top-4"
                >
                  Chính giữa
                </label>
                <p className="mt-1 px-2 text-xs text-note">
                  Viết sao cũng được
                </p>
              </div>
              <div className="relative float-label-input">
                <input
                  id="year"
                  name="year"
                  placeholder=" "
                  value={data.year}
                  className="relative flex-col justify-center w-full h-10 md:h-[52px] px-6 text-base border rounded-full outline-none text-vnm border-vnm bg-main"
                  onChange={(e) => handleChange('year', e.target.value)}
                />
                <label
                  htmlFor="year"
                  className="absolute rounded-full font-sans-std px-2 text-sm transition duration-200 ease-in-out bg-transparent pointer-events-none text-vnm left-2 top-2.5 md:top-4"
                >
                  Bên phải
                </label>
                <p className="px-2 mt-1 text-xs text-note">
                  Số hay chữ gì cũng được
                </p>
              </div>
            </div>
            <div className="grid gap-4 grid-cols-3">
              <div className="relative float-label-input">
                <input
                  type="color"
                  id="bgcolor"
                  name="bgcolor"
                  value={data.bgColor}
                  className="mx-auto block w-10 h-10 border rounded-full border-vnm bg-main md:w-[52px] md:h-[52px]"
                  onChange={(e) => handleChange('bgColor', e.target.value)}
                />
                <p className="mt-1 px-2 text-center text-xs text-note">
                  Màu nền
                </p>
              </div>
              <div className="relative float-label-input">
                <input
                  type="color"
                  id="color"
                  name="color"
                  value={data.color}
                  className="mx-auto block w-10 h-10 border rounded-full border-vnm bg-main md:w-[52px] md:h-[52px]"
                  onChange={(e) => handleChange('color', e.target.value)}
                />
                <p className="mt-1 px-2 text-center text-xs text-note">
                  Màu chữ
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
                  className="mx-auto border border-vnm flex justify-center items-center aspect-square h-10 rounded-full bg-main text-vnm text-2xl font-bold md:h-[52px]"
                >
                  {data.uppercase && '✓'}
                </label>
                <p className="mt-1 px-2 text-center text-xs text-note">
                  <label htmlFor="uppercase">In hoa</label>
                </p>
              </div>
            </div>
            <Preview data={data} />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-4 text-white bg-vnm text-xs font-inter">
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
          <div className="px-4 mt-1">
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
