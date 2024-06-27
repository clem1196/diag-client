<template>
  <div>
    <button id="delete" type="button" data-bs-toggle="modal" data-bs-target="#deleteModal" data-bs-whatever="@mdo"
      hidden></button>
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Delete</h5>
            <button type="button" @click="props.closeFormRemove" class="btn-close" data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div class="modal-body">
            {{ title }}
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-danger btn-sm" @click="_deleteDiagnosis">Yes</button>


            <button @click="props.closeFormRemove" class="btn btn-light" data-bs-dismiss="modal">
              Cancelar
            </button>
          </div>
        </div>
        <p v-if="message.success" class="alert alert-success mt-2" role="alert">
          <i class="bi-check-circle-fill m-1"></i>{{ message.success }}
        </p>
        <p v-if="message.err" class="alert alert-danger mt-2">
          <i class="bi-exclamation-triangle-fill m-1"></i>{{ message.err }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { deleteDiagnosis } from '@/data/diagnosis'

import { onMounted, reactive, ref } from 'vue'
//props
const props = defineProps({
  closeFormRemove: {
    type: Function
  },
  removeId: {
    type: Number,
    default: 0
  }
})

const title = ref('Do you really want to delete this?')
const message = reactive({
  success: '',
  err: ''
})
onMounted(async () => {
  doClick()
  console.log(props.removeId)
})
const doClick = () => {
  const del: HTMLElement | null = document.getElementById('delete')
  if (del !== null) {
    del.click()
  }
}
const _deleteDiagnosis = async () => {
  try {

    let res = await deleteDiagnosis(props.removeId)
    if (res?.statusText == 'OK') {
      message.success = res.data.Message
      message.err = ''
      location.reload()
    }

  } catch (error: any) {
    message.err = error.response.data.Message
    message.success = ''
    console.log(error.response.data.Message)
  }
}
</script>
<style></style>
