export default function Footer() {
  return (
    <footer className="py-4 text-center bg-vnm text-white text-xs">
      <div className="px-4">
        Phát triển dựa trên{' '}
        <a
          className="font-sans-std underline"
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
    </footer>
  );
}
