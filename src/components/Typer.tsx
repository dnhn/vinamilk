import { useEffect, useState } from 'react';

export default function Typer({
  content,
  onComplete,
}: {
  content: string[];
  onComplete?: Function;
}) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < content.length) {
      const timeout = setTimeout(() => {
        setText((prevText) => prevText + content[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      onComplete && onComplete();
    }
  }, [content, index]);

  return <div dangerouslySetInnerHTML={{ __html: text }} />;
}
