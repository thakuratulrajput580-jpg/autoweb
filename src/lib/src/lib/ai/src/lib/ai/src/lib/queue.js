// Simple queue using localforage
import localforage from 'localforage';

const QUEUE_KEY = 'autolabel_queue_v1';

export async function enqueue(item) {
  const q = (await localforage.getItem(QUEUE_KEY)) || [];
  q.push(item);
  await localforage.setItem(QUEUE_KEY, q);
}

export async function dequeue() {
  const q = (await localforage.getItem(QUEUE_KEY)) || [];
  const item = q.shift();
  await localforage.setItem(QUEUE_KEY, q);
  return item;
}

export async function peekAll() {
  return (await localforage.getItem(QUEUE_KEY)) || [];
}
