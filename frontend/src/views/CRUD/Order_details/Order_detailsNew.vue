<script setup>
import { ref, reactive, computed, watch, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
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
import Editor from '@tinymce/tinymce-vue'
import { notify } from "@kyvg/vue3-notification";

const order_detailsStore = useOrder_detailsStore()
const router = useRouter();

const notification = computed(() => order_detailsStore.notify)
const titleStack = ref(['Admin', 'Order_details'])

const form = reactive({

})

onBeforeMount(async () => {

})

const submit = async () => {
  try {

    await order_detailsStore.newItem({ ...form })
    router.push('/order_details');
  } catch (e) {
    console.log(e);
  }
}

const reset = () => {

}

const cancel = () => {
  router.push('/users')
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

</script>

<template>
  <SectionTitleBar :title-stack="titleStack" />
  <SectionHeroBar>New Order_details</SectionHeroBar>

  <SectionMain>
    <CardBox
      title="New Order_details"
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
        type="reset"
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
