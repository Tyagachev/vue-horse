<template>

<div class="ticket" v-bind:style="{display: $store.state.constValue.pinVisible, position: $store.state.constValue.fix, width: $store.state.variableTicket.resultTicketWidth + 'px',height: $store.state.variableTicket.resultTicketHeight + 'px'}">
          <div class="text_box">
            <ul>
              <!--v-for Билета-->
              <li v-for="(el,idx) in $store.state.arrays.promoterCompArray" :key="idx"
                  class="list"
                  v-bind:style="{top: el.promoterCompY + 'px',left: el.promoterCompX + 'px'}">
                  <p class="ticket_text ">{{el.name}}</p>
              </li>
              <li v-for="(el,idx) in $store.state.arrays.promoterInnArray" :key="idx"
                  class="list"
                  v-bind:style="{top: el.promoterInnY + 'px',left: el.promoterInnX + 'px'}">
                  <p class="ticket_text ">{{el.name}}</p>
              </li>
              <li v-for="(el,idx) in $store.state.arrays.promoterAddressArray" :key="idx"
                  class="list"
                  v-bind:style="{top: el.promoterAddressY + 'px',left: el.promoterAddressX + 'px'}">
                  <p class="ticket_text ">{{el.name}}</p>
              </li>
              <li v-for="(el,idx) in $store.state.arrays.eventTitleStrOneArray" :key="idx"
                  class="list"
                  v-bind:style="{top: el.eventTitleStrOneY + 'px',left: el.eventTitleStrOneX + 'px'}">
                  <p class="ticket_text ">{{el.name}}</p>
              </li>
              <li v-for="(el,idx) in $store.state.arrays.eventTitleStrTwoArray" :key="idx"
                  class="list"
                  v-bind:style="{top: el.eventTitleStrTwoY + 'px',left: el.eventTitleStrTwoX + 'px'}">
                  <p class="ticket_text ">{{el.name}}</p>
              </li>
              <li v-for="(el,idx) in $store.state.arrays.eventTitleStrThreeArray" :key="idx"
                  class="list"
                  v-bind:style="{top: el.eventTitleStrThreeY + 'px',left: el.eventTitleStrThreeX + 'px'}">
                  <p class="ticket_text ">{{el.name}}</p>
              </li>
              <li v-for="(el,idx) in $store.state.arrays.placeArray" :key="idx"
                  class="list"
                  v-bind:style="{top: el.placeY + 'px',left: el.placeX + 'px'}">
                  <p class="ticket_text ">{{el.name}}</p>
              </li>
              <li v-for="(el,idx) in $store.state.arrays.eventSeanceArray" :key="idx"
                  class="list"
                  v-bind:style="{top: el.eventSeanceY + 'px',left: el.eventSeanceX + 'px'}">
                  <p class="ticket_text ">{{el.name}}</p>
              </li>
              <li v-for="(el,idx) in $store.state.arrays.seanceStartDateArray" :key="idx"
                  class="list"
                  v-bind:style="{top: el.eventStartDateY + 'px',left: el.eventStartDateX + 'px'}">
                  <p class="ticket_text ">{{el.name}}</p>
              </li>
              <li v-for="(el,idx) in $store.state.arrays.seanceStartTimeArray" :key="idx"
                  class="list"
                  v-bind:style="{top: el.eventStartTimeY + 'px',left: el.eventStartTimeX + 'px'}">
                  <p class="ticket_text ">{{el.name}}</p>
              </li>
              <li v-for="(el,idx) in $store.state.arrays.sectorArray" :key="idx"
                  class="list"
                  v-bind:style="{top: el.sectorY + 'px',left: el.sectorX + 'px'}">
                  <p class="ticket_text ">{{el.name}}</p>
              </li>
              <li v-for="(el,idx) in $store.state.arrays.ticketPlaceArray" :key="idx"
                  class="list"
                  v-bind:style="{top: el.ticketPlaceY + 'px',left: el.ticketPlaceX + 'px'}">
                  <p class="ticket_text ">{{el.name}}</p>
              </li>
              <li v-for="(el,idx) in $store.state.arrays.specialRulesOneArray" :key="idx"
                  class="list"
                  v-bind:style="{top: el.specialRulesOneY + 'px',left: el.specialRulesOneX + 'px'}">
                  <p class="ticket_text ">{{el.name}}</p>
              </li>
              <li v-for="(el,idx) in $store.state.arrays.specialRulesTwoArray" :key="idx"
                  class="list"
                  v-bind:style="{top: el.specialRulesTwoY + 'px',left: el.specialRulesTwoX + 'px'}">
                  <p class="ticket_text ">{{el.name}}</p>
              </li>
              <li v-for="(el,idx) in $store.state.arrays.ageLimitArray" :key="idx"
                  class="list"
                  v-bind:style="{top: el.ageLimitY + 'px',left: el.ageLimitX + 'px'}">
                  <p class="ticket_text ">{{el.name}}</p>
              </li>
              <li v-for="(el,idx) in $store.state.arrays.caseTicketArray" :key="idx"
                  class="list"
                  v-bind:style="{top: el.caseTicketY + 'px',left: el.caseTicketX + 'px'}">
                  <p class="ticket_text ">{{el.name}}</p>
              </li>
              <li v-for="(el,idx) in $store.state.arrays.invationTicketArray" :key="idx"
                  class="list"
                  v-bind:style="{top: el.caseInvitationY + 'px',left: el.caseInvitationX + 'px'}">
                  <p class="ticket_text ">{{el.name}}</p>
              </li>
              <li v-for="(el,idx) in $store.state.arrays.ticketTitleArray" :key="idx"
                  class="list"
                  v-bind:style="{top: el.ticketTitleY + 'px',left: el.ticketTitleX + 'px'}">
                  <p class="ticket_text ">{{el.name}}</p>
              </li>
              <li v-for="(el,idx) in $store.state.arrays.ticketSaleArray" :key="idx"
                  class="list"
                  v-bind:style="{top: el.ticketSaleY + 'px',left: el.ticketSaleX + 'px'}">
                  <p class="ticket_text ">{{el.name}}</p>
              </li>
              <li v-for="(el,idx) in $store.state.arrays.cashierTicketArray" :key="idx"
                  class="list"
                  v-bind:style="{top: el.cashierNameY + 'px',left: el.cashierNameX + 'px'}">
                  <p class="ticket_text ">{{el.name}}</p>
              </li>
              <li v-for="(el,idx) in $store.state.arrays.pushkinCardTicketArray" :key="idx"
                  class="list"
                  v-bind:style="{top: el.casePushkinCardY + 'px',left: el.casePushkinCardX + 'px'}">
                  <p class="ticket_text ">{{el.name}}</p>
              </li>
              <li v-for="(el,idx) in $store.state.arrays.fieldBarcodeTicketArray" :key="idx"
                  class="list"
                  v-bind:style="{top: el.fieldBarcodeY + 'px',left: el.fieldBarcodeX + 'px'}">
                  <div class="title_barcode ">{{el.name}}</div>
              </li>

              <!--v-for Корешка-->
              <li v-for="(el,idx) in $store.state.arrays.promoterCompArrayR" :key="idx"
                  class="list"
                  v-bind:style="{top: el.promoterCompY + 'px',left: el.promoterCompX + 'px'}">
                  <p class="ticket_text-rootlet ">{{el.name}}</p>
              </li>
              <li v-for="(el,idx) in $store.state.arrays.promoterInnArrayR" :key="idx"
                  class="list"
                  v-bind:style="{top: el.promoterInnY + 'px',left: el.promoterInnX + 'px'}">
                  <p class="ticket_text-rootlet ">{{el.name}}</p>
              </li>
              <li v-for="(el,idx) in $store.state.arrays.promoterAddressArrayR" :key="idx"
                  class="list"
                  v-bind:style="{top: el.promoterAddressY + 'px',left: el.promoterAddressX + 'px'}">
                  <p class="ticket_text-rootlet ">{{el.name}}</p>
              </li>
              <li v-for="(el,idx) in $store.state.arrays.eventTitleStrOneArrayR" :key="idx"
                  class="list"
                  v-bind:style="{top: el.eventTitleStrOneY + 'px',left: el.eventTitleStrOneX + 'px'}">
                  <p class="ticket_text-rootlet ">{{el.name}}</p>
              </li>
              <li v-for="(el,idx) in $store.state.arrays.eventTitleStrTwoArrayR" :key="idx"
                  class="list"
                  v-bind:style="{top: el.eventTitleStrTwoY + 'px',left: el.eventTitleStrTwoX + 'px'}">
                  <p class="ticket_text-rootlet ">{{el.name}}</p>
              </li>
              <li v-for="(el,idx) in $store.state.arrays.eventTitleStrThreeArrayR" :key="idx"
                  class="list"
                  v-bind:style="{top: el.eventTitleStrThreeY + 'px',left: el.eventTitleStrThreeX + 'px'}">
                  <p class="ticket_text-rootlet ">{{el.name}}</p>
              </li>
              <li v-for="(el,idx) in $store.state.arrays.placeArrayR" :key="idx"
                  class="list"
                  v-bind:style="{top: el.placeY + 'px',left: el.placeX + 'px'}">
                  <p class="ticket_text-rootlet ">{{el.name}}</p>
              </li>
              <li v-for="(el,idx) in $store.state.arrays.eventSeanceArrayR" :key="idx"
                  class="list"
                  v-bind:style="{top: el.eventSeanceY + 'px',left: el.eventSeanceX + 'px'}">
                  <p class="ticket_text-rootlet ">{{el.name}}</p>
              </li>
              <li v-for="(el,idx) in $store.state.arrays.seanceStartDateArrayR" :key="idx"
                  class="list"
                  v-bind:style="{top: el.eventStartDateY + 'px',left: el.eventStartDateX + 'px'}">
                  <p class="ticket_text-rootlet ">{{el.name}}</p>
              </li>
              <li v-for="(el,idx) in $store.state.arrays.seanceStartTimeArrayR" :key="idx"
                  class="list"
                  v-bind:style="{top: el.eventStartTimeY + 'px',left: el.eventStartTimeX + 'px'}">
                  <p class="ticket_text-rootlet ">{{el.name}}</p>
              </li>
              <li v-for="(el,idx) in $store.state.arrays.sectorArrayR" :key="idx"
                  class="list"
                  v-bind:style="{top: el.sectorY + 'px',left: el.sectorX + 'px'}">
                  <p class="ticket_text-rootlet ">{{el.name}}</p>
              </li>
              <li v-for="(el,idx) in $store.state.arrays.ticketPlaceArrayR" :key="idx"
                  class="list"
                  v-bind:style="{top: el.ticketPlaceY + 'px',left: el.ticketPlaceX + 'px'}">
                  <p class="ticket_text-rootlet ">{{el.name}}</p>
              </li>
              <li v-for="(el,idx) in $store.state.arrays.specialRulesOneArrayR" :key="idx"
                  class="list"
                  v-bind:style="{top: el.specialRulesOneY + 'px',left: el.specialRulesOneX + 'px'}">
                  <p class="ticket_text-rootlet ">{{el.name}}</p>
              </li>
              <li v-for="(el,idx) in $store.state.arrays.specialRulesTwoArrayR" :key="idx"
                  class="list"
                  v-bind:style="{top: el.specialRulesTwoY + 'px',left: el.specialRulesTwoX + 'px'}">
                  <p class="ticket_text-rootlet ">{{el.name}}</p>
              </li>
              <li v-for="(el,idx) in $store.state.arrays.ageLimitArrayR" :key="idx"
                  class="list"
                  v-bind:style="{top: el.ageLimitY + 'px',left: el.ageLimitX + 'px'}">
                  <p class="ticket_text-rootlet ">{{el.name}}</p>
              </li>
              <li v-for="(el,idx) in $store.state.arrays.caseTicketArrayR" :key="idx"
                  class="list"
                  v-bind:style="{top: el.caseTicketY + 'px',left: el.caseTicketX + 'px'}">
                  <p class="ticket_text-rootlet ">{{el.name}}</p>
              </li>
              <li v-for="(el,idx) in $store.state.arrays.invationTicketArrayR" :key="idx"
                  class="list"
                  v-bind:style="{top: el.caseInvitationY + 'px',left: el.caseInvitationX + 'px'}">
                  <p class="ticket_text-rootlet">{{el.name}}</p>
              </li>
              <li v-for="(el,idx) in $store.state.arrays.ticketTitleArrayR" :key="idx"
                  class="list"
                  v-bind:style="{top: el.ticketTitleY + 'px',left: el.ticketTitleX + 'px'}">
                  <p class="ticket_text-rootlet ">{{el.name}}</p>
              </li>
              <li v-for="(el,idx) in $store.state.arrays.ticketSaleArrayR" :key="idx"
                  class="list"
                  v-bind:style="{top: el.ticketSaleY + 'px',left: el.ticketSaleX + 'px'}">
                  <p class="ticket_text-rootlet ">{{el.name}}</p>
                </li>
                <li v-for="(el,idx) in $store.state.arrays.cashierTicketArrayR" :key="idx"
                  class="list"
                  v-bind:style="{top: el.cashierNameY + 'px',left: el.cashierNameX + 'px'}">
                  <p class="ticket_text-rootlet ">{{el.name}}</p>
              </li>
              <li v-for="(el,idx) in $store.state.arrays.pushkinCardTicketArrayR" :key="idx"
                  class="list"
                  v-bind:style="{top: el.casePushkinCardY + 'px',left: el.casePushkinCardX + 'px'}">
                  <p class="ticket_text-rootlet ">{{el.name}}</p>
              </li>
              <li v-for="(el,idx) in $store.state.arrays.fieldBarcodeTicketArrayR" :key="idx"
                  class="list"
                  v-bind:style="{top: el.fieldBarcodeY + 'px',left: el.fieldBarcodeX + 'px'}">
                  <div class="title_barcode-rootlet ">{{el.name}}</div>
              </li>
            </ul>
          </div>
          <div class="ticket_rootlet" v-bind:style="{width: $store.state.variableTicket.resultWidthRootlet + 'px'}"></div>
          <div class="ticket_control" v-bind:style="{width: $store.state.variableTicket.resultWidthControl + 'px'}"></div>
          <div class="cart_pin-div">
            <div @click="Pin" class="cart_pin" v-if="pin"><img class="pin_img" src="@/assets/img/pr-blue.png" alt=""></div>
            <div @click="Pin" class="cart_pin" v-else><img class="pin_img" src="@/assets/img/otkr-blue.png" alt=""></div>
          </div>
        </div>

</template>

<script>

export default {
  name: 'v-ticket-for',
  components: {},
  props: {},
  data () {
    return {}
  },
  methods: {
    Pin () {
      if (this.$store.state.constValue.fix === 'absolute') {
        this.$store.state.constValue.fix = 'fixed'
      } else {
        this.$store.state.constValue.fix = 'absolute'
      }
      if (this.pin === true) {
        this.pin = false
      } else {
        this.pin = true
      }
    }
  }
}
</script>
