<template>
  <div class="container">
    <!--LIST-->
    <div class="card mt-3 p-3">
      <div class="col-1">
        <button @click="$router.replace('/diagnosis')" class="btn btn-salir" type="button">
          Salir
        </button>
      </div>
      <div v-if="$route.params.name !== undefined">
        <div v-if="diagnosis.values.length === 13" class="card card-title">
          <i class="bi-check-circle-fill text-success">{{ ' ' + $route.params.name + ': ' }}Test Completo</i>
        </div>
        <div v-else class="card card-title">
          {{ $route.params.name + `(${diagnosis.values.length} de 13)` }}
        </div>
        <!--Form-->
        <div class="card card-search">
          <div class="row row-search">
            <!--Add-->
            <a @click="openModalAdd" class="col-auto icon-add" title="Add diagnosis"><i class="bi-person-fill-add">
              </i></a>
            <!--Switch-->
            <!--<div class="col-auto">
              <div class="form-switch form-check" title="Clasic mode">
                <label class="form-check-label" for="switDiagnosisPatient"></label>
                <input @click="changeFilter" type="checkbox" name="inputNameSwitch" class="form-check-input myCheck"
                  id="switDiagnosisPatient" />
              </div>
            </div>-->

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
              <a @click="printPage"><i class="bi-printer"></i></a>
            </div>
          </div>
        </div>
        <!--Table-->
        <div class="scale-table">
          <table class="table size-static table-hover table-responsive-sm text-center">
            <thead>
              <tr class="thead-tr">
                <th hidden>
                  <i class="bi-filter"></i>
                  <button @click="sortId" class="btn btn-sm" title="Id">Id</button>
                </th>
                <th>
                  <i class="bi-filter"></i>
                  <button @click="sortTest" class="btn btn-sm" title="Tipo de prueba">Test</button>
                </th>
                <th>
                  <i class="bi-filter"></i>
                  <button @click="sortResult" class="btn btn-sm" title="Valor de la prueba clínica">
                    Res
                  </button>
                </th>
                <th hidden>
                  <i class="bi-filter"></i>
                  <button @click="sortRangeInitial" class="btn btn-sm" title="rango inicial">
                    Ri
                  </button>
                </th>
                <th hidden>
                  <i class="bi-filter"></i>
                  <button @click="sortIdeal" class="btn btn-sm" title="Rango ideal">Ideal</button>
                </th>
                <th hidden>
                  <i class="bi-filter"></i>
                  <button @click="sortRangeEnd" class="btn btn-sm" title="Rango final">Rf</button>
                </th>

                <th>
                  <i class="bi-filter"></i>
                  <button @click="sortInterpretation" class="btn btn-sm" title="Interpretación del resultado">
                    Interp
                  </button>
                </th>
                <th>
                  <button class="btn btn-sm">Action</button>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="search in searchDiagnosis.values" :key="search['diagnosis_id']" class="tbody-tr">
                <!--<td class="color-td">{{ search['diagnosis_id'] }}</td>-->
                <td class="color-td font-size-test">{{ search['test'] }}</td>
                <td class="color-td">{{ search['result'] }}</td>
                <!--<td class="color-td">{{ search['pi'] }}</td>-->
                <!--<td class="color-td">{{ search['ideal'] }}</td>-->
                <!--<td class="color-td">{{ search['pf'] }}</td>-->
                <td class="color-td">{{ search['interpretation'] }}</td>
                <td>
                  <RouterLink :to="'/diagnosis/detail/' + search['diagnosis_id']" title="Detail">
                    <i class="bi-card-checklist size-checklist"></i>
                  </RouterLink>
                  |
                  <a @click="openModalEdit(search['diagnosis_id'])" title="Edit">
                    <i class="bi-pencil-fill size-pencil"></i>
                  </a>
                  |
                  <a @click="openModalDelete(search['diagnosis_id'])" title="Delete">
                    <i class="bi-trash-fill size-trash"></i>
                  </a>
                </td>
              </tr>
            </tbody>
            <!--Messages-->
            <small v-if="success.length > 0" class="text-success">{{ success }}</small>
            <small v-if="err.length > 0" class="text-danger">{{ err }}</small>
          </table>
        </div>
        <!--Pagination-->
        <nav @click="color_td" aria-label="Page navigation">
          <ul v-if="pagination" class="pagination justify-content-center">
            <li class="page-item disabled">
              <button disabled class="page-link size">Pages</button>
            </li>
            <!--First page-->
            <li v-if="currentPage >= 2" @click="getFirstPage" class="page-item">
              <button type="button" class="page-link size">First</button>
            </li>
            <li v-else @click="getFirstPage" class="page-item disabled">
              <button type="button" class="page-link size">First</button>
            </li>
            <!--Previous-->
            <li v-if="currentPage >= 2" @click="getPrevious" class="page-item">
              <button class="page-link size" type="button">
                <i class="bi-chevron-left"></i>
              </button>
            </li>
            <li v-else @click="getPrevious" class="page-item disabled">
              <button type="button" class="page-link size">
                <i class="bi-chevron-left"></i>
              </button>
            </li>
            <!--Pages-->
            <li v-for="pag in totalPages()" :key="pag" @click="getDataPages(pag)" class="page-item"
              :class="isActive(pag)">
              <button v-if="currentPage - 1 < pag && pag < currentPage + 3" type="button" class="page-link size">
                {{ pag }}
              </button>
            </li>
            <!--Next-->
            <li v-if="currentPage < totalPages()" @click="getNext" class="page-item">
              <button v-if="currentPage < totalPages()" type="button" class="page-link size">
                <i class="bi-chevron-right"></i>
              </button>
            </li>
            <li v-else @click="getNext" class="page-item disabled">
              <button type="button" class="page-link size">
                <i class="bi-chevron-right"></i>
              </button>
            </li>
            <!--Last page-->
            <li v-if="currentPage < totalPages()" @click="getLastPage" class="page-item">
              <button type="button" class="page-link size">Last</button>
            </li>
            <li v-else @click="getLastPage" class="page-item disabled">
              <button type="button" class="page-link size">Last</button>
            </li>
            <!--Total-->
            <li class="page-item disabled">
              <button class="page-link size">Total: {{ diagnosis.values.length }}</button>
            </li>
          </ul>
        </nav>
        <div class="card card-title">Rangos</div>
        <div>
          <TestDhl></TestDhl>
        </div>
        <div>
          <TestGgtp></TestGgtp>
        </div>
        <div class="card card-title">Graphics</div>
        <div>
          <DiagnosisGraphics></DiagnosisGraphics>
        </div>

      </div>
      <DiagnosisAdd v-if="showModalAdd" :close-form-add="closeModalAdd"></DiagnosisAdd>
      <DiagnosisEdit v-if="showModalEdit" :close-form-edit="closeModalEdit" :edit-id="idSelected">
      </DiagnosisEdit>
      <DianosisDelete v-if="showModalDelete" :close-form-delete="closeModalDelete" :delete-id="idSelected">
      </DianosisDelete>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import type { _diagnosis } from '@/interfaces/interface'
