import { useRouter } from 'next/router'

const User = () => {
  const router = useRouter()
  const { id } = router.query

  return <p>Post: {id}</p>
}

export default User