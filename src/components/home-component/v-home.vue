<template>

    <div class="v-home">
      <div class="home_title_wrp">
        <h2 class="home_title"></h2>
      </div>
        <div class="home_link">
          <router-link :to="{name:'mm-to-dpi'}">
            <button class="router_button"><a class="router_link" href="/mm-to-dpi"></a>Mm => Dpi</button>
          </router-link>
          <router-link :to="{name:'px-to-dpi'}">
            <button class="router_button"><a class="router_link" href="/px-to-dpi"></a>Px => Dpi</button>
          </router-link>
          <router-link :to="{name:'dpi-to-mm'}">
            <button class="router_button"><a class="router_link" href="/dpi-to-mm"></a>Dpi => Mm</button>
          </router-link>
          <router-link :to="{name:'template'}">
            <button class="router_button"><a class="router_link" href="/tepmlate"></a>PRN & PDFT</button>
          </router-link>
          <img src="@/assets/gif/scratch_one-s_head.gif" alt="">
        </div>
    </div>

</template>

<script>

export default {
  name: 'v-home',
  components: {},
  props: {},
  data () {
    return {
      containers: []
    }
  },
  computed: {}

}
</script>