import { getDiagnosis } from '@/data/diagnosis'
import { RouterLink, useRoute } from 'vue-router'
import DiagnosisGraphics from '@/components/diagnosis/diagnosisGraphics.vue'
import TestDhl from "@/components/RangeProgressBar/testDhl.vue";
import DiagnosisAdd from '@/components/diagnosis/diagnosisAdd.vue'
import DiagnosisEdit from '@/components/diagnosis/diagnosisEdit.vue'
import DianosisDelete from '@/components/diagnosis/diagnosisDelete.vue'
import TestGgtp from '../RangeProgressBar/testGgtp.vue'
const route: any = useRoute()
defineProps({
  title: { type: String, default: 'Detalles' }
})
onMounted(async () => {
  if (route.params.name !== undefined) {
    const diagnosisData = await getDiagnosis()
    if (diagnosisData?.statusText == 'OK') {
      //diagnosisByPatient
      //console.log(route.params.name)
      let diagnosisByPatientData = await diagnosisData?.data.results.filter(
        (element: _diagnosis) => element.patient === route.params.name
      )
      diagnosis.values = diagnosisByPatientData
    }
    // console.log(diagnosis)
    getDataPages(currentPage.value)
    color_td()
  }
})

//LIST
/*======================================================================*/
const diagnosis: Array<_diagnosis> = reactive([])
//pagination
const currentPage = ref(1)
const rows = ref(3)
const pagination = ref(true)
//search
const filter = ref(true)
let searchDiagnosis: Array<_diagnosis> = reactive([])
const text = ref('')
//modal
const showModalAdd = ref(false)
const showModalEdit = ref(false)
const showModalDelete = ref(false)
let idSelected = ref(0)
//Messages
const err = ref('')
const success = ref('')
const sortValue = ref(false)

