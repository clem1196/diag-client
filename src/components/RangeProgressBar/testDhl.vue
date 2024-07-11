<template>
    <div>
        <!--Progress and range-->
        <!--LDH/DHL-->

        <div class="mt-4" v-for="d in rangeValues.values" :key="d['diagnosis_id']">
            <div v-if="d['test'] === 'LDH/DHL'">
                <!--title and interpretation-->
                <div class="mb-2">
                    <span v-if="parseFloat(d['result']) < parseFloat(d['pi'])">{{ d['test'] }}={{
                        parseFloat(d['result']) +
                        ' ' }}
                        Peligro
                        inicial</span>
                    <span
                        v-if="parseFloat(d['result']) >= parseFloat(d['pi']) && parseFloat(d['result']) < parseFloat(d['p1'])">{{
                            d['test'] }}={{
                            parseFloat(d['result']) + ' '
                        }} Riesgo inicial</span>
                    <span
                        v-if="parseFloat(d['result']) >= parseFloat(d['p1']) && parseFloat(d['result']) < parseFloat(d['p2'])">{{
                            d['test'] }}={{
                            parseFloat(d['result']) + ' '
                        }} Saludable</span>
                    <span v-if="parseFloat(d['result']) === parseFloat(d['p2'])">{{ d['test'] }}={{
                        parseFloat(d['result'])
                        + ' ' }}
                        Ideal</span>
                    <span
                        v-if="parseFloat(d['result']) > parseFloat(d['p2']) && parseFloat(d['result']) < parseFloat(d['p3'])">{{
                            d['test'] }}={{
                            parseFloat(d['result']) + ' '
                        }} Saludable</span>
                    <span
                        v-if="parseFloat(d['result']) >= parseFloat(d['p3']) && parseFloat(d['result']) <= parseFloat(d['pf'])">{{
                            d['test'] }}={{
                            parseFloat(d['result']) + ' '
                        }} Riesgo final</span>
                    <span v-if="parseFloat(d['result']) > parseFloat(d['pf'])">{{ d['test'] }}={{
                        parseFloat(d['result']) +
                        ' ' }}
                        Peligro
                        final</span>
                </div>
                <!--Range values-->
                <div class="progress-stacked">
                    <div class="progress fontSize" role="progressbar" aria-label="Segment one"
                        :aria-valuenow="parseFloat(d['pi'])" :aria-valuemin="parseFloat(d['pi']) - 10"
                        :aria-valuemax="parseFloat(d['pf']) + 10" style="width: 6.9%;">
                        <div class="progress-bar bg-light"></div>{{ d['pi'] }}
                    </div>
                    <div class="progress fontSize" role="progressbar" aria-label="Segment two"
                        :aria-valuenow="parseFloat(d['p1'])" :aria-valuemin="parseFloat(d['pi']) - 10"
                        :aria-valuemax="parseFloat(d['pf']) + 10" style="width: 36.2%;">
                        <div class="progress-bar bg-light"></div>{{ parseFloat(d['p1']) }}
                    </div>
                    <div class="progress fontSize" role="progressbar" aria-label="Segment three"
                        :aria-valuenow="parseFloat(d['p2'])" :aria-valuemin="parseFloat(d['pi']) - 10"
                        :aria-valuemax="parseFloat(d['pf']) + 10" style="width: 6.9%;">
                        <div class="progress-bar bg-light"></div>{{ parseFloat(d['p2']) }}
                    </div>
                    <div class="progress fontSize" role="progressbar" aria-label="Segment four"
                        :aria-valuenow="parseFloat(d['p3'])" :aria-valuemin="parseFloat(d['pi']) - 10"
                        :aria-valuemax="parseFloat(d['pf']) + 10" style="width: 6.9%;">
                        <div class="progress-bar bg-light"></div>{{ parseFloat(d['p3']) }}
                    </div>
                    <div class="progress fontSize" role="progressbar" aria-label="Segment five"
                        :aria-valuenow="parseFloat(d['pf'])" :aria-valuemin="parseFloat(d['pi']) - 10"
                        :aria-valuemax="parseFloat(d['pf']) + 10" style="width: 36.2%;">
                        <div class="progress-bar bg-light"></div>{{ parseFloat(d['pf']) }}
                    </div>
                    <div class="progress fontSize" role="progressbar" aria-label="Segment six"
                        :aria-valuenow="parseFloat(d['pf']) + 10" :aria-valuemin="parseFloat(d['pi']) - 10"
                        :aria-valuemax="parseFloat(d['pf']) + 10" style="width: 6.9%;">
                        <div class="progress-bar bg-light"></div>
                    </div>
                </div>
                <!-- progress colors -->

                <div class="progress-stacked">
                    <div class="progress" role="progressbar" aria-label="Segment one"
                        :aria-valuenow="parseFloat(d['pi'])" :aria-valuemin="parseFloat(d['pi']) - 10"
                        :aria-valuemax="parseFloat(d['pf']) + 10" style="width: 6.9%;">
                        <div class="progress-bar peligro-inicial"></div>
                    </div>
                    <div class="progress" role="progressbar" aria-label="Segment two"
                        :aria-valuenow="parseFloat(d['p1'])" :aria-valuemin="parseFloat(d['pi']) - 10"
                        :aria-valuemax="parseFloat(d['pf']) + 10" style="width: 36.2%;">
                        <div class="progress-bar r1-color"></div>
                    </div>
                    <div class="progress" role="progressbar" aria-label="Segment three"
                        :aria-valuenow="parseFloat(d['p2'])" :aria-valuemin="parseFloat(d['pi']) - 10"
                        :aria-valuemax="parseFloat(d['pf']) + 10" style="width: 6.9%;">
                        <div class="progress-bar r2-color"></div>
                    </div>
                    <div class="progress" role="progressbar" aria-label="Segment four"
                        :aria-valuenow="parseFloat(d['p3'])" :aria-valuemin="parseFloat(d['pi']) - 10"
                        :aria-valuemax="parseFloat(d['pf']) + 10" style="width: 6.9%;">
                        <div class="progress-bar r3-color"></div>
                    </div>
                    <div class="progress" role="progressbar" aria-label="Segment five"
                        :aria-valuenow="parseFloat(d['pf'])" :aria-valuemin="parseFloat(d['pi']) - 10"
                        :aria-valuemax="parseFloat(d['pf']) + 10" style="width: 36.2%;">
                        <div class="progress-bar rf-color"></div>
                    </div>
                    <div class="progress" role="progressbar" aria-label="Segment six"
                        :aria-valuenow="parseFloat(d['pf']) + 10" :aria-valuemin="parseFloat(d['pi']) - 10"
                        :aria-valuemax="parseFloat(d['pf']) + 10" style="width: 6.9%;">
                        <div class="progress-bar peligro-final"></div>
                    </div>
                </div>
                <!--Range result-->
                <input v-model="d['result']" type="range" class="form-range " :min="parseFloat(d['pi']) - 8"
                    :title="d['test'] + '=' + d['result']" :max="parseFloat(d['pf']) + 8" step="0.1" id="customRange3">
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { getDiagnosis } from '@/data/diagnosis'
import type { _diagnosis } from '@/interfaces/interface'
import { onMounted, reactive } from 'vue';
import { useRoute, type RouteLocationNormalizedLoaded } from "vue-router";

