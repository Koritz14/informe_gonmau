import { useState, useEffect } from 'react';

export function useDocs(fileName) {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!fileName) {
      setContent('');
      return;
    }

    setLoading(true);
    setError(null);

    // Dynamically import markdown files
    import(/* @vite-ignore */`../../docs_gonmau/${fileName}?raw`)
      .then((module) => {
        setContent(module.default);
        setLoading(false);
      })
      .catch((err) => {
        console.error(`Error loading ${fileName}:`, err);
        setError(`Error loading document: ${fileName}`);
        setLoading(false);
      });
  }, [fileName]);

  return { content, loading, error };
}
