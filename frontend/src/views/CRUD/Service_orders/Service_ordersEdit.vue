<script setup>
import { ref, reactive, onBeforeMount, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useService_ordersStore } from "@/stores/Service_orders/service_orders";
import SectionMain from '@/components/SectionMain.vue'
import SectionTitleBar from '@/components/SectionTitleBar.vue'
import CardBox from '@/components/CardBox.vue'
import FormCheckRadioPicker from '@/components/FormCheckRadioPicker.vue'
import FormFilePicker from '@/components/FormFilePicker.vue'
import SectionHeroBar from '@/components/SectionHeroBar.vue'
import FormField from '@/components/FormField.vue'
import FormControl from '@/components/FormControl.vue'
import BaseDivider from '@/components/BaseDivider.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import { notify } from "@kyvg/vue3-notification";
import Editor from '@tinymce/tinymce-vue';
import dataFormatter from '@/helpers/dataFormatter';

const router = useRouter();
const route = useRoute();
const service_ordersStore = useService_ordersStore()

const titleStack = ref(['Admin', 'Service_orders'])
const notification = computed(() => service_ordersStore.notify)

const service_ordersItem = computed(() => service_ordersStore.data);

const form = reactive({

})

const submit = async () => {
  try {

    await service_ordersStore.edit({id: route.params.id, data: {...form} })
    router.push('/service_orders');
  } catch (e) {
    console.log(e);
  }
}

onBeforeMount(async () => {
  try {

    await service_ordersStore.fetch(route.params.id)
    formatData();
  } catch (e) {
    console.log(e)
    service_ordersStore.showNotification(e, 'error');
  }
})

const formatData = () => {

}

watch(() => service_ordersStore.notify.showNotification, (newValue, oldValue) => {
  if(newValue){
    notify({
      title: "Service_orders notification",
      text: notification.value.textNotification,
      type: notification.value.typeNotification,
    });
    service_ordersStore.hideNotification()
  }
});

const reset = () => {
  formatData();
}

const cancel = () => {
  router.push('/service_orders')
}

</script>

<template>
  <SectionTitleBar :title-stack="titleStack" />
  <SectionHeroBar>Edit Service_orders</SectionHeroBar>

  <SectionMain>
    <CardBox
      title="Edit Service_orders"
      form
      @submit.prevent="submit"
    >

    <BaseDivider />

    <BaseButtons>
      <BaseButton
        type="submit"
        color="info"
        label="Submit"
      />
      <BaseButton
        type="button"
        color="info"
        outline
        label="Reset"
        @click="reset"
      />
      <BaseButton
        type="cancel"
        color="danger"
        outline
        label="Cancel"
        @click="cancel"
      />
    </BaseButtons>
  </CardBox>
</SectionMain>

</template>
