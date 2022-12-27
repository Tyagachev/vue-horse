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
        <div>{{el.ttf}}</div>
        <div>{{el.fontSize}}</div>
        <div>{{el.fontWeight}}</div>
        <div>{{el.rcTag}}{{el.originalForCustomX}}<span>,</span>{{el.originalForCustomY}}<span>></span>{{el.staticCustom}}{{el.utfTag}}</div>
      </li>
    </ul>
    <hr>
    <p>{{textHorizontal}}</p>
    <ul class="build_list-padding">
      <li class="build_list-custom" @click="RemoveIndexTicket(idx)" v-for="(el, idx) in $store.state.arrays.templateArray" :key="idx">
        <div>{{el.fontSize}}</div>
        <div>{{el.fontWeight}}</div>
        <div>{{el.rcTag}}{{el.originalForCustomX}}<span>,</span>{{el.originalForCustomY}}<span>></span>{{el.staticCustom}}{{el.utfTag}}</div>
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
      textRotateСlockwise: '<RL>',
      notch: this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI
    }
  },
  computed: {},
  methods: {
    ...mapMutations({ RemoveIndexTicket: 'RemoveIndexTicket' }),
    ...mapMutations({ RemoveIndexRootlet: 'RemoveIndexRootlet' })
  }
}
</script>
