import {
  mdiDesktopMac,
  mdiSquareEditOutline,
  mdiTable,
  mdiLock,
  mdiFileDocumentOutline
} from '@mdi/js'

const externalLink = () => {
  return process.env.NODE_ENV === 'production' ? window.location.origin + '/api-docs' : 'http://localhost:8080/api-docs';
}

export default [
  'General',
  [
    {
      to: '/',
      label: 'Dashboard',
      icon: mdiDesktopMac
    }
  ],
  'Entities',
  [

  {
    to: '/users',
    label: 'Users',
    icon: mdiTable,
    component: () => import('@/views/CRUD/Users/UsersView.vue'),
},

  {
    to: '/suppliers',
    label: 'Suppliers',
    icon: mdiTable,
    component: () => import('@/views/CRUD/Suppliers/SuppliersView.vue'),
},

  {
    to: '/invoices',
    label: 'Invoices',
    icon: mdiTable,
    component: () => import('@/views/CRUD/Invoices/InvoicesView.vue'),
},

  {
    to: '/settings',
    label: 'Settings',
    icon: mdiTable,
    component: () => import('@/views/CRUD/Settings/SettingsView.vue'),
},

  {
    to: '/orders',
    label: 'Orders',
    icon: mdiTable,
    component: () => import('@/views/CRUD/Orders/OrdersView.vue'),
},

  {
    to: '/order_details',
    label: 'Order details',
    icon: mdiTable,
    component: () => import('@/views/CRUD/Order_details/Order_detailsView.vue'),
},

  {
    to: '/purchase_orders',
    label: 'Purchase orders',
    icon: mdiTable,
    component: () => import('@/views/CRUD/Purchase_orders/Purchase_ordersView.vue'),
},

  {
    to: '/sale_orders',
    label: 'Sale orders',
    icon: mdiTable,
    component: () => import('@/views/CRUD/Sale_orders/Sale_ordersView.vue'),
},

  {
    to: '/parts',
    label: 'Parts',
    icon: mdiTable,
    component: () => import('@/views/CRUD/Parts/PartsView.vue'),
},

  {
    to: '/stocks',
    label: 'Stocks',
    icon: mdiTable,
    component: () => import('@/views/CRUD/Stocks/StocksView.vue'),
},

  {
    to: '/services',
    label: 'Services',
    icon: mdiTable,
    component: () => import('@/views/CRUD/Services/ServicesView.vue'),
},

  {
    to: '/service_orders',
    label: 'Service orders',
    icon: mdiTable,
    component: () => import('@/views/CRUD/Service_orders/Service_ordersView.vue'),
},

  {
    to: '/vehicle_part_services',
    label: 'Vehicle part services',
    icon: mdiTable,
    component: () => import('@/views/CRUD/Vehicle_part_services/Vehicle_part_servicesView.vue'),
},

  {
    to: '/permissions',
    label: 'Permissions',
    icon: mdiTable,
    component: () => import('@/views/CRUD/Permissions/PermissionsView.vue'),
},

    {
      to: '/change_password',
      label: 'Change Password',
      icon: mdiLock,
      component: () => import('@/views/ChangePasswordView.vue'),
    },
    {
      href: externalLink(),
      label: 'API docs',
      icon: mdiFileDocumentOutline,
    },
  ],
]