//Methods or Functions
/*===================================================================*/
//add
const openModalAdd = () => {
  showModalAdd.value = true
}
const closeModalAdd = () => {
  showModalAdd.value = false
  location.reload()
}
//edit
const openModalEdit = (diagnosisid: number) => {
  //console.log(diagnosisid)
  idSelected.value = diagnosisid
  showModalEdit.value = true
}
const closeModalEdit = () => {
  showModalEdit.value = false
}
//delete
const openModalDelete = (diagnosisid: number) => {
  //console.log(diagnosisid)
  idSelected.value = diagnosisid
  showModalDelete.value = true
}
const closeModalDelete = () => {
  showModalDelete.value = false
}
const color_td = async () => {
  let myColor: HTMLCollection = await document.getElementsByClassName('color-td')

  for (let index = 0; index < myColor.length; index++) {
    const element = myColor[index]

    if (element.textContent === 'Saludable' || element.textContent === 'Normal') {
      element.setAttribute('style', 'color:#4CAF50;')
    }

    if (
      element.textContent === 'Riesgo inicial' ||
      element.textContent === 'Riesgo final' ||
      element.textContent === 'Bajo' ||
      element.textContent === 'Alto' ||
      element.textContent === 'Severo'
    ) {
      element.setAttribute('style', 'color:#FF9800;')
    }
    if (
      element.textContent === 'Peligro inicial' ||
      element.textContent === 'Peligro final' ||
      element.textContent === 'Muy alto'
    ) {
      element.setAttribute('style', 'color:#FF5722;')
    }
    if (element.textContent === 'Leve' || element.textContent === 'Moderado') {
      element.setAttribute('style', 'color:#CDDC39;')
    }
    if (element.textContent === 'Leve' || element.textContent === 'Moderado') {
      element.setAttribute('style', 'color:#CDDC39;')
    }
  }

  //console.log(typeof myColor[6].textContent)
}

//print
const printPage = () => {
  window.print()
}
//sort
const sortId = () => {
  const asc = (a: _diagnosis, b: _diagnosis) => {
    return a.diagnosis_id - b.diagnosis_id
  }
  const desc = (a: _diagnosis, b: _diagnosis) => {
    return b.diagnosis_id - a.diagnosis_id
  }
  const searchDiagnosisValues: any = searchDiagnosis.values
  if (sortValue.value) {
    sortValue.value = false
    return searchDiagnosisValues.sort(asc)
  } else {
    sortValue.value = true
    //console.log(sortValue)
    return searchDiagnosisValues.sort(desc)
  }
}
const sortTest = () => {
  const asc = (a: _diagnosis, b: _diagnosis) => {
    return a.test.localeCompare(b.test)
  }
  const desc = (a: _diagnosis, b: _diagnosis) => {
    return b.test.localeCompare(a.test)
  }
  const searchDiagnosisValues: any = searchDiagnosis.values
  if (sortValue.value) {
    sortValue.value = false
    return searchDiagnosisValues.sort(asc)
  } else {
    sortValue.value = true
    return searchDiagnosisValues.sort(desc)
  }
}
const sortResult = () => {
  const asc = (a: _diagnosis, b: _diagnosis) => {
    return parseFloat(a.result) - parseFloat(b.result)
  }
  const desc = (a: _diagnosis, b: _diagnosis) => {
    return parseFloat(b.result) - parseFloat(a.result)
  }
  const searchDiagnosisValues: any = searchDiagnosis.values
  if (sortValue.value) {
    sortValue.value = false
    return searchDiagnosisValues.sort(asc)
  } else {
    sortValue.value = true
    // console.log(sortValue)
    return searchDiagnosisValues.sort(desc)
  }
}
const sortRangeInitial = () => {
  const asc = (a: _diagnosis, b: _diagnosis) => {
    return a.pi - b.pi
  }
  const desc = (a: _diagnosis, b: _diagnosis) => {
    return b.pi - a.pi
  }
  const searchDiagnosisValues: any = searchDiagnosis.values
  if (sortValue.value) {
    sortValue.value = false
    return searchDiagnosisValues.sort(asc)
  } else {
    sortValue.value = true
    //console.log(sortValue)
    return searchDiagnosisValues.sort(desc)
  }
}
const sortIdeal = () => {
  const asc = (a: _diagnosis, b: _diagnosis) => {
    return a.ideal - b.ideal
  }
  const desc = (a: _diagnosis, b: _diagnosis) => {
    return b.ideal - a.ideal
  }
  const searchDiagnosisValues: any = searchDiagnosis.values
  if (sortValue.value) {
    sortValue.value = false
    return searchDiagnosisValues.sort(asc)
  } else {
    sortValue.value = true
    //console.log(sortValue)
    return searchDiagnosisValues.sort(desc)
  }
}
const sortRangeEnd = () => {
  const asc = (a: _diagnosis, b: _diagnosis) => {
    return a.pf - b.pf
  }
  const desc = (a: _diagnosis, b: _diagnosis) => {
    return b.pf - a.pf
  }
  const searchDiagnosisValues: any = searchDiagnosis.values
  if (sortValue.value) {
    sortValue.value = false
    return searchDiagnosisValues.sort(asc)
  } else {
    sortValue.value = true
    // console.log(sortValue)
    return searchDiagnosisValues.sort(desc)
  }
}
const sortInterpretation = () => {
  const asc = (a: _diagnosis, b: _diagnosis) => {
    return a.interpretation.localeCompare(b.interpretation)
  }
  const desc = (a: _diagnosis, b: _diagnosis) => {
    return b.interpretation.localeCompare(a.interpretation)
  }
  const searchDiagnosisValues: any = searchDiagnosis.values
  if (sortValue.value) {
    sortValue.value = false
    return searchDiagnosisValues.sort(asc)
  } else {
    sortValue.value = true
    return searchDiagnosisValues.sort(desc)
  }
}

