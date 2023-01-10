<template>

    <div class="v-pxtodpi">
        <h2 class="pxtodpi_title">Px <span class="arrow">=></span> Dpi</h2>
        <div class="pxtodpi_link">
          <router-link :to="{name:'home'}">
            <button class="router_button"><a class="router_link" href="/"></a>Home</button>
          </router-link>
          <router-link :to="{name:'mm-to-dpi'}">
            <button class="router_button"><a class="router_link" href="/mm-to-dpi"></a>Mm => Dpi</button>
          </router-link>
          <router-link :to="{name:'dpi-to-mm'}">
            <button class="router_button"><a class="router_link" href="/dpi-to-mm"></a>Dpi => Mm</button>
          </router-link>
        </div>
        <div class="input_wrp">
          <input v-model="$store.state.converter.width_px" class="input__value" id="ticketWidthPx" type="number" placeholder="Ширина px">
          <input v-model="$store.state.converter.height_px" class="input__value" id="ticketHeightPx" type="number" placeholder="Высота px">
          <button class="button_go" @click="CalcPxToDpi">Жмяк!</button>
          <div v-show="$store.state.converter.box_visible">
              <div class="giftits" id="gif">
                <img src="@/assets/gif/by.gif" alt="by" >
              </div>
              <p>Ширина: {{$store.state.converter.result_width_pxdpi}} dpi</p>
              <p>Высота: {{$store.state.converter.result_height_pxdpi}} dpi</p>
          </div>
      </div>
    </div>

</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'v-px-to-dpi',
  components: {},
  props: {},
  data () {
    return {}
  },
  methods: {
    ...mapMutations({
      CalcPxToDpi: 'CALC_PX_TO_DPI'
    })
  }

}
</script>
