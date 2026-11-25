import React from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';

interface State {
  hasError: boolean;
  errorMessage: string;
}

export class ErrorBoundary extends React.Component<{ children: React.ReactNode }, State> {
  state: State = { hasError: false, errorMessage: '' };

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      errorMessage: error?.message || '未知界面渲染异常',
    };
  }

  componentDidCatch(error: Error) {
    console.error('[KiwiPath ErrorBoundary]', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-alps-50 flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-white rounded-2xl border border-amber-200 shadow-sm p-6 space-y-4">
            <div className="flex items-center gap-3 text-amber-700">
              <AlertTriangle className="w-6 h-6 shrink-0" />
              <h1 className="text-lg font-bold">页面遇到意外错误（已拦截，本地数据安全）</h1>
            </div>
            <p className="text-sm text-ink-700 leading-relaxed">
              你的学习进度、清单与简历保存在本地浏览器存储中，不会丢失。点击下方按钮重新加载页面即可恢复。
            </p>
            <div className="rounded-lg bg-slate-50 border border-slate-200 p-3 text-xs font-mono text-slate-600 break-all">
              {this.state.errorMessage}
            </div>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-fern-900 text-white px-4 py-2.5 text-sm font-semibold hover:bg-fern-800 transition"
            >
              <RotateCcw className="w-4 h-4" />
              重新加载 KiwiPath
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
