// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: 'tabler:smart-home'
    },
    {
      title: 'Farmers',
      path: '/farmers',
      icon: 'tabler:smart-home'
    },
    {
      title: 'Roles & Permissions',
      icon: 'tabler:settings',

      children: [
        {
          title: 'Roles',
          path: '/roles'
        },
        {
          title: 'Permissions',
          path: '/permissions'
        }
      ]
    }
  ]
}

export default navigation