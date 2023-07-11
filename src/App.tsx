import { FormEvent, useState } from 'react';

import Modal from './components/Modal';

export default function App() {
  const [modal, setModal] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setModal(true);
  };

  return (
    <>
      <div className="relative flex flex-col h-screen bg-main">
        <div className="flex items-center justify-center py-4 transition-all transform bg-main duration-350 h-14">
          <img src="/images/logo.svg" alt="header" />
        </div>
        <div className="flex flex-col items-center flex-1 pt-10 overflow-auto">
          <div className="lg:text-[110px] md:text-[110px] leading-[85%] md:leading-[85%] text-[60px] py-2 text-center px-3 md:px-4 text-vnm font-sans-display-bold uppercase">
            Vinamilk est. 1976,
            <br /> còn bạn?
          </div>
          <div className="flex flex-col-reverse justify-center w-full gap-10 mx-auto mt-10 lg:flex-row">
            <div className="flex-1 w-full max-w-xl px-4 mx-auto md:px-4">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col flex-1 gap-4 font-inter"
              >
                <div className="relative float-label-input">
                  <input
                    name="name"
                    placeholder=" "
                    id="name"
                    className="relative flex-col justify-center w-full h-10 md:h-[52px] px-6 text-base border rounded-full outline-none text-vnm border-vnm bg-main"
                  />
                  <label
                    htmlFor="year"
                    className="absolute px-2 font-sans-std text-sm transition duration-200 ease-in-out bg-transparent pointer-events-none text-vnm left-2 top-2.5 md:top-4"
                  >
                    Tên của bạn
                  </label>
                  <p className="px-2 mt-1 text-[10px] text-note">
                    Tên giới hạn 6-10 ký tự, không bao gồm ký tự đặc biệt như
                    $,%,&,*.#,@,...
                  </p>
                </div>
                <div className="relative float-label-input">
                  <input
                    name="year"
                    placeholder=" "
                    id="year"
                    className="relative flex-col justify-center w-full h-10 md:h-[52px] px-6 text-base border rounded-full outline-none text-vnm border-vnm bg-main"
                  />
                  <label
                    htmlFor="year"
                    className="absolute font-sans-std px-2 text-sm transition duration-200 ease-in-out bg-transparent pointer-events-none text-vnm left-2 top-2.5 md:top-4"
                  >
                    Năm bạn ra đời
                  </label>
                  <p className="px-2 mt-1 text-[10px] text-note">
                    Nhập 4 chữ số
                  </p>
                </div>
                <button className="h-10 md:h-[52px] px-6 text-lg text-white border border-white rounded-full outline-none font-sans-std disabled:bg-opacity-50 font-sans-stg bg-vnm">
                  Trình làng ngay!
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="w-full overflow-hidden">
          <div className="w-[1920px]">
            <img alt="footer" src="/images/line.svg" />
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
          <div className="px-4">
            Mã nguồn GitHub{' '}
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
      <Modal open={modal} handleClose={() => setModal(false)} />
    </>
  );
}
