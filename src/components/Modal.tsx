import { MouseEventHandler } from 'react';
import ReactModal from 'react-modal';

import CloseSvg from './CloseSvg';
import DownloadSvg from './DownloadSvg';
import { Data } from '../Data';

export default function Modal({
  open,
  handleClose,
  data,
}: {
  open: boolean;
  handleClose: MouseEventHandler;
  data: Data;
}) {
  return (
    <ReactModal
      isOpen={open}
      onRequestClose={handleClose}
      style={{
        overlay: { backgroundColor: 'rgba(0, 0, 0, .5)' },
        content: {
          transform: 'translate(-50%, -50%)',
          border: 'none',
          borderRadius: 20,
          inset: '50% auto auto 50%',
          width: 410,
          background: '#fffff1',
        },
      }}
    >
      <div className="pb-6">
        <div className="text-[40px] relative py-4 pb-6 leading-[85%] px-4 font-sans-std text-vnm text-center">
          <button
            className="absolute text-xl text-vnm w-fit top-1 right-1"
            onClick={handleClose}
          >
            <CloseSvg />
          </button>
        </div>
        <div className="relative w-[375px] h-[375px]">
          <div
            className="flex flex-col text-[100%] items-center justify-center p-8 text-white w-[375px] h-[375px] bg-vnm"
            style={{
              backgroundColor: data.bgColor,
              color: data.color,
            }}
          >
            <div className="w-full">
              <div className="max-w-full mx-auto w-max">
                <div className="text-[5rem] max-w-full leading-[85%] text-ellipsis whitespace-nowrap uppercase font-sans-display-bold">
                  {data.name}
                </div>
                <div className="flex justify-between -mt-1">
                  <span className="text-[21px] font-sans-display-bold">
                    EST
                  </span>
                  <span className="text-[21px] font-sans-display-bold">
                    {data.year}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button className="absolute flex items-center justify-center h-8 px-4 duration-100 ease-linear transform bg-[#38C0FF]  rounded-full outline-none text-xs left-4 bottom-4 text-vnm font-sans-std w-fit">
            <span>Tải về thay liền avatar</span>
            <span className="ml-1 text-lg">
              <DownloadSvg />
            </span>
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full -right-3">
        <img alt="footer" src="/images/line.png" />
      </div>
    </ReactModal>
  );
}
