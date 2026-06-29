// A small, deterministic hash used to name pre-generated audio clips by their text.
// The build-time generator (scripts/generate-audio.ts) and the runtime player
// (lib/audio.ts) both hash the exact spoken string the same way, so the runtime can
// find the right file without shipping a text→filename map.
//
// FNV-1a, 64-bit, returned as 16 lowercase hex chars. BigInt keeps Node and the
// browser in agreement.
export function hashText(input: string): string {
  let hash = 0xcbf29ce484222325n;
  const prime = 0x100000001b3n;
  const mask = 0xffffffffffffffffn;
  for (let i = 0; i < input.length; i++) {
    hash ^= BigInt(input.charCodeAt(i));
    hash = (hash * prime) & mask;
  }
  return hash.toString(16).padStart(16, '0');
}
