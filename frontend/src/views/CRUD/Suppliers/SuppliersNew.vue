<script setup>
import { ref, reactive, computed, watch, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { useSuppliersStore } from "@/stores/Suppliers/suppliers";
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

const suppliersStore = useSuppliersStore()
const router = useRouter();

const notification = computed(() => suppliersStore.notify)
const titleStack = ref(['Admin', 'Suppliers'])

const form = reactive({

})

onBeforeMount(async () => {

})

const submit = async () => {
  try {

    await suppliersStore.newItem({ ...form })
    router.push('/suppliers');
  } catch (e) {
    console.log(e);
  }
}

const reset = () => {

}

const cancel = () => {
  router.push('/users')
}

watch(() => suppliersStore.notify.showNotification, (newValue, oldValue) => {
  if(newValue){
    notify({
      title: "Suppliers notification",
      text: notification.value.textNotification,
      type: notification.value.typeNotification,
    });
    suppliersStore.hideNotification()
  }
});

</script>

<template>
  <SectionTitleBar :title-stack="titleStack" />
  <SectionHeroBar>New Suppliers</SectionHeroBar>

  <SectionMain>
    <CardBox
      title="New Suppliers"
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
