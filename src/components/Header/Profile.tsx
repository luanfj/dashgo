import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr={4} textAlign="right">
          <Text>Luan Fernandes</Text>
          <Text
            color="gray.300"
            fontSize="small"
          >luan.j@adireto.com</Text>
        </Box>
      )}
      
      <Avatar size="md" name="Luan Fernandes" />
    </Flex>
  )
}