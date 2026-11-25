import React, { useState } from 'react';
import { Languages } from 'lucide-react';
import type { BilingualText, BilingualTier } from '../types';

interface BilingualBlockProps {
  text: BilingualText;
  tier: BilingualTier;
  className?: string;
  primaryClassName?: string;
  secondaryClassName?: string;
  compact?: boolean;
}

/**
 * Progressive Bilingualism Renderer:
 * - Tier 1 (Survival): Chinese primary + concise English reference
 * - Tier 2 (Bridge): Balanced English & Chinese side-by-side/stacked
 * - Tier 3 (Context): English primary + collapsible Chinese translation & cultural hint
 * - Tier 4 (Immersion): Pure English + subtle on-demand Chinese toggle
 */
export const BilingualBlock: React.FC<BilingualBlockProps> = ({
  text,
  tier,
  className = '',
  primaryClassName = 'text-ink-900',
  secondaryClassName = 'text-ink-500',
  compact = false,
}) => {
  const [revealZh, setRevealZh] = useState(false);

  if (tier === 1) {
    return (
      <div className={`space-y-1 ${className}`}>
        <div className={primaryClassName}>{text.zh}</div>
        {!compact && <div className={`text-xs ${secondaryClassName}`}>{text.en}</div>}
        {text.hintZh && (
          <div className="text-xs text-fern-800 bg-fern-50 border border-fern-100 rounded-lg px-2.5 py-1.5 mt-1">
            💡 {text.hintZh}
          </div>
        )}
      </div>
    );
  }

  if (tier === 2) {
    return (
      <div className={`space-y-1 ${className}`}>
        <div className={primaryClassName}>{text.en}</div>
        <div className={`text-sm ${secondaryClassName}`}>{text.zh}</div>
        {text.hintZh && (
          <div className="text-xs text-fern-800 bg-fern-50 border border-fern-100 rounded-lg px-2.5 py-1.5 mt-1">
            💡 {text.hintZh}
          </div>
        )}
      </div>
    );
  }

  // Tier 3 & Tier 4: English primary with on-demand Chinese reveal
  return (
    <div className={`space-y-1.5 ${className}`}>
      <div className={primaryClassName}>{text.en}</div>
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setRevealZh((v) => !v)}
          className="inline-flex items-center gap-1 text-[11px] font-medium text-tasman-700 hover:text-tasman-600 bg-tasman-100/70 px-2 py-0.5 rounded-full transition"
        >
          <Languages className="w-3 h-3" />
          {revealZh ? '收起中文注解' : tier === 3 ? '查看中文解析' : '中文提示'}
        </button>
      </div>
      {revealZh && (
        <div className="text-xs text-ink-700 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 space-y-1">
          <div>{text.zh}</div>
          {text.hintZh && <div className="text-fern-800">💡 {text.hintZh}</div>}
        </div>
      )}
    </div>
  );
};
