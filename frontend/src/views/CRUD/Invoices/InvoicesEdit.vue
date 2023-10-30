<script setup>
import { ref, reactive, onBeforeMount, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useInvoicesStore } from "@/stores/Invoices/invoices";
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
const invoicesStore = useInvoicesStore()

const titleStack = ref(['Admin', 'Invoices'])
const notification = computed(() => invoicesStore.notify)

const invoicesItem = computed(() => invoicesStore.data);

const form = reactive({

})

const submit = async () => {
  try {

    await invoicesStore.edit({id: route.params.id, data: {...form} })
    router.push('/invoices');
  } catch (e) {
    console.log(e);
  }
}

onBeforeMount(async () => {
  try {

    await invoicesStore.fetch(route.params.id)
    formatData();
  } catch (e) {
    console.log(e)
    invoicesStore.showNotification(e, 'error');
  }
})

const formatData = () => {

}

watch(() => invoicesStore.notify.showNotification, (newValue, oldValue) => {
  if(newValue){
    notify({
      title: "Invoices notification",
      text: notification.value.textNotification,
      type: notification.value.typeNotification,
    });
    invoicesStore.hideNotification()
  }
});

const reset = () => {
  formatData();
}

const cancel = () => {
  router.push('/invoices')
}

</script>

<template>
  <SectionTitleBar :title-stack="titleStack" />
  <SectionHeroBar>Edit Invoices</SectionHeroBar>

  <SectionMain>
    <CardBox
      title="Edit Invoices"
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
