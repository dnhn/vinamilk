import { useCallback, useRef } from 'react';
import { toPng } from 'html-to-image';

import { IData } from '../Types';

import DownloadSvg from './DownloadSvg';

export default function Preview({
  data,
  classes = '',
}: {
  data: IData;
  classes?: string;
}) {
  const final = useRef<HTMLDivElement>(null);

  const download = useCallback(() => {
    if (final.current === null) {
      return;
    }

    toPng(final.current, {
      cacheBust: true,
      width: 375,
      height: 375,
      canvasWidth: 1000,
      canvasHeight: 1000,
      pixelRatio: 1,
    })
      .then((url) => {
        const link = document.createElement('a');

        link.href = url;
        link.download = 'image';
        link.click();
      })
      .catch((e) => console.error(e));
  }, [final]);

  return (
    <div className={`flex flex-col gap-4 items-center ${classes}`}>
      <div
        ref={final}
        className="aspect-square w-[375px] p-8 flex flex-col justify-center items-center bg-vnm text-white"
        style={{
          backgroundColor: data.bgColor,
          color: data.color,
        }}
      >
        <div className="w-full">
          <div className="mx-auto w-max max-w-full">
            <div
              className="max-w-full font-sans-display-bold text-[5rem] leading-[85%] text-ellipsis whitespace-nowrap"
              style={{
                textTransform: data.uppercase ? 'uppercase' : 'none',
              }}
            >
              {data.name}
            </div>
            {data.name && (
              <div className="-mt-1 flex justify-between">
                <span className="font-sans-display-bold text-[21px]">
                  {data.est || (data.year && 'EST')}
                </span>
                <span className="font-sans-display-bold text-[21px]">
                  {data.year}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <button
        disabled={!data.name}
        onClick={download}
        className="border border-white rounded-full w-full h-10 px-6 flex items-center justify-center gap-1 bg-vnm text-white font-sans-std text-lg md:h-[52px] focus-within:outline-vnm focus-within:outline-offset-4 disabled:bg-opacity-50"
      >
        <span>Tải về thay avatar liền</span>
        <span className="text-2xl">
          <DownloadSvg />
        </span>
      </button>
      <p className="text-note text-xs">Hãy thử tải lại nếu hình bị lỗi nha.</p>
    </div>
  );
}
