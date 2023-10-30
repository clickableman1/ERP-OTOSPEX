<script setup>
import { ref, reactive, onBeforeMount, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useInventory_historyStore } from "@/stores/Inventory_history/inventory_history";
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
const inventory_historyStore = useInventory_historyStore()

const titleStack = ref(['Admin', 'Inventory_history'])
const notification = computed(() => inventory_historyStore.notify)

const inventory_historyItem = computed(() => inventory_historyStore.data);

const form = reactive({

})

const submit = async () => {
  try {

    await inventory_historyStore.edit({id: route.params.id, data: {...form} })
    router.push('/inventory_history');
  } catch (e) {
    console.log(e);
  }
}

onBeforeMount(async () => {
  try {

    await inventory_historyStore.fetch(route.params.id)
    formatData();
  } catch (e) {
    console.log(e)
    inventory_historyStore.showNotification(e, 'error');
  }
})

const formatData = () => {

}

watch(() => inventory_historyStore.notify.showNotification, (newValue, oldValue) => {
  if(newValue){
    notify({
      title: "Inventory_history notification",
      text: notification.value.textNotification,
      type: notification.value.typeNotification,
    });
    inventory_historyStore.hideNotification()
  }
});

const reset = () => {
  formatData();
}

const cancel = () => {
  router.push('/inventory_history')
}

</script>

<template>
  <SectionTitleBar :title-stack="titleStack" />
  <SectionHeroBar>Edit Inventory_history</SectionHeroBar>

  <SectionMain>
    <CardBox
      title="Edit Inventory_history"
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
