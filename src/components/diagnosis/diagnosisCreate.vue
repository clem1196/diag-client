<template>
  <!-- Modal -->
  <!-- Button trigger modal -->
  <button type="button" id="formCreate" hidden class="btn btn-primary" data-bs-toggle="modal"
    data-bs-target="#staticBackdrop">
    Launch static backdrop modal
  </button>

  <!-- Modal -->
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-light">
          <h5 class="m-2">
            <!--Title-->
            Crear nuevo
          </h5>
          <button type="button" @click="props.closeFormCreate" class="btn-close" data-bs-dismiss="modal"
            aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Agrega sus datos y su prueba de laboratorio
          <form @submit.prevent="_createDiagnosis" @keyup="_validData">
            <div class="card card-body mt-2">
              <!--patient-->
              <div class="col-auto mt-1">
                <label for="patient">Paciente</label>
                <input v-model="dataObject.patient" type="text" class="form-control input-size" id="patient" />
                <small v-if="fields.validatePatient !== '' && fields.validatePatient !== 'Opcional'"
                  class="text-alert-error">
                  {{ fields.validatePatient }}
                </small>
              </div>
              <!--Sex-->
              <div class="col-auto mt-1">
                <label for="Sex">Género</label>
                <select v-model="dataObject.sex" class="form-select select-size" id="Sex">
                  <option value="M">M</option>
                  <option value="F">F</option>
                </select>
              </div>
              <!--test-->
              <div class="col-auto mt-1">
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
              </div>
              <!--result-->
              <div class="col-auto mt-1">
                <label for="result">Result</label>
                <input v-model="dataObject.result" type="text" class="form-control input-size" id="result" />

                <small v-if="fields.validateResult !== '' && fields.validateResult !== 'Opcional'"
                  class="text-alert-error">
                  {{ fields.validateResult }}
                </small>
              </div>
              <!--condition-->
              <div class="col-auto mt-1">
                <label for="condition">Condición</label>
                <select v-model="dataObject.condition" class="form-select select-size" id="condition">
                  <option value="activo">Activo</option>
                  <option value="inactivo">Inactivo</option>
                </select>
              </div>
              <!--observation-->
              <div class="col-auto mt-1">
                <label for="observation">Observación</label>
                <textarea v-model="dataObject.observation" type="text" class="form-control input-size" id="observation"
                  placeholder="" />
                <small v-if="dataObject.observation !== null && dataObject.observation.length > 2083"
                  class="text-alert-error">
                  No se aceptan mas caracteres
                </small>
              </div>
            </div>
            <footer class="modal-footer">
              <button type="submit" class="btn btn-save m-2">Crear</button>
              <button @click="props.closeFormCreate" class="btn btn-light" data-bs-dismiss="modal">
                Cancelar
              </button>
            </footer>
            <!--Messages-->
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
</template>
<script setup lang="ts">
import { addDiagnosis, getDiagnosis } from '@/data/diagnosis'
import { onMounted, reactive } from 'vue'
import type { _diagnosis } from '@/interfaces/interface'
import { fieldPatient, fieldResult } from '@/validation/diagnosis'
import router from '@/router';

//props
const props = defineProps({
  title: { type: String, default: 'Detalles' },
  closeFormCreate: {
    type: Function
  }
})
//Original data
const diagnosis: Array<_diagnosis> = reactive([])
const dataObject = reactive({
  patient: '',
  sex: 'F',
  test: 'LDH/DHL',
  result: '0.0',
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
  console.log(arrayTest)
  let btnCreate = document.getElementById('formCreate')
  btnCreate?.click()
})
const _validData = async () => {
  fields.validatePatient = await fieldPatient(dataObject.patient)
  fields.validateResult = await fieldResult(dataObject.result)
}
const _createDiagnosis = async () => {
  try {
    let res = await addDiagnosis(dataObject)
    if (res?.statusText === 'Created') {
      //message.success = res.data.Message
      message.err = ''
      await router.replace('/diagnosis/' + dataObject.patient)
      location.reload()
      //router.back()
    }
  } catch (error: any | undefined) {
    message.success = ''
    message.err = error.response.data.Message
    console.log(error.response.data.Message)
  }
}
const _getDiagnosis = async () => {
  //console.log(route.params.name);
  const diagnosisData = await getDiagnosis()
  if (diagnosisData?.statusText == 'OK') {
    //diagnosis
    diagnosis.values = diagnosisData?.data.results
    console.log(diagnosisData?.data.results)
  }
}
</script>
<style lang="css" scoped>
.form-modal {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
