import {FC, memo} from "react";
import {Box, Image, Stack, Text} from "@chakra-ui/react";

type Props = {
  id: number
  imageUrl: string
  userName: string
  fullName: string
  onClick: (id :number) => void
}

export const UserCard: FC<Props> = memo((props) => {
  const {id, imageUrl, userName, fullName, onClick} = props

  return (
    <Box w="300px" h="300px" bg="white" borderRadius="8px" shadow={"md"} p={4} _hover={{ cursor: "pointer", opacity: 0.8}}>
      <Stack textAlign={"center"}>
        <Image
          boxSize="160px"
          objectFit="cover"
          src={imageUrl}
          alt={userName}
          borderRadius="full"
          m={"auto"}
          onClick={() => onClick(id)}
        />
        <Text fontSize="lg" fontWeight="bold">{userName}</Text>
        <Text fontSize="sm" color="gray.500">{fullName}</Text>
      </Stack>
    </Box>
  )
})