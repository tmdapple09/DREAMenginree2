

export const QUEUE_SIZE: i32 = 1024; 
const ENTRY_WORDS: i32 = 4; 

const queue = new StaticArray<u32>(QUEUE_SIZE * ENTRY_WORDS);
let head: i32 = 0;
let tail: i32 = 0;

@inline
function entryIndex(pos: i32): i32 {
  return pos * ENTRY_WORDS;
}


export function enqueue(channel: u32, event: u32, payloadPtr: u32, payloadLen: u32): i32 {
  const next = (head + 1) % QUEUE_SIZE;
  if (next == tail) return 0; 

  const idx = entryIndex(head);
  const base = changetype<usize>(queue) + (idx << 2); 

  atomic.store<u32>(base, (channel << 16) | (event & 0xffff));
  atomic.store<u32>(base + 4, payloadPtr);
  atomic.store<u32>(base + 8, payloadLen);
  atomic.store<u32>(base + 12, 0); 

  head = next;
  return 1;
}


export function dequeue(outPtr: usize): i32 {
  if (tail == head) return 0; 

  const idx = entryIndex(tail);
  const base = changetype<usize>(queue) + (idx << 2);

  store<u32>(outPtr, atomic.load<u32>(base));
  store<u32>(outPtr + 4, atomic.load<u32>(base + 4));
  store<u32>(outPtr + 8, atomic.load<u32>(base + 8));
  store<u32>(outPtr + 12, atomic.load<u32>(base + 12));

  tail = (tail + 1) % QUEUE_SIZE;
  return 1;
}


export function reset(): void {
  head = 0;
  tail = 0;
}

