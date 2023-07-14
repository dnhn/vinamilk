import { useEffect, useState } from 'react';

export default function Typer({
  content,
  onComplete,
}: {
  content: string[];
  onComplete?: VoidFunction;
}) {
  const [fontLoaded, setFontLoaded] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    document.fonts.load('16px VNM Sans Display Bold', 'V').then(
      () => setFontLoaded(true),
      (e) => console.log(e)
    );
  }, []);

  useEffect(() => {
    if (fontLoaded && index < content.length) {
      const timeout = setTimeout(() => {
        setText((prevText) => prevText + content[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else if (index >= content.length && onComplete) {
      onComplete();
    }
  }, [content, fontLoaded, index, onComplete]);

  return <div dangerouslySetInnerHTML={{ __html: text }} />;
}
