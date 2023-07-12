import { IData } from '../Data';

import DownloadSvg from './DownloadSvg';

export default function Preview({ data }: { data: IData }) {
  function download() {}

  return (
    <div className="flex flex-col gap-4">
      <div
        className="mx-auto aspect-square w-[375px] max-w-full p-8 flex flex-col justify-center items-center bg-vnm text-white"
        style={{
          backgroundColor: data.bgColor,
          color: data.color,
        }}
      >
        <div className="w-full">
          <div className="max-w-full mx-auto w-max">
            <div
              className="text-[5rem] max-w-full leading-[85%] text-ellipsis whitespace-nowrap font-sans-display-bold"
              style={{
                textTransform: data.uppercase ? 'uppercase' : 'none',
              }}
            >
              {data.name}
            </div>
            {data.name && data.year && (
              <div className="flex justify-between -mt-1">
                <span className="text-[21px] font-sans-display-bold">
                  {data.est || 'EST'}
                </span>
                <span className="text-[21px] font-sans-display-bold">
                  {data.year}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <button
        disabled={!data.name || !data.year}
        onClick={download}
        className="border border-white rounded-full h-10 px-6 flex items-center justify-center gap-1 bg-vnm text-white font-sans-std text-lg md:h-[52px] focus-within:outline-vnm focus-within:outline-offset-4 disabled:bg-opacity-50"
      >
        <span>Tải về thay avatar liền</span>
        <span className="text-2xl">
          <DownloadSvg />
        </span>
      </button>
    </div>
  );
}
