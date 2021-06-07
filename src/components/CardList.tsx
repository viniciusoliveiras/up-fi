import {
  SimpleGrid,
  useDisclosure,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const gridColumns = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedCard, setSelectedCard] = useState('');

  function handleViewImage(url: string): void {
    onOpen();
    setSelectedCard(url);
  }

  return (
    <>
      <SimpleGrid columns={gridColumns} spacing={10}>
        {cards.map(image => {
          return <Card data={image} viewImage={url => handleViewImage(url)} />;
        })}
      </SimpleGrid>

      {/* TODO MODALVIEWIMAGE */}
      {isOpen && (
        <ModalViewImage
          isOpen={isOpen}
          onClose={onClose}
          imgUrl={selectedCard}
        />
      )}
    </>
  );
}
