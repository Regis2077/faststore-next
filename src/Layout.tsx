import { lazy, Suspense } from 'react'
import type { PropsWithChildren } from 'react'

import Footer from 'src/components/common/Footer'
import Navbar from 'src/components/common/Navbar'
import Toast from 'src/components/common/Toast'
import RegionalizationBar from 'src/components/regionalization/RegionalizationBar'
import { useUI } from 'src/sdk/ui/Provider'
import Topbar from './components/common/Topbar/Topbar'

const CartSidebar = lazy(() => import('src/components/cart/CartSidebar'))
const RegionModal = lazy(
  () => import('src/components/regionalization/RegionalizationModal')
)

function Layout({ children }: PropsWithChildren) {
  const { cart: displayCart, modal: displayModal } = useUI()

  return (
    <>
    <Topbar
      register='Registre-se'
      registerLink='/'
      text=' e obtenha um desconto de 45% para cada segunda compra'
      info='aplicam-se termos e condições'
    />
      <Navbar />
      <Toast />

      <main>
        <RegionalizationBar classes="display-mobile" />
        {children}
      </main>

      <Footer />

      {displayCart && (
        <Suspense fallback={null}>
          <CartSidebar />
        </Suspense>
      )}

      {displayModal && (
        <Suspense fallback={null}>
          <RegionModal />
        </Suspense>
      )}
    </>
  )
}

export default Layout
