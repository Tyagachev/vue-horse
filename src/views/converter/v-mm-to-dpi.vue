<template>

    <div class="v-mmtodpi">
        <h2 class="mmtodpi_title">Mm <span class="arrow">=></span> Dpi</h2>
        <div class="dpitomm_link">
          <router-link :to="{name:'home'}">
            <button class="router_button"><a class="router_link" href="/"></a>Home</button>
          </router-link>
            <router-link :to="{name:'px-to-dpi'}">
              <button class="router_button"><a class="router_link" href="/px-to-dpi"></a>Px => Dpi</button>
            </router-link>
            <router-link :to="{name:'dpi-to-mm'}">
              <button class="router_button"><a class="router_link" href="/dpi-to-mm"></a>Dpi => Mm</button>
            </router-link>
        </div>
            <div class="input_wrp">
                <input v-model="$store.state.converter.width_mm" class="input__value" id="ticketWidth" type="number" placeholder="Ширина mm">
                <input v-model="$store.state.converter.height_mm" class="input__value" id="ticketHeight" type="number" placeholder="Высота mm">
                <button class="button_go" @click="CalcMmToDpi">Жмяк!</button>
                <div v-show="$store.state.converter.box_visible">
                  <div class="giftits" id="gif">
                    <img src="@/assets/gif/by.gif" alt="by" >
                  </div>
                    <p>Ширина: {{ $store.state.converter.result_width_dpi }} dpi</p>
                    <p>Высота: {{ $store.state.converter.result_height_dpi }} dpi</p>
                </div>
            </div>
    </div>

</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'v-mm-to-dpi',
  components: {},
  props: {},
  data () {
    return {}
  },
  methods: {
    ...mapMutations({
      CalcMmToDpi: 'CALC_MM_TO_DPI'
    })
  }
}
</script>