//search
const getSearchDiagnosis = () => {
  if (text.value.length == 0) {
    getDataPages(1)
  } else {
    const filterItems = (query: string) => {
      const diagnosisValues: any = diagnosis.values
      return diagnosisValues.filter(
        (diag: _diagnosis) =>
          (diag.diagnosis_id !== null &&
            diag.diagnosis_id !== undefined &&
            diag.diagnosis_id.toString().indexOf(query) > -1) ||
          (diag.patient !== null &&
            diag.patient !== undefined &&
            diag.patient.toLowerCase().indexOf(query.toLowerCase()) > -1) ||
          (diag.test !== null &&
            diag.test !== undefined &&
            diag.test.toLowerCase().indexOf(query.toLowerCase()) > -1) ||
          (diag.result !== null &&
            diag.result !== undefined &&
            diag.result.toString().indexOf(query) > -1) ||
          (diag.pi !== null && diag.pi !== undefined && diag.pi.toString().indexOf(query) > -1) ||
          (diag.ideal !== null &&
            diag.ideal !== undefined &&
            diag.ideal.toString().indexOf(query) > -1) ||
          (diag.pf !== null && diag.pf !== undefined && diag.pf.toString().indexOf(query) > -1) ||
          (diag.interpretation !== null &&
            diag.interpretation !== undefined &&
            diag.interpretation.toLowerCase().indexOf(query.toLowerCase()) > -1)
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
//Switch
const changeFilter = () => {
  if (filter.value == true) {
    filter.value = false
  } else {
    filter.value = true
  }
}
//pagination
const isActive = (numPage: number) => {
  return numPage == currentPage.value ? 'active' : ''
}
//total pages
const totalPages = () => {
  return Math.ceil(diagnosis.values.length / rows.value)
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
//First page
const getFirstPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
  getDataPages(1)
}
//Previous
const getPrevious = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
  getDataPages(currentPage.value)
}
//Next
const getNext = () => {
  if (currentPage.value < totalPages()) {
    currentPage.value++
  }
  getDataPages(currentPage.value)
}
//last page
const getLastPage = () => {
  if (currentPage.value < totalPages()) {
    currentPage.value++
  }
  getDataPages(totalPages())
}
</script>

<style lang="css" scoped>
:root {
  --bs-verde: #24b699;
  --bs-verdeOscuro: #2e9d86;
  --bs-madera: #fffae5;
  --bs-maderaClaro: #fff8dc;
  --bs-anaranjadoClaro: #fffdf7;
  --bs-anaranjado: #ffcd5a;
  --bs-anaranjadoOscuro: #df7935;
  --bs-marronOscuro: #5e5953;
  --bs-marron: #908980;
  --bs-marronClaro: #bfbebc;
}

td.colorBarra {
  color: white;
}

.btn.btn-salir {
  background-color: var(--bs-verde);
  color: white;
  border: none;
}

.btn.btn-salir:hover {
  background-color: var(--bs-verdeOscuro);
  color: whitesmoke;
}

.thead-tr {
  font-size: xx-small;
}

.card.card-search {
  display: flex;
  border: none;
  background-color: var(--bs-verde);
  border-radius: 0.25rem;

  font-size: 0.8rem;
  justify-content: end;
}

.row.row-search {
  display: flex;
  align-items: end;
  width: auto;
  justify-content: space-evenly;
}

.form-switch.form-check {
  padding-left: 4rem;
}

.form-check-input {
  background-color: #e6fff6;
  border-color: #d0d0d1;
  cursor: pointer;
  font-size: large;
  margin-bottom: 0.8rem;
}

.form-check-input:hover {
  background-color: #ffffff;
  border-color: #a6a7a8;
  cursor: pointer;
}

.form-check-input:checked {
  background-color: #00ffaa !important;
  border-color: #04feaa !important;
}
</style>
