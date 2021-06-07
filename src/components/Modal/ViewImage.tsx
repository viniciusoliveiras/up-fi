import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        maxW={{ base: '380px', md: '700px', lg: '900px' }}
        maxH={{ base: '400px', md: '450px', lg: '600px' }}
        bg="transparent"
        w="auto"
        h="auto"
      >
        <ModalBody p="0">
          <Image
            src={imgUrl}
            maxW={{ base: '380px', md: '700px', lg: '900px' }}
            maxH={{ base: '400px', md: '450px', lg: '600px' }}
          />
        </ModalBody>

        <ModalFooter
          h="2rem"
          bg="pGray.800"
          borderBottomRadius="6px"
          justifyContent="left"
        >
          <Link href={imgUrl} isExternal fontSize="0.875rem">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
