import { Box, Container, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box
      data-cy="header-background"
      bg="prime.900"
      height={105}
      display="flex"
      alignItems="center"
    >
      <Container maxW="5xl">
        <Text
          data-cy="header-title"
          textStyle="h2"
          textTransform="uppercase"
          color="white"
        >
          TO DO LIST APP
        </Text>
      </Container>
    </Box>
  );
}
