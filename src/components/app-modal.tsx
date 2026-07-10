import { useEffect, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

/**
 * Centered modal on desktop, bottom sheet on mobile. Backdrop blur, ESC to close.
 * Rendered through a portal to <body> so it escapes any ancestor that creates a
 * containing block for fixed positioning (e.g. the header's `backdrop-blur`),
 * which would otherwise push the dialog off-screen.
 */
export function AppModal({
  open,
  onClose,
  children,
  label,
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  label?: string;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label={label}
    >
      <button
        aria-label="Close"
        onClick={onClose}
        className="backdrop-in absolute inset-0 bg-black/50 backdrop-blur-[6px]"
      />
      <div className="sheet-up sm:pop-in relative z-10 w-full rounded-t-[24px] border-rule-soft bg-raised pb-[max(20px,env(safe-area-inset-bottom))] shadow-[var(--shadow-pop)] sm:w-[440px] sm:rounded-[24px] sm:border sm:pb-0">
        <div className="mx-auto mt-3 mb-0.5 h-1 w-9 rounded-full bg-rule-soft sm:hidden" />
        {children}
      </div>
    </div>,
    document.body,
  );
}
