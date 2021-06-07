import {
  Box,
  Flex,
  Button,
  useDisclosure,
  Image,
  useBreakpointValue,
} from '@chakra-ui/react';

import { ModalAddImage } from './Modal/AddImage';

export function Header(): JSX.Element {
  const { onOpen, isOpen, onClose } = useDisclosure();

  const paddingX = useBreakpointValue({ base: 4, md: 16, lg: 20 });
  const imageHeight = useBreakpointValue({ base: 8, md: 10 });

  return (
    <>
      <Box bgColor="pGray.800">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          maxW={1120}
          mx="auto"
          px={paddingX}
          py={6}
        >
          <Image src="logo.svg" h={imageHeight} />
          <Button onClick={() => onOpen()}>Adicionar imagem</Button>
        </Flex>
      </Box>

      <ModalAddImage isOpen={isOpen} onClose={onClose} />
    </>
  );
}
