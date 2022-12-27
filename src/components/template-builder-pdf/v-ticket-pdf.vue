<template>

    <div class="i_wrp">
        <div class="i_wrp-ticket">
          <p class="title">Билет</p>
          <input v-model="setValueWidthTicketPdf" class="input__value-ticket" id="ticketWidth" type="number" placeholder="Ширина mm">
          <input v-model="setValueHeightTicketPdf" class="input__value-ticket" id="ticketHeight" type="number" placeholder="Высота mm">
        </div>
        <div class="i_wrp-ticket">
          <p class="title">Корешок</p>
          <input v-model="setValueWidthRootletPdf" class="input__value-ticket" id="ticketWidth" type="number" placeholder="Ширина mm">
          <button class="btn_all" @click="$store.state.constValue.visibleTicket=!$store.state.constValue.visibleTicket">{{$store.state.constValue.visibleTicket ? 'Билет' : 'Корешок'}}</button>
        </div>
        <div class="i_wrp-ticket">
          <p class="title">Контроль</p>
          <input v-model="setValueWidthControlPdf" class="input__value-ticket" id="ticketWidth" type="number" placeholder="Ширина mm">
        </div>
    </div>

</template>

<script>
export default {
  name: 'v-ticket-pdf',

  data () {
    return {
      setValueWidthTicketPdf: '',
      setValueHeightTicketPdf: '',
      setValueWidthRootletPdf: '',
      setValueWidthControlPdf: ''
    }
  },
  watch: {
    /* Ширина билета */
    setValueWidthTicketPdf () {
      this.$store.state.variableTicket.setValueWidthTicket = (this.setValueWidthTicketPdf * this.$store.state.constValue.inchDPI)
      this.$store.state.variableTicket.resultTicketWidth = (this.setValueWidthTicketPdf * this.$store.state.constValue.inchPX)
    },
    /* Высота билета */
    setValueHeightTicketPdf () {
      this.$store.state.variableTicket.setValueHeightTicket = (this.setValueHeightTicketPdf * this.$store.state.constValue.inchDPI)
      this.$store.state.variableTicket.resultTicketHeight = (this.setValueHeightTicketPdf * this.$store.state.constValue.inchPX)
      if (this.$store.state.variableTicket.resultTicketHeight <= 0) {
        this.$store.state.constValue.pinVisible = 'none'
      } else {
        this.$store.state.constValue.pinVisible = 'block'
      }
    },
    /* Ширина корешка */
    setValueWidthRootletPdf () {
      this.$store.state.variableTicket.resultWidthRootlet = (this.setValueWidthRootletPdf * this.$store.state.constValue.inchPX)
    },
    /* Ширина контроля */
    setValueWidthControlPdf () {
      this.$store.state.variableTicket.resultWidthControl = this.$store.state.variableTicket.resultTicketWidth - (this.setValueWidthControlPdf * this.$store.state.constValue.inchPX)
    }
  }
}
</script>
