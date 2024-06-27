<template>
  <!-- Modal -->
  <!-- Button trigger modal -->
  <button type="button" id="formAdd" hidden class="btn btn-primary" data-bs-toggle="modal"
    data-bs-target="#staticBackdrop">
    Launch static backdrop modal
  </button>

  <!-- Modal -->
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <div class="card card-title">
            <!--Title-->
            Agregar Diagnosis
          </div>
          <button type="button" @click="props.closeFormAdd" class="btn-close" data-bs-dismiss="modal"
            aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!--form add by name-->
          <form @submit.prevent="_addDiagnosis" @keyup="_validData">
            <div class="card card-body">
              <!--test-->
              <div class="col-auto">
                <label for="test">Test</label>
                <select v-model="dataObject.test" class="form-select select-size" id="test">
                  <option v-for="t in arrayTest.values" :key="t" :value="t">
                    {{ t }}
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
              <!--observation-->
              <div class="col-auto">
                <label for="observation">Observación</label>
                <textarea v-model="dataObject.observation" type="text" class="form-control input-size" id="observation"
                  placeholder="" />
                <small v-if="dataObject.observation !== null && dataObject.observation.length > 2083"
                  class="text-alert-error">
                  No se aceptan mas caracteres
                </small>
              </div>
            </div>
            <!--Agregar-->
            <div v-if="
              dataObject.result === '0.0' ||
              dataObject.result === '.0' ||
              dataObject.result === '0.' ||
              dataObject.result === '0' ||
              isNumber(dataObject.result) === false
            " class="modal-footer">
              <button disabled type="submit" class="btn btn-save">Agregar</button>
              <button disabled class="btn btn-light" data-bs-dismiss="modal">
                Cancelar
              </button>
              <button @click="props.closeFormAdd" type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Terminar
              </button>
            </div>
            <div v-else class="modal-footer">
              <button type="submit" class="btn btn-save">Agregar</button>
              <button @click="cleanForm" class="btn btn-light">Cancelar</button>
              <button @click="props.closeFormAdd" type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Terminar
              </button>
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
</template>
<script setup lang="ts">
import { addDiagnosis, getDiagnosis } from '@/data/diagnosis'
import { onMounted, reactive } from 'vue'
import type { _diagnosis } from '@/interfaces/interface'
import { fieldPatient, fieldResult } from '@/validation/diagnosis'
import { useRoute } from 'vue-router'
import { isNumber } from 'chart.js/helpers'

/*======================================================================*/
//props
const props = defineProps({
  title: { type: String, default: 'Detalles' },
  closeFormAdd: {
    type: Function
  }
})
const route = useRoute()
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
  let btnAdd = document.getElementById('formAdd')
  btnAdd?.click()
  console.log(arrayTest)
})
const _validData = async () => {
  fields.validatePatient = await fieldPatient(dataObject.patient)
  fields.validateResult = await fieldResult(dataObject.result)
}
const _addDiagnosis = async () => {
  try {
    let res = await addDiagnosis(dataObject)
    if (res?.statusText === 'Created') {
      message.success = res.data.Message
      message.err = ''
      setTimeout(async () => {
        message.success = ''
        location.reload()
        //location.replace(`/diagnosis/${res.data.results.patient}`)
      }, 1500)
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

  let res = await diagnosisData?.data.results.filter(
    (element: _diagnosis) => element.patient === route.params.name
  )

  //fill fields patient
  dataObject.patient = res[0].patient
  dataObject.sex = res[0]?.sex
  dataObject.condition = res[0]?.condition
  //console.log(res);

  //get newDiagnosis
  const newArrayTest: Array<string> = []
  for (let index = 0; index < res.length; index++) {
    const element = res[index]
    newArrayTest.push(element.test)
  }
  const resulTest = arrayTest.reduce((previous: any, current: string) => {
    const item = newArrayTest.find((element: string) => element === current)
    //console.log(item);
    if (!item) previous = [...previous, current]
    return previous
  }, [])

  arrayTest.values = resulTest
  //console.log(arrayTest.values.length);
  if (arrayTest.values.length === 0) {
    message.success = 'En hora buena ya tienes tus tests completo'
    setTimeout(() => {
      message.success = ''
    }, 5000)
  }
}
const cleanForm = async () => {
  dataObject.patient = ''
  dataObject.sex = 'F'
  dataObject.test = 'LDH/DHL'
  dataObject.result = '0.0'
  dataObject.condition = 'activo'
  dataObject.observation = ''
  message.success = ''
  message.err = ''
  message.warning = ''
  await _validData()
}
</script>

<style></style>
