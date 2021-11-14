import { useState, useEffect } from 'react';
import copy from 'copy-to-clipboard';

export const useCopyClipboard = (
  text,
  options,
) => {
  const [isCopied, setIsCopied] = useState(false);
  const successDuration = options?.successDuration;

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (isCopied && successDuration) {
      const id = setTimeout(() => {
        setIsCopied(false);
      }, successDuration);

      return () => {
        clearTimeout(id);
      };
    }
  }, [isCopied, successDuration]);

  return [
    isCopied,
    () => {
      const didCopy = copy(text);
      setIsCopied(didCopy);
    },
  ];
};
