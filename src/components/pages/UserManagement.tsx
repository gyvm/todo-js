import {FC, memo, useCallback, useEffect} from "react";
import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import {UserCard} from "../organisms/user/UserCard.tsx";
import {useAllUsers} from "../../hooks/useAllUsers.ts";
import {UserDetailModal} from "../organisms/user/UserDetailModal.tsx";
import {useSelectUser} from "../../hooks/useSelectUser.ts";
import {useLoginUser} from "../../hooks/useLoginUser.ts";

export const UserManagement: FC = memo(() => {
  const { isOpen, onOpen, onClose  } = useDisclosure()
  const { getUsers, loading, users  } = useAllUsers()
  const {onSelectUser, selectedUser} = useSelectUser()
  const { loginUser } = useLoginUser()
  console.log(loginUser)

  useEffect(() => getUsers(), [getUsers])

  const onClickUser = useCallback((id :number) => {
    onSelectUser({id, users, onOpen})
  }, [onSelectUser, users, onOpen])

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
            <Wrap p={{ base: 4, md: 10}}>
              {users.map((user) => (
                <WrapItem key={user.id} m="auto">
                    <UserCard
                      id={user.id}
                      imageUrl={"https://picsum.photos/800"}
                      userName={user.username}
                      fullName={user.name}
                      onClick={onClickUser}
                    />
                </WrapItem>
              ))}
            </Wrap>
      )}
      <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose} isAdmin={loginUser?.isAdmin} />
    </>
  )
})
