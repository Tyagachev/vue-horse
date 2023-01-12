export default {
  state: {
    /* База объектов билета */
    db: {
      promoter_company: {
        name: 'ООО "Рога и Копыта"',
        id: 1,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        promoterCompY: '',
        promoterCompX: '',
        static: 4911101,
        staticDatamax: 4911,
        setfont: 'SetFont("pts55f", "", 10);',
        font: 'S51',
        fontSize: '<F:size:10>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P010',
        tag: '{promoter_company_name}',
        utfTag: '{promoter_company_name}',
        multicell: 'MultiCell(0, 0, "{promoter_title}", 0, "L", false, 2,'
      },
      promoter_inn: {
        name: 'ИНН 7736247881',
        id: 2,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        promoterInnY: '',
        promoterInnX: '',
        static: 4911101,
        staticDatamax: 4911,
        setfont: 'SetFont("pts55f", "", 10);',
        font: 'S51',
        fontSize: '<F:size:10>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P010',
        tag: 'ИНН {promoter_inn}',
        utfTag: 'ИНН {promoter_inn}',
        multicell: 'MultiCell(0, 0, "{promoter_inn}", 0, "L", false, 2,'
      },
      promoter_address: {
        name: '123100, г.Москва....',
        id: 3,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        promoterAddressY: '',
        promoterAddressX: '',
        static: 4911101,
        staticDatamax: 4911,
        setfont: 'SetFont("pts55f", "", 10);',
        font: 'S51',
        fontSize: '<F:size:10>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P010',
        tag: '{promoter_address}',
        utfTag: '{promoter_address}',
        multicell: 'MultiCell(0, 0, "{promoter_address}", 0, "L", false, 2,'
      },
      event_title_str1: {
        name: 'Строка 1',
        id: 4,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        eventTitleStrOneY: '',
        eventTitleStrOneX: '',
        static: 4911103,
        staticDatamax: 4911,
        setfont: 'SetFont("pts55f", "", 14);',
        font: 'S51',
        fontSize: '<F:size:14>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P014',
        tag: '{event_title_str1_small}',
        utfTag: '{event_title_str1_small}',
        multicell: 'MultiCell(0, 0, "{event_title_string1}", 0, "L", false, 2,'
      },
      event_title_str2: {
        name: 'Строка 2',
        id: 5,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        eventTitleStrTwoY: '',
        eventTitleStrTwoX: '',
        static: 4911103,
        staticDatamax: 4911,
        setfont: 'SetFont("pts55f", "", 14);',
        font: 'S51',
        fontSize: '<F:size:14>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P014',
        tag: '{event_title_str2_small}',
        utfTag: '{event_title_str2_small}',
        multicell: 'MultiCell(0, 0, "{event_title_string2}", 0, "L", false, 2,'
      },
      event_title_str3: {
        name: 'Строка 3',
        id: 6,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        eventTitleStrThreeY: '',
        eventTitleStrThreeX: '',
        static: 4911103,
        staticDatamax: 4911,
        setfont: 'SetFont("pts55f", "", 14);',
        font: 'S51',
        fontSize: '<F:size:14>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P014',
        tag: '{event_title_str3_small}',
        utfTag: '{event_title_str3_small}',
        multicell: 'MultiCell(0, 0, "{event_title_string3}", 0, "L", false, 2,'
      },
      event_place_title: {
        name: 'Площадка',
        id: 7,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        placeY: '',
        placeX: '',
        static: 4911102,
        staticDatamax: 4911,
        setfont: 'SetFont("pts55f", "", 14);',
        font: 'S51',
        fontSize: '<F:size:12>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P012',
        tag: '{event_place_title}',
        utfTag: '{event_place_title}',
        multicell: 'MultiCell(0, 0, "{place_title}", 0, "L", false, 2,'
      },
      event_seance: {
        name: 'Дата начала',
        id: 8,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        eventSeanceY: '',
        eventSeanceX: '',
        static: 4911102,
        staticDatamax: 4911,
        setfont: 'SetFont("pts55f", "", 12);',
        font: 'S51',
        fontSize: '<F:size:12>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P012',
        tag: '{event_seance_date_time_period}',
        utfTag: '{event_seance_date_time_period}',
        multicell: 'MultiCell(0, 0, "{seance_datetime}", 0, "L", false, 2,'
      },
      sector: {
        name: 'Сектор',
        id: 9,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        sectorY: '',
        sectorX: '',
        static: 4911102,
        staticDatamax: 4911,
        setfont: 'SetFont("pts55f", "", 12);',
        font: 'S51',
        fontSize: '<F:size:12>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P012',
        tag: '{sector_info}',
        utfTag: '{sector_info}',
        multicell: 'MultiCell(0, 0, "{ticket_sector_title}", 0, "L", false, 2,'
      },
      ticket_site_place: {
        name: 'Ряд и место',
        id: 10,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        ticketPlaceY: '',
        ticketPlaceX: '',
        static: 4911101,
        staticDatamax: 4911,
        setfont: 'SetFont("pts55f", "", 12);',
        font: 'S51',
        fontSize: '<F:size:12>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P012',
        tag: '{ticket_site_place}',
        utfTag: '{ticket_site_place}',
        multicell: 'MultiCell(0, 0, "Ряд " . "{ticket_row}" . " Место " . "{ticket_seat}", 0, "L", false, 2,'
      },
      ticket_row: {
        name: 'Ряд: 10',
        id: 11,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        specialRulesOneY: '',
        specialRulesOneX: '',
        static: 4911101,
        staticDatamax: 4911,
        setfont: 'SetFont("pts55f", "", 12);',
        font: 'S51',
        fontSize: '<F:size:12>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P012',
        tag: ' Ряд: {row}',
        utfTag: 'Ряд: {row}',
        multicell: 'MultiCell(0, 0, "Ряд " . "{ticket_row}", 0, "L", false, 2,'
      },
      ticket_place: {
        name: 'Место: 15',
        id: 12,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        specialRulesTwoY: '',
        specialRulesTwoX: '',
        static: 4911101,
        staticDatamax: 4911,
        setfont: 'SetFont("pts55f", "", 12);',
        font: 'S51',
        fontSize: '<F:size:12>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P012',
        tag: 'Место: {place}',
        utfTag: 'Место: {place}',
        multicell: 'MultiCell(0, 0, "Место " . "{ticket_seat}", 0, "L", false, 2,'
      },
      age_limit: {
        name: '16+',
        id: 13,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        ageLimitY: '',
        ageLimitX: '',
        static: 4911103,
        staticDatamax: 4911,
        setfont: 'SetFont("pts55f", "", 14);',
        font: 'S51',
        fontSize: '<F:size:14>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P014',
        tag: '{age_limit}',
        utfTag: '{age_limit}',
        multicell: 'MultiCell(0, 0, "{event_age_limit}", 0, "L", false, 2,'
      },
      case_ticket: {
        name: 'Стоимость услуги: 100руб.',
        id: 14,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        caseTicketY: '',
        caseTicketX: '',
        static: 4911102,
        staticDatamax: 4911,
        setfont: 'SetFont("pts55f", "", 12);',
        font: 'S51',
        fontSize: '<F:size:10>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P010',
        tag: 'Стоимость услуги: {payment_orig} руб.',
        tag2: '{case_ticket}',
        utfTag: 'Стоимость услуги: {payment_orig} руб.',
        multicell: '"{ticket_is_invitation}" ? "" : MultiCell(0, 0, "Стоимость услуги " . "{ticket_cost_text}", 0, "L", false, 2,'
      },
      case_invitation: {
        name: 'Приглашение',
        id: 15,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        caseInvitationY: '',
        caseInvitationX: '',
        static: 4911102,
        staticDatamax: 4911,
        setfont: 'SetFont("pts55f", "", 10);',
        font: 'S51',
        fontSize: '<F:size:10>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P010',
        tag: 'Приглашение',
        tag2: '{case_invitation}',
        utfTag: 'Приглашение',
        multicell: '"{ticket_is_invitation}" ? MultiCell(0, 0, "Приглашение", 0, "L", false, 2,',
        multicelltwo: ' : MultiCell(0, 0, "", 0, "L", false, 2,'
      },
      ticket_title: {
        name: 'Билет: 9674280201',
        id: 16,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        ticketTitleY: '',
        ticketTitleX: '',
        static: 4911101,
        staticDatamax: 4911,
        setfont: 'SetFont("pts55f", "", 8);',
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: 'Билет: {ticket_title}',
        utfTag: 'Билет: {ticket_title}',
        multicell: 'MultiCell(0, 0, "Билет №  " . "{ticket_num}", 0, "L", false, 2,'
      },
      ticket_sale: {
        name: '22.10.2022 17:18',
        id: 17,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        ticketSaleY: '',
        ticketSaleX: '',
        static: 4911101,
        staticDatamax: 4911,
        setfont: 'SetFont("pts55f", "", 8);',
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: '{ticket_sale_datetime}',
        utfTag: '{ticket_sale_datetime}',
        multicell: 'MultiCell(0, 0, "{ticket_sale_datetime}", 0, "L", false, 2,'
      },
      cashier_name: {
        name: 'Кассир:',
        id: 18,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        cashierNameY: '',
        cashierNameX: '',
        static: 4911101,
        staticDatamax: 4911,
        setfont: 'SetFont("pts55f", "", 8);',
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: 'Кассир:{cashier_name}',
        utfTag: 'Кассир:{cashier_name}',
        multicell: 'MultiCell(0, 0, "{order_cashier_name}", 0, "L", false, 2,'
      },
      case_pushkin_card: {
        name: 'Пуш.карта',
        id: 19,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        casePushkinCardY: '',
        casePushkinCardX: '',
        static: 4911101,
        staticDatamax: 4911,
        setfont: 'SetFont("pts55f", "", 10);',
        font: 'S51',
        fontSize: '<F:size:10>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P010',
        tag: 'Пушкинская карта',
        tag2: '{case_pushkin_card}',
        utfTag: '{case_pushkin_card}',
        multicell: 'MultiCell(0, 0, "{pushkin_card}", 0, "L", false, 2,'
      },
      field_barcode: {
        name: 'ШК',
        id: 20,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        fieldBarcodeY: '',
        fieldBarcodeX: '',
        rcTag: '<RC',
        static: '4E00100',
        staticDatamax: '4E00100',
        staticCustom: '{field_barcode_code128}<NCP10,12>{A{field_barcode_code128}',
        tag: '{field_barcode_code128}',
        barcodeTag: '{field_barcode_code128}',
        multicell: 'LinearBarcode(',
        multicellBarcode: '126, 50'
      },
      event_seance_start_date: {
        name: '31.01.2022',
        id: 21,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        eventStartDateY: '',
        eventStartDateX: '',
        static: 4911102,
        staticDatamax: 4911,
        setfont: 'SetFont("pts55f", "", 12);',
        font: 'S51',
        fontSize: '<F:size:12>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P012',
        tag: '{event_seance_start_date}',
        utfTag: '{event_seance_start_date}',
        multicell: 'MultiCell(0, 0, "{seance_day} {seance_month} {seance_year}", 0, "L", false, 2,'
      },
      event_seance_start_time: {
        name: '19:00',
        id: 22,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        eventStartTimeY: '',
        eventStartTimeX: '',
        static: 4911102,
        staticDatamax: 4911,
        setfont: 'SetFont("pts55f", "", 12);',
        font: 'S51',
        fontSize: '<F:size:12>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P012',
        tag: '{event_seance_start_time}',
        utfTag: '{event_seance_start_time}',
        multicell: 'MultiCell(0, 0, "{seance_time}", 0, "L", false, 2,'
      }
    },

    /* База объектов корешка */
    dbRootlet: {
      promoter_company: {
        name: 'Компания',
        id: 1,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        promoterCompY: '',
        promoterCompX: '',
        static: 3911100,
        staticDatamax: 3911,
        setfont: 'SetFont("pts55f", "", 8);',
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: '{promoter_company_name}',
        utfTag: '{promoter_company_name}',
        multicell: 'MultiCell(0, 0, "{promoter_title}", 0, "L", false, 2,'
      },
      promoter_inn: {
        name: 'ИНН',
        id: 2,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        promoterInnY: '',
        promoterInnX: '',
        static: 3911100,
        staticDatamax: 3911,
        setfont: 'SetFont("pts55f", "", 8);',
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: 'ИНН {promoter_inn}',
        utfTag: 'ИНН {promoter_inn}',
        multicell: 'MultiCell(0, 0, "{promoter_inn}", 0, "L", false, 2,'
      },
      promoter_address: {
        name: 'Юр.адрес',
        id: 3,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        promoterAddressY: '',
        promoterAddressX: '',
        static: 3911100,
        staticDatamax: 3911,
        setfont: 'SetFont("pts55f", "", 8);',
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: '{promoter_address}',
        utfTag: '{promoter_address}',
        multicell: 'MultiCell(0, 0, "{promoter_address}", 0, "L", false, 2,'
      },
      event_title_str1: {
        name: 'Стр.1',
        id: 4,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        eventTitleStrOneY: '',
        eventTitleStrOneX: '',
        static: 3911100,
        staticDatamax: 3911,
        setfont: 'SetFont("pts55f", "", 8);',
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: '{event_title_str1_small}',
        utfTag: '{event_title_str1_small}',
        multicell: 'MultiCell(0, 0, "{event_title_string1}", 0, "L", false, 2,'

      },
      event_title_str2: {
        name: 'Стр.2',
        id: 5,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        eventTitleStrTwoY: '',
        eventTitleStrTwoX: '',
        static: 3911100,
        staticDatamax: 3911,
        setfont: 'SetFont("pts55f", "", 8);',
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: '{event_title_str2_small}',
        utfTag: '{event_title_str2_small}',
        multicell: 'MultiCell(0, 0, "{event_title_string2}", 0, "L", false, 2,'
      },
      event_title_str3: {
        name: 'Стр.3',
        id: 6,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        eventTitleStrThreeY: '',
        eventTitleStrThreeX: '',
        static: 3911100,
        staticDatamax: 3911,
        setfont: 'SetFont("pts55f", "", 8);',
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: '{event_title_str3_small}',
        utfTag: '{event_title_str3_small}',
        multicell: 'MultiCell(0, 0, "{event_title_string3}", 0, "L", false, 2,'

      },
      event_place_title: {
        name: 'Площадка',
        id: 7,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        placeY: '',
        placeX: '',
        static: 3911100,
        staticDatamax: 3911,
        setfont: 'SetFont("pts55f", "", 8);',
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: '{event_place_title}',
        utfTag: '{event_place_title}',
        multicell: 'MultiCell(0, 0, "{place_title}", 0, "L", false, 2,'

      },
      event_seance: {
        name: 'ДатаНач.',
        id: 8,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        eventSeanceY: '',
        eventSeanceX: '',
        static: 3911100,
        staticDatamax: 3911,
        setfont: 'SetFont("pts55f", "", 8);',
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: '{event_seance_date_time_period}',
        utfTag: '{event_seance_date_time_period}',
        multicell: 'MultiCell(0, 0, "{seance_datetime}", 0, "L", false, 2,'
      },
      sector: {
        name: 'Сектор',
        id: 9,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        sectorY: '',
        sectorX: '',
        static: 3911100,
        staticDatamax: 3911,
        setfont: 'SetFont("pts55f", "", 8);',
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: '{sector_info}',
        utfTag: '{sector_info}',
        multicell: 'MultiCell(0, 0, "{ticket_sector_title}", 0, "L", false, 2,'
      },
      ticket_site_place: {
        name: 'р.м.',
        id: 10,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        ticketPlaceY: '',
        ticketPlaceX: '',
        static: 3911100,
        staticDatamax: 3911,
        setfont: 'SetFont("pts55f", "", 8);',
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: '{ticket_site_place}',
        utfTag: '{ticket_site_place}',
        multicell: 'MultiCell(0, 0, "Ряд " . "{ticket_row}" . " Место " . "{ticket_seat}", 0, "L", false, 2,'
      },
      ticket_row: {
        name: 'р.10',
        id: 11,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        specialRulesOneY: '',
        specialRulesOneX: '',
        static: 3911100,
        staticDatamax: 3911,
        setfont: 'SetFont("pts55f", "", 8);',
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: ' р.{row}',
        utfTag: 'р.{row}',
        multicell: 'MultiCell(0, 0, "Ряд " . "{ticket_row}", 0, "L", false, 2,'
      },
      ticket_place: {
        name: 'м.20',
        id: 12,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        specialRulesTwoY: '',
        specialRulesTwoX: '',
        static: 3911100,
        staticDatamax: 3911,
        setfont: 'SetFont("pts55f", "", 8);',
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: ' м.{place}',
        utfTag: 'м.{place}',
        multicell: 'MultiCell(0, 0, "Место " . "{ticket_seat}", 0, "L", false, 2,'
      },
      age_limit: {
        name: '16+',
        id: 13,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        ageLimitY: '',
        ageLimitX: '',
        static: 3911100,
        staticDatamax: 3911,
        setfont: 'SetFont("pts55f", "", 8);',
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: '{age_limit}',
        utfTag: '{age_limit}',
        multicell: 'MultiCell(0, 0, "{event_age_limit}", 0, "L", false, 2,'
      },
      case_ticket: {
        name: 'Стоимость',
        id: 14,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        caseTicketY: '',
        caseTicketX: '',
        static: 3911100,
        staticDatamax: 3911,
        setfont: 'SetFont("pts55f", "", 8);',
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: 'Стоимость услуги: {payment_orig} руб.',
        tag2: '{case_ticket}',
        utfTag: 'Стоимость услуги: {payment_orig} руб.',
        multicell: '"{ticket_is_invitation}" ? "" : MultiCell(0, 0, "Стоимость " .  "{ticket_cost_text}", 0, "L", false, 2,'
      },
      case_invitation: {
        name: 'Приглашение',
        id: 15,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        caseInvitationY: '',
        caseInvitationX: '',
        static: 3911100,
        staticDatamax: 3911,
        setfont: 'SetFont("pts55f", "", 8);',
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: 'Приглашение',
        tag2: '{case_invitation}',
        utfTag: 'Приглашение',
        multicell: '"{ticket_is_invitation}" ? MultiCell(0, 0, "Приглашение", 0, "L", false, 2,',
        multicelltwo: ' : MultiCell(0, 0, "", 0, "L", false, 2,'
      },
      ticket_title: {
        name: 'Билет:9674280201',
        id: 15,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        ticketTitleY: '',
        ticketTitleX: '',
        static: 3911100,
        staticDatamax: 3911,
        setfont: 'SetFont("pts55f", "", 8);',
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: 'Билет: {ticket_title}',
        utfTag: 'Билет: {ticket_title}',
        multicell: 'MultiCell(0, 0, "Билет №  " . "{ticket_num}", 0, "L", false, 2,'
      },
      ticket_sale: {
        name: '22.10.2022 17:18',
        id: 16,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        ticketSaleY: '',
        ticketSaleX: '',
        static: 3911100,
        staticDatamax: 3911,
        setfont: 'SetFont("pts55f", "", 8);',
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: '{ticket_sale_datetime}',
        utfTag: '{ticket_sale_datetime}',
        multicell: 'MultiCell(0, 0, "{ticket_sale_datetime}", 0, "L", false, 2,'
      },
      cashier_name: {
        name: 'Кассир:',
        id: 18,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        cashierNameY: '',
        cashierNameX: '',
        static: 3911100,
        staticDatamax: 3911,
        setfont: 'SetFont("pts55f", "", 8);',
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: 'Кассир:{cashier_name}',
        utfTag: 'Кассир:{cashier_name}',
        multicell: 'MultiCell(0, 0, "{order_cashier_name}", 0, "L", false, 2,'
      },
      case_pushkin_card: {
        name: 'Пуш.карта',
        id: 19,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        casePushkinCardY: '',
        casePushkinCardX: '',
        static: 3911100,
        staticDatamax: 3911,
        setfont: 'SetFont("pts55f", "", 8);',
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P008',
        tag: 'Пушкинская карта',
        tag2: '{case_pushkin_card}',
        utfTag: '{case_pushkin_card}',
        multicell: 'MultiCell(0, 0, "{pushkin_card}", 0, "L", false, 2,'
      },
      field_barcode: {
        name: 'ШК',
        id: 20,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        fieldBarcodeY: '',
        fieldBarcodeX: '',
        rcTag: '<RC',
        static: '1E00100',
        staticDatamax: '1E00100',
        staticCustom: '{field_barcode_code128}<NCL10,12>{A{field_barcode_code128}',
        tag: '{field_barcode_code128}',
        barcodeTag: '{field_barcode_code128}',
        multicell: 'LinearBarcode(',
        multicellBarcode: '126, 50'
      },
      event_seance_start_date: {
        name: '31.01.2022',
        id: 21,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        eventStartDateY: '',
        eventStartDateX: '',
        static: 3911100,
        staticDatamax: 3911,
        setfont: 'SetFont("pts55f", "", 8);',
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P012',
        tag: '{event_seance_start_date}',
        utfTag: '<F:enc:utf-8>{event_seance_start_date}<F:enc:ascii>',
        multicell: 'MultiCell(0, 0, "{seance_day} {seance_month} {seance_year}", 0, "L", false, 2,'
      },
      event_seance_start_time: {
        name: '19:00',
        id: 22,
        originalY: '0',
        originalX: '0',
        originalForCustomY: '0',
        originalForCustomX: '0',
        originalForPdfY: '0',
        originalForPdfX: '0',
        eventStartTimeY: '',
        eventStartTimeX: '',
        static: 3911100,
        staticDatamax: 3911,
        setfont: 'SetFont("pts55f", "", 8);',
        font: 'S51',
        fontSize: '<F:size:8>',
        rcTag: '<RC',
        fontWeight: '<F:norm>',
        weightDatamax: 'P012',
        tag: '{event_seance_start_time}',
        utfTag: '{event_seance_start_time}',
        multicell: 'MultiCell(0, 0, "{seance_time}", 0, "L", false, 2,'
      }
    }
  }
}
