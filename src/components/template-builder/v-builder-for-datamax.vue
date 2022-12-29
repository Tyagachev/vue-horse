<template>

  <div class="template-datamax">
    <ul class="build_list-padding">
      <li class="build_list" v-for="(el,idx) in arrTop" :key="idx">
        <div class="build_w-text">{{el}}</div>
      </li>
      <li class="build_list" v-for="(el,idx) in arrCenter" :key="idx">
        <div class="build_n-text">{{el}}</div>
      </li>
    </ul>

    <div class="template_list" @click="RemoveIndexRootlet(idx)" v-for="(el, idx) in $store.state.arrays.templateArrayRootlet" :key="idx">{{el.tag2}}{{el.barcodeTag}}{{el.staticDatamax}}{{el.font}}{{el.originalX}}{{el.originalY}}{{el.weightDatamax}}{{el.weightDatamax}}{{el.tag}}</div>
    <hr>
    <div class="template_list" @click="RemoveIndexTicket(idx)" v-for="(el, idx) in $store.state.arrays.templateArray" :key="idx">{{el.tag2}}{{el.barcodeTag}}{{el.staticDatamax}}{{el.font}}{{el.originalX}}{{el.originalY}}{{el.weightDatamax}}{{el.weightDatamax}}{{el.tag}}</div>

    <ul class="build_list-padding">
      <li class="build_list" v-for="(el,idx) in arrBottom" :key="idx">
        <div class="build_n-text">{{el}}</div>
      </li>
    </ul>
</div>

</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'v-builder-for-datamax',
  props: {},
  data () {
    return {
      arrTop: ['n', 'c0000', 'r', 'O0270', 'f345', 'D', 'L'],
      arrCenter: ['m', 'D11', 'P4', 'S4', 'H15'],
      arrBottom: ['Q0001', 'E']
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
