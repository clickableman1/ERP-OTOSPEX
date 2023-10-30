<script setup>
import { ref, reactive, computed, watch, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { useSettingsStore } from "@/stores/Settings/settings";
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

const settingsStore = useSettingsStore()
const router = useRouter();

const notification = computed(() => settingsStore.notify)
const titleStack = ref(['Admin', 'Settings'])

const form = reactive({

})

onBeforeMount(async () => {

})

const submit = async () => {
  try {

    await settingsStore.newItem({ ...form })
    router.push('/settings');
  } catch (e) {
    console.log(e);
  }
}

const reset = () => {

}

const cancel = () => {
  router.push('/users')
}

watch(() => settingsStore.notify.showNotification, (newValue, oldValue) => {
  if(newValue){
    notify({
      title: "Settings notification",
      text: notification.value.textNotification,
      type: notification.value.typeNotification,
    });
    settingsStore.hideNotification()
  }
});

</script>

<template>
  <SectionTitleBar :title-stack="titleStack" />
  <SectionHeroBar>New Settings</SectionHeroBar>

  <SectionMain>
    <CardBox
      title="New Settings"
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
