import { ButtonLink } from 'src/components/ui/Button'
import styles from 'src/components/ui/Button/button.module.scss'
import Icon from 'src/components/ui/Icon'
import { useSession } from 'src/sdk/session'

import { useCart } from '../../../../../sdk/cart/index'

const ButtonSignIn = () => {
  const { id } = useCart()
  const { person } = useSession()

  return (
    <ButtonLink
      data-fs-button-signin-link
      href={
        person?.id ? `/account?orderFormId=${id}` : `/login?orderFormId=${id}`
      }
      className={`${styles.fsButton} text__title-mini`}
      variant="tertiary"
    >
      <Icon name="User" width={18} height={18} weight="bold" />
    </ButtonLink>
  )
}

export default ButtonSignIn
