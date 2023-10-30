<script setup>
import { ref, reactive, computed, watch, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
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
import Editor from '@tinymce/tinymce-vue'
import { notify } from "@kyvg/vue3-notification";

const testtableStore = useTesttableStore()
const router = useRouter();

const notification = computed(() => testtableStore.notify)
const titleStack = ref(['Admin', 'Testtable'])

const form = reactive({

      testfield: '',

})

onBeforeMount(async () => {

})

const submit = async () => {
  try {

    await testtableStore.newItem({ ...form })
    router.push('/testtable');
  } catch (e) {
    console.log(e);
  }
}

const reset = () => {

        form.testfield = '';

}

const cancel = () => {
  router.push('/users')
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

</script>

<template>
  <SectionTitleBar :title-stack="titleStack" />
  <SectionHeroBar>New Testtable</SectionHeroBar>

  <SectionMain>
    <CardBox
      title="New Testtable"
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
