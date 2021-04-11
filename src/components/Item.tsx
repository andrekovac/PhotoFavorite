import React from 'react';
import { Alert, useWindowDimensions } from 'react-native';
import styled from 'styled-components/native';

import useFavorites from '../hooks/redux/useFavorites';
import Icon from './Icon';
import SwipeableElement from './SwipeableElement';

const MARGIN_HORIZONTAL = 32;

export type ItemT = {
  id: string;
  author: string;
  download_url: string;
  isFavorite: boolean;
};

/**
 * A single image
 */
const Item = ({ id, author, download_url, isFavorite }: ItemT) => {
  const { width } = useWindowDimensions();
  const itemWidth = width - 2 * MARGIN_HORIZONTAL;
  const [_, updateFavorite] = useFavorites();
  const handleSwipeEnd = (direction: 'left' | 'right') => {
    updateFavorite(id, direction === 'right');
  };

  return (
    <SwipeableElement
      threshold={itemWidth / 3}
      onSwipeEndOverThreshold={handleSwipeEnd}
    >
      <Wrapper
        onPress={() => {
          Alert.alert('Photographer', author, [{ text: 'OK' }], {
            cancelable: false,
          });
        }}
      >
        <Image source={{ uri: download_url }} size={itemWidth} />
        <FavoriteButton onPress={() => updateFavorite(id, !isFavorite)}>
          <Icon name={isFavorite ? 'md-star' : 'md-star-outline'} />
        </FavoriteButton>
      </Wrapper>
    </SwipeableElement>
  );
};

export default Item;

const Wrapper = styled.TouchableOpacity`
  margin: 8px ${MARGIN_HORIZONTAL}px;
`;

const Image = styled.Image<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;

const FavoriteButton = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  padding: 10px;
`;
