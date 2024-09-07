import {FC, memo, ReactNode} from "react";
import {Button} from "@chakra-ui/react";

type Props = {
  children: ReactNode
  onClick: () => void
  disabled?: boolean
  loading?: boolean
}

export const PrimaryButton: FC<Props> = memo((props) => {
  const {children, onClick, disabled = false, loading = false} = props
  return (
    <Button size="md" colorScheme="teal" width="full" my={2} _hover={{opacity: 0.8}} onClick={onClick} disabled={disabled || loading} isLoading={loading}>{children}</Button>
  )
})