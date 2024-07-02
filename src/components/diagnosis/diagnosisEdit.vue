<template>
  <div class="container-fluid mt-3">
    <!-- Button trigger modal -->
    <button type="button" id="btnEdit" hidden class="btn btn-primary" data-bs-toggle="modal"
      data-bs-target="#staticBackdrop">
      Edit
    </button>

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <!--<h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>-->
            <button @click="props.closeFormEdit" type="button" class="btn-close" data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="_editDiagnosis" @keyup="_validData">
              <div class="card card-title">
                <!--Title-->
                <div>Editar Diagnosis</div>
              </div>
              <div class="card card-body">
                <!--patient-->
                <div class="col-auto">
                  <label for="patient">Paciente</label>
                  <input v-model="dataObject.patient" type="text" class="form-control input-size" id="patient" />
                  <small v-if="fields.validatePatient === '' || fields.validatePatient === 'Opcional'"
                    class="text-alert-optional">
                    {{ fields.validatePatient }}
                  </small>
                  <small v-else class="text-alert-error">{{ fields.validatePatient }}</small>
                </div>
                <!--Sex-->
                <div class="col-auto">
                  <label for="Sex">Género</label>
                  <select v-model="dataObject.sex" class="form-select select-size" id="Sex">
                    <option value="M">M</option>
                    <option value="F">F</option>
                  </select>
                </div>

                <!--test-->
                <div class="col-auto">
                  <label for="test">Test</label>
                  <select v-model="dataObject.test" class="form-select select-size" id="test">
                    <option v-for="at in arrayTest" :key="at" :value="at">
                      {{ at }}
                    </option>
                  </select>

                  <small v-if="
                    dataObject.test === '' ||
                    dataObject.test.length === 0 ||
                    dataObject.test === undefined
                  " class="text-alert-error">
                    Requerido
                  </small>
                  <small v-else class="text-alert-optional"></small>
                </div>
                <!--result-->
                <div class="col-auto">
                  <label for="result">Result</label>
                  <input v-model="dataObject.result" type="text" class="form-control input-size" id="result" />

                  <small v-if="fields.validateResult === '' || fields.validateResult === 'Opcional'"
                    class="text-alert-optional">
                    {{ fields.validateResult }}
                  </small>
                  <small v-else class="text-alert-error">{{ fields.validateResult }}</small>
                </div>
                <!--condition-->
                <div class="col-auto">
                  <label for="condition">Condición</label>
                  <select v-model="dataObject.condition" class="form-select select-size" id="condition">
                    <option value="activo">Activo</option>
                    <option value="inactivo">Inactivo</option>
                  </select>
                </div>
                <!--observation-->
                <div class="col-auto">
                  <label for="observation">Observación</label>
                  <textarea v-model="dataObject.observation" type="text" class="form-control input-size"
                    id="observation" placeholder="" />
                  <small v-if="dataObject.observation !== null && dataObject.observation.length > 2083"
                    class="text-alert-error">
                    No se aceptan mas caracteres
                  </small>
                </div>
              </div>

              <!--Editar-->
              <div class="modal-footer">
                <button type="submit" class="btn btn-save m-2" data-bs-dismiss="modal">Actualizar</button>
                <button @click="props.closeFormEdit" class="btn btn-light" data-bs-dismiss="modal">Cancelar</button>
              </div>
            </form>

            <p v-if="message.success.length > 0" class="alert alert-success mt-2" role="alert">
              <i class="bi-check-circle-fill m-1"></i>{{ message.success }}
            </p>
            <p v-if="message.warning.length > 0" class="alert alert-warning mt-2" role="alert">
              <i class="bi-exclamation-triangle-fill m-1"></i>{{ message.warning }}
            </p>
            <p v-if="message.err.length > 0" class="alert alert-danger mt-2">
              <i class="bi-exclamation-triangle-fill m-1"></i>{{ message.err }}
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script setup lang="ts">
//import usersList from './usersList.vue'
import { getDiagnosis, editDiagnosis, getDiag } from '@/data/diagnosis'
import { onMounted, reactive } from 'vue'
import type { _diagnosis } from '@/interfaces/interface'

