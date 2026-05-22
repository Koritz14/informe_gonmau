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

    const loadMarkdown = async () => {
      try {
        console.log('Loading markdown:', fileName);
        const fetchUrl = `/docs_gonmau/${fileName}`;
        console.log('Fetch URL:', fetchUrl);

        const response = await fetch(fetchUrl);

        if (!response.ok) {
          throw new Error(`HTTP ${response.status} - ${fileName}`);
        }

        const text = await response.text();
        setContent(text);
        setLoading(false);
        console.log('Document loaded successfully:', fileName);
      } catch (err) {
        console.error('Error loading markdown:', err);
        setError(`Error loading document: ${fileName}`);
        setContent(`# Error\nNo se pudo cargar el documento: ${fileName}\n\nDetalles: ${err.message}`);
        setLoading(false);
      }
    };

    loadMarkdown();
  }, [fileName]);

  return { content, loading, error };
}
