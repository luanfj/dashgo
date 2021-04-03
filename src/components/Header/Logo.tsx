import { Text } from '@chakra-ui/react'

export function Logo() {
  return (
    <Text
      fontSize={["2xl", "3xl", "4xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
      display="flex"
    >
      dashgo
      <Text as="span" color="pink.500" ml={1}>.</Text>
    </Text>
  )
}