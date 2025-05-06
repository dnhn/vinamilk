import { useEffect, useState } from 'react';

const content = [
  'V',
  'i',
  'n',
  'a',
  'm',
  'i',
  'l',
  'k',
  ' ',
  'e',
  's',
  't',
  '.',
  ' ',
  '1',
  '9',
  '7',
  '6',
  ',<br />',
  '',
  '',
  '',
  '',
  '',
  'c',
  'ò',
  'n',
  ' ',
  'b',
  'ạ',
  'n',
  '?',
  '',
  '',
  '',
  '',
  '',
];

export default function Typer({ onComplete }: { onComplete?: VoidFunction }) {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    document.fonts.load('16px VNM Sans Display Bold', 'V').then(
      () => { setFontLoaded(true) },
      (e: unknown) => { console.error(e) },
    );
  }, []);

  useEffect(() => {
    if (fontLoaded && index < content.length) {
      const timeout = setTimeout(() => {
        setText((prevText) => prevText + content[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, 100);

      return () => { clearTimeout(timeout) };
    } else if (index >= content.length && onComplete) {
      onComplete();
    }
  }, [fontLoaded, index, onComplete]);

  return <div dangerouslySetInnerHTML={{ __html: text }} />;
}
