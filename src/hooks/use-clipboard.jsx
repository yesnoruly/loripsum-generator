import { useState, useEffect } from 'react';
import copy from 'copy-to-clipboard';

export function useCopyClipboard(
  text,
  options,
) {
  const [isCopied, setIsCopied] = useState(false);
  const successDuration = options && options.successDuration;

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
}
