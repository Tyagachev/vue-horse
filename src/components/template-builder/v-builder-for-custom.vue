<template>
  <div class="template-custom">
    <ul>
      <li class="build_list" v-for="(el,idx) in arrTop" :key="idx">
        <div class="build_w">{{el}}</div>
      </li>
        <div class="build_w">{{LHT}}{{$store.state.variableTicket.setValueWidthTicket}},{{$store.state.variableTicket.setValueHeightTicket}},<span>40,</span><span>40></span></div>
      <li class="build_list" v-for="(el,idx) in arrCenter" :key="idx">
        <div class="build_n-text">{{el}}</div>
      </li>
    </ul>
      <p>{{textRotateСlockwise}}</p>
    <ul class="build_list-padding">
      <li class="build_list-custom" @click="RemoveIndexRootlet(idx)" v-for="(el, idx) in $store.state.arrays.templateArrayRootlet" :key="idx">
        <div>{{el.tag2}}{{el.rcTag}}{{el.originalForCustomY}}<span>,</span>{{el.originalForCustomX}}<span>></span></div>
        <div>{{el.staticCustom}}{{el.fontSize}}{{el.fontWeight}}{{el.utfTag}}</div>
      </li>
    </ul>
    <hr>
    <p>{{textHorizontal}}</p>
    <ul class="build_list-padding">
      <li class="build_list-custom" @click="RemoveIndexTicket(idx)" v-for="(el, idx) in $store.state.arrays.templateArray" :key="idx">
        <div>{{el.tag2}}{{el.rcTag}}{{el.originalForCustomY}}<span>,</span>{{el.originalForCustomX}}<span>></span></div>
        <div>{{el.staticCustom}}{{el.fontSize}}{{el.fontWeight}}{{el.utfTag}}</div>
      </li>
    </ul>
    <p></p>
      <p></p>
      <ul>
      <li class="build_list" v-for="(el,idx) in arrBottom" :key="idx">
        <div class="build_n-text">{{el}}</div>
      </li>
    </ul>
</div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'v-builder-for-custom',
  props: {},
  data () {
    return {
      arrTop: ['<SVEL>', '<CB>'],
      LHT: '<LHT',
      arrCenter: ['<SP0><BA0>', '<X2,L>', '<F:arial.ttf>', '<F:enc:ascii>'],
      arrBottom: ['<P>', '<CUT>'],
      textHorizontal: '<NR>',
      textRotateСlockwise: '<RL>'
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
