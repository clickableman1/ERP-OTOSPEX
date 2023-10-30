import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import Tables from '@/views/TablesView.vue'
import decode from 'jwt-decode';

function isAuthenticated() {
  const token = localStorage.getItem('token');
  if (!token) return;
  const date = new Date().getTime() / 1000;
  const data = decode(token);
  if (!data) return;
  return date < data.exp;
}

const routes = [

  {
    meta: {
      title: 'Dashboard',
    },
    path: '/',
    name: 'Dashboard',
    component: Home
  },

    {
      meta: {
        title: 'Users'
      },
      path: '/users',
      name: 'Users',
      component: () => import('@/views/CRUD/Users/UsersView.vue'),
    },
    {
      meta: {
        title: 'New Users'
      },
      path: '/users/new',
      name: 'NewUsers',
      component: () => import('@/views/CRUD/Users/UsersNew.vue'),
    },
    {
      meta: {
        title: 'Edit Users'
      },
      path: '/users/:id/edit',
      name: 'EditUsers',
      component: () => import('@/views/CRUD/Users/UsersEdit.vue'),
    },

    {
      meta: {
        title: 'Suppliers'
      },
      path: '/suppliers',
      name: 'Suppliers',
      component: () => import('@/views/CRUD/Suppliers/SuppliersView.vue'),
    },
    {
      meta: {
        title: 'New Suppliers'
      },
      path: '/suppliers/new',
      name: 'NewSuppliers',
      component: () => import('@/views/CRUD/Suppliers/SuppliersNew.vue'),
    },
    {
      meta: {
        title: 'Edit Suppliers'
      },
      path: '/suppliers/:id/edit',
      name: 'EditSuppliers',
      component: () => import('@/views/CRUD/Suppliers/SuppliersEdit.vue'),
    },

    {
      meta: {
        title: 'Invoices'
      },
      path: '/invoices',
      name: 'Invoices',
      component: () => import('@/views/CRUD/Invoices/InvoicesView.vue'),
    },
    {
      meta: {
        title: 'New Invoices'
      },
      path: '/invoices/new',
      name: 'NewInvoices',
      component: () => import('@/views/CRUD/Invoices/InvoicesNew.vue'),
    },
    {
      meta: {
        title: 'Edit Invoices'
      },
      path: '/invoices/:id/edit',
      name: 'EditInvoices',
      component: () => import('@/views/CRUD/Invoices/InvoicesEdit.vue'),
    },

    {
      meta: {
        title: 'Settings'
      },
      path: '/settings',
      name: 'Settings',
      component: () => import('@/views/CRUD/Settings/SettingsView.vue'),
    },
    {
      meta: {
        title: 'New Settings'
      },
      path: '/settings/new',
      name: 'NewSettings',
      component: () => import('@/views/CRUD/Settings/SettingsNew.vue'),
    },
    {
      meta: {
        title: 'Edit Settings'
      },
      path: '/settings/:id/edit',
      name: 'EditSettings',
      component: () => import('@/views/CRUD/Settings/SettingsEdit.vue'),
    },

    {
      meta: {
        title: 'Orders'
      },
      path: '/orders',
      name: 'Orders',
      component: () => import('@/views/CRUD/Orders/OrdersView.vue'),
    },
    {
      meta: {
        title: 'New Orders'
      },
      path: '/orders/new',
      name: 'NewOrders',
      component: () => import('@/views/CRUD/Orders/OrdersNew.vue'),
    },
    {
      meta: {
        title: 'Edit Orders'
      },
      path: '/orders/:id/edit',
      name: 'EditOrders',
      component: () => import('@/views/CRUD/Orders/OrdersEdit.vue'),
    },

    {
      meta: {
        title: 'Order_details'
      },
      path: '/order_details',
      name: 'Order_details',
      component: () => import('@/views/CRUD/Order_details/Order_detailsView.vue'),
    },
    {
      meta: {
        title: 'New Order_details'
      },
      path: '/order_details/new',
      name: 'NewOrder_details',
      component: () => import('@/views/CRUD/Order_details/Order_detailsNew.vue'),
    },
    {
      meta: {
        title: 'Edit Order_details'
      },
      path: '/order_details/:id/edit',
      name: 'EditOrder_details',
      component: () => import('@/views/CRUD/Order_details/Order_detailsEdit.vue'),
    },

    {
      meta: {
        title: 'Purchase_orders'
      },
      path: '/purchase_orders',
      name: 'Purchase_orders',
      component: () => import('@/views/CRUD/Purchase_orders/Purchase_ordersView.vue'),
    },
    {
      meta: {
        title: 'New Purchase_orders'
      },
      path: '/purchase_orders/new',
      name: 'NewPurchase_orders',
      component: () => import('@/views/CRUD/Purchase_orders/Purchase_ordersNew.vue'),
    },
    {
      meta: {
        title: 'Edit Purchase_orders'
      },
      path: '/purchase_orders/:id/edit',
      name: 'EditPurchase_orders',
      component: () => import('@/views/CRUD/Purchase_orders/Purchase_ordersEdit.vue'),
    },

    {
      meta: {
        title: 'Sale_orders'
      },
      path: '/sale_orders',
      name: 'Sale_orders',
      component: () => import('@/views/CRUD/Sale_orders/Sale_ordersView.vue'),
    },
    {
      meta: {
        title: 'New Sale_orders'
      },
      path: '/sale_orders/new',
      name: 'NewSale_orders',
      component: () => import('@/views/CRUD/Sale_orders/Sale_ordersNew.vue'),
    },
    {
      meta: {
        title: 'Edit Sale_orders'
      },
      path: '/sale_orders/:id/edit',
      name: 'EditSale_orders',
      component: () => import('@/views/CRUD/Sale_orders/Sale_ordersEdit.vue'),
    },

    {
      meta: {
        title: 'Parts'
      },
      path: '/parts',
      name: 'Parts',
      component: () => import('@/views/CRUD/Parts/PartsView.vue'),
    },
    {
      meta: {
        title: 'New Parts'
      },
      path: '/parts/new',
      name: 'NewParts',
      component: () => import('@/views/CRUD/Parts/PartsNew.vue'),
    },
    {
      meta: {
        title: 'Edit Parts'
      },
      path: '/parts/:id/edit',
      name: 'EditParts',
      component: () => import('@/views/CRUD/Parts/PartsEdit.vue'),
    },

    {
      meta: {
        title: 'Stocks'
      },
      path: '/stocks',
      name: 'Stocks',
      component: () => import('@/views/CRUD/Stocks/StocksView.vue'),
    },
    {
      meta: {
        title: 'New Stocks'
      },
      path: '/stocks/new',
      name: 'NewStocks',
      component: () => import('@/views/CRUD/Stocks/StocksNew.vue'),
    },
    {
      meta: {
        title: 'Edit Stocks'
      },
      path: '/stocks/:id/edit',
      name: 'EditStocks',
      component: () => import('@/views/CRUD/Stocks/StocksEdit.vue'),
    },

    {
      meta: {
        title: 'Services'
      },
      path: '/services',
      name: 'Services',
      component: () => import('@/views/CRUD/Services/ServicesView.vue'),
    },
    {
      meta: {
        title: 'New Services'
      },
      path: '/services/new',
      name: 'NewServices',
      component: () => import('@/views/CRUD/Services/ServicesNew.vue'),
    },
    {
      meta: {
        title: 'Edit Services'
      },
      path: '/services/:id/edit',
      name: 'EditServices',
      component: () => import('@/views/CRUD/Services/ServicesEdit.vue'),
    },

    {
      meta: {
        title: 'Service_orders'
      },
      path: '/service_orders',
      name: 'Service_orders',
      component: () => import('@/views/CRUD/Service_orders/Service_ordersView.vue'),
    },
    {
      meta: {
        title: 'New Service_orders'
      },
      path: '/service_orders/new',
      name: 'NewService_orders',
      component: () => import('@/views/CRUD/Service_orders/Service_ordersNew.vue'),
    },
    {
      meta: {
        title: 'Edit Service_orders'
      },
      path: '/service_orders/:id/edit',
      name: 'EditService_orders',
      component: () => import('@/views/CRUD/Service_orders/Service_ordersEdit.vue'),
    },

    {
      meta: {
        title: 'Vehicle_part_services'
      },
      path: '/vehicle_part_services',
      name: 'Vehicle_part_services',
      component: () => import('@/views/CRUD/Vehicle_part_services/Vehicle_part_servicesView.vue'),
    },
    {
      meta: {
        title: 'New Vehicle_part_services'
      },
      path: '/vehicle_part_services/new',
      name: 'NewVehicle_part_services',
      component: () => import('@/views/CRUD/Vehicle_part_services/Vehicle_part_servicesNew.vue'),
    },
    {
      meta: {
        title: 'Edit Vehicle_part_services'
      },
      path: '/vehicle_part_services/:id/edit',
      name: 'EditVehicle_part_services',
      component: () => import('@/views/CRUD/Vehicle_part_services/Vehicle_part_servicesEdit.vue'),
    },

    {
      meta: {
        title: 'Permissions'
      },
      path: '/permissions',
      name: 'Permissions',
      component: () => import('@/views/CRUD/Permissions/PermissionsView.vue'),
    },
    {
      meta: {
        title: 'New Permissions'
      },
      path: '/permissions/new',
      name: 'NewPermissions',
      component: () => import('@/views/CRUD/Permissions/PermissionsNew.vue'),
    },
    {
      meta: {
        title: 'Edit Permissions'
      },
      path: '/permissions/:id/edit',
      name: 'EditPermissions',
      component: () => import('@/views/CRUD/Permissions/PermissionsEdit.vue'),
    },

  {
    meta: {
      title: 'Change Password'
    },
    path: '/change_password',
    name: 'Change Password',
    component: () => import('@/views/ChangePasswordView.vue'),
  },
  {
    meta: {
      title: 'Login',
      fullScreen: true
    },
    path: '/login',
    name: 'Login',
    component: () => import('@/views/LoginView.vue')
  },
    {
      meta: {
        title: 'Register',
        fullScreen: true
      },
      path: '/register',
      name: 'Register',
      component: () => import('@/views/RegisterView.vue')
    },
    {
      meta: {
        title: 'Verify',
        fullScreen: true
      },
      path: '/verify-email',
      name: 'Verify',
      component: () => import('@/views/VerifyEmailView.vue')
    },
    {
      meta: {
        title: 'Forgot',
        fullScreen: true
      },
      path: '/forgot',
      name: 'Forgot',
      component: () => import('@/views/ForgotPasswordView.vue')
    },
    {
      meta: {
        title: 'Reset',
        fullScreen: true
      },
      path: '/password-reset',
      name: 'Reset',
      component: () => import('@/views/ResetPasswordView.vue')
    },
  {
    meta: {
      title: 'Error',
      fullScreen: true
    },
    path: '/error',
    name: 'error',
    component: () => import('@/views/ErrorView.vue')
  },
    {
      meta: {
        title: 'Starter',
        fullScreen: true
      },
      path: '/starter',
      name: 'Starter',
      component: () => import('@/views/StarterView.vue')
    },
    {
        meta: {
          title: 'Profile',
        },
        path: '/profile',
        name: 'Profile',
        component: () => import('@/views/ProfileView.vue')
      }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

router.beforeEach(async (to, from) => {
  if (
    !isAuthenticated() && !['Login', 'Register', 'Verify', 'Reset', 'Forgot', 'Starter'].includes(to.name)
  ) {
    return { name: 'Starter' }
  }
})

export default router
