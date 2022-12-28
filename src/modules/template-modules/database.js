export default {
  state: {
    /* База данных тела билета */
    db: {
      promoter_company: {
        name: 'ООО "Рога и Копыта"',
        id: 1,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        promoterCompY: '',
        promoterCompX: '',
        static: 4911101,
        staticDatamax: 4911,
        font: 'S51',
        fontSize: '<F:size:10>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P010',
        tag: '{promoter_company_name}',
        utfTag: '{promoter_company_name}'
      },
      promoter_inn: {
        name: 'ИНН 7736247881',
        id: 2,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        promoterInnY: '',
        promoterInnX: '',
        static: 4911101,
        staticDatamax: 4911,
        font: 'S51',
        fontSize: '<F:size:10>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P010',
        tag: 'ИНН {promoter_inn}',
        utfTag: 'ИНН {promoter_inn}'
      },
      promoter_address: {
        name: '123100, г.Москва....',
        id: 3,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        promoterAddressY: '',
        promoterAddressX: '',
        static: 4911101,
        staticDatamax: 4911,
        font: 'S51',
        fontSize: '<F:size:10>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P010',
        tag: '{promoter_address}',
        utfTag: '{promoter_address}'
      },
      event_title_str1: {
        name: 'Строка 1',
        id: 4,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        eventTitleStrOneY: '',
        eventTitleStrOneX: '',
        static: 4911103,
        staticDatamax: 4911,
        font: 'S51',
        fontSize: '<F:size:14>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P014',
        tag: '{event_title_str1_small}',
        utfTag: '{event_title_str1_small}'
      },
      event_title_str2: {
        name: 'Строка 2',
        id: 5,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        eventTitleStrTwoY: '',
        eventTitleStrTwoX: '',
        static: 4911103,
        staticDatamax: 4911,
        font: 'S51',
        fontSize: '<F:size:14>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P014',
        tag: '{event_title_str2_small}',
        utfTag: '{event_title_str2_small}'
      },
      event_title_str3: {
        name: 'Строка 3',
        id: 6,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        eventTitleStrThreeY: '',
        eventTitleStrThreeX: '',
        static: 4911103,
        staticDatamax: 4911,
        font: 'S51',
        fontSize: '<F:size:14>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P014',
        tag: '{event_title_str3_small}',
        utfTag: '{event_title_str3_small}'
      },
      event_place_title: {
        name: 'Площадка',
        id: 7,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        placeY: '',
        placeX: '',
        static: 4911102,
        staticDatamax: 4911,
        font: 'S51',
        fontSize: '<F:size:12>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P012',
        tag: '{event_place_title}',
        utfTag: '{event_place_title}'
      },
      event_seance: {
        name: 'Дата начала',
        id: 8,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        eventSeanceY: '',
        eventSeanceX: '',
        static: 4911102,
        staticDatamax: 4911,
        font: 'S51',
        fontSize: '<F:size:12>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P012',
        tag: '{event_seance_date_time_period}',
        utfTag: '{event_seance_date_time_period}'
      },
      sector: {
        name: 'Сектор',
        id: 9,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        sectorY: '',
        sectorX: '',
        static: 4911102,
        staticDatamax: 4911,
        font: 'S51',
        fontSize: '<F:size:12>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P012',
        tag: '{sector_info}',
        utfTag: '{sector_info}'
      },
      ticket_site_place: {
        name: 'Ряд и место',
        id: 10,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        ticketPlaceY: '',
        ticketPlaceX: '',
        static: 4911101,
        staticDatamax: 4911,
        font: 'S51',
        fontSize: '<F:size:12>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P012',
        tag: '{ticket_site_place}',
        utfTag: '{ticket_site_place}'
      },
      ticket_row: {
        name: 'Ряд: 1',
        id: 11,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        specialRulesOneY: '',
        specialRulesOneX: '',
        static: 4911101,
        staticDatamax: 4911,
        font: 'S51',
        fontSize: '<F:size:12>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P012',
        tag: ' Ряд: {row}',
        utfTag: 'Ряд: {row}'
      },
      ticket_place: {
        name: 'Место: 1',
        id: 12,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        specialRulesTwoY: '',
        specialRulesTwoX: '',
        static: 4911101,
        staticDatamax: 4911,
        font: 'S51',
        fontSize: '<F:size:12>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P012',
        tag: 'Место: {place}',
        utfTag: 'Место: {place}'
      },
      age_limit: {
        name: '16+',
        id: 13,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        ageLimitY: '',
        ageLimitX: '',
        static: 4911103,
        staticDatamax: 4911,
        font: 'S51',
        fontSize: '<F:size:14>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P014',
        tag: '{age_limit}',
        utfTag: '{age_limit}'
      },
      case_ticket: {
        name: 'Стоимость',
        id: 14,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        caseTicketY: '',
        caseTicketX: '',
        static: 4911102,
        staticDatamax: 4911,
        font: 'S51',
        fontSize: '<F:size:10>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P010',
        tag: 'Стоимость услуги: {payment_orig} руб.',
        tag2: '{case_ticket}',
        utfTag: 'Стоимость услуги: {payment_orig} руб.'
      },
      case_invitation: {
        name: 'Приглашение',
        id: 15,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        caseInvitationY: '',
        caseInvitationX: '',
        static: 4911102,
        staticDatamax: 4911,
        font: 'S51',
        fontSize: '<F:size:10>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P010',
        tag: 'Приглашение',
        tag2: '{case_invitation}',
        utfTag: 'Приглашение'
      },
      ticket_title: {
        name: 'Билет:9674280201',
        id: 16,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        ticketTitleY: '',
        ticketTitleX: '',
        static: 4911101,
        staticDatamax: 4911,
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: 'Билет:{ticket_title}',
        utfTag: 'Билет:{ticket_title}'
      },
      ticket_sale: {
        name: '22.10.2022 17:18',
        id: 17,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        ticketSaleY: '',
        ticketSaleX: '',
        static: 4911101,
        staticDatamax: 4911,
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: '{ticket_sale_datetime}',
        utfTag: '{ticket_sale_datetime}'
      },
      cashier_name: {
        name: 'Кассир:',
        id: 18,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        cashierNameY: '',
        cashierNameX: '',
        static: 4911101,
        staticDatamax: 4911,
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: 'Кассир:{cashier_name}',
        utfTag: 'Кассир:{cashier_name}'
      },
      case_pushkin_card: {
        name: 'Пуш.карта',
        id: 19,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        casePushkinCardY: '',
        casePushkinCardX: '',
        static: 4911101,
        staticDatamax: 4911,
        font: 'S51',
        fontSize: '<F:size:10>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P010',
        tag: 'Пушкинская карта',
        tag2: '{case_pushkin_card}',
        utfTag: '{case_pushkin_card}'
      },
      field_barcode: {
        name: 'ШК',
        id: 20,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        fieldBarcodeY: '',
        fieldBarcodeX: '',
        rcTag: '<RC',
        static: '4E00100',
        staticDatamax: '4E00100',
        staticCustom: '{field_barcode_code128}<NCP10,12>{A{field_barcode_code128}',
        tag: '{field_barcode_code128}',
        barcodeTag: '{field_barcode_code128}'
      },
      event_seance_start_date: {
        name: 'Дата',
        id: 21,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        eventStartDateY: '',
        eventStartDateX: '',
        static: 4911102,
        staticDatamax: 4911,
        font: 'S51',
        fontSize: '<F:size:12>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P012',
        tag: '{event_seance_start_date}',
        utfTag: '{event_seance_start_date}'
      },
      event_seance_start_time: {
        name: 'Время',
        id: 22,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        eventStartTimeY: '',
        eventStartTimeX: '',
        static: 4911102,
        staticDatamax: 4911,
        font: 'S51',
        fontSize: '<F:size:12>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P012',
        tag: '{event_seance_start_time}',
        utfTag: '{event_seance_start_time}'
      }
    },

    /* База данных корешка */
    dbRootlet: {
      promoter_company: {
        name: 'Компания',
        id: 1,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        promoterCompY: '',
        promoterCompX: '',
        static: 3911100,
        staticDatamax: 3911,
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: '{promoter_company_name}',
        utfTag: '{promoter_company_name}'
      },
      promoter_inn: {
        name: 'ИНН',
        id: 2,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        promoterInnY: '',
        promoterInnX: '',
        static: 3911100,
        staticDatamax: 3911,
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: 'ИНН {promoter_inn}',
        utfTag: 'ИНН {promoter_inn}'
      },
      promoter_address: {
        name: 'Юр.адрес',
        id: 3,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        promoterAddressY: '',
        promoterAddressX: '',
        static: 3911100,
        staticDatamax: 3911,
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: '{promoter_address}',
        utfTag: '{promoter_address}'
      },
      event_title_str1: {
        name: 'Стр.1',
        id: 4,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        eventTitleStrOneY: '',
        eventTitleStrOneX: '',
        static: 3911100,
        staticDatamax: 3911,
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: '{event_title_str1_small}',
        utfTag: '{event_title_str1_small}'
      },
      event_title_str2: {
        name: 'Стр.2',
        id: 5,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        eventTitleStrTwoY: '',
        eventTitleStrTwoX: '',
        static: 3911100,
        staticDatamax: 3911,
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: '{event_title_str2_small}',
        utfTag: '{event_title_str2_small}'
      },
      event_title_str3: {
        name: 'Стр.3',
        id: 6,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        eventTitleStrThreeY: '',
        eventTitleStrThreeX: '',
        static: 3911100,
        staticDatamax: 3911,
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: '{event_title_str3_small}',
        utfTag: '{event_title_str3_small}'
      },
      event_place_title: {
        name: 'Площадка',
        id: 7,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        placeY: '',
        placeX: '',
        static: 3911100,
        staticDatamax: 3911,
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: '{event_place_title}',
        utfTag: '{event_place_title}'
      },
      event_seance: {
        name: 'ДатаНач.',
        id: 8,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        eventSeanceY: '',
        eventSeanceX: '',
        static: 3911100,
        staticDatamax: 3911,
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: '{event_seance_date_time_period}',
        utfTag: '{event_seance_date_time_period}'
      },
      sector: {
        name: 'Сектор',
        id: 9,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        sectorY: '',
        sectorX: '',
        static: 3911100,
        staticDatamax: 3911,
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: '{sector_info}',
        utfTag: '{sector_info}'
      },
      ticket_site_place: {
        name: 'р.м.',
        id: 10,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        ticketPlaceY: '',
        ticketPlaceX: '',
        static: 3911100,
        staticDatamax: 3911,
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: '{ticket_site_place}',
        utfTag: '{ticket_site_place}'
      },
      ticket_row: {
        name: 'Ряд: 1',
        id: 11,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        specialRulesOneY: '',
        specialRulesOneX: '',
        static: 3911100,
        staticDatamax: 3911,
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: ' р.{row}',
        utfTag: 'р.{row}'
      },
      ticket_place: {
        name: 'Место: 1',
        id: 12,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        specialRulesTwoY: '',
        specialRulesTwoX: '',
        static: 3911100,
        staticDatamax: 3911,
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: ' м.{place}',
        utfTag: 'м.{place}'
      },
      age_limit: {
        name: '16+',
        id: 13,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        ageLimitY: '',
        ageLimitX: '',
        static: 3911100,
        staticDatamax: 3911,
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: '{age_limit}',
        utfTag: '{age_limit}'
      },
      case_ticket: {
        name: 'Стоимость',
        id: 14,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        caseTicketY: '',
        caseTicketX: '',
        static: 3911100,
        staticDatamax: 3911,
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: 'Стоимость услуги: {payment_orig} руб.',
        tag2: '{case_ticket}',
        utfTag: 'Стоимость услуги: {payment_orig} руб.'
      },
      case_invitation: {
        name: 'Приглашение',
        id: 15,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        caseInvitationY: '',
        caseInvitationX: '',
        static: 3911100,
        staticDatamax: 3911,
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: 'Приглашение',
        tag2: '{case_invitation}',
        utfTag: 'Приглашение'
      },
      ticket_title: {
        name: 'Билет:9674280201',
        id: 15,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        ticketTitleY: '',
        ticketTitleX: '',
        static: 3911100,
        staticDatamax: 3911,
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: 'Билет:{ticket_title}',
        utfTag: 'Билет:{ticket_title}'
      },
      ticket_sale: {
        name: '22.10.2022 17:18',
        id: 16,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        ticketSaleY: '',
        ticketSaleX: '',
        static: 3911100,
        staticDatamax: 3911,
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: '{ticket_sale_datetime}',
        utfTag: '{ticket_sale_datetime}'
      },
      cashier_name: {
        name: 'Кассир:',
        id: 18,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        cashierNameY: '',
        cashierNameX: '',
        static: 3911100,
        staticDatamax: 3911,
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: 'Кассир:{cashier_name}',
        utfTag: 'Кассир:{cashier_name}'
      },
      case_pushkin_card: {
        name: 'Пуш.карта',
        id: 19,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        casePushkinCardY: '',
        casePushkinCardX: '',
        static: 3911100,
        staticDatamax: 3911,
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: 'Пушкинская карта',
        tag2: '{case_pushkin_card}',
        utfTag: '{case_pushkin_card}'
      },
      field_barcode: {
        name: 'ШК',
        id: 20,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        fieldBarcodeY: '',
        fieldBarcodeX: '',
        rcTag: '<RC',
        static: '1E00100',
        staticDatamax: '1E00100',
        staticCustom: '{field_barcode_code128}<NCL10,12>{A{field_barcode_code128}',
        tag: '{field_barcode_code128}',
        barcodeTag: '{field_barcode_code128}'
      },
      event_seance_start_date: {
        name: 'Дата',
        id: 21,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        eventStartDateY: '',
        eventStartDateX: '',
        static: 3911100,
        staticDatamax: 3911,
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P012',
        tag: '{event_seance_start_date}',
        utfTag: '<F:enc:utf-8>{event_seance_start_date}<F:enc:ascii>'
      },
      event_seance_start_time: {
        name: 'Время',
        id: 22,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        eventStartTimeY: '',
        eventStartTimeX: '',
        static: 3911100,
        staticDatamax: 3911,
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P012',
        tag: '{event_seance_start_time}',
        utfTag: '{event_seance_start_time}'
      }
    }
  }
}
