<script setup>
import { ref, reactive, onBeforeMount, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTesttableStore } from "@/stores/Testtable/testtable";
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
const testtableStore = useTesttableStore()

const titleStack = ref(['Admin', 'Testtable'])
const notification = computed(() => testtableStore.notify)

const testtableItem = computed(() => testtableStore.data);

const form = reactive({

    testfield: '',

})

const submit = async () => {
  try {

    await testtableStore.edit({id: route.params.id, data: {...form} })
    router.push('/testtable');
  } catch (e) {
    console.log(e);
  }
}

onBeforeMount(async () => {
  try {

    await testtableStore.fetch(route.params.id)
    formatData();
  } catch (e) {
    console.log(e)
    testtableStore.showNotification(e, 'error');
  }
})

const formatData = () => {

    form.testfield = testtableItem.value.testfield

}

watch(() => testtableStore.notify.showNotification, (newValue, oldValue) => {
  if(newValue){
    notify({
      title: "Testtable notification",
      text: notification.value.textNotification,
      type: notification.value.typeNotification,
    });
    testtableStore.hideNotification()
  }
});

const reset = () => {
  formatData();
}

const cancel = () => {
  router.push('/testtable')
}

</script>

<template>
  <SectionTitleBar :title-stack="titleStack" />
  <SectionHeroBar>Edit Testtable</SectionHeroBar>

  <SectionMain>
    <CardBox
      title="Edit Testtable"
      form
      @submit.prevent="submit"
    >

    <FormField
      label="Testfield"
    >
      <FormControl
        v-model="form.testfield"
        placeholder="Your Testfield"
        />
    </FormField>

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
