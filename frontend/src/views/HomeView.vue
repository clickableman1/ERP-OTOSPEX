<script setup>
import { ref, onMounted, reactive } from 'vue'
import axios from 'axios';
import {
  mdiInformation,
} from '@mdi/js'

import SectionMain from '@/components/SectionMain.vue'
import SectionTitleBar from '@/components/SectionTitleBar.vue'
import SectionHeroBar from '@/components/SectionHeroBar.vue'
import CardBoxWidget from '@/components/CardBoxWidget.vue'

const titleStack = ref(['Admin', 'Dashboard'])

const counts = reactive({
  users: 0,suppliers: 0,invoices: 0,settings: 0,orders: 0,order_details: 0,purchase_orders: 0,sale_orders: 0,parts: 0,stocks: 0,services: 0,service_orders: 0,vehicle_part_services: 0,permissions: 0,
})

onMounted(() => {
  const fetchData = async () => {
    const { data: { count: users } } = await axios.get('/users/count');
    const { data: { count: suppliers } } = await axios.get('/suppliers/count');
    const { data: { count: invoices } } = await axios.get('/invoices/count');
    const { data: { count: settings } } = await axios.get('/settings/count');
    const { data: { count: orders } } = await axios.get('/orders/count');
    const { data: { count: order_details } } = await axios.get('/order_details/count');
    const { data: { count: purchase_orders } } = await axios.get('/purchase_orders/count');
    const { data: { count: sale_orders } } = await axios.get('/sale_orders/count');
    const { data: { count: parts } } = await axios.get('/parts/count');
    const { data: { count: stocks } } = await axios.get('/stocks/count');
    const { data: { count: services } } = await axios.get('/services/count');
    const { data: { count: service_orders } } = await axios.get('/service_orders/count');
    const { data: { count: vehicle_part_services } } = await axios.get('/vehicle_part_services/count');
    const { data: { count: permissions } } = await axios.get('/permissions/count');

    counts.users = users;
    counts.suppliers = suppliers;
    counts.invoices = invoices;
    counts.settings = settings;
    counts.orders = orders;
    counts.order_details = order_details;
    counts.purchase_orders = purchase_orders;
    counts.sale_orders = sale_orders;
    counts.parts = parts;
    counts.stocks = stocks;
    counts.services = services;
    counts.service_orders = service_orders;
    counts.vehicle_part_services = vehicle_part_services;
    counts.permissions = permissions;

  };
  fetchData();
})

</script>

<template>
  <SectionTitleBar :title-stack="titleStack" />
  <SectionHeroBar>Dashboard</SectionHeroBar>
  <SectionMain>
    <p class="text-2xl text-pavitra-900">
      Welcome, Admin
    </p>
  </SectionMain>
  <SectionMain class="flex flex-wrap">
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6 w-full">

      <a href="#/users">
        <CardBoxWidget
        color="text-blue-500"
        :icon="mdiInformation"
        :number="counts.users"
        label="Users"
          /></a><a href="#/suppliers">
        <CardBoxWidget
        color="text-blue-500"
        :icon="mdiInformation"
        :number="counts.suppliers"
        label="Suppliers"
          /></a><a href="#/invoices">
        <CardBoxWidget
        color="text-blue-500"
        :icon="mdiInformation"
        :number="counts.invoices"
        label="Invoices"
          /></a><a href="#/settings">
        <CardBoxWidget
        color="text-blue-500"
        :icon="mdiInformation"
        :number="counts.settings"
        label="Settings"
          /></a><a href="#/orders">
        <CardBoxWidget
        color="text-blue-500"
        :icon="mdiInformation"
        :number="counts.orders"
        label="Orders"
          /></a><a href="#/order_details">
        <CardBoxWidget
        color="text-blue-500"
        :icon="mdiInformation"
        :number="counts.order_details"
        label="Order_details"
          /></a><a href="#/purchase_orders">
        <CardBoxWidget
        color="text-blue-500"
        :icon="mdiInformation"
        :number="counts.purchase_orders"
        label="Purchase_orders"
          /></a><a href="#/sale_orders">
        <CardBoxWidget
        color="text-blue-500"
        :icon="mdiInformation"
        :number="counts.sale_orders"
        label="Sale_orders"
          /></a><a href="#/parts">
        <CardBoxWidget
        color="text-blue-500"
        :icon="mdiInformation"
        :number="counts.parts"
        label="Parts"
          /></a><a href="#/stocks">
        <CardBoxWidget
        color="text-blue-500"
        :icon="mdiInformation"
        :number="counts.stocks"
        label="Stocks"
          /></a><a href="#/services">
        <CardBoxWidget
        color="text-blue-500"
        :icon="mdiInformation"
        :number="counts.services"
        label="Services"
          /></a><a href="#/service_orders">
        <CardBoxWidget
        color="text-blue-500"
        :icon="mdiInformation"
        :number="counts.service_orders"
        label="Service_orders"
          /></a><a href="#/vehicle_part_services">
        <CardBoxWidget
        color="text-blue-500"
        :icon="mdiInformation"
        :number="counts.vehicle_part_services"
        label="Vehicle_part_services"
          /></a><a href="#/permissions">
        <CardBoxWidget
        color="text-blue-500"
        :icon="mdiInformation"
        :number="counts.permissions"
        label="Permissions"
          /></a>

    </div>
  </SectionMain>
</template>
