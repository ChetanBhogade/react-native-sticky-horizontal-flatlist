import React from 'react';
import { FlatList } from 'react-native';
import type { FlatListProps } from 'react-native';

interface IStickyHorizontalFlatList<T> extends FlatListProps<T> {}

const StickyHorizontalFlatList: React.FC<IStickyHorizontalFlatList<any>> = (
  props
) => {
  const {} = props;

  return <FlatList {...props} />;
};

export default StickyHorizontalFlatList;
