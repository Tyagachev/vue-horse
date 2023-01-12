<template>

    <div class="v-dpitomm">
        <h2 class="dpitomm_title">Dpi <span class="arrow">=></span> Mm</h2>
        <div class="dpitomm_link">
          <router-link :to="{name:'home'}">
            <button class="router_button"><a class="router_link" href="/"></a>Home</button>
          </router-link>
          <router-link :to="{name:'mm-to-dpi'}">
            <button class="router_button"><a class="router_link" href="/mm-to-dpi"></a>Mm => Dpi</button>
          </router-link>
          <router-link :to="{name:'px-to-dpi'}">
            <button class="router_button"><a class="router_link" href="/px-to-dpi"></a>Px => Dpi</button>
          </router-link>
        </div>
        <div class="input_wrp">
          <input v-model="$store.state.converter.width_dpi" class="input__value" id="ticketWidthDpi" type="number" placeholder="Ширина dpi">
          <input v-model="$store.state.converter.height_dpi" class="input__value" id="ticketHeightDpi" type="number" placeholder="Высота dpi">
          <button class="button_go" @click="CalcDpiToMm">Жмяк!</button>
          <div v-show="$store.state.converter.box_visible">
              <div class="giftits" id="gif">
                <img src="@/assets/gif/by.gif" alt="by" >
            </div>
          <p>Ширина: {{ $store.state.converter.result_width_mm }} mm</p>
          <p>Высота: {{ $store.state.converter.result_height_mm }} mm</p>
          </div>

        </div>
    </div>

</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'v-dpi-to-mm',
  components: {},
  props: {},
  data () {
    return {}
  },
  methods: {
    ...mapMutations({
      CalcDpiToMm: 'CALC_DPI_TO_MM'
    })
  }
}
</script>
