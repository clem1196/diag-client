<template>
    <div class=" ">
        <!--Progress and range-->
        <!--LDH/DHL-->

        <div class=" mt-4" v-for="d in rangeValues.values" :key="d['diagnosis_id']">
            <div v-if="d['test'] === 'GGTP'" class="">
                <!--title and interpretation-->
                <div class="mb-2">
                    <span v-if="parseFloat(d['result']) < parseFloat(d['pi'])">{{ d['test'] }}={{
                        parseFloat(d['result']) +
                        ' ' }}
                        Severo
                        inicial</span>
                    <span
                        v-if="parseFloat(d['result']) >= parseFloat(d['pi']) && parseFloat(d['result']) < parseFloat(d['ideal'])">{{
                            d['test'] }}={{
                            parseFloat(d['result']) + ' '
                        }} Saludable</span>
                    <span v-if="parseFloat(d['result']) === parseFloat(d['ideal'])">{{ d['test'] }}={{
                        parseFloat(d['result'])
                        + ' ' }}
                        Ideal</span>
                    <span
                        v-if="parseFloat(d['result']) > parseFloat(d['ideal']) && parseFloat(d['result']) <= parseFloat(d['p1'])">{{
                            d['test'] }}={{
                            parseFloat(d['result'])
                            + ' ' }}
                        Saludable</span>
                    <span
                        v-if="parseFloat(d['result']) > parseFloat(d['p1']) && parseFloat(d['result']) <= parseFloat(d['p2'])">{{
                            d['test'] }}={{
                            parseFloat(d['result']) + ' '
                        }} Leve</span>

                    <span
                        v-if="parseFloat(d['result']) > parseFloat(d['p2']) && parseFloat(d['result']) < parseFloat(d['p3'])">{{
                            d['test'] }}={{
                            parseFloat(d['result']) + ' '
                        }} Alto</span>
                    <span
                        v-if="parseFloat(d['result']) >= parseFloat(d['p3']) && parseFloat(d['result']) <= parseFloat(d['pf'])">{{
                            d['test'] }}={{
                            parseFloat(d['result']) + ' '
                        }} Muy alto</span>
                    <span v-if="parseFloat(d['result']) > parseFloat(d['pf'])">{{ d['test'] }}={{
                        parseFloat(d['result']) +
                        ' ' }}
                        Severo
                        final</span>
                </div>
                <!--Range values-->
                <div class="progress-stacked ">
                    <div class="progress fontSize" role="progressbar" aria-label="Segment one"
                        :aria-valuenow="parseFloat(d['pi'])" :aria-valuemin="parseFloat(d['pi']) - 3"
                        :aria-valuemax="parseFloat(d['pf']) + 3" style="width: 8.3%;">
                        <div class="progress-bar bg-light"></div>{{ d['pi'] }}
                    </div>
                    <div class="progress fontSize" role="progressbar" aria-label="Segment two"
                        :aria-valuenow="parseFloat(d['p1'])" :aria-valuemin="parseFloat(d['pi']) - 3"
                        :aria-valuemax="parseFloat(d['pf']) + 3" style="width: 20.8%;">
                        <div class="progress-bar bg-light"></div>{{ parseFloat(d['p1']) }}
                    </div>
                    <div class="progress fontSize" role="progressbar" aria-label="Segment three"
                        :aria-valuenow="parseFloat(d['p2'])" :aria-valuemin="parseFloat(d['pi']) - 3"
                        :aria-valuemax="parseFloat(d['pf']) + 3" style="width: 20.8%;">
                        <div class="progress-bar bg-light"></div>{{ parseFloat(d['p2']) }}
                    </div>
                    <div class="progress fontSize" role="progressbar" aria-label="Segment four"
                        :aria-valuenow="parseFloat(d['p3'])" :aria-valuemin="parseFloat(d['pi']) - 3"
                        :aria-valuemax="parseFloat(d['pf']) + 3" style="width: 20.8%;">
                        <div class="progress-bar bg-light"></div>{{ parseFloat(d['p3']) }}
                    </div>
                    <div class="progress fontSize" role="progressbar" aria-label="Segment five"
                        :aria-valuenow="parseFloat(d['pf'])" :aria-valuemin="parseFloat(d['pi']) - 3"
                        :aria-valuemax="parseFloat(d['pf']) + 3" style="width: 20.8%;">
                        <div class="progress-bar bg-light"></div>{{ parseFloat(d['pf']) }}
                    </div>
                    <div class="progress fontSize" role="progressbar" aria-label="Segment six"
                        :aria-valuenow="parseFloat(d['pf']) + 3" :aria-valuemin="parseFloat(d['pi']) - 3"
                        :aria-valuemax="parseFloat(d['pf']) + 3" style="width: 8.3%;">
                        <div class="progress-bar bg-light"></div>
                    </div>
                </div>
                <!-- progress colors -->

                <div class="progress-stacked">
                    <div class="progress" role="progressbar" aria-label="Segment one"
                        :aria-valuenow="parseFloat(d['pi'])" :aria-valuemin="parseFloat(d['pi']) - 3"
                        :aria-valuemax="parseFloat(d['pf']) + 3" style="width: 8.3%;">
                        <div class="progress-bar peligro-inicial"></div>
                    </div>
                    <div class="progress" role="progressbar" aria-label="Segment two"
                        :aria-valuenow="parseFloat(d['p1'])" :aria-valuemin="parseFloat(d['pi']) - 3"
                        :aria-valuemax="parseFloat(d['pf']) + 3" style="width: 20.8%;">
                        <div class="progress-bar r1-color"></div>
                    </div>
                    <div class="progress" role="progressbar" aria-label="Segment three"
                        :aria-valuenow="parseFloat(d['p2'])" :aria-valuemin="parseFloat(d['pi']) - 3"
                        :aria-valuemax="parseFloat(d['pf']) + 3" style="width: 20.8%;">
                        <div class="progress-bar r2-color"></div>
                    </div>
                    <div class="progress" role="progressbar" aria-label="Segment four"
                        :aria-valuenow="parseFloat(d['p3'])" :aria-valuemin="parseFloat(d['pi']) - 3"
                        :aria-valuemax="parseFloat(d['pf']) + 3" style="width: 20.8%;">
                        <div class="progress-bar r3-color"></div>
                    </div>
                    <div class="progress" role="progressbar" aria-label="Segment five"
                        :aria-valuenow="parseFloat(d['pf'])" :aria-valuemin="parseFloat(d['pi']) - 3"
                        :aria-valuemax="parseFloat(d['pf']) + 3" style="width: 20.8%;">
                        <div class="progress-bar rf-color"></div>
                    </div>
                    <div class="progress" role="progressbar" aria-label="Segment six"
                        :aria-valuenow="parseFloat(d['pf']) + 3" :aria-valuemin="parseFloat(d['pi']) - 3"
                        :aria-valuemax="parseFloat(d['pf']) + 3" style="width: 8.3%;">
                        <div class="progress-bar peligro-final"></div>
                    </div>
                </div>
                <!--Range result-->
                <input v-model="d['result']" type="range" class="form-range " :min="parseFloat(d['pi']) - 2.2"
                    :title="d['test'] + '=' + d['result']" :max="parseFloat(d['pf']) + 2.2" step="0.1"
                    id="customRange3">
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



</script>
<style lang="css" scoped>
.progress.fontSize {
    font-size: x-small;
}

.peligro-inicial {
    background: rgb(255, 132, 0);
    background: linear-gradient(260deg, rgb(100, 165, 152) 0%, rgba(246, 1, 1, 1) 100%);
}

.r1-color {
    background: rgb(36, 165, 139);
}

.r2-color {
    background: rgb(29, 198, 164);

}

.r3-color {
    background: rgb(151, 241, 87);

}

.rf-color {
    background: rgb(255, 195, 0);

}

.peligro-final {
    background: rgb(255, 195, 0);
    background: linear-gradient(90deg, rgba(255, 195, 0, 1) 10%, rgba(246, 1, 1, 1) 100%);
}
</style>
