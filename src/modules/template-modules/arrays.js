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
    * Удаление элемента из массива
    */
    REMOVE_INDEX_TICKET: (state, idx) => {
      state.templateArray.splice(idx, 1)
    },
    REMOVE_INDEX_ROOTLET: (state, idx) => {
      state.templateArrayRootlet.splice(idx, 1)
    },
    /*
    * Заполнение массивов билета
    */
    ADD_PROMOTER_COMP: (state) => {
      state.promoterCompArray.push(state.dataBase.db.promoter_company)
      state.templateArray.push(state.dataBase.db.promoter_company)
    },
    REMOVE_PROMOTER_COMP: (state) => {
      state.promoterCompArray.length = 0
    },

    ADD_PROMOTER_INN: (state) => {
      state.promoterInnArray.push(state.dataBase.db.promoter_inn)
      state.templateArray.push(state.dataBase.db.promoter_inn)
    },
    REMOVE_PROMOTER_INN: (state) => {
      state.promoterInnArray.length = 0
    },

    ADD_PROMOTER_ADDRESS: (state) => {
      state.promoterAddressArray.push(state.dataBase.db.promoter_address)
      state.templateArray.push(state.dataBase.db.promoter_address)
    },
    REMOVE_PROMOTER_ADDRESS: (state) => {
      state.promoterAddressArray.length = 0
    },

    ADD_EVENT_TITLE_STRING_ONE: (state) => {
      state.eventTitleStrOneArray.push(state.dataBase.db.event_title_str1)
      state.templateArray.push(state.dataBase.db.event_title_str1)
    },
    REMOVE_EVENT_TITLE_STRING_ONE: (state) => {
      state.eventTitleStrOneArray.length = 0
    },

    ADD_EVENT_TITLE_STRING_TWO: (state) => {
      state.eventTitleStrTwoArray.push(state.dataBase.db.event_title_str2)
      state.templateArray.push(state.dataBase.db.event_title_str2)
    },
    REMOVE_EVENT_TITLE_STRING_TWO: (state) => {
      state.eventTitleStrTwoArray.length = 0
    },

    ADD_EVENT_TITLE_STRING_THREE: (state) => {
      state.eventTitleStrThreeArray.push(state.dataBase.db.event_title_str3)
      state.templateArray.push(state.dataBase.db.event_title_str3)
    },
    REMOVE_EVENT_TITLE_STRING_THREE: (state) => {
      state.eventTitleStrThreeArray.length = 0
    },

    ADD_PLACE: (state) => {
      state.placeArray.push(state.dataBase.db.event_place_title)
      state.templateArray.push(state.dataBase.db.event_place_title)
    },
    REMOVE_PLACE: (state) => {
      state.placeArray.length = 0
    },

    ADD_EVENT_SEANSE: (state) => {
      state.eventSeanceArray.push(state.dataBase.db.event_seance)
      state.templateArray.push(state.dataBase.db.event_seance)
    },
    REMOVE_EVENT_SEANSE: (state) => {
      state.eventSeanceArray.length = 0
    },

    ADD_START_DATE: (state) => {
      state.seanceStartDateArray.push(state.dataBase.db.event_seance_start_date)
      state.templateArray.push(state.dataBase.db.event_seance_start_date)
    },
    REMOVE_START_DATE: (state) => {
      state.seanceStartDateArray.length = 0
    },

    ADD_START_TIME: (state) => {
      state.seanceStartTimeArray.push(state.dataBase.db.event_seance_start_time)
      state.templateArray.push(state.dataBase.db.event_seance_start_time)
    },
    REMOVE_START_TIME: (state) => {
      state.seanceStartTimeArray.length = 0
    },

    ADD_SECTOR: (state) => {
      state.sectorArray.push(state.dataBase.db.sector)
      state.templateArray.push(state.dataBase.db.sector)
    },
    REMOVE_SECTOR: (state) => {
      state.sectorArray.length = 0
    },

    ADD_TICKET_PLACE: (state) => {
      state.ticketPlaceArray.push(state.dataBase.db.ticket_site_place)
      state.templateArray.push(state.dataBase.db.ticket_site_place)
    },
    REMOVE_TICKET_PLACE: (state) => {
      state.ticketPlaceArray.length = 0
    },

    ADD_SPECIAL_RULES_ONE: (state) => {
      state.specialRulesOneArray.push(state.dataBase.db.ticket_row)
      state.templateArray.push(state.dataBase.db.ticket_row)
    },
    REMOVE_SPECIAL_RULES_ONE: (state) => {
      state.specialRulesOneArray.length = 0
    },

    ADD_SPECIAL_RULES_TWO: (state) => {
      state.specialRulesTwoArray.push(state.dataBase.db.ticket_place)
      state.templateArray.push(state.dataBase.db.ticket_place)
    },
    REMOVE_SPECIAL_RULES_TWO: (state) => {
      state.specialRulesTwoArray.length = 0
    },

    ADD_AGE_LIMIT: (state) => {
      state.ageLimitArray.push(state.dataBase.db.age_limit)
      state.templateArray.push(state.dataBase.db.age_limit)
    },
    REMOVE_AGE_LIMIT: (state) => {
      state.ageLimitArray.length = 0
    },

    ADD_CASE_TICKET: (state) => {
      state.caseTicketArray.push(state.dataBase.db.case_ticket)
      state.templateArray.push(state.dataBase.db.case_ticket)
    },
    REMOVE_CASE_TICKET: (state) => {
      state.caseTicketArray.length = 0
    },

    ADD_CASE_INVITATION: (state) => {
      state.invationTicketArray.push(state.dataBase.db.case_invitation)
      state.templateArray.push(state.dataBase.db.case_invitation)
    },
    REMOVE_CASE_INVITATION: (state) => {
      state.invationTicketArray.length = 0
    },

    ADD_TICKET_TITLE: (state) => {
      state.ticketTitleArray.push(state.dataBase.db.ticket_title)
      state.templateArray.push(state.dataBase.db.ticket_title)
    },
    REMOVE_TICKET_TITLE: (state) => {
      state.ticketTitleArray.length = 0
    },

    ADD_TICKET_SALE: (state) => {
      state.ticketSaleArray.push(state.dataBase.db.ticket_sale)
      state.templateArray.push(state.dataBase.db.ticket_sale)
    },
    REMOVE_TICKET_SALE: (state) => {
      state.ticketSaleArray.length = 0
    },

    ADD_CASHIER_NAME: (state) => {
      state.cashierTicketArray.push(state.dataBase.db.cashier_name)
      state.templateArray.push(state.dataBase.db.cashier_name)
    },
    REMOVE_CASHIER_NAME: (state) => {
      state.cashierTicketArray.length = 0
    },

    ADD_CASE_PUSHKIN_CARD: (state) => {
      state.pushkinCardTicketArray.push(state.dataBase.db.case_pushkin_card)
      state.templateArray.push(state.dataBase.db.case_pushkin_card)
    },
    REMOVE_CASE_PUSHKIN_CARD: (state) => {
      state.pushkinCardTicketArray.length = 0
    },

    ADD_FIELD_BARCODE: (state) => {
      state.fieldBarcodeTicketArray.push(state.dataBase.db.field_barcode)
      state.templateArray.push(state.dataBase.db.field_barcode)
    },
    REMOVE_FIELD_BARCODE: (state) => {
      state.fieldBarcodeTicketArray.length = 0
    },
    /*
    * Заполнение массивов корешка
    */
    ADD_PROMOTER_COMP_ROOTLET: (state) => {
      state.promoterCompArrayR.push(state.dataBase.dbRootlet.promoter_company)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.promoter_company)
    },
    REMOVE_PROMOTER_COMP_ROOTLET: (state) => {
      state.promoterCompArrayR.length = 0
    },
    ADD_PROMOTER_INN_ROOTLET: (state) => {
      state.promoterInnArrayR.push(state.dataBase.dbRootlet.promoter_inn)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.promoter_inn)
    },
    REMOVE_PROMOTER_INN_ROOTLET: (state) => {
      state.promoterInnArrayR.length = 0
    },
    ADD_PROMOTER_ADDRESS_ROOTLET: (state) => {
      state.promoterAddressArrayR.push(state.dataBase.dbRootlet.promoter_address)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.promoter_address)
    },
    REMOVE_PROMOTER_ADDRESS_ROOTLET: (state) => {
      state.promoterAddressArrayR.length = 0
    },
    ADD_EVENT_TITLE_STRING_ONE_ROOTLET: (state) => {
      state.eventTitleStrOneArrayR.push(state.dataBase.dbRootlet.event_title_str1)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.event_title_str1)
    },
    REMOVE_EVENT_TITLE_STRING_ONE_ROOTLET: (state) => {
      state.eventTitleStrOneArrayR.length = 0
    },
    ADD_EVENT_TITLE_STRING_TWO_ROOTLET: (state) => {
      state.eventTitleStrTwoArrayR.push(state.dataBase.dbRootlet.event_title_str2)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.event_title_str2)
    },
    REMOVE_EVENT_TITLE_STRING_TWO_ROOTLET: (state) => {
      state.eventTitleStrTwoArrayR.length = 0
    },
    ADD_EVENT_TITLE_STRING_THREE_ROOTLET: (state) => {
      state.eventTitleStrThreeArrayR.push(state.dataBase.dbRootlet.event_title_str3)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.event_title_str3)
    },
    REMOVE_EVENT_TITLE_STRING_THREE_ROOTLET: (state) => {
      state.eventTitleStrThreeArrayR.length = 0
    },
    ADD_PLACE_ROOTLET: (state) => {
      state.placeArrayR.push(state.dataBase.dbRootlet.event_place_title)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.event_place_title)
    },
    REMOVE_PLACE_ROOTLET: (state) => {
      state.placeArrayR.length = 0
    },
    ADD_EVENT_SEANSE_ROOTLET: (state) => {
      state.eventSeanceArrayR.push(state.dataBase.dbRootlet.event_seance)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.event_seance)
    },
    REMOVE_EVENT_SEANSE_ROOTLET: (state) => {
      state.eventSeanceArrayR.length = 0
    },
    ADD_START_DATE_ROOTLET: (state) => {
      state.seanceStartDateArrayR.push(state.dataBase.dbRootlet.event_seance_start_date)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.event_seance_start_date)
    },
    REMOVE_START_DATE_ROOTLET: (state) => {
      state.seanceStartDateArrayR.length = 0
    },
    ADD_START_TIME_ROOTLET: (state) => {
      state.seanceStartTimeArrayR.push(state.dataBase.dbRootlet.event_seance_start_time)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.event_seance_start_time)
    },
    REMOVE_START_TIME_ROOTLET: (state) => {
      state.seanceStartTimeArrayR.length = 0
    },
    ADD_SECTOR_ROOTLET: (state) => {
      state.sectorArrayR.push(state.dataBase.dbRootlet.sector)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.sector)
    },
    REMOVE_SECTOR_ROOTLET: (state) => {
      state.sectorArrayR.length = 0
    },
    ADD_TICKET_PLACE_ROOTLET: (state) => {
      state.ticketPlaceArrayR.push(state.dataBase.dbRootlet.ticket_site_place)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.ticket_site_place)
    },
    REMOVE_TICKET_PLACE_ROOTLET: (state) => {
      state.ticketPlaceArrayR.length = 0
    },
    ADD_SPECIAL_RULES_ONE_ROOTLET: (state) => {
      state.specialRulesOneArrayR.push(state.dataBase.dbRootlet.ticket_row)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.ticket_row)
    },
    REMOVE_SPECIAL_RULES_ONE_ROOTLET: (state) => {
      state.specialRulesOneArrayR.length = 0
    },
    ADD_SPECIAL_RULES_TWO_ROOTLET: (state) => {
      state.specialRulesTwoArrayR.push(state.dataBase.dbRootlet.ticket_place)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.ticket_place)
    },
    REMOVE_SPECIAL_RULES_TWO_ROOTLET: (state) => {
      state.specialRulesTwoArrayR.length = 0
    },
    ADD_AGE_LIMIT_ROOTLET: (state) => {
      state.ageLimitArrayR.push(state.dataBase.dbRootlet.age_limit)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.age_limit)
    },
    REMOVE_AGE_LIMIT_ROOTLET: (state) => {
      state.ageLimitArrayR.length = 0
    },
    ADD_CASE_TICKET_ROOTLET: (state) => {
      state.caseTicketArrayR.push(state.dataBase.dbRootlet.case_ticket)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.case_ticket)
    },
    REMOVE_CASE_TICKET_ROOTLET: (state) => {
      state.caseTicketArrayR.length = 0
    },
    ADD_CASE_INVITATION_ROOTLET: (state) => {
      state.invationTicketArrayR.push(state.dataBase.dbRootlet.case_invitation)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.case_invitation)
    },
    REMOVE_CASE_INVITATION_ROOTLET: (state) => {
      state.invationTicketArrayR.length = 0
    },
    ADD_TICKET_TITLE_ROOTLET: (state) => {
      state.ticketTitleArrayR.push(state.dataBase.dbRootlet.ticket_title)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.ticket_title)
    },
    REMOVE_TICKET_TITLE_ROOTLET: (state) => {
      state.ticketTitleArrayR.length = 0
    },
    ADD_TICKET_SALE_ROOTLET: (state) => {
      state.ticketSaleArrayR.push(state.dataBase.dbRootlet.ticket_sale)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.ticket_sale)
    },
    REMOVE_TICKET_SALE_ROOTLET: (state) => {
      state.ticketSaleArrayR.length = 0
    },
    ADD_CASHIER_NAME_ROOTLET: (state) => {
      state.cashierTicketArrayR.push(state.dataBase.dbRootlet.cashier_name)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.cashier_name)
    },
    REMOVE_CASHIER_NAME_ROOTLET: (state) => {
      state.cashierTicketArrayR.length = 0
    },
    ADD_CASE_PUSHKIN_CARD_ROOTLET: (state) => {
      state.pushkinCardTicketArrayR.push(state.dataBase.dbRootlet.case_pushkin_card)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.case_pushkin_card)
    },
    REMOVE_CASE_PUSHKIN_CARD_ROOTLET: (state) => {
      state.pushkinCardTicketArrayR.length = 0
    },
    ADD_FIELD_BARCODE_ROOTLET: (state) => {
      state.fieldBarcodeTicketArrayR.push(state.dataBase.dbRootlet.field_barcode)
      state.templateArrayRootlet.push(state.dataBase.dbRootlet.field_barcode)
    },
    REMOVE_FIELD_BARCODE_ROOTLET: (state) => {
      state.fieldBarcodeTicketArrayR.length = 0
    }
  },

  modules: {
    dataBase
  }
}
