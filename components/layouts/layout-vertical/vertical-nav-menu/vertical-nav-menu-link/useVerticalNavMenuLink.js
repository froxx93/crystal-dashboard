import { ref } from '@vue/composition-api'
import { isNavLinkActive, navLinkProps } from '@/components/layouts/utils'

export default function useVerticalNavMenuLink(item, router) {
  const isActive = ref(false)

  const linkProps = navLinkProps(item)

  const updateIsActive = () => {
    isActive.value = isNavLinkActive(item, router)
  }

  return {
    isActive,
    linkProps,
    updateIsActive,
  }
}
