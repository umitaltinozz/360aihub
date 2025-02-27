
import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Özel hata arayüzü
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-aihub-dark p-4">
          <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-lg p-6 max-w-lg w-full">
            <h2 className="text-xl font-bold text-red-400 mb-4">Bir şeyler yanlış gitti</h2>
            <p className="text-white/80 mb-4">
              Uygulama bir hatayla karşılaştı. Lütfen sayfayı yenileyin veya daha sonra tekrar deneyin.
            </p>
            {this.state.error && (
              <div className="bg-black/50 p-3 rounded-md text-white/60 text-sm overflow-auto max-h-40 mb-4">
                <p className="font-mono">{this.state.error.toString()}</p>
              </div>
            )}
            <button
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-aihub-blue to-aihub-purple text-white px-4 py-2 rounded hover:opacity-90"
            >
              Sayfayı Yenile
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
