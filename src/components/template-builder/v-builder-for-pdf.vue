<template>
  <div class="printer_title-wrapper">
    <h3 class="printer_title">PDF</h3>
    <input v-model="$store.state.constValue.visibleBuilderPdf" id="four" type="checkbox">
  </div>
  <div v-show="$store.state.constValue.visibleBuilderPdf" class="template-pdf">
    <ul class="build_list-padding">
      <div class="build_w">{{ addPage }}{{ $store.state.variableTicket.setValueWidthTicket }},{{ $store.state.variableTicket.setValueHeightTicket }}{{ bracket }}</div>
      <br>
      <li class="build_list" v-for="(el,idx) in arrCenter" :key="idx">
        <div class="build_n-text">{{ el }}</div>
      </li>
    </ul>
    <p>//Корешок</p>
    <div class="build_w">{{ rotateClockwise }}</div>
    <div class="template_list" @click="RemoveIndexRootlet(idx)" v-for="(el, idx) in $store.state.arrays.templateArrayRootlet" :key="idx">{{ el.tag2 }}{{ el.barcodeTag }}{{ el.staticDatamax }}{{ el.font }}{{ el.originalX }}{{ el.originalY }}{{ el.weightDatamax }}{{ el.weightDatamax }}{{ el.tag }}</div>
    <br>
    <hr>
    <p>//Тело билета</p>
    <div class="build_w">{{ rotateNull }}</div>
    <div class="build_w">{{ setCellHeightRatio }}</div>
    <br>
    <div class="template_list" @click="RemoveIndexTicket(idx)" v-for="(el, idx) in $store.state.arrays.templateArray" :key="idx">{{ el.tag2 }}{{ el.barcodeTag }}{{ el.staticDatamax }}{{ el.font }}{{ el.originalX }}{{ el.originalY }}{{ el.weightDatamax }}{{ el.weightDatamax }}{{ el.tag }}</div>

    <ul class="build_list-padding">
      <li class="build_list" v-for="(el,idx) in arrBottom" :key="idx">
        <div class="build_n-text">{{ el }}</div>
      </li>
    </ul>
</div>

</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'v-builder-for-pdf',
  props: {},
  data () {
    return {
      addPage: ['AddPageWH(', "'L',"].join(''),
      bracket: ');',
      rotateNull: 'Rotate(0, 0, 0);',
      rotateClockwise: 'Rotate(90, 0, 0);',
      setCellHeightRatio: 'setCellHeightRatio(1);'
    }
  },
  computed: {},
  methods: {
    ...mapMutations({
      RemoveIndexTicket: 'REMOVE_INDEX_TICKET',
      RemoveIndexRootlet: 'REMOVE_INDEX_ROOTLET'
    })
  }
}
</script>
