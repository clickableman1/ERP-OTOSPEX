<script setup>
import { ref, reactive, onBeforeMount, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePartsStore } from "@/stores/Parts/parts";
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
const partsStore = usePartsStore()

const titleStack = ref(['Admin', 'Parts'])
const notification = computed(() => partsStore.notify)

const partsItem = computed(() => partsStore.data);

const form = reactive({

})

const submit = async () => {
  try {

    await partsStore.edit({id: route.params.id, data: {...form} })
    router.push('/parts');
  } catch (e) {
    console.log(e);
  }
}

onBeforeMount(async () => {
  try {

    await partsStore.fetch(route.params.id)
    formatData();
  } catch (e) {
    console.log(e)
    partsStore.showNotification(e, 'error');
  }
})

const formatData = () => {

}

watch(() => partsStore.notify.showNotification, (newValue, oldValue) => {
  if(newValue){
    notify({
      title: "Parts notification",
      text: notification.value.textNotification,
      type: notification.value.typeNotification,
    });
    partsStore.hideNotification()
  }
});

const reset = () => {
  formatData();
}

const cancel = () => {
  router.push('/parts')
}

</script>

<template>
  <SectionTitleBar :title-stack="titleStack" />
  <SectionHeroBar>Edit Parts</SectionHeroBar>

  <SectionMain>
    <CardBox
      title="Edit Parts"
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
