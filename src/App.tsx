import { ChangeEvent, FormEvent, Fragment, useState } from 'react';

import { Data } from './Data';

import Modal from './components/Modal';

export default function App() {
  const [data, setData] = useState<Data>({
    name: '',
    est: '',
    year: '',
    bgColor: '#0213b0',
    color: '#fffff1',
  });
  const [modal, setModal] = useState<boolean>(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>, field: string) {
    setData((prevData) => ({
      ...prevData,
      [field]: e.target.value,
    }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setModal(true);
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
          <div className="w-full mt-10">
            <div className="w-full max-w-xl px-4 mx-auto">
              <form onSubmit={handleSubmit} className="font-inter">
                <div className="grid grid-cols-3 gap-4">
                  <div className="relative float-label-input">
                    <input
                      id="est"
                      name="est"
                      placeholder=" "
                      value={data.est}
                      className="relative flex-col justify-center w-full h-10 md:h-[52px] px-6 text-base border rounded-full outline-none text-vnm border-vnm bg-main"
                      onChange={(e) => handleChange(e, 'est')}
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
                      onChange={(e) => handleChange(e, 'name')}
                    />
                    <label
                      htmlFor="name"
                      className="absolute rounded-full font-sans-std px-2 text-sm transition duration-200 ease-in-out bg-transparent pointer-events-none text-vnm left-2 top-2.5 md:top-4"
                    >
                      Chính giữa
                    </label>
                    <p className="px-2 mt-1 text-xs text-note">
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
                      onChange={(e) => handleChange(e, 'year')}
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
                  <div className="relative float-label-input">
                    <input
                      type="color"
                      id="bgcolor"
                      name="bgcolor"
                      placeholder=" "
                      value={data.bgColor}
                      className="relative flex-col justify-center w-full h-10 md:h-[52px] text-base border rounded-full outline-none text-vnm border-vnm bg-main"
                      onChange={(e) => handleChange(e, 'bgColor')}
                    />
                    <p className="px-2 mt-1 text-xs text-note">Màu nền</p>
                  </div>
                  <div className="relative float-label-input">
                    <input
                      type="color"
                      id="color"
                      name="color"
                      placeholder=" "
                      value={data.color}
                      className="relative flex-col justify-center w-full h-10 md:h-[52px] text-base border rounded-full outline-none text-vnm border-vnm bg-main"
                      onChange={(e) => handleChange(e, 'color')}
                    />
                    <p className="px-2 mt-1 text-xs text-note">Màu chữ</p>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={!data.name || !data.year}
                  className="mt-4 w-full h-10 md:h-[52px] px-6 text-lg text-white border border-white rounded-full outline-none font-sans-std disabled:bg-opacity-50 font-sans-stg bg-vnm"
                >
                  Trình làng ngay!
                </button>
              </form>
            </div>
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
          </div>
        </div>
      </div>
      <Modal open={modal} data={data} handleClose={() => setModal(false)} />
    </Fragment>
  );
}