import { useRoute } from 'vue-router'
import router from '@/router'
import { fieldPatient, fieldResult } from '@/validation/diagnosis'
//props
const props = defineProps({
  title: { type: String, default: 'Detalles' },
  closeFormEdit: {
    type: Function
  },
  editId: {
    type: Number,
    default: 0
  }
})
const route: any = useRoute()
const diagnosis: Array<_diagnosis> = reactive([])
const diagnosisOne: Array<_diagnosis> = reactive([])
//Original data
const dataObject = reactive({
  patient: '',
  sex: 'F',
  test: 'LDH/DHL',
  result: '0.0',
  treatment: '',
  condition: 'activo',
  observation: ''
})
//fill test
let arrayTest = reactive([
  'LDH/DHL',
  'GLUCOSA',
  'COL. TOTAL',
  'TRIGLICERIDOS',
  'UREA',
  'Co2',
  'VCM',
  'RDW ADE IDE',
  'GGTP',
  'TGO AST',
  'TGP ALT',
  'ACIDO URICO',
  'HEMOGLOBINA'
])
//Data to validate
const fields = reactive({
  validatePatient: '',
  validateResult: ''
})
//server or catch messages
const message = reactive({
  success: '',
  warning: '',
  err: ''
})

onMounted(async () => {
  await _getDiagnosis()
  _validData()
  const btn_edit = document.getElementById('btnEdit')
  btn_edit?.click()
})
const _getDiagnosis = async () => {
  //console.log(route.params.name);
  const diagnosisData = await getDiagnosis()
  if (diagnosisData?.statusText == 'OK') {
    //diagnosis
    diagnosis.values = diagnosisData?.data.results
    console.log(diagnosisData?.data.results)
  }

  if (props.editId !== 0) {
    const diagnosisOneData = await getDiag(props.editId)
    if (diagnosisOneData?.statusText == 'OK') {
      diagnosisOne.values = diagnosisOneData?.data.results
    }
    const myDiagnosis = JSON.parse(JSON.stringify(diagnosisOne.values))[0]
    //fill fields diagnosis
    dataObject.patient = myDiagnosis['patient']
    dataObject.sex = myDiagnosis['sex'] === 'M' ? 'M' : 'F'
    dataObject.test = myDiagnosis['test']
    dataObject.result = myDiagnosis['result']
    dataObject.treatment = myDiagnosis['treatment']
    dataObject.condition = myDiagnosis['condition'] === 'activo' ? 'activo' : 'inactivo'
    dataObject.observation = myDiagnosis['observation']
  }
}
const _editDiagnosis = async () => {
  try {
    let res = await editDiagnosis(props.editId, dataObject)
    if (res?.statusText === 'Created') {
      message.success = res.data.Message
      message.err = ''
      //router.back()
      location.reload()
    } else {
      console.log('no hubo cambios')
      message.warning = 'Modifique algo o presione cancelar'
    }
  } catch (error: any | undefined) {
    message.success = ''
    message.err = error.response.data.Message
    console.log(error.response.data.Message)
  }
}
const _validData = async () => {
  fields.validatePatient = await fieldPatient(dataObject.patient)
  fields.validateResult = await fieldResult(dataObject.result)
}
const cleanForm = async () => {
  dataObject.patient = ''
  dataObject.sex = 'F'
  dataObject.test = 'LDH/DHL'
  dataObject.result = '0.0'
  dataObject.treatment = '0.0'
  dataObject.condition = 'activo'
  dataObject.observation = ''
  message.success = ''
  message.err = ''
  message.warning = ''
  await _validData()
}
</script>

<style></style>
