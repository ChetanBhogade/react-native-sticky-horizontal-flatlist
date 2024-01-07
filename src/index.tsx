import CustomFlatList from './components/sticky-horizontal-flatlist/StickyHorizontalFlatList';

export const StickyHorizontalFlatList = CustomFlatList;

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b * 12);
}
