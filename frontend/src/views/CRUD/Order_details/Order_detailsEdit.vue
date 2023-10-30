<script setup>
import { ref, reactive, onBeforeMount, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useOrder_detailsStore } from "@/stores/Order_details/order_details";
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
const order_detailsStore = useOrder_detailsStore()

const titleStack = ref(['Admin', 'Order_details'])
const notification = computed(() => order_detailsStore.notify)

const order_detailsItem = computed(() => order_detailsStore.data);

const form = reactive({

})

const submit = async () => {
  try {

    await order_detailsStore.edit({id: route.params.id, data: {...form} })
    router.push('/order_details');
  } catch (e) {
    console.log(e);
  }
}

onBeforeMount(async () => {
  try {

    await order_detailsStore.fetch(route.params.id)
    formatData();
  } catch (e) {
    console.log(e)
    order_detailsStore.showNotification(e, 'error');
  }
})

const formatData = () => {

}

watch(() => order_detailsStore.notify.showNotification, (newValue, oldValue) => {
  if(newValue){
    notify({
      title: "Order_details notification",
      text: notification.value.textNotification,
      type: notification.value.typeNotification,
    });
    order_detailsStore.hideNotification()
  }
});

const reset = () => {
  formatData();
}

const cancel = () => {
  router.push('/order_details')
}

</script>

<template>
  <SectionTitleBar :title-stack="titleStack" />
  <SectionHeroBar>Edit Order_details</SectionHeroBar>

  <SectionMain>
    <CardBox
      title="Edit Order_details"
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
