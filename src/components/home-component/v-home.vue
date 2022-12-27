<template>

    <div class="v-home">
      <div class="home_title_wrp">
        <h2 class="home_title"></h2>
      </div>
        <div class="home_link">
          <router-link :to="{name:'mmtodpi'}">
            <button class="router_button"><a class="router_link" href="/mmtodpi"></a>Mm => Dpi</button>
          </router-link>
          <router-link :to="{name:'pxtodpi'}">
            <button class="router_button"><a class="router_link" href="/pxtodpi"></a>Px => Dpi</button>
          </router-link>
          <router-link :to="{name:'dpitomm'}">
            <button class="router_button"><a class="router_link" href="/dpitomm"></a>Dpi => Mm</button>
          </router-link>
          <router-link :to="{name:'template'}">
            <button class="router_button"><a class="router_link" href="/tepmlate"></a>PRN</button>
          </router-link>
          <router-link :to="{name:'template-pdf'}">
            <button class="router_button"><a class="router_link" href="/tepmlate"></a>PDF</button>
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
