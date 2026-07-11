import { useNavigate } from '@tanstack/react-router';
import { TRACKS } from '@/content';

const TRACK_IDS = new Set(TRACKS.map((t) => t.id));

/** Route path for a tab id — home lives at "/", everything else at "/<id>". */
export function tabPath(id: string): string {
  return id === 'home' ? '/' : `/${id}`;
}

/** Which tab the current path belongs to (first segment; defaults to home). */
export function pathToTab(pathname: string): string {
  const seg = pathname.replace(/^\/+/, '').split('/')[0];
  return seg && TRACK_IDS.has(seg) ? seg : 'home';
}

/** Navigate to a tab by id and scroll to top. `to` is dynamic, so it's cast to a known
 *  literal to satisfy the router's strict typing; the real path resolves at runtime. */
export function useTabNav() {
  const navigate = useNavigate();
  return (id: string) => {
    void navigate({ to: tabPath(id) as '/' });
    window.scrollTo({ top: 0 });
  };
}
