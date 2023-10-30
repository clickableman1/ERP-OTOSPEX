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
  users: 0,testtable: 0,roles: 0,
})

onMounted(() => {
  const fetchData = async () => {
    const { data: { count: users } } = await axios.get('/users/count');
    const { data: { count: testtable } } = await axios.get('/testtable/count');
    const { data: { count: roles } } = await axios.get('/roles/count');

    counts.users = users;
    counts.testtable = testtable;
    counts.roles = roles;

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
          /></a><a href="#/testtable">
        <CardBoxWidget
        color="text-blue-500"
        :icon="mdiInformation"
        :number="counts.testtable"
        label="Testtable"
          /></a><a href="#/roles">
        <CardBoxWidget
        color="text-blue-500"
        :icon="mdiInformation"
        :number="counts.roles"
        label="Roles"
          /></a>

    </div>
  </SectionMain>
</template>
