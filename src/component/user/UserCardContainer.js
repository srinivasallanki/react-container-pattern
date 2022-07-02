import { useUserData } from './useUserData'
import Card from './../UI/card/Card'

const UserCardContainer = () => {
  const { title, location, email, gender, image } = useUserData()

  return (
    <Card
      title={title}
      location={location}
      email={email}
      gender={gender}
      image={image}
    />
  )
}

export default UserCardContainer
