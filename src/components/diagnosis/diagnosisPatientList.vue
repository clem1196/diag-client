<template>
  <div class="container-fluid">
    <div>
      <!--Form-->
      <div class="card card-search1">
        <div class="row row-search">

          <!--Search-->
          <div class="col-auto">
            <!--search mode 2-->
            <form @submit.prevent="getSearchDiagnosis">
              <div class="row">
                <div class="col-auto ">
                  <button type="submit" class="btn btn-sm  btn-search">Buscar</button>
                </div>
                <div class="col-auto">
                  <i class="bi-search"></i>
                  <input v-model="text" id="inputMode2" name="inputMode2" class="form-control form-control-sm search"
                    type="search" />
                </div>

                <div class="col-1">
                  <button v-if="success.length > 0 || err.length > 0" @click="getDataPages(1)" type="button"
                    class="btn btn-light btn-sm">
                    X
                  </button>
                  <button v-else disabled type="button" class="btn btn-light btn-sm">x</button>
                </div>
                <div class="col-auto">
                  <!--Add-->
                  <a @click="openModalCreate" title="Create diagnosis" type="button">
                    <h8> No tiene aún? crea Aquí</h8><i class="bi-plus-square-fill"></i>
                  </a>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
      <!--Table-->
      <div class="scale-table">
        <table class="table table-hover text-center">
          <thead>
            <tr class="thead-tr">
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="search in searchDiagnosis.values" :key="search['diagnosis_id']" class="tbody-tr">
              <td>
                <RouterLink class="td-decoration" :to="'/diagnosis/' + search['patient']" title="Detail">
                  {{ search['patient'] }}
                </RouterLink>
              </td>
            </tr>
          </tbody>
          <!--Messages-->
          <small v-if="success.length > 0" class="text-success">{{ success }}</small>
          <small v-if="err.length > 0" class="text-danger">{{ err }}</small>
        </table>
      </div>
      <DiagnosisCreate v-if="showModalCreate" :close-form-create="closeModalCreate"></DiagnosisCreate>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import type { _diagnosis } from '@/interfaces/interface'
import { getDiagnosis } from '@/data/diagnosis'
import { RouterLink } from 'vue-router'
import DiagnosisCreate from './diagnosisCreate.vue';
defineProps({
  title: { type: String, default: 'Pacientes' }
})
onMounted(async () => {
  const diagnosisData = await getDiagnosis()
  if (diagnosisData?.statusText == 'OK') {
    //patients   
    diagnosis.values = diagnosisData.data.patients
  }
  if (diagnosis.length > 0) {
    getDataPages(currentPage.value)
  }
})

//LIST
/*======================================================================*/
const diagnosis: Array<_diagnosis> = reactive([])
//pagination
const currentPage = ref(1)
const rows = ref()
const pagination = ref(true)
//search
//modal
const showModalCreate = ref(false)
let searchDiagnosis: Array<_diagnosis> = reactive([])
const text = ref('')
//Messages
const err = ref('')
const success = ref('')

//Methods or Functions
/*===================================================================*/
//create
const openModalCreate = () => {
  showModalCreate.value = true
}
const closeModalCreate = () => {
  showModalCreate.value = false
}
//search
const getSearchDiagnosis = () => {
  if (diagnosis.values.length > 0) {
    if (text.value.length === 0) {
      getDataPages(1)
    } else {
      const filterItems = (query: string) => {
        const diagnosisValues: any = diagnosis.values
        return diagnosisValues.filter(
          (diag: _diagnosis) => diag.patient.toLowerCase() === query.toLowerCase()
        )
      }
      if (filterItems(text.value).length > 0) {
        searchDiagnosis.values = filterItems(text.value)
        pagination.value = false
        success.value = searchDiagnosis.values.length + ' ' + 'records found'
        err.value = ''
      } else {
        let arrayEmpty: _diagnosis[] = []
        searchDiagnosis.values = arrayEmpty.values
        pagination.value = false
        success.value = ''
        err.value = 'No se encontró, ningun registro para' + ' "' + text.value + '" ' + 'vuelva a intentar'
      }
    }
  }
}
//get number of pages
const getDataPages = async (numPage: number) => {
  let arrayEmpty: _diagnosis[] = []
  searchDiagnosis.values = arrayEmpty.values
  text.value = ''
  err.value = ''
  success.value = ''
  pagination.value = true
  currentPage.value = numPage
  if (searchDiagnosis.values.length > 0) {
    let init = numPage * rows.value - rows.value
    let end = numPage * rows.value
    searchDiagnosis.slice(init, end)
  } else {
    let init = numPage * rows.value - rows.value
    let end = numPage * rows.value
    let diagnosisValues: any = diagnosis.values
    searchDiagnosis.values = diagnosisValues.slice(init, end)
  }
}
</script>

<style lang="css" scoped>
.bi-plus-square-fill {
  color: #24b699;
  font-size: 1.5rem;
  margin-left: 0.5rem;

}
</style>
