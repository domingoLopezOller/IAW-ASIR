"use client";

import { ErrorBoundary, FallbackProps } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>
        Reintentar
      </button>
    </div>
  );
}

export default function LocalErrorBoundary({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ErrorBoundary>
  );
}
