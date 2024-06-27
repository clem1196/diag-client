<template>
  <div class="container-fluid">
    <div class="card card-title">{{ title }}</div>
    <!--LIST-->
    <div>
      <!--Form-->
      <div class="card card-search">
        <div class="row row-search">
          <!--Switch-->
          <div class="col-auto">
            <div class="form-switch form-check" title="Clasic mode">
              <label class="form-check-label" for="switDiagnosisPatient"></label>
              <input @click="changeFilter" type="checkbox" name="inputNameSwitch" class="form-check-input myCheck"
                id="switDiagnosisPatient" />
            </div>
          </div>
          <!--Search-->
          <div class="col-auto">
            <!--Search mode 1-->
            <form v-if="filter == true" @keyup="getSearchDiagnosis">
              <div class="row m-2">
                <div class="col-auto">
                  <i class="bi-search"></i>
                  <input v-model="text" type="search" id="inputMode1" name="inputMode1"
                    class="form-control form-control-sm search" />
                </div>
              </div>
            </form>
            <!--search mode 2-->
            <form v-else @submit.prevent="getSearchDiagnosis">
              <div class="row">
                <div class="col-auto">
                  <button type="submit" class="btn-form">Search</button>
                </div>
                <div class="col-auto">
                  <button v-if="success.length > 0 || err.length > 0" @click="getDataPages(1)" type="button"
                    class="btn-form cancel">
                    Exit
                  </button>
                  <button v-else disabled type="button" class="btn-form">Exit</button>
                </div>
                <div class="col-auto mt-1">
                  <i class="bi-search"></i>
                  <input v-model="text" id="inputMode2" name="inputMode2" class="form-control form-control-sm search"
                    type="search" />
                </div>
              </div>
            </form>
          </div>
          <div class="col-auto icon-print" title="Print">
            <a type="button"><i class="bi-printer"></i></a>
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
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import type { _diagnosis } from '@/interfaces/interface'
import { getDiagnosis } from '@/data/diagnosis'
import { RouterLink } from 'vue-router'
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
const filter = ref(true)
let searchDiagnosis: Array<_diagnosis> = reactive([])
const text = ref('')
//Messages
const err = ref('')
const success = ref('')

//Switch
const changeFilter = () => {
  if (filter.value == true) {
    filter.value = false
  } else {
    filter.value = true
  }
}
//search
const getSearchDiagnosis = () => {
  console.log(diagnosis.values)
  if (diagnosis.values.length > 0) {
    if (text.value.length == 0 && diagnosis.values.length > 0) {
      getDataPages(1)
    } else {
      const filterItems = (query: string) => {
        const diagnosisValues: any = diagnosis.values
        return diagnosisValues.filter(
          (diag: _diagnosis) =>
            diag.patient !== null &&
            diag.patient !== undefined &&
            diag.patient.toLowerCase().indexOf(query.toLowerCase()) > -1
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
        err.value = 'No records found'
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

<style></style>
