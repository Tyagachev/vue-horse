<template>

    <div class="i_wrp">
      <div class="i_wrp-ticket">
          <p class="title">Билет</p>
          <input v-model="setValueWidthTicket" class="input__value-ticket" id="ticketWidth" type="number" placeholder="Ширина mm">
          <input v-model="setValueHeightTicket" class="input__value-ticket" id="ticketHeight" type="number" placeholder="Высота mm">
        </div>
        <div class="i_wrp-ticket">
          <p class="title">Отступ до ч.м</p>
          <input v-model="$store.state.variableTicket.blackLabel" class="input__value-ticket" id="ticketWidth" type="number" placeholder="mm">
        </div>
        <div class="i_wrp-ticket">
          <p class="title">Корешок</p>
          <input v-model="setValueWidthRootlet" class="input__value-ticket" id="ticketWidth" type="number" placeholder="Ширина mm">
          <button class="btn_all" @click="$store.state.constValue.visibleTicket=!$store.state.constValue.visibleTicket">{{$store.state.constValue.visibleTicket ? 'Билет' : 'Корешок'}}</button>
        </div>
        <div class="i_wrp-ticket">
          <p class="title">Контроль</p>
          <input v-model="setValueWidthControl" class="input__value-ticket" id="ticketWidth" type="number" placeholder="Ширина mm">
        </div>
    </div>

</template>

<script>
export default {
  name: 'v-ticket',
  data () {
    return {
      setValueWidthTicket: '',
      setValueHeightTicket: '',
      setValueWidthRootlet: '',
      setValueWidthControl: ''
    }
  },
  watch: {

    /* Ширина билета */
    setValueWidthTicket () {
      this.$store.state.variableTicket.setValueWidthTicket = (this.setValueWidthTicket * this.$store.state.constValue.inchDPI)
      this.$store.state.variableTicket.resultTicketWidth = (this.setValueWidthTicket * this.$store.state.constValue.inchPX)
      this.$store.state.variableTicket.resultTicketWidthPDF = Math.floor(((this.setValueWidthTicket * this.$store.state.converter.points) / this.$store.state.converter.inch) * 100) / 100
    },

    /* Высота билета */
    setValueHeightTicket () {
      this.$store.state.variableTicket.setValueHeightTicket = (this.setValueHeightTicket * this.$store.state.constValue.inchDPI)
      this.$store.state.variableTicket.resultTicketHeight = (this.setValueHeightTicket * this.$store.state.constValue.inchPX)
      this.$store.state.variableTicket.resultTicketHeightPDF = Math.floor(((this.setValueHeightTicket * this.$store.state.converter.points) / this.$store.state.converter.inch) * 100) / 100
      if (this.$store.state.variableTicket.resultTicketHeight <= 0) {
        this.$store.state.constValue.pinVisible = 'none'
      } else {
        this.$store.state.constValue.pinVisible = 'block'
      }
    },

    /* Ширина корешка */
    setValueWidthRootlet () {
      this.$store.state.variableTicket.resultWidthRootlet = (this.setValueWidthRootlet * this.$store.state.constValue.inchPX)
    },

    /* Ширина контроля */
    setValueWidthControl () {
      this.$store.state.variableTicket.resultWidthControl = this.$store.state.variableTicket.resultTicketWidth - (this.setValueWidthControl * this.$store.state.constValue.inchPX)
    }
  }
}
</script>
