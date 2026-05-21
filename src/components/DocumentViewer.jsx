import ReactMarkdown from 'react-markdown';
import { useDocs } from '../hooks/useDocs';
import './DocumentViewer.css';

export function DocumentViewer({ fileName, title }) {
  const { content, loading, error } = useDocs(fileName);

  return (
    <main className="document-viewer">
      <article className="document-container">
        <header className="document-header">
          <h1 className="document-title">{title}</h1>
          <div className="document-divider"></div>
        </header>

        {loading && (
          <div className="document-loading">
            <p>Cargando documento...</p>
          </div>
        )}

        {error && (
          <div className="document-error">
            <p>{error}</p>
          </div>
        )}

        {content && !loading && (
          <div className="document-content">
            <ReactMarkdown
              components={{
                h1: ({ node, ...props }) => <h1 className="markdown-h1" {...props} />,
                h2: ({ node, ...props }) => <h2 className="markdown-h2" {...props} />,
                h3: ({ node, ...props }) => <h3 className="markdown-h3" {...props} />,
                h4: ({ node, ...props }) => <h4 className="markdown-h4" {...props} />,
                p: ({ node, ...props }) => <p className="markdown-p" {...props} />,
                ul: ({ node, ...props }) => <ul className="markdown-ul" {...props} />,
                ol: ({ node, ...props }) => <ol className="markdown-ol" {...props} />,
                li: ({ node, ...props }) => <li className="markdown-li" {...props} />,
                blockquote: ({ node, ...props }) => (
                  <blockquote className="markdown-blockquote" {...props} />
                ),
                code: ({ node, inline, ...props }) =>
                  inline ? (
                    <code className="markdown-code-inline" {...props} />
                  ) : (
                    <code className="markdown-code-block" {...props} />
                  ),
                pre: ({ node, ...props }) => <pre className="markdown-pre" {...props} />,
                a: ({ node, ...props }) => <a className="markdown-link" {...props} />,
                table: ({ node, ...props }) => (
                  <table className="markdown-table" {...props} />
                ),
                thead: ({ node, ...props }) => <thead className="markdown-thead" {...props} />,
                tbody: ({ node, ...props }) => <tbody className="markdown-tbody" {...props} />,
                tr: ({ node, ...props }) => <tr className="markdown-tr" {...props} />,
                th: ({ node, ...props }) => <th className="markdown-th" {...props} />,
                td: ({ node, ...props }) => <td className="markdown-td" {...props} />,
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        )}

        {!loading && !error && !content && (
          <div className="document-empty">
            <p>Selecciona un documento para comenzar</p>
          </div>
        )}
      </article>
    </main>
  );
}
