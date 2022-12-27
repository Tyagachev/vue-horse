import dataBase from './database.js'

export default {
  state: {
    /*
    * Массивы элементов тела билета
    */
    promoterCompArray: [],
    promoterInnArray: [],
    promoterAddressArray: [],
    eventTitleStrOneArray: [],
    eventTitleStrTwoArray: [],
    eventTitleStrThreeArray: [],
    placeArray: [],
    eventSeanceArray: [],
    seanceStartDateArray: [],
    seanceStartTimeArray: [],
    sectorArray: [],
    ticketPlaceArray: [],
    specialRulesOneArray: [],
    specialRulesTwoArray: [],
    ageLimitArray: [],
    caseTicketArray: [],
    invationTicketArray: [],
    ticketTitleArray: [],
    ticketSaleArray: [],
    cashierTicketArray: [],
    pushkinCardTicketArray: [],
    fieldBarcodeTicketArray: [],
    templateArray: [],
    /*
    * Массивы элементов корешка
    */
    promoterCompArrayR: [],
    promoterInnArrayR: [],
    promoterAddressArrayR: [],
    eventTitleStrOneArrayR: [],
    eventTitleStrTwoArrayR: [],
    eventTitleStrThreeArrayR: [],
    placeArrayR: [],
    eventSeanceArrayR: [],
    seanceStartDateArrayR: [],
    seanceStartTimeArrayR: [],
    sectorArrayR: [],
    ticketPlaceArrayR: [],
    specialRulesOneArrayR: [],
    specialRulesTwoArrayR: [],
    ageLimitArrayR: [],
    caseTicketArrayR: [],
    invationTicketArrayR: [],
    ticketTitleArrayR: [],
    ticketSaleArrayR: [],
    cashierTicketArrayR: [],
    pushkinCardTicketArrayR: [],
    fieldBarcodeTicketArrayR: [],
    templateArrayRootlet: []
  },
  mutations: {
    /*
    * Удаление елемента из массива
    */
    RemoveIndexTicket (state, idx) {
      state.templateArray.splice(idx, 1)
    },
    RemoveIndexRootlet (state, idx) {
      state.templateArrayRootlet.splice(idx, 1)
    },
    /*
    * Заполнение массивов билета
    */
    AddPromoterComp (state) {
      state.promoterCompArray.push(state.dataBase.db.promoter_company)
      state.templateArray.push(state.dataBase.db.promoter_company)
    },
    RemovePromoterComp (state) {
      state.promoterCompArray.length = 0
    },

    AddPromoterInn (state) {
      state.promoterInnArray.push(state.dataBase.db.promoter_inn)
      state.templateArray.push(state.dataBase.db.promoter_inn)
    },
    RemovePromoterInn (state) {
      state.promoterInnArray.length = 0
    },

    AddPromoterAddress (state) {
      state.promoterAddressArray.push(state.dataBase.db.promoter_address)
      state.templateArray.push(state.dataBase.db.promoter_address)
    },
    RemovePromoterAddress (state) {
      state.promoterAddressArray.length = 0
    },

    AddEventTitleStrOne (state) {
      state.eventTitleStrOneArray.push(state.dataBase.db.event_title_str1)
      state.templateArray.push(state.dataBase.db.event_title_str1)
    },
    RemoveEventTitleStrOne (state) {
      state.eventTitleStrOneArray.length = 0
    },

    AddEventTitleStrTwo (state) {
      state.eventTitleStrTwoArray.push(state.dataBase.db.event_title_str2)
      state.templateArray.push(state.dataBase.db.event_title_str2)
    },
    RemoveEventTitleStrTwo (state) {
      state.eventTitleStrTwoArray.length = 0
    },

    AddEventTitleStrThree (state) {
      state.eventTitleStrThreeArray.push(state.dataBase.db.event_title_str3)
      state.templateArray.push(state.dataBase.db.event_title_str3)
    },
    RemoveEventTitleStrThree (state) {
      state.eventTitleStrThreeArray.length = 0
    },

    AddPlace (state) {
      state.placeArray.push(state.dataBase.db.event_place_title)
      state.templateArray.push(state.dataBase.db.event_place_title)
    },
    RemovePlace (state) {
      state.placeArray.length = 0
    },

    AddEventSeance (state) {
      state.eventSeanceArray.push(state.dataBase.db.event_seance)
      state.templateArray.push(state.dataBase.db.event_seance)
    },
    RemoveEventSeance (state) {
      state.eventSeanceArray.length = 0
    },

    AddStartDate (state) {
      state.seanceStartDateArray.push(state.dataBase.db.event_seance_start_date)
      state.templateArray.push(state.dataBase.db.event_seance_start_date)
    },
    RemoveStartDate (state) {
      state.seanceStartDateArray.length = 0
    },

    AddStartTime (state) {
      state.seanceStartTimeArray.push(state.dataBase.db.event_seance_start_time)
      state.templateArray.push(state.dataBase.db.event_seance_start_time)
    },
    RemoveStartTime (state) {
      state.seanceStartTimeArray.length = 0
    },

    AddSector (state) {
      state.sectorArray.push(state.dataBase.db.sector)
      state.templateArray.push(state.dataBase.db.sector)
    },
    RemoveSector (state) {
      state.sectorArray.length = 0
    },

    AddTicketPlace (state) {
      state.ticketPlaceArray.push(state.dataBase.db.ticket_site_place)
      state.templateArray.push(state.dataBase.db.ticket_site_place)
    },
    RemoveTicketPlace (state) {
      state.ticketPlaceArray.length = 0
    },

    AddSpecialRulesOne (state) {
      state.specialRulesOneArray.push(state.dataBase.db.ticket_row)
      state.templateArray.push(state.dataBase.db.ticket_row)
    },
    RemoveSpecialRulesOne (state) {
      state.specialRulesOneArray.length = 0
    },

    AddSpecialRulesTwo (state) {
      state.specialRulesTwoArray.push(state.dataBase.db.ticket_place)
      state.templateArray.push(state.dataBase.db.ticket_place)
    },
    RemoveSpecialRulesTwo (state) {
      state.specialRulesTwoArray.length = 0
    },

    AddAgeLimit (state) {
      state.ageLimitArray.push(state.dataBase.db.age_limit)
      state.templateArray.push(state.dataBase.db.age_limit)
    },
    RemoveAgeLimit (state) {
      state.ageLimitArray.length = 0
    },

    AddCaseTicket (state) {
      state.caseTicketArray.push(state.dataBase.db.case_ticket)
      state.templateArray.push(state.dataBase.db.case_ticket)
    },
    RemoveCaseTicket (state) {
      state.caseTicketArray.length = 0
    },

    AddСaseInvitation (state) {
      state.invationTicketArray.push(state.dataBase.db.case_invitation)
      state.templateArray.push(state.dataBase.db.case_invitation)
    },
    RemoveСaseInvitation (state) {
      state.invationTicketArray.length = 0
    },

    AddTicketTitle (state) {
      state.ticketTitleArray.push(state.dataBase.db.ticket_title)
      state.templateArray.push(state.dataBase.db.ticket_title)
    },
    RemoveTicketTitle (state) {
      state.ticketTitleArray.length = 0
    },

    AddTicketSale (state) {
      state.ticketSaleArray.push(state.dataBase.db.ticket_sale)
      state.templateArray.push(state.dataBase.db.ticket_sale)
    },
    RemoveTicketSale (state) {
      state.ticketSaleArray.length = 0
    },

    AddCashierName (state) {
      state.cashierTicketArray.push(state.dataBase.db.cashier_name)
      state.templateArray.push(state.dataBase.db.cashier_name)
    },
    RemoveCashierName (state) {
      state.cashierTicketArray.length = 0
    },

    AddCasePushkinCard (state) {
      state.pushkinCardTicketArray.push(state.dataBase.db.case_pushkin_card)
      state.templateArray.push(state.dataBase.db.case_pushkin_card)
    },
    RemoveCasePushkinCard (state) {
      state.pushkinCardTicketArray.length = 0
    },

    AddFieldBarcode (state) {
      state.fieldBarcodeTicketArray.push(state.dataBase.db.field_barcode)
      state.templateArray.push(state.dataBase.db.field_barcode)
    },
    RemoveFieldBarcode (state) {
      state.fieldBarcodeTicketArray.length = 0
    },
    /*
    * Заполнение массивов корешка
    */
    AddPromoterCompR (state) {
      state.promoterCompArrayR.push(state.dataBase.dbRootlet.promoter_company)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.promoter_company)
    },
    RemovePromoterCompR (state) {
      state.promoterCompArrayR.length = 0
    },
    AddPromoterInnR (state) {
      state.promoterInnArrayR.push(state.dataBase.dbRootlet.promoter_inn)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.promoter_inn)
    },
    RemovePromoterInnR (state) {
      state.promoterInnArrayR.length = 0
    },
    AddPromoterAddressR (state) {
      state.promoterAddressArrayR.push(state.dataBase.dbRootlet.promoter_address)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.promoter_address)
    },
    RemovePromoterAddressR (state) {
      state.promoterAddressArrayR.length = 0
    },
    AddEventTitleStrOneR (state) {
      state.eventTitleStrOneArrayR.push(state.dataBase.dbRootlet.event_title_str1)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.event_title_str1)
    },
    RemoveEventTitleStrOneR (state) {
      state.eventTitleStrOneArrayR.length = 0
    },
    AddEventTitleStrTwoR (state) {
      state.eventTitleStrTwoArrayR.push(state.dataBase.dbRootlet.event_title_str2)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.event_title_str2)
    },
    RemoveEventTitleStrTwoR (state) {
      state.eventTitleStrTwoArrayR.length = 0
    },
    AddEventTitleStrThreeR (state) {
      state.eventTitleStrThreeArrayR.push(state.dataBase.dbRootlet.event_title_str3)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.event_title_str3)
    },
    RemoveEventTitleStrThreeR (state) {
      state.eventTitleStrThreeArrayR.length = 0
    },
    AddPlaceR (state) {
      state.placeArrayR.push(state.dataBase.dbRootlet.event_place_title)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.event_place_title)
    },
    RemovePlaceR (state) {
      state.placeArrayR.length = 0
    },
    AddEventSeanceR (state) {
      state.eventSeanceArrayR.push(state.dataBase.dbRootlet.event_seance)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.event_seance)
    },
    RemoveEventSeanceR (state) {
      state.eventSeanceArrayR.length = 0
    },
    AddStartDateR (state) {
      state.seanceStartDateArrayR.push(state.dataBase.dbRootlet.event_seance_start_date)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.event_seance_start_date)
    },
    RemoveStartDateR (state) {
      state.seanceStartDateArrayR.length = 0
    },
    AddStartTimeR (state) {
      state.seanceStartTimeArrayR.push(state.dataBase.dbRootlet.event_seance_start_time)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.event_seance_start_time)
    },
    RemoveStartTimeR (state) {
      state.seanceStartTimeArrayR.length = 0
    },
    AddSectorR (state) {
      state.sectorArrayR.push(state.dataBase.dbRootlet.sector)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.sector)
    },
    RemoveSectorR (state) {
      state.sectorArrayR.length = 0
    },
    AddTicketPlaceR (state) {
      state.ticketPlaceArrayR.push(state.dataBase.dbRootlet.ticket_site_place)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.ticket_site_place)
    },
    RemoveTicketPlaceR (state) {
      state.ticketPlaceArrayR.length = 0
    },
    AddSpecialRulesOneR (state) {
      state.specialRulesOneArrayR.push(state.dataBase.dbRootlet.ticket_row)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.ticket_row)
    },
    RemoveSpecialRulesOneR (state) {
      state.specialRulesOneArrayR.length = 0
    },
    AddSpecialRulesTwoR (state) {
      state.specialRulesTwoArrayR.push(state.dataBase.dbRootlet.ticket_place)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.ticket_place)
    },
    RemoveSpecialRulesTwoR (state) {
      state.specialRulesTwoArrayR.length = 0
    },
    AddAgeLimitR (state) {
      state.ageLimitArrayR.push(state.dataBase.dbRootlet.age_limit)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.age_limit)
    },
    RemoveAgeLimitR (state) {
      state.ageLimitArrayR.length = 0
    },
    AddCaseTicketR (state) {
      state.caseTicketArrayR.push(state.dataBase.dbRootlet.case_ticket)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.case_ticket)
    },
    RemoveCaseTicketR (state) {
      state.caseTicketArrayR.length = 0
    },
    AddСaseInvitationR (state) {
      state.invationTicketArrayR.push(state.dataBase.dbRootlet.case_invitation)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.case_invitation)
    },
    RemoveСaseInvitationR (state) {
      state.invationTicketArrayR.length = 0
    },
    AddTicketTitleR (state) {
      state.ticketTitleArrayR.push(state.dataBase.dbRootlet.ticket_title)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.ticket_title)
    },
    RemoveTicketTitleR (state) {
      state.ticketTitleArrayR.length = 0
    },
    AddTicketSaleR (state) {
      state.ticketSaleArrayR.push(state.dataBase.dbRootlet.ticket_sale)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.ticket_sale)
    },
    RemoveTicketSaleR (state) {
      state.ticketSaleArrayR.length = 0
    },
    AddCashierNameR (state) {
      state.cashierTicketArrayR.push(state.dataBase.dbRootlet.cashier_name)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.cashier_name)
    },
    RemoveCashierNameR (state) {
      state.cashierTicketArrayR.length = 0
    },
    AddCasePushkinCardR (state) {
      state.pushkinCardTicketArrayR.push(state.dataBase.dbRootlet.case_pushkin_card)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.case_pushkin_card)
    },
    RemoveCasePushkinCardR (state) {
      state.pushkinCardTicketArrayR.length = 0
    },
    AddFieldBarcodeR (state) {
      state.fieldBarcodeTicketArrayR.push(state.dataBase.dbRootlet.field_barcode)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.field_barcode)
    },
    RemoveFieldBarcodeR (state) {
      state.fieldBarcodeTicketArrayR.length = 0
    }
  },

  modules: {
    dataBase
  }
}