//const and let
//=============================================================================
const route: RouteLocationNormalizedLoaded = useRoute()

//range      
let diagnosis: Array<_diagnosis> = reactive([]);
const rangeValues: Array<_diagnosis> = reactive([]);

//onMounted
//================================================================================
onMounted(async () => {
    const diagnosisData = await getDiagnosis()
    diagnosis.values = await diagnosisData?.data.results
    const diagnosisValues: any = diagnosis.values
    const res = await diagnosisValues.filter(
        (p: _diagnosis) => p.patient === route.params.name
    )
    rangeValues.values = res
    await _getDiagnosis()
    //console.log(diagnosis.values)
})
//methos or functions
//================================================================================
const _getDiagnosis = async () => {
    console.log(rangeValues.values)

}

/*const _getDiagnosis = async () => {
    const diagnosisData = await getDiagnosis()
    //console.log(diagnosisData?.data)
    let sortRes: Array<_diagnosis> = []
    const res = await diagnosisData?.data.results.filter(
        (p: _diagnosis) => p.patient === route.params.name
    )
    //console.log(res)
    //ordenando sortRes
    sortRes[0] = await res.filter((t: _diagnosis) => t.test === 'LDH/DHL')[0]
    sortRes[1] = await res.filter((t: _diagnosis) => t.test === 'GLUCOSA')[0]
    sortRes[2] = await res.filter((t: _diagnosis) => t.test === 'COL. TOTAL')[0]
    sortRes[3] = await res.filter((t: _diagnosis) => t.test === 'TRIGLICERIDOS')[0]
    sortRes[4] = await res.filter((t: _diagnosis) => t.test === 'UREA')[0]
    sortRes[5] = await res.filter((t: _diagnosis) => t.test === 'Co2')[0]
    sortRes[6] = await res.filter((t: _diagnosis) => t.test === 'VCM')[0]
    sortRes[7] = await res.filter((t: _diagnosis) => t.test === 'RDW ADE IDE')[0]
    sortRes[8] = await res.filter((t: _diagnosis) => t.test === 'GGTP')[0]
    sortRes[9] = await res.filter((t: _diagnosis) => t.test === 'TGO AST')[0]
    sortRes[10] = await res.filter((t: _diagnosis) => t.test === 'TGP ALT')[0]
    sortRes[11] = await res.filter((t: _diagnosis) => t.test === 'ACIDO URICO')[0]
    sortRes[12] = await res.filter((t: _diagnosis) => t.test === 'HEMOGLOBINA')[0]

    rangeValues = sortRes
    console.log(res)
    console.log(sortRes)
    console.log(rangeValues)

}*/

</script>
<style lang="css" scoped>
.progress.fontSize {
    font-size: x-small;
}

.peligro-inicial {
    background: rgb(231, 255, 0);
    background: linear-gradient(260deg, rgba(231, 255, 0, 1) 0%, rgba(246, 1, 1, 1) 100%);
}

.r1-color {
    background: rgb(227, 255, 0);
    background: linear-gradient(90deg, rgba(227, 255, 0, 1) 0%, rgba(36, 182, 106, 1) 60%, rgba(36, 182, 153, 1) 100%);
}

.r2-color {
    background: rgb(36, 165, 139);

}

.r3-color {
    background: rgb(36, 165, 139);

}

.rf-color {
    background: rgb(255, 195, 0);
    background: linear-gradient(260deg, rgba(255, 195, 0, 1) 0%, rgba(36, 182, 106, 1) 60%, rgba(36, 182, 153, 1) 100%);
}

.peligro-final {
    background: rgb(255, 195, 0);
    background: linear-gradient(90deg, rgba(255, 195, 0, 1) 10%, rgba(246, 1, 1, 1) 100%);
}
</style>
