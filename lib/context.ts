import { romansContextItems, type ContextItem } from '../data/romans-context';

export function getInitialContextItem(): ContextItem {
  return romansContextItems[0];
}

export function getContextItem(id: string): ContextItem | undefined {
  return romansContextItems.find((item) => item.id === id);
}
