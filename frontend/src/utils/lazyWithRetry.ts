import React from 'react';

const CHUNK_RETRY_KEY = 'su-curries-chunk-retry';

const isChunkLoadError = (error: unknown): boolean => {
  const maybeError = error as { name?: string; message?: string };
  const message = maybeError?.message || '';

  return (
    maybeError?.name === 'ChunkLoadError' ||
    /loading chunk [^\s]+ failed/i.test(message) ||
    /failed to fetch dynamically imported module/i.test(message)
  );
};

export const lazyWithRetry = <T extends React.ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  componentKey: string
) => {
  return React.lazy(async () => {
    const hasRetried = window.sessionStorage.getItem(CHUNK_RETRY_KEY) === componentKey;

    try {
      const component = await importFn();
      window.sessionStorage.removeItem(CHUNK_RETRY_KEY);
      return component;
    } catch (error) {
      if (isChunkLoadError(error) && !hasRetried) {
        window.sessionStorage.setItem(CHUNK_RETRY_KEY, componentKey);
        window.location.reload();

        // Keep promise pending while the page reloads.
        return new Promise<never>(() => undefined);
      }

      throw error;
    }
  });
};
