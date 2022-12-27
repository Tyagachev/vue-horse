<template>
  <!--Блок Билета-->
        <div  v-if="$store.state.constValue.visibleTicket" class="wrapper_elements">
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title">Компания</p>
              <p class="subtitle">{promoter_company}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.promoterCompArray.length == 0" class="addbutton" @click="RemovePromoterComp">-</button>
              <div v-bind:class="roundComp"></div>
              <button :disabled="$store.state.arrays.promoterCompArray.length > 0" class="addbutton" @click="AddPromoterComp">+</button>
            </div>
            <input v-model="setValueTopPromoterComp" :disabled="$store.state.arrays.promoterCompArray.length == 0" class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftPromoterComp" :disabled="$store.state.arrays.promoterCompArray.length == 0" class="input__value"  type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title">ИНН</p>
              <p class="subtitle">{promoter_inn}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.promoterInnArray.length == 0" class="addbutton" @click="RemovePromoterInn">-</button>
              <div v-bind:class="roundInn"></div>
              <button :disabled="$store.state.arrays.promoterInnArray.length > 0" class="addbutton" @click="AddPromoterInn">+</button>
            </div>
            <input v-model="setValueTopPromoterInn" :disabled="$store.state.arrays.promoterInnArray.length == 0" class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftPromoterInn" :disabled="$store.state.arrays.promoterInnArray.length == 0" class="input__value"  type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title">Юр.адрес</p>
              <p class="subtitle">{promoter_address}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.promoterAddressArray.length == 0" class="addbutton" @click="RemovePromoterAddress">-</button>
              <div v-bind:class="roundAddress"></div>
              <button :disabled="$store.state.arrays.promoterAddressArray.length > 0" class="addbutton" @click="AddPromoterAddress">+</button>
            </div>
            <input v-model="setValueTopPromoterAddress" :disabled="$store.state.arrays.promoterAddressArray.length == 0" class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftPromoterAddress" :disabled="$store.state.arrays.promoterAddressArray.length == 0" class="input__value"  type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title">Строка 1</p>
              <p class="subtitle">{event_title_str1}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.eventTitleStrOneArray.length == 0" class="addbutton" @click="RemoveEventTitleStrOne">-</button>
              <div v-bind:class="roundStrOne"></div>
              <button :disabled="$store.state.arrays.eventTitleStrOneArray.length > 0" class="addbutton" @click="AddEventTitleStrOne">+</button>
            </div>
            <input v-model="setValueTopEventTitleStrOne" :disabled="$store.state.arrays.eventTitleStrOneArray.length == 0" class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftEventTitleStrOne" :disabled="$store.state.arrays.eventTitleStrOneArray.length == 0" class="input__value"  type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title">Строка 2</p>
              <p class="subtitle">{event_title_str2}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.eventTitleStrTwoArray.length == 0" class="addbutton" @click="RemoveEventTitleStrTwo">-</button>
              <div v-bind:class="roundStrTwo"></div>
              <button :disabled="$store.state.arrays.eventTitleStrTwoArray.length > 0" class="addbutton" @click="AddEventTitleStrTwo">+</button>
            </div>
            <input v-model="setValueTopEventTitleStrTwo" :disabled="$store.state.arrays.eventTitleStrTwoArray.length == 0" class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftEventTitleStrTwo" :disabled="$store.state.arrays.eventTitleStrTwoArray.length == 0" class="input__value"  type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title">Строка 3</p>
              <p class="subtitle">{event_title_str3}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.eventTitleStrThreeArray.length == 0" class="addbutton" @click="RemoveEventTitleStrThree">-</button>
              <div v-bind:class="roundStrThree"></div>
              <button :disabled="$store.state.arrays.eventTitleStrThreeArray.length > 0" class="addbutton" @click="AddEventTitleStrThree">+</button>
            </div>
            <input v-model="setValueTopEventTitleStrThree" :disabled="$store.state.arrays.eventTitleStrThreeArray.length == 0" class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftEventTitleStrThree" :disabled="$store.state.arrays.eventTitleStrThreeArray.length == 0" class="input__value"  type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title">Площадка</p>
              <p class="subtitle">{event_place_title}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.placeArray.length == 0"  class="addbutton" @click="RemovePlace">-</button>
              <div v-bind:class="roundPlace"></div>
              <button :disabled="$store.state.arrays.placeArray.length > 0" class="addbutton" @click="AddPlace">+</button>
            </div>
            <input v-model="setValueTopPlace" :disabled="$store.state.arrays.placeArray.length == 0" class="input__value"   type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftPlace" :disabled="$store.state.arrays.placeArray.length == 0" class="input__value"   type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title">Дата начала</p>
              <p class="subtitle">{event_seance_date}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.eventSeanceArray.length == 0" class="addbutton" @click="RemoveEventSeance">-</button>
              <div v-bind:class="roundSeance"></div>
              <button :disabled="$store.state.arrays.eventSeanceArray.length > 0" class="addbutton" @click="AddEventSeance">+</button>
            </div>
            <input v-model="setValueTopEventSeance" :disabled="$store.state.arrays.eventSeanceArray.length == 0" class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftEventSeance" :disabled="$store.state.arrays.eventSeanceArray.length == 0" class="input__value"  type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title">Дата</p>
              <p class="subtitle">{seance_start_date}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.seanceStartDateArray.length == 0" class="addbutton" @click="RemoveStartDate">-</button>
              <div v-bind:class="roundStartDate"></div>
              <button :disabled="$store.state.arrays.seanceStartDateArray.length > 0" class="addbutton" @click="AddStartDate">+</button>
            </div>
            <input v-model="setValueTopStartDate" :disabled="$store.state.arrays.seanceStartDateArray.length == 0" class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftStartDate" :disabled="$store.state.arrays.seanceStartDateArray.length == 0" class="input__value"  type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title">Время</p>
              <p class="subtitle">{seance_start_time}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.seanceStartTimeArray.length == 0" class="addbutton" @click="RemoveStartTime">-</button>
              <div v-bind:class="roundStartTime"></div>
              <button :disabled="$store.state.arrays.seanceStartTimeArray.length > 0" class="addbutton" @click="AddStartTime">+</button>
            </div>
            <input v-model="setValueTopStartTime" :disabled="$store.state.arrays.seanceStartTimeArray.length == 0" class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftStartTime" :disabled="$store.state.arrays.seanceStartTimeArray.length == 0" class="input__value"  type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title">Сектор</p>
              <p class="subtitle">{sector_info}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.sectorArray.length == 0" class="addbutton" @click="RemoveSector">-</button>
              <div v-bind:class="roundSector"></div>
              <button :disabled="$store.state.arrays.sectorArray.length > 0" class="addbutton" @click="AddSector">+</button>
            </div>
            <input v-model="setValueTopSector" :disabled="$store.state.arrays.sectorArray.length == 0" class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftSector" :disabled="$store.state.arrays.sectorArray.length == 0" class="input__value"  type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title">Ряд и место</p>
              <p class="subtitle">{ticket_site_place}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.ticketPlaceArray.length == 0" class="addbutton" @click="RemoveTicketPlace">-</button>
              <div v-bind:class="roundTicketPlace"></div>
              <button :disabled="$store.state.arrays.ticketPlaceArray.length > 0" class="addbutton" @click="AddTicketPlace">+</button>
            </div>
            <input v-model="setValueTopTicketPlace" :disabled="$store.state.arrays.ticketPlaceArray.length == 0"  class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftTicketPlace" :disabled="$store.state.arrays.ticketPlaceArray.length == 0"  class="input__value"  type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title">Ряд</p>
              <p class="subtitle">{row}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.specialRulesOneArray.length == 0" class="addbutton" @click="RemoveSpecialRulesOne">-</button>
              <div v-bind:class="roundRulesOne"></div>
              <button :disabled="$store.state.arrays.specialRulesOneArray.length > 0" class="addbutton" @click="AddSpecialRulesOne">+</button>
            </div>
            <input v-model="setValueTopSpecialRulesOne" :disabled="$store.state.arrays.specialRulesOneArray.length == 0" class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftSpecialRulesOne" :disabled="$store.state.arrays.specialRulesOneArray.length == 0" class="input__value"  type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title">Место</p>
              <p class="subtitle">{place}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.specialRulesTwoArray.length == 0" class="addbutton" @click="RemoveSpecialRulesTwo">-</button>
              <div v-bind:class="roundRulesTwo"></div>
              <button :disabled="$store.state.arrays.specialRulesTwoArray.length > 0" class="addbutton" @click="AddSpecialRulesTwo">+</button>
            </div>
            <input v-model="setValueTopSpecialRulesTwo" :disabled="$store.state.arrays.specialRulesTwoArray.length == 0" class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftSpecialRulesTwo" :disabled="$store.state.arrays.specialRulesTwoArray.length == 0" class="input__value"  type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title">16+</p>
              <p class="subtitle">{age_limit}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.ageLimitArray.length == 0" class="addbutton" @click="RemoveAgeLimit">-</button>
              <div v-bind:class="roundLimit"></div>
              <button :disabled="$store.state.arrays.ageLimitArray.length > 0" class="addbutton" @click="AddAgeLimit">+</button>
            </div>
            <input v-model="setValueTopAgeLimit" :disabled="$store.state.arrays.ageLimitArray.length == 0" class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftAgeLimit" :disabled="$store.state.arrays.ageLimitArray.length == 0" class="input__value"  type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title">Стоимость услуги</p>
              <p class="subtitle">{case_ticket}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.caseTicketArray.length == 0" class="addbutton" @click="RemoveCaseTicket">-</button>
              <div v-bind:class="roundСase"></div>
              <button :disabled="$store.state.arrays.caseTicketArray.length > 0" class="addbutton" @click="AddCaseTicket">+</button>
            </div>
            <input v-model="setValueTopCaseTicket" :disabled="$store.state.arrays.caseTicketArray.length == 0" class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftCaseTicket" :disabled="$store.state.arrays.caseTicketArray.length == 0" class="input__value"  type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title">Приглашение</p>
              <p class="subtitle">{case_invitation}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.invationTicketArray.length == 0" class="addbutton" @click="RemoveСaseInvitation">-</button>
              <div v-bind:class="roundInvation"></div>
              <button :disabled="$store.state.arrays.invationTicketArray.length > 0" class="addbutton" @click="AddСaseInvitation">+</button>
            </div>
            <input v-model="setValueTopСaseInvitation" :disabled="$store.state.arrays.invationTicketArray.length == 0" class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftСaseInvitation" :disabled="$store.state.arrays.invationTicketArray.length == 0" class="input__value"  type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title">Номер билета</p>
              <p class="subtitle">{ticket_title}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.ticketTitleArray.length == 0" class="addbutton" @click="RemoveTicketTitle">-</button>
              <div v-bind:class="roundTitle"></div>
              <button :disabled="$store.state.arrays.ticketTitleArray.length > 0" class="addbutton" @click="AddTicketTitle">+</button>
            </div>
            <input v-model="setValueTopTicketTitle" :disabled="$store.state.arrays.ticketTitleArray.length == 0" class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftTicketTitle" :disabled="$store.state.arrays.ticketTitleArray.length == 0" class="input__value"  type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title">Дата продажи</p>
              <p class="subtitle">{ticket_sale}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.ticketSaleArray.length == 0" class="addbutton" @click="RemoveTicketSale">-</button>
              <div v-bind:class="roundSale"></div>
              <button :disabled="$store.state.arrays.ticketSaleArray.length > 0" class="addbutton" @click="AddTicketSale">+</button>
            </div>
            <input v-model="setValueTopTicketSale" :disabled="$store.state.arrays.ticketSaleArray.length == 0" class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftTicketSale" :disabled="$store.state.arrays.ticketSaleArray.length == 0" class="input__value"  type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title">Кассир</p>
              <p class="subtitle">{cashier_name}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.cashierTicketArray.length == 0" class="addbutton" @click="RemoveCashierName">-</button>
              <div v-bind:class="roundCashier"></div>
              <button :disabled="$store.state.arrays.cashierTicketArray.length > 0" class="addbutton" @click="AddCashierName">+</button>
            </div>
            <input v-model="setValueTopCashierName" :disabled="$store.state.arrays.cashierTicketArray.length == 0" class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftCashierName" :disabled="$store.state.arrays.cashierTicketArray.length == 0" class="input__value"  type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title">Пуш.карта</p>
              <p class="subtitle">{pushkin_card}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.pushkinCardTicketArray.length == 0" class="addbutton" @click="RemoveCasePushkinCard">-</button>
              <div v-bind:class="roundPushkinCard"></div>
              <button :disabled="$store.state.arrays.pushkinCardTicketArray.length > 0" class="addbutton" @click="AddCasePushkinCard">+</button>
            </div>
            <input v-model="setValueTopCasePushkinCard" :disabled="$store.state.arrays.pushkinCardTicketArray.length == 0" class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftCasePushkinCard" :disabled="$store.state.arrays.pushkinCardTicketArray.length == 0" class="input__value"  type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title">ШК</p>
              <p class="subtitle">{field_barcode}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.fieldBarcodeTicketArray.length == 0" class="addbutton" @click="RemoveFieldBarcode">-</button>
              <div v-bind:class="roundFieldBarcode"></div>
              <button :disabled="$store.state.arrays.fieldBarcodeTicketArray.length > 0" class="addbutton" @click="AddFieldBarcode">+</button>
            </div>
            <input v-model="setValueTopFieldBarcode" :disabled="$store.state.arrays.fieldBarcodeTicketArray.length == 0" class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftFieldBarcode" :disabled="$store.state.arrays.fieldBarcodeTicketArray.length == 0" class="input__value"  type="number" placeholder="Слева mm">
          </div>
        </div>
        <!--Блок Корешка-->
        <div v-else class="wrapper_elements">
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title"><span class="red-star">#</span>Компания</p>
              <p class="subtitle">{promoter_company}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.promoterCompArrayR.length == 0" class="addbutton" @click="RemovePromoterCompR">-</button>
              <div v-bind:class="roundCompR"></div>
              <button :disabled="$store.state.arrays.promoterCompArrayR.length > 0" class="addbutton" @click="AddPromoterCompR">+</button>
            </div>
            <input v-model="setValueTopPromoterCompR" :disabled="$store.state.arrays.promoterCompArrayR.length == 0" class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftPromoterCompR" :disabled="$store.state.arrays.promoterCompArrayR.length == 0" class="input__value"  type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title"><span class="red-star">#</span>ИНН</p>
              <p class="subtitle">{promoter_inn}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.promoterInnArrayR.length == 0" class="addbutton" @click="RemovePromoterInnR">-</button>
              <div v-bind:class="roundInnR"></div>
              <button :disabled="$store.state.arrays.promoterInnArrayR.length > 0" class="addbutton" @click="AddPromoterInnR">+</button>
            </div>
            <input v-model="setValueTopPromoterInnR" :disabled="$store.state.arrays.promoterInnArrayR.length == 0" class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftPromoterInnR" :disabled="$store.state.arrays.promoterInnArrayR.length == 0" class="input__value"  type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title"><span class="red-star">#</span>Юр.адрес</p>
              <p class="subtitle">{promoter_address}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.promoterAddressArrayR.length == 0" class="addbutton" @click="RemovePromoterAddressR">-</button>
              <div v-bind:class="roundAddressR"></div>
              <button :disabled="$store.state.arrays.promoterAddressArrayR.length > 0" class="addbutton" @click="AddPromoterAddressR">+</button>
            </div>
            <input v-model="setValueTopPromoterAddressR" :disabled="$store.state.arrays.promoterAddressArrayR.length == 0" class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftPromoterAddressR" :disabled="$store.state.arrays.promoterAddressArrayR.length == 0" class="input__value"  type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title"><span class="red-star">#</span>Строка 1</p>
              <p class="subtitle">{event_title_str1}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.eventTitleStrOneArrayR.length == 0" class="addbutton" @click="RemoveEventTitleStrOneR">-</button>
              <div v-bind:class="roundStrOneR"></div>
              <button :disabled="$store.state.arrays.eventTitleStrOneArrayR.length > 0" class="addbutton" @click="AddEventTitleStrOneR">+</button>
            </div>
            <input v-model="setValueTopEventTitleStrOneR" :disabled="$store.state.arrays.eventTitleStrOneArrayR.length == 0" class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftEventTitleStrOneR" :disabled="$store.state.arrays.eventTitleStrOneArrayR.length == 0" class="input__value"  type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title"><span class="red-star">#</span>Строка 2</p>
              <p class="subtitle">{event_title_str2}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.eventTitleStrTwoArrayR.length == 0" class="addbutton" @click="RemoveEventTitleStrTwoR">-</button>
              <div v-bind:class="roundStrTwoR"></div>
              <button :disabled="$store.state.arrays.eventTitleStrTwoArrayR.length > 0" class="addbutton" @click="AddEventTitleStrTwoR">+</button>
            </div>
            <input v-model="setValueTopEventTitleStrTwoR" :disabled="$store.state.arrays.eventTitleStrTwoArrayR.length == 0" class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftEventTitleStrTwoR" :disabled="$store.state.arrays.eventTitleStrTwoArrayR.length == 0" class="input__value"  type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title"><span class="red-star">#</span>Строка 3</p>
              <p class="subtitle">{event_title_str3}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.eventTitleStrThreeArrayR.length == 0" class="addbutton" @click="RemoveEventTitleStrThreeR">-</button>
              <div v-bind:class="roundStrThreeR"></div>
              <button :disabled="$store.state.arrays.eventTitleStrThreeArrayR.length > 0" class="addbutton" @click="AddEventTitleStrThreeR">+</button>
            </div>
            <input v-model="setValueTopEventTitleStrThreeR" :disabled="$store.state.arrays.eventTitleStrThreeArrayR.length == 0" class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftEventTitleStrThreeR" :disabled="$store.state.arrays.eventTitleStrThreeArrayR.length == 0" class="input__value"  type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title"><span class="red-star">#</span>Площадка</p>
              <p class="subtitle">{event_place_title}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.placeArrayR.length == 0"  class="addbutton" @click="RemovePlaceR">-</button>
              <div v-bind:class="roundPlaceR"></div>
              <button :disabled="$store.state.arrays.placeArrayR.length > 0" class="addbutton" @click="AddPlaceR">+</button>
            </div>
            <input v-model="setValueTopPlaceR" :disabled="$store.state.arrays.placeArrayR.length == 0" class="input__value"   type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftPlaceR" :disabled="$store.state.arrays.placeArrayR.length == 0" class="input__value"   type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title"><span class="red-star">#</span>Дата начала</p>
              <p class="subtitle">{event_seance_date}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.eventSeanceArrayR.length == 0" class="addbutton" @click="RemoveEventSeanceR">-</button>
              <div v-bind:class="roundSeanceR"></div>
              <button :disabled="$store.state.arrays.eventSeanceArrayR.length > 0" class="addbutton" @click="AddEventSeanceR">+</button>
            </div>
            <input v-model="setValueTopEventSeanceR" :disabled="$store.state.arrays.eventSeanceArrayR.length == 0" class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftEventSeanceR" :disabled="$store.state.arrays.eventSeanceArrayR.length == 0" class="input__value"  type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title"><span class="red-star">#</span>Дата</p>
              <p class="subtitle">{seance_start_date}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.seanceStartDateArrayR.length == 0" class="addbutton" @click="RemoveStartDateR">-</button>
              <div v-bind:class="roundStartDateR"></div>
              <button :disabled="$store.state.arrays.seanceStartDateArrayR.length > 0" class="addbutton" @click="AddStartDateR">+</button>
            </div>
            <input v-model="setValueTopStartDateR" :disabled="$store.state.arrays.seanceStartDateArrayR.length == 0" class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftStartDateR" :disabled="$store.state.arrays.seanceStartDateArrayR.length == 0" class="input__value"  type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title"><span class="red-star">#</span>Время</p>
              <p class="subtitle">{seance_start_time}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.seanceStartTimeArray.length == 0" class="addbutton" @click="RemoveStartTimeR">-</button>
              <div v-bind:class="roundStartTimeR"></div>
              <button :disabled="$store.state.arrays.seanceStartTimeArray.length > 0" class="addbutton" @click="AddStartTimeR">+</button>
            </div>
            <input v-model="setValueTopStartTimeR" :disabled="$store.state.arrays.seanceStartTimeArrayR.length == 0" class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftStartTimeR" :disabled="$store.state.arrays.seanceStartTimeArrayR.length == 0" class="input__value"  type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title"><span class="red-star">#</span>Сектор</p>
              <p class="subtitle">{sector_info}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.sectorArrayR.length == 0" class="addbutton" @click="RemoveSectorR">-</button>
              <div v-bind:class="roundSectorR"></div>
              <button :disabled="$store.state.arrays.sectorArrayR.length > 0" class="addbutton" @click="AddSectorR">+</button>
            </div>
            <input v-model="setValueTopSectorR" :disabled="$store.state.arrays.sectorArrayR.length == 0" class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftSectorR" :disabled="$store.state.arrays.sectorArrayR.length == 0" class="input__value"  type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title"><span class="red-star">#</span>Ряд и место</p>
              <p class="subtitle">{ticket_site_place}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.ticketPlaceArrayR.length == 0" class="addbutton" @click="RemoveTicketPlaceR">-</button>
              <div v-bind:class="roundTicketPlaceR"></div>
              <button :disabled="$store.state.arrays.ticketPlaceArrayR.length > 0" class="addbutton" @click="AddTicketPlaceR">+</button>
            </div>
            <input v-model="setValueTopTicketPlaceR" :disabled="$store.state.arrays.ticketPlaceArrayR.length == 0" class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftTicketPlaceR" :disabled="$store.state.arrays.ticketPlaceArrayR.length == 0" class="input__value"  type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title"><span class="red-star">#</span>Ряд</p>
              <p class="subtitle">{row}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.specialRulesOneArrayR.length == 0" class="addbutton" @click="RemoveSpecialRulesOneR">-</button>
              <div v-bind:class="roundRulesOneR"></div>
              <button :disabled="$store.state.arrays.specialRulesOneArrayR.length > 0" class="addbutton" @click="AddSpecialRulesOneR">+</button>
            </div>
            <input v-model="setValueTopSpecialRulesOneR" :disabled="$store.state.arrays.specialRulesOneArrayR.length == 0" class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftSpecialRulesOneR" :disabled="$store.state.arrays.specialRulesOneArrayR.length == 0" class="input__value"  type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title"><span class="red-star">#</span>Место</p>
              <p class="subtitle">{place}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.specialRulesTwoArrayR.length == 0" class="addbutton" @click="RemoveSpecialRulesTwoR">-</button>
              <div v-bind:class="roundRulesTwoR"></div>
              <button :disabled="$store.state.arrays.specialRulesTwoArrayR.length > 0" class="addbutton" @click="AddSpecialRulesTwoR">+</button>
            </div>
            <input v-model="setValueTopSpecialRulesTwoR" :disabled="$store.state.arrays.specialRulesTwoArrayR.length == 0" class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftSpecialRulesTwoR" :disabled="$store.state.arrays.specialRulesTwoArrayR.length == 0" class="input__value"  type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title"><span class="red-star">#</span>16+</p>
              <p class="subtitle">{age_limit}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.ageLimitArrayR.length == 0" class="addbutton" @click="RemoveAgeLimitR">-</button>
              <div v-bind:class="roundLimitR"></div>
              <button :disabled="$store.state.arrays.ageLimitArrayR.length > 0" class="addbutton" @click="AddAgeLimitR">+</button>
            </div>
            <input v-model="setValueTopAgeLimitR" :disabled="$store.state.arrays.ageLimitArrayR.length == 0" class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftAgeLimitR" :disabled="$store.state.arrays.ageLimitArrayR.length == 0" class="input__value"  type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title"><span class="red-star">#</span>Стоимость услуги</p>
              <p class="subtitle">{case_ticket}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.caseTicketArrayR.length == 0" class="addbutton" @click="RemoveCaseTicketR">-</button>
              <div v-bind:class="roundСaseR"></div>
              <button :disabled="$store.state.arrays.caseTicketArrayR.length > 0" class="addbutton" @click="AddCaseTicketR">+</button>
            </div>
            <input v-model="setValueTopCaseTicketR" :disabled="$store.state.arrays.caseTicketArrayR.length == 0" class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftCaseTicketR" :disabled="$store.state.arrays.caseTicketArrayR.length == 0" class="input__value"  type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title"><span class="red-star">#</span>Приглашение</p>
              <p class="subtitle">{case_invitation}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.invationTicketArrayR.length == 0" class="addbutton" @click="RemoveСaseInvitationR">-</button>
              <div v-bind:class="roundInvationR"></div>
              <button :disabled="$store.state.arrays.invationTicketArrayR.length > 0" class="addbutton" @click="AddСaseInvitationR">+</button>
            </div>
            <input v-model="setValueTopСaseInvitationR" :disabled="$store.state.arrays.invationTicketArrayR.length == 0" class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftСaseInvitationR" :disabled="$store.state.arrays.invationTicketArrayR.length == 0" class="input__value"  type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title"><span class="red-star">#</span>Номер билета</p>
              <p class="subtitle">{ticket_title}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.ticketTitleArrayR.length == 0" class="addbutton" @click="RemoveTicketTitleR">-</button>
              <div v-bind:class="roundTitleR"></div>
              <button :disabled="$store.state.arrays.ticketTitleArrayR.length > 0" class="addbutton" @click="AddTicketTitleR">+</button>
            </div>
            <input v-model="setValueTopTicketTitleR" :disabled="$store.state.arrays.ticketTitleArrayR.length == 0" class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftTicketTitleR" :disabled="$store.state.arrays.ticketTitleArrayR.length == 0" class="input__value"  type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title"><span class="red-star">#</span>Дата продажи</p>
              <p class="subtitle">{ticket_sale}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.ticketSaleArrayR.length == 0" class="addbutton" @click="RemoveTicketSaleR">-</button>
              <div v-bind:class="roundSaleR"></div>
              <button :disabled="$store.state.arrays.ticketSaleArrayR.length > 0" class="addbutton" @click="AddTicketSaleR">+</button>
            </div>
            <input v-model="setValueTopTicketSaleR" :disabled="$store.state.arrays.ticketSaleArrayR.length == 0" class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftTicketSaleR" :disabled="$store.state.arrays.ticketSaleArrayR.length == 0" class="input__value"  type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title"><span class="red-star">#</span>Кассир</p>
              <p class="subtitle">{cashier_name}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.cashierTicketArrayR.length == 0" class="addbutton" @click="RemoveCashierNameR">-</button>
              <div v-bind:class="roundCashierR"></div>
              <button :disabled="$store.state.arrays.cashierTicketArrayR.length > 0" class="addbutton" @click="AddCashierNameR">+</button>
            </div>
            <input v-model="setValueTopCashierNameR" :disabled="$store.state.arrays.cashierTicketArrayR.length == 0" class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftCashierNameR" :disabled="$store.state.arrays.cashierTicketArrayR.length == 0" class="input__value"  type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title"><span class="red-star">#</span>Пуш.карта</p>
              <p class="subtitle">{pushkin_card}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.pushkinCardTicketArrayR.length == 0" class="addbutton" @click="RemoveCasePushkinCardR">-</button>
              <div v-bind:class="roundPushkinCardR"></div>
              <button :disabled="$store.state.arrays.pushkinCardTicketArrayR.length > 0" class="addbutton" @click="AddCasePushkinCardR">+</button>
            </div>
            <input v-model="setValueTopCasePushkinCardR" :disabled="$store.state.arrays.pushkinCardTicketArrayR.length == 0" class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftCasePushkinCardR" :disabled="$store.state.arrays.pushkinCardTicketArrayR.length == 0" class="input__value"  type="number" placeholder="Слева mm">
          </div>
          <div class="wrapper_element" >
            <div class="wrapper_place">
              <p class="title"><span class="red-star">#</span>ШК</p>
              <p class="subtitle">{field_barcode}</p>
            </div>
            <div class="wrapper_btn">
              <button :disabled="$store.state.arrays.fieldBarcodeTicketArrayR.length == 0" class="addbutton" @click="RemoveFieldBarcodeR">-</button>
              <div v-bind:class="roundFieldBarcodeR"></div>
              <button :disabled="$store.state.arrays.fieldBarcodeTicketArrayR.length > 0" class="addbutton" @click="AddFieldBarcodeR">+</button>
            </div>
            <input v-model="setValueTopFieldBarcodeR" :disabled="$store.state.arrays.fieldBarcodeTicketArrayR.length == 0" class="input__value"  type="number" placeholder="Сверху mm">
            <input v-model="setValueLeftFieldBarcodeR" :disabled="$store.state.arrays.fieldBarcodeTicketArrayR.length == 0" class="input__value"  type="number" placeholder="Слева mm">
          </div>
        </div>
      <div class="red-info-wrp">
          <p><span class="red-info">*красные символы нужно скопировать из шаблона в системе (Citizen, Datamax)</span></p>
          <p class="black-info">для Custom поле (LHT length, height, notch, dimnotch)</p>
          <p class="black-info">notch = 40 (отступ до черной метки) 1 мм = 8 dot</p>
          <p class="black-info">dimnotch = 40 (длина черной метки) 1 мм = 8 dot</p>
      </div>

</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'v-button-panel',
  data () {
    return {
      /*
       *Переменные координат
       *тела билета
       */
      setValueTopPromoterComp: '',
      setValueLeftPromoterComp: '',
      setValueTopPromoterInn: '',
      setValueLeftPromoterInn: '',
      setValueTopPromoterAddress: '',
      setValueLeftPromoterAddress: '',
      setValueTopEventTitleStrOne: '',
      setValueLeftEventTitleStrOne: '',
      setValueTopEventTitleStrTwo: '',
      setValueLeftEventTitleStrTwo: '',
      setValueTopEventTitleStrThree: '',
      setValueLeftEventTitleStrThree: '',
      setValueTopPlace: '',
      setValueLeftPlace: '',
      setValueTopEventSeance: '',
      setValueLeftEventSeance: '',
      setValueTopStartDate: '',
      setValueLeftStartDate: '',
      setValueTopStartTime: '',
      setValueLeftStartTime: '',
      setValueTopSector: '',
      setValueLeftSector: '',
      setValueTopTicketPlace: '',
      setValueLeftTicketPlace: '',
      setValueTopSpecialRulesOne: '',
      setValueLeftSpecialRulesOne: '',
      setValueTopSpecialRulesTwo: '',
      setValueLeftSpecialRulesTwo: '',
      setValueTopAgeLimit: '',
      setValueLeftAgeLimit: '',
      setValueTopCaseTicket: '',
      setValueLeftCaseTicket: '',
      setValueTopСaseInvitation: '',
      setValueLeftСaseInvitation: '',
      setValueTopTicketTitle: '',
      setValueLeftTicketTitle: '',
      setValueTopTicketSale: '',
      setValueLeftTicketSale: '',
      setValueTopCashierName: '',
      setValueLeftCashierName: '',
      setValueTopCasePushkinCard: '',
      setValueLeftCasePushkinCard: '',
      setValueTopFieldBarcode: '',
      setValueLeftFieldBarcode: '',
      /*
       * Переменные координат
       * корешка
      */
      setValueTopPromoterCompR: '',
      setValueLeftPromoterCompR: '',
      setValueTopPromoterInnR: '',
      setValueLeftPromoterInnR: '',
      setValueTopPromoterAddressR: '',
      setValueLeftPromoterAddressR: '',
      setValueTopEventTitleStrOneR: '',
      setValueLeftEventTitleStrOneR: '',
      setValueTopEventTitleStrTwoR: '',
      setValueLeftEventTitleStrTwoR: '',
      setValueTopEventTitleStrThreeR: '',
      setValueLeftEventTitleStrThreeR: '',
      setValueTopPlaceR: '',
      setValueLeftPlaceR: '',
      setValueTopEventSeanceR: '',
      setValueLeftEventSeanceR: '',
      setValueTopStartDateR: '',
      setValueLeftStartDateR: '',
      setValueTopStartTimeR: '',
      setValueLeftStartTimeR: '',
      setValueTopSectorR: '',
      setValueLeftSectorR: '',
      setValueTopTicketPlaceR: '',
      setValueLeftTicketPlaceR: '',
      setValueTopSpecialRulesOneR: '',
      setValueLeftSpecialRulesOneR: '',
      setValueTopSpecialRulesTwoR: '',
      setValueLeftSpecialRulesTwoR: '',
      setValueTopAgeLimitR: '',
      setValueLeftAgeLimitR: '',
      setValueTopCaseTicketR: '',
      setValueLeftCaseTicketR: '',
      setValueTopСaseInvitationR: '',
      setValueLeftСaseInvitationR: '',
      setValueTopTicketTitleR: '',
      setValueLeftTicketTitleR: '',
      setValueTopTicketSaleR: '',
      setValueLeftTicketSaleR: '',
      setValueTopCashierNameR: '',
      setValueLeftCashierNameR: '',
      setValueTopCasePushkinCardR: '',
      setValueLeftCasePushkinCardR: '',
      setValueTopFieldBarcodeR: '',
      setValueLeftFieldBarcodeR: ''
    }
  },
  computed: {
    /* Round Билета */
    roundComp () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.promoterCompArray.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundInn () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.promoterInnArray.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundAddress () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.promoterAddressArray.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundStrOne () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.eventTitleStrOneArray.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundStrTwo () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.eventTitleStrTwoArray.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundStrThree () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.eventTitleStrThreeArray.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundPlace () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.placeArray.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundSeance () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.eventSeanceArray.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundStartDate () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.seanceStartDateArray.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundStartTime () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.seanceStartTimeArray.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundSector () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.sectorArray.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundTicketPlace () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.ticketPlaceArray.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundRulesOne () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.specialRulesOneArray.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundRulesTwo () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.specialRulesTwoArray.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundLimit () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.ageLimitArray.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundСase () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.caseTicketArray.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundInvation () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.invationTicketArray.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundTitle () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.ticketTitleArray.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundSale () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.ticketSaleArray.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundCashier () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.cashierTicketArray.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundPushkinCard () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.pushkinCardTicketArray.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundFieldBarcode () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.fieldBarcodeTicketArray.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    /* Round Корешка */
    roundCompR () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.promoterCompArrayR.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundInnR () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.promoterInnArrayR.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundAddressR () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.promoterAddressArrayR.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundStrOneR () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.eventTitleStrOneArrayR.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundStrTwoR () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.eventTitleStrTwoArrayR.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundStrThreeR () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.eventTitleStrThreeArrayR.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundPlaceR () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.placeArrayR.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundSeanceR () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.eventSeanceArrayR.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundStartDateR () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.seanceStartDateArrayR.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundStartTimeR () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.seanceStartTimeArrayR.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundSectorR () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.sectorArrayR.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundTicketPlaceR () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.ticketPlaceArrayR.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundRulesOneR () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.specialRulesOneArrayR.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundRulesTwoR () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.specialRulesTwoArrayR.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundLimitR () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.ageLimitArrayR.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundСaseR () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.caseTicketArrayR.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundInvationR () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.invationTicketArrayR.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundTitleR () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.ticketTitleArrayR.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundSaleR () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.ticketSaleArrayR.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundCashierR () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.cashierTicketArrayR.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundPushkinCardR () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.pushkinCardTicketArrayR.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    },
    roundFieldBarcodeR () {
      if (this.$store.state.constValue.active === true && this.$store.state.arrays.fieldBarcodeTicketArrayR.length > 0) {
        return 'green'
      } else {
        return 'red'
      }
    }
  },
  watch: {
    /* Тело билета */
    /* Смещение площадки по Y */
    setValueTopPlace () {
      this.$store.state.dataBase.db.event_place_title.placeY = (this.setValueTopPlace * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.event_place_title.originalForCustomY = this.setValueTopPlace * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.db.event_place_title.originalY = String(this.setValueTopPlace * 10).padStart(4, '0')
    },
    /* Смещение площадки по X */
    setValueLeftPlace () {
      this.$store.state.dataBase.db.event_place_title.placeX = (this.setValueLeftPlace * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.event_place_title.originalForCustomX = this.setValueLeftPlace * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.db.event_place_title.originalX = String((this.setValueLeftPlace * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение сектора по Y */
    setValueTopSector () {
      this.$store.state.dataBase.db.sector.sectorY = (this.setValueTopSector * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.sector.originalForCustomY = this.setValueTopSector * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.db.sector.originalY = String(this.setValueTopSector * 10).padStart(4, '0')
    },
    /* Смещение Сектора по X */
    setValueLeftSector () {
      this.$store.state.dataBase.db.sector.sectorX = (this.setValueLeftSector * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.sector.originalForCustomX = ((this.setValueLeftSector * this.$store.state.constValue.inchDPI) - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI))
      this.$store.state.dataBase.db.sector.originalX = String((this.setValueLeftSector * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение promoter_company по Y */
    setValueTopPromoterComp () {
      this.$store.state.dataBase.db.promoter_company.promoterCompY = (this.setValueTopPromoterComp * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.promoter_company.originalForCustomY = this.setValueTopPromoterComp * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.db.promoter_company.originalY = String(this.setValueTopPromoterComp * 10).padStart(4, '0')
    },
    /* Смещение promoter_company по X */
    setValueLeftPromoterComp  () {
      this.$store.state.dataBase.db.promoter_company.promoterCompX = (this.setValueLeftPromoterComp * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.promoter_company.originalForCustomX = this.setValueLeftPromoterComp * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.db.promoter_company.originalX = String((this.setValueLeftPromoterComp * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение promoter_inn по Y */
    setValueTopPromoterInn () {
      this.$store.state.dataBase.db.promoter_inn.promoterInnY = (this.setValueTopPromoterInn * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.promoter_inn.originalForCustomY = this.setValueTopPromoterInn * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.db.promoter_inn.originalY = String(this.setValueTopPromoterInn * 10).padStart(4, '0')
    },
    /* Смещение promoter_inn  по X */
    setValueLeftPromoterInn  () {
      this.$store.state.dataBase.db.promoter_inn.promoterInnX = (this.setValueLeftPromoterInn * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.promoter_inn.originalForCustomX = this.setValueLeftPromoterInn * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.db.promoter_inn.originalX = String((this.setValueLeftPromoterInn * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение promoter_address по Y */
    setValueTopPromoterAddress () {
      this.$store.state.dataBase.db.promoter_address.promoterAddressY = (this.setValueTopPromoterAddress * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.promoter_address.originalForCustomY = this.setValueTopPromoterAddress * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.db.promoter_address.originalY = String(this.setValueTopPromoterAddress * 10).padStart(4, '0')
    },
    /* Смещение promoter_address по X */
    setValueLeftPromoterAddress  () {
      this.$store.state.dataBase.db.promoter_address.promoterAddressX = (this.setValueLeftPromoterAddress * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.promoter_address.originalForCustomX = this.setValueLeftPromoterAddress * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.db.promoter_address.originalX = String((this.setValueLeftPromoterAddress * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение event_title_str1 по Y */
    setValueTopEventTitleStrOne () {
      this.$store.state.dataBase.db.event_title_str1.eventTitleStrOneY = (this.setValueTopEventTitleStrOne * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.event_title_str1.originalForCustomY = this.setValueTopEventTitleStrOne * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.db.event_title_str1.originalY = String(this.setValueTopEventTitleStrOne * 10).padStart(4, '0')
    },
    /* Смещение event_title_str1 по X */
    setValueLeftEventTitleStrOne  () {
      this.$store.state.dataBase.db.event_title_str1.eventTitleStrOneX = (this.setValueLeftEventTitleStrOne * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.event_title_str1.originalForCustomX = this.setValueLeftEventTitleStrOne * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.db.event_title_str1.originalX = String((this.setValueLeftEventTitleStrOne * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение event_title_str2 по Y */
    setValueTopEventTitleStrTwo () {
      this.$store.state.dataBase.db.event_title_str2.eventTitleStrTwoY = (this.setValueTopEventTitleStrTwo * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.event_title_str2.originalForCustomY = this.setValueTopEventTitleStrTwo * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.db.event_title_str2.originalY = String(this.setValueTopEventTitleStrTwo * 10).padStart(4, '0')
    },
    /* Смещение event_title_str2 по X */
    setValueLeftEventTitleStrTwo  () {
      this.$store.state.dataBase.db.event_title_str2.eventTitleStrTwoX = (this.setValueLeftEventTitleStrTwo * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.event_title_str2.originalForCustomX = this.setValueLeftEventTitleStrTwo * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.db.event_title_str2.originalX = String((this.setValueLeftEventTitleStrTwo * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение event_title_str3 по Y */
    setValueTopEventTitleStrThree () {
      this.$store.state.dataBase.db.event_title_str3.eventTitleStrThreeY = (this.setValueTopEventTitleStrThree * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.event_title_str3.originalForCustomY = this.setValueTopEventTitleStrThree * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.db.event_title_str3.originalY = String(this.setValueTopEventTitleStrThree * 10).padStart(4, '0')
    },
    /* Смещение event_title_str3 по X */
    setValueLeftEventTitleStrThree  () {
      this.$store.state.dataBase.db.event_title_str3.eventTitleStrThreeX = (this.setValueLeftEventTitleStrThree * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.event_title_str3.originalForCustomX = this.setValueLeftEventTitleStrThree * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.db.event_title_str3.originalX = String((this.setValueLeftEventTitleStrThree * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение event_seance по Y */
    setValueTopEventSeance () {
      this.$store.state.dataBase.db.event_seance.eventSeanceY = (this.setValueTopEventSeance * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.event_seance.originalForCustomY = this.setValueTopEventSeance * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.db.event_seance.originalY = String(this.setValueTopEventSeance * 10).padStart(4, '0')
    },
    /* Смещение event_seance по X */
    setValueLeftEventSeance () {
      this.$store.state.dataBase.db.event_seance.eventSeanceX = (this.setValueLeftEventSeance * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.event_seance.originalForCustomX = this.setValueLeftEventSeance * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.db.event_seance.originalX = String((this.setValueLeftEventSeance * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение event_seance_start_date по Y */
    setValueTopStartDate () {
      this.$store.state.dataBase.db.event_seance_start_date.eventStartDateY = (this.setValueTopStartDate * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.event_seance_start_date.originalForCustomY = this.setValueTopStartDate * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.db.event_seance_start_date.originalY = String(this.setValueTopStartDate * 10).padStart(4, '0')
    },
    /* Смещение event_seance_start_date по X */
    setValueLeftStartDate () {
      this.$store.state.dataBase.db.event_seance_start_date.eventStartDateX = (this.setValueLeftStartDate * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.event_seance_start_date.originalForCustomX = this.setValueLeftStartDate * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.db.event_seance_start_date.originalX = String((this.setValueLeftStartDate * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение event_seance_start_time по Y */
    setValueTopStartTime () {
      this.$store.state.dataBase.db.event_seance_start_time.eventStartTimeY = (this.setValueTopStartTime * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.event_seance_start_time.originalForCustomY = this.setValueTopStartTime * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.db.event_seance_start_time.originalY = String(this.setValueTopStartTime * 10).padStart(4, '0')
    },
    /* Смещение event_seance_start_time по X */
    setValueLeftStartTime () {
      this.$store.state.dataBase.db.event_seance_start_time.eventStartTimeX = (this.setValueLeftStartTime * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.event_seance_start_time.originalForCustomX = this.setValueLeftStartTime * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.db.event_seance_start_time.originalX = String((this.setValueLeftStartTime * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение ticket_site_place по Y */
    setValueTopTicketPlace () {
      this.$store.state.dataBase.db.ticket_site_place.ticketPlaceY = (this.setValueTopTicketPlace * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.ticket_site_place.originalForCustomY = this.setValueTopTicketPlace * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.db.ticket_site_place.originalY = String(this.setValueTopTicketPlace * 10).padStart(4, '0')
    },
    /* Смещение ticket_site_place по X */
    setValueLeftTicketPlace () {
      this.$store.state.dataBase.db.ticket_site_place.ticketPlaceX = (this.setValueLeftTicketPlace * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.ticket_site_place.originalForCustomX = this.setValueLeftTicketPlace * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.db.ticket_site_place.originalX = String((this.setValueLeftTicketPlace * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение ticket_row по Y */
    setValueTopSpecialRulesOne () {
      this.$store.state.dataBase.db.ticket_row.specialRulesOneY = (this.setValueTopSpecialRulesOne * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.ticket_row.originalForCustomY = this.setValueTopSpecialRulesOne * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.db.ticket_row.originalY = String(this.setValueTopSpecialRulesOne * 10).padStart(4, '0')
    },
    /* Смещение ticket_row по X */
    setValueLeftSpecialRulesOne () {
      this.$store.state.dataBase.db.ticket_row.specialRulesOneX = (this.setValueLeftSpecialRulesOne * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.ticket_row.originalForCustomX = this.setValueLeftSpecialRulesOne * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.db.ticket_row.originalX = String((this.setValueLeftSpecialRulesOne * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение ticket_place по Y */
    setValueTopSpecialRulesTwo () {
      this.$store.state.dataBase.db.ticket_place.specialRulesTwoY = (this.setValueTopSpecialRulesTwo * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.ticket_place.originalForCustomY = this.setValueTopSpecialRulesTwo * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.db.ticket_place.originalY = String(this.setValueTopSpecialRulesTwo * 10).padStart(4, '0')
    },
    /* Смещение ticket_place по X */
    setValueLeftSpecialRulesTwo () {
      this.$store.state.dataBase.db.ticket_place.specialRulesTwoX = (this.setValueLeftSpecialRulesTwo * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.ticket_place.originalForCustomX = this.setValueLeftSpecialRulesTwo * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.db.ticket_place.originalX = String((this.setValueLeftSpecialRulesTwo * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение age_limit по Y */
    setValueTopAgeLimit () {
      this.$store.state.dataBase.db.age_limit.ageLimitY = (this.setValueTopAgeLimit * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.age_limit.originalForCustomY = this.setValueTopAgeLimit * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.db.age_limit.originalY = String(this.setValueTopAgeLimit * 10).padStart(4, '0')
    },
    /* Смещение age_limit по X */
    setValueLeftAgeLimit () {
      this.$store.state.dataBase.db.age_limit.ageLimitX = (this.setValueLeftAgeLimit * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.age_limit.originalForCustomX = this.setValueLeftAgeLimit * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.db.age_limit.originalX = String((this.setValueLeftAgeLimit * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение case_ticket по Y */
    setValueTopCaseTicket () {
      this.$store.state.dataBase.db.case_ticket.caseTicketY = (this.setValueTopCaseTicket * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.case_ticket.originalForCustomY = this.setValueTopCaseTicket * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.db.case_ticket.originalY = String(this.setValueTopCaseTicket * 10).padStart(4, '0')
    },
    /* Смещение case_ticket по X */
    setValueLeftCaseTicket () {
      this.$store.state.dataBase.db.case_ticket.caseTicketX = (this.setValueLeftCaseTicket * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.case_ticket.originalForCustomX = this.setValueLeftCaseTicket * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.db.case_ticket.originalX = String((this.setValueLeftCaseTicket * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение case_invitation по Y */
    setValueTopСaseInvitation () {
      this.$store.state.dataBase.db.case_invitation.caseInvitationY = (this.setValueTopСaseInvitation * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.case_invitation.originalForCustomY = this.setValueTopСaseInvitation * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.db.case_invitation.originalY = String(this.setValueTopСaseInvitation * 10).padStart(4, '0')
    },
    /* Смещение case_invitation по X */
    setValueLeftСaseInvitation () {
      this.$store.state.dataBase.db.case_invitation.caseInvitationX = (this.setValueLeftСaseInvitation * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.case_invitation.originalForCustomX = this.setValueLeftСaseInvitation * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.db.case_invitation.originalX = String((this.setValueLeftСaseInvitation * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение ticket_title по Y */
    setValueTopTicketTitle () {
      this.$store.state.dataBase.db.ticket_title.ticketTitleY = (this.setValueTopTicketTitle * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.ticket_title.originalForCustomY = this.setValueTopTicketTitle * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.db.ticket_title.originalY = String(this.setValueTopTicketTitle * 10).padStart(4, '0')
    },
    /* Смещение ticket_title по X */
    setValueLeftTicketTitle () {
      this.$store.state.dataBase.db.ticket_title.ticketTitleX = (this.setValueLeftTicketTitle * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.ticket_title.originalForCustomX = this.setValueLeftTicketTitle * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.db.ticket_title.originalX = String((this.setValueLeftTicketTitle * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение ticket_sale по Y */
    setValueTopTicketSale () {
      this.$store.state.dataBase.db.ticket_sale.ticketSaleY = (this.setValueTopTicketSale * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.ticket_sale.originalForCustomY = this.setValueTopTicketSale * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.db.ticket_sale.originalY = String(this.setValueTopTicketSale * 10).padStart(4, '0')
    },
    /* Смещение ticket_sale по X */
    setValueLeftTicketSale () {
      this.$store.state.dataBase.db.ticket_sale.ticketSaleX = (this.setValueLeftTicketSale * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.ticket_sale.originalForCustomX = this.setValueLeftTicketSale * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.db.ticket_sale.originalX = String((this.setValueLeftTicketSale * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение cashier_name по Y */
    setValueTopCashierName () {
      this.$store.state.dataBase.db.cashier_name.cashierNameY = (this.setValueTopCashierName * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.cashier_name.originalForCustomY = this.setValueTopCashierName * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.db.cashier_name.originalY = String(this.setValueTopCashierName * 10).padStart(4, '0')
    },
    /* Смещение cashier_name по X */
    setValueLeftCashierName () {
      this.$store.state.dataBase.db.cashier_name.cashierNameX = (this.setValueLeftCashierName * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.cashier_name.originalForCustomX = this.setValueLeftCashierName * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.db.cashier_name.originalX = String((this.setValueLeftCashierName * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение case_pushkin_card по Y */
    setValueTopCasePushkinCard () {
      this.$store.state.dataBase.db.case_pushkin_card.casePushkinCardY = (this.setValueTopCasePushkinCard * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.case_pushkin_card.originalForCustomY = this.setValueTopCasePushkinCard * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.db.case_pushkin_card.originalY = String(this.setValueTopCasePushkinCard * 10).padStart(4, '0')
    },
    /* Смещение case_pushkin_card по X */
    setValueLeftCasePushkinCard () {
      this.$store.state.dataBase.db.case_pushkin_card.casePushkinCardX = (this.setValueLeftCasePushkinCard * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.case_pushkin_card.originalForCustomX = this.setValueLeftCasePushkinCard * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.db.case_pushkin_card.originalX = String((this.setValueLeftCasePushkinCard * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение field_barcode по Y */
    setValueTopFieldBarcode () {
      this.$store.state.dataBase.db.field_barcode.fieldBarcodeY = (this.setValueTopFieldBarcode * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.field_barcode.originalForCustomY = this.setValueTopFieldBarcode * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.db.field_barcode.originalY = String(this.setValueTopFieldBarcode * 10).padStart(4, '0')
    },
    /* Смещение field_barcode по X */
    setValueLeftFieldBarcode () {
      this.$store.state.dataBase.db.field_barcode.fieldBarcodeX = (this.setValueLeftFieldBarcode * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.db.field_barcode.originalForCustomX = this.setValueLeftFieldBarcode * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.db.field_barcode.originalX = String((this.setValueLeftFieldBarcode * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },

    /* Корешок билета */
    /* Смещение площадки по Y */
    setValueTopPlaceR () {
      this.$store.state.dataBase.dbRootlet.event_place_title.placeY = (this.setValueTopPlaceR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.event_place_title.originalForCustomY = this.setValueTopPlaceR * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.dbRootlet.event_place_title.originalY = String(this.setValueTopPlaceR * 10).padStart(4, '0')
    },
    /* Смещение площадки по X */
    setValueLeftPlaceR () {
      this.$store.state.dataBase.dbRootlet.event_place_title.placeX = (this.setValueLeftPlaceR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.event_place_title.originalForCustomX = this.setValueLeftPlaceR * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.dbRootlet.event_place_title.originalX = String((this.setValueLeftPlaceR * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение сектора по Y */
    setValueTopSectorR () {
      this.$store.state.dataBase.dbRootlet.sector.sectorY = (this.setValueTopSectorR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.sector.originalForCustomY = this.setValueTopSectorR * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.dbRootlet.sector.originalY = String(this.setValueTopSectorR * 10).padStart(4, '0')
    },
    /* Смещение Сектора по X */
    setValueLeftSectorR () {
      this.$store.state.dataBase.dbRootlet.sector.sectorX = (this.setValueLeftSectorR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.sector.originalForCustomX = this.setValueLeftSectorR * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.dbRootlet.sector.originalX = String((this.setValueLeftSectorR * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение promoter_company по Y */
    setValueTopPromoterCompR () {
      this.$store.state.dataBase.dbRootlet.promoter_company.promoterCompY = (this.setValueTopPromoterCompR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.promoter_company.originalForCustomY = this.setValueTopPromoterCompR * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.dbRootlet.promoter_company.originalY = String(this.setValueTopPromoterCompR * 10).padStart(4, '0')
    },
    /* Смещение promoter_company по X */
    setValueLeftPromoterCompR  () {
      this.$store.state.dataBase.dbRootlet.promoter_company.promoterCompX = (this.setValueLeftPromoterCompR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.promoter_company.originalForCustomX = this.setValueLeftPromoterCompR * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.dbRootlet.promoter_company.originalX = String((this.setValueLeftPromoterCompR * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение promoter_inn по Y */
    setValueTopPromoterInnR () {
      this.$store.state.dataBase.dbRootlet.promoter_inn.promoterInnY = (this.setValueTopPromoterInnR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.promoter_inn.originalForCustomY = this.setValueTopPromoterInnR * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.dbRootlet.promoter_inn.originalY = String(this.setValueTopPromoterInnR * 10).padStart(4, '0')
    },
    /* Смещение promoter_inn  по X */
    setValueLeftPromoterInnR  () {
      this.$store.state.dataBase.dbRootlet.promoter_inn.promoterInnX = (this.setValueLeftPromoterInnR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.promoter_inn.originalForCustomX = this.setValueLeftPromoterInnR * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.dbRootlet.promoter_inn.originalX = String((this.setValueLeftPromoterInnR * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение promoter_address по Y */
    setValueTopPromoterAddressR () {
      this.$store.state.dataBase.dbRootlet.promoter_address.promoterAddressY = (this.setValueTopPromoterAddressR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.promoter_address.originalForCustomY = this.setValueTopPromoterAddressR * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.dbRootlet.promoter_address.originalY = String(this.setValueTopPromoterAddressR * 10).padStart(4, '0')
    },
    /* Смещение promoter_address по X */
    setValueLeftPromoterAddressR  () {
      this.$store.state.dataBase.dbRootlet.promoter_address.promoterAddressX = (this.setValueLeftPromoterAddressR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.promoter_address.originalForCustomX = this.setValueLeftPromoterAddressR * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.dbRootlet.promoter_address.originalX = String((this.setValueLeftPromoterAddressR * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение event_title_str1 по Y */
    setValueTopEventTitleStrOneR () {
      this.$store.state.dataBase.dbRootlet.event_title_str1.eventTitleStrOneY = (this.setValueTopEventTitleStrOneR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.event_title_str1.originalForCustomY = this.setValueTopEventTitleStrOneR * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.dbRootlet.event_title_str1.originalY = String(this.setValueTopEventTitleStrOneR * 10).padStart(4, '0')
    },
    /* Смещение event_title_str1 по X */
    setValueLeftEventTitleStrOneR  () {
      this.$store.state.dataBase.dbRootlet.event_title_str1.eventTitleStrOneX = (this.setValueLeftEventTitleStrOneR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.event_title_str1.originalForCustomX = this.setValueLeftEventTitleStrOneR * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.dbRootlet.event_title_str1.originalX = String((this.setValueLeftEventTitleStrOneR * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение event_title_str2 по Y */
    setValueTopEventTitleStrTwoR () {
      this.$store.state.dataBase.dbRootlet.event_title_str2.eventTitleStrTwoY = (this.setValueTopEventTitleStrTwoR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.event_title_str2.originalForCustomY = this.setValueTopEventTitleStrTwoR * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.dbRootlet.event_title_str2.originalY = String(this.setValueTopEventTitleStrTwoR * 10).padStart(4, '0')
    },
    /* Смещение event_title_str2 по X */
    setValueLeftEventTitleStrTwoR  () {
      this.$store.state.dataBase.dbRootlet.event_title_str2.eventTitleStrTwoX = (this.setValueLeftEventTitleStrTwoR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.event_title_str2.originalForCustomX = this.setValueLeftEventTitleStrTwoR * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.dbRootlet.event_title_str2.originalX = String((this.setValueLeftEventTitleStrTwoR * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение event_title_str3 по Y */
    setValueTopEventTitleStrThreeR () {
      this.$store.state.dataBase.dbRootlet.event_title_str3.eventTitleStrThreeY = (this.setValueTopEventTitleStrThreeR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.event_title_str3.originalForCustomY = this.setValueTopEventTitleStrThreeR * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.dbRootlet.event_title_str3.originalY = String(this.setValueTopEventTitleStrThreeR * 10).padStart(4, '0')
    },
    /* Смещение event_title_str3 по X */
    setValueLeftEventTitleStrThreeR  () {
      this.$store.state.dataBase.dbRootlet.event_title_str3.eventTitleStrThreeX = (this.setValueLeftEventTitleStrThreeR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.event_title_str3.originalForCustomX = this.setValueLeftEventTitleStrThreeR * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.dbRootlet.event_title_str3.originalX = String((this.setValueLeftEventTitleStrThreeR * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение event_seance по Y */
    setValueTopEventSeanceR () {
      this.$store.state.dataBase.dbRootlet.event_seance.eventSeanceY = (this.setValueTopEventSeanceR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.event_seance.originalForCustomY = this.setValueTopEventSeanceR * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.dbRootlet.event_seance.originalY = String(this.setValueTopEventSeanceR * 10).padStart(4, '0')
    },
    /* Смещение event_seance по X */
    setValueLeftEventSeanceR () {
      this.$store.state.dataBase.dbRootlet.event_seance.eventSeanceX = (this.setValueLeftEventSeanceR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.event_seance.originalForCustomX = this.setValueLeftEventSeanceR * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.dbRootlet.event_seance.originalX = String((this.setValueLeftEventSeanceR * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение event_seance_start_date по Y */
    setValueTopStartDateR () {
      this.$store.state.dataBase.dbRootlet.event_seance_start_date.eventStartDateY = (this.setValueTopStartDateR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.event_seance_start_date.originalForCustomY = this.setValueTopStartDateR * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.dbRootlet.event_seance_start_date.originalY = String(this.setValueTopStartDateR * 10).padStart(4, '0')
    },
    /* Смещение event_seance_start_date по X */
    setValueLeftStartDateR () {
      this.$store.state.dataBase.dbRootlet.event_seance_start_date.eventStartDateX = (this.setValueLeftStartDateR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.event_seance_start_date.originalForCustomX = this.setValueLeftStartDateR * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.dbRootlet.event_seance_start_date.originalX = String((this.setValueLeftStartDateR * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение event_seance_start_time по Y */
    setValueTopStartTimeR () {
      this.$store.state.dataBase.dbRootlet.event_seance_start_time.eventStartTimeY = (this.setValueTopStartTimeR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.event_seance_start_time.originalForCustomY = this.setValueTopStartTimeR * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.dbRootlet.event_seance_start_time.originalY = String(this.setValueTopStartTimeR * 10).padStart(4, '0')
    },
    /* Смещение event_seance_start_time по X */
    setValueLeftStartTimeR () {
      this.$store.state.dataBase.dbRootlet.event_seance_start_time.eventStartTimeX = (this.setValueLeftStartTimeR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.event_seance_start_time.originalForCustomX = this.setValueLeftStartTimeR * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.dbRootlet.event_seance_start_time.originalX = String((this.setValueLeftStartTimeR * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение ticket_site_place по Y */
    setValueTopTicketPlaceR () {
      this.$store.state.dataBase.dbRootlet.ticket_site_place.ticketPlaceY = (this.setValueTopTicketPlaceR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.ticket_site_place.originalForCustomY = this.setValueTopTicketPlaceR * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.dbRootlet.ticket_site_place.originalY = String(this.setValueTopTicketPlaceR * 10).padStart(4, '0')
    },
    /* Смещение ticket_site_place по X */
    setValueLeftTicketPlaceR () {
      this.$store.state.dataBase.dbRootlet.ticket_site_place.ticketPlaceX = (this.setValueLeftTicketPlaceR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.ticket_site_place.originalForCustomX = this.setValueLeftTicketPlaceR * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.dbRootlet.ticket_site_place.originalX = String((this.setValueLeftTicketPlaceR * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение ticket_row по Y */
    setValueTopSpecialRulesOneR () {
      this.$store.state.dataBase.dbRootlet.ticket_row.specialRulesOneY = (this.setValueTopSpecialRulesOneR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.ticket_row.originalForCustomY = this.setValueTopSpecialRulesOneR * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.dbRootlet.ticket_row.originalY = String(this.setValueTopSpecialRulesOneR * 10).padStart(4, '0')
    },
    /* Смещение ticket_row по X */
    setValueLeftSpecialRulesOneR () {
      this.$store.state.dataBase.dbRootlet.ticket_row.specialRulesOneX = (this.setValueLeftSpecialRulesOneR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.ticket_row.originalForCustomX = this.setValueLeftSpecialRulesOneR * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.dbRootlet.ticket_row.originalX = String((this.setValueLeftSpecialRulesOneR * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение ticket_place по Y */
    setValueTopSpecialRulesTwoR () {
      this.$store.state.dataBase.dbRootlet.ticket_place.specialRulesTwoY = (this.setValueTopSpecialRulesTwoR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.ticket_place.originalForCustomY = this.setValueTopSpecialRulesTwoR * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.dbRootlet.ticket_place.originalY = String(this.setValueTopSpecialRulesTwoR * 10).padStart(4, '0')
    },
    /* Смещение ticket_place по X */
    setValueLeftSpecialRulesTwoR () {
      this.$store.state.dataBase.dbRootlet.ticket_place.specialRulesTwoX = (this.setValueLeftSpecialRulesTwoR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.ticket_place.originalForCustomX = this.setValueLeftSpecialRulesTwoR * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.dbRootlet.ticket_place.originalX = String((this.setValueLeftSpecialRulesTwoR * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение age_limit по Y */
    setValueTopAgeLimitR () {
      this.$store.state.dataBase.dbRootlet.age_limit.ageLimitY = (this.setValueTopAgeLimitR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.age_limit.originalForCustomY = this.setValueTopAgeLimitR * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.dbRootlet.age_limit.originalY = String(this.setValueTopAgeLimitR * 10).padStart(4, '0')
    },
    /* Смещение age_limit по X */
    setValueLeftAgeLimitR () {
      this.$store.state.dataBase.dbRootlet.age_limit.ageLimitX = (this.setValueLeftAgeLimitR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.age_limit.originalForCustomX = this.setValueLeftAgeLimitR * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.dbRootlet.age_limit.originalX = String((this.setValueLeftAgeLimitR * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение case_ticket по Y */
    setValueTopCaseTicketR () {
      this.$store.state.dataBase.dbRootlet.case_ticket.caseTicketY = (this.setValueTopCaseTicketR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.case_ticket.originalForCustomY = this.setValueTopCaseTicketR * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.dbRootlet.case_ticket.originalY = String(this.setValueTopCaseTicketR * 10).padStart(4, '0')
    },
    /* Смещение case_ticket по X */
    setValueLeftCaseTicketR () {
      this.$store.state.dataBase.dbRootlet.case_ticket.caseTicketX = (this.setValueLeftCaseTicketR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.case_ticket.originalForCustomX = this.setValueLeftCaseTicketR * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.dbRootlet.case_ticket.originalX = String((this.setValueLeftCaseTicketR * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение case_invitation по Y */
    setValueTopСaseInvitationR () {
      this.$store.state.dataBase.dbRootlet.case_invitation.caseInvitationY = (this.setValueTopСaseInvitationR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.case_invitation.originalForCustomY = this.setValueTopСaseInvitationR * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.dbRootlet.case_invitation.originalY = String(this.setValueTopСaseInvitationR * 10).padStart(4, '0')
    },
    /* Смещение case_invitation по X */
    setValueLeftСaseInvitationR () {
      this.$store.state.dataBase.dbRootlet.case_invitation.caseInvitationX = (this.setValueLeftСaseInvitationR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.case_invitation.originalForCustomX = this.setValueLeftСaseInvitationR * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.dbRootlet.case_invitation.originalX = String((this.setValueLeftСaseInvitationR * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение ticket_title по Y */
    setValueTopTicketTitleR () {
      this.$store.state.dataBase.dbRootlet.ticket_title.ticketTitleY = (this.setValueTopTicketTitleR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.ticket_title.originalForCustomY = this.setValueTopTicketTitleR * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.dbRootlet.ticket_title.originalY = String(this.setValueTopTicketTitleR * 10).padStart(4, '0')
    },
    /* Смещение ticket_title по X */
    setValueLeftTicketTitleR () {
      this.$store.state.dataBase.dbRootlet.ticket_title.ticketTitleX = (this.setValueLeftTicketTitleR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.ticket_title.originalForCustomX = this.setValueLeftTicketTitleR * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.dbRootlet.ticket_title.originalX = String((this.setValueLeftTicketTitleR * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение ticket_sale по Y */
    setValueTopTicketSaleR () {
      this.$store.state.dataBase.dbRootlet.ticket_sale.ticketSaleY = (this.setValueTopTicketSaleR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.ticket_sale.originalForCustomY = this.setValueTopTicketSaleR * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.dbRootlet.ticket_sale.originalY = String(this.setValueTopTicketSaleR * 10).padStart(4, '0')
    },
    /* Смещение ticket_sale по X */
    setValueLeftTicketSaleR () {
      this.$store.state.dataBase.dbRootlet.ticket_sale.ticketSaleX = (this.setValueLeftTicketSaleR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.ticket_sale.originalForCustomX = this.setValueLeftTicketSaleR * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.dbRootlet.ticket_sale.originalX = String((this.setValueLeftTicketSaleR * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение cashier_name по Y */
    setValueTopCashierNameR () {
      this.$store.state.dataBase.dbRootlet.cashier_name.cashierNameY = (this.setValueTopCashierNameR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.cashier_name.originalForCustomY = this.setValueTopCashierNameR * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.dbRootlet.cashier_name.originalY = String(this.setValueTopCashierNameR * 10).padStart(4, '0')
    },
    /* Смещение cashier_name по X */
    setValueLeftCashierNameR () {
      this.$store.state.dataBase.dbRootlet.cashier_name.cashierNameX = (this.setValueLeftCashierNameR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.cashier_name.originalForCustomX = this.setValueLeftCashierNameR * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.dbRootlet.cashier_name.originalX = String((this.setValueLeftCashierNameR * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение case_pushkin_card по Y */
    setValueTopCasePushkinCardR () {
      this.$store.state.dataBase.dbRootlet.case_pushkin_card.casePushkinCardY = (this.setValueTopCasePushkinCardR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.case_pushkin_card.originalForCustomY = this.setValueTopCasePushkinCardR * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.dbRootlet.case_pushkin_card.originalY = String(this.setValueTopCasePushkinCardR * 10).padStart(4, '0')
    },
    /* Смещение case_pushkin_card по X */
    setValueLeftCasePushkinCardR () {
      this.$store.state.dataBase.dbRootlet.case_pushkin_card.casePushkinCardX = (this.setValueLeftCasePushkinCardR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.case_pushkin_card.originalForCustomX = this.setValueLeftCasePushkinCardR * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.dbRootlet.case_pushkin_card.originalX = String((this.setValueLeftCasePushkinCardR * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    },
    /* Смещение field_barcode по Y */
    setValueTopFieldBarcodeR () {
      this.$store.state.dataBase.dbRootlet.field_barcode.fieldBarcodeY = (this.setValueTopFieldBarcodeR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.field_barcode.originalForCustomY = this.setValueTopFieldBarcodeR * this.$store.state.constValue.inchDPI
      this.$store.state.dataBase.dbRootlet.field_barcode.originalY = String(this.setValueTopFieldBarcodeR * 10).padStart(4, '0')
    },
    /* Смещение field_barcode по X */
    setValueLeftFieldBarcodeR () {
      this.$store.state.dataBase.dbRootlet.field_barcode.fieldBarcodeX = (this.setValueLeftFieldBarcodeR * this.$store.state.constValue.inchPX)
      this.$store.state.dataBase.dbRootlet.field_barcode.originalForCustomX = this.setValueLeftFieldBarcodeR * this.$store.state.constValue.inchDPI - (this.$store.state.variableTicket.blackLabel * this.$store.state.constValue.inchDPI)
      this.$store.state.dataBase.dbRootlet.field_barcode.originalX = String((this.setValueLeftFieldBarcodeR * 10) - (this.$store.state.variableTicket.blackLabel * 10)).padStart(4, '0')
    }
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
    },

    /*
     * Заполнение массивов билета
     */

    ...mapMutations({ AddPromoterComp: 'AddPromoterComp', RemovePromoterComp: 'RemovePromoterComp' }),

    ...mapMutations({ AddPromoterInn: 'AddPromoterInn', RemovePromoterInn: 'RemovePromoterInn' }),

    ...mapMutations({ AddPromoterAddress: 'AddPromoterAddress', RemovePromoterAddress: 'RemovePromoterAddress' }),

    ...mapMutations({ AddEventTitleStrOne: 'AddEventTitleStrOne', RemoveEventTitleStrOne: 'RemoveEventTitleStrOne' }),

    ...mapMutations({ AddEventTitleStrTwo: 'AddEventTitleStrTwo', RemoveEventTitleStrTwo: 'RemoveEventTitleStrTwo' }),

    ...mapMutations({ AddEventTitleStrThree: 'AddEventTitleStrThree', RemoveEventTitleStrThree: 'RemoveEventTitleStrThree' }),

    ...mapMutations({ AddPlace: 'AddPlace', RemovePlace: 'RemovePlace' }),

    ...mapMutations({ AddEventSeance: 'AddEventSeance', RemoveEventSeance: 'RemoveEventSeance' }),

    ...mapMutations({ AddStartDate: 'AddStartDate', RemoveStartDate: 'RemoveStartDate' }),

    ...mapMutations({ AddStartTime: 'AddStartTime', RemoveStartTime: 'RemoveStartTime' }),

    ...mapMutations({ AddSector: 'AddSector', RemoveSector: 'RemoveSector' }),

    ...mapMutations({ AddTicketPlace: 'AddTicketPlace', RemoveTicketPlace: 'RemoveTicketPlace' }),

    ...mapMutations({ AddSpecialRulesOne: 'AddSpecialRulesOne', RemoveSpecialRulesOne: 'RemoveSpecialRulesOne' }),

    ...mapMutations({ AddSpecialRulesTwo: 'AddSpecialRulesTwo', RemoveSpecialRulesTwo: 'RemoveSpecialRulesTwo' }),

    ...mapMutations({ AddAgeLimit: 'AddAgeLimit', RemoveAgeLimit: 'RemoveAgeLimit' }),

    ...mapMutations({ AddCaseTicket: 'AddCaseTicket', RemoveCaseTicket: 'RemoveCaseTicket' }),

    ...mapMutations({ AddСaseInvitation: 'AddСaseInvitation', RemoveСaseInvitation: 'RemoveСaseInvitation' }),

    ...mapMutations({ AddTicketTitle: 'AddTicketTitle', RemoveTicketTitle: 'RemoveTicketTitle' }),

    ...mapMutations({ AddTicketSale: 'AddTicketSale', RemoveTicketSale: 'RemoveTicketSale' }),

    ...mapMutations({ AddCashierName: 'AddCashierName', RemoveCashierName: 'RemoveCashierName' }),

    ...mapMutations({ AddCasePushkinCard: 'AddCasePushkinCard', RemoveCasePushkinCard: 'RemoveCasePushkinCard' }),

    ...mapMutations({ AddFieldBarcode: 'AddFieldBarcode', RemoveFieldBarcode: 'RemoveFieldBarcode' }),

    /*
     * Заполнение массивов корешка
     */

    ...mapMutations({ AddPromoterCompR: 'AddPromoterCompR', RemovePromoterCompR: 'RemovePromoterCompR' }),

    ...mapMutations({ AddPromoterInnR: 'AddPromoterInnR', RemovePromoterInnR: 'RemovePromoterInnR' }),

    ...mapMutations({ AddPromoterAddressR: 'AddPromoterAddressR', RemovePromoterAddressR: 'RemovePromoterAddressR' }),

    ...mapMutations({ AddEventTitleStrOneR: 'AddEventTitleStrOneR', RemoveEventTitleStrOneR: 'RemoveEventTitleStrOneR' }),

    ...mapMutations({ AddEventTitleStrTwoR: 'AddEventTitleStrTwoR', RemoveEventTitleStrTwoR: 'RemoveEventTitleStrTwoR' }),

    ...mapMutations({ AddEventTitleStrThreeR: 'AddEventTitleStrThreeR', RemoveEventTitleStrThreeR: 'RemoveEventTitleStrThreeR' }),

    ...mapMutations({ AddPlaceR: 'AddPlaceR', RemovePlaceR: 'RemovePlaceR' }),

    ...mapMutations({ AddEventSeanceR: 'AddEventSeanceR', RemoveEventSeanceR: 'RemoveEventSeanceR' }),

    ...mapMutations({ AddStartDateR: 'AddStartDateR', RemoveStartDateR: 'RemoveStartDateR' }),

    ...mapMutations({ AddStartTimeR: 'AddStartTimeR', RemoveStartTimeR: 'RemoveStartTimeR' }),

    ...mapMutations({ AddSectorR: 'AddSectorR', RemoveSectorR: 'RemoveSectorR' }),

    ...mapMutations({ AddTicketPlaceR: 'AddTicketPlaceR', RemoveTicketPlaceR: 'RemoveTicketPlaceR' }),

    ...mapMutations({ AddSpecialRulesOneR: 'AddSpecialRulesOneR', RemoveSpecialRulesOneR: 'RemoveSpecialRulesOneR' }),

    ...mapMutations({ AddSpecialRulesTwoR: 'AddSpecialRulesTwoR', RemoveSpecialRulesTwoR: 'RemoveSpecialRulesTwoR' }),

    ...mapMutations({ AddAgeLimitR: 'AddAgeLimitR', RemoveAgeLimitR: 'RemoveAgeLimitR' }),

    ...mapMutations({ AddCaseTicketR: 'AddCaseTicketR', RemoveCaseTicketR: 'RemoveCaseTicketR' }),

    ...mapMutations({ AddСaseInvitationR: 'AddСaseInvitationR', RemoveСaseInvitationR: 'RemoveСaseInvitationR' }),

    ...mapMutations({ AddTicketTitleR: 'AddTicketTitleR', RemoveTicketTitleR: 'RemoveTicketTitleR' }),

    ...mapMutations({ AddTicketSaleR: 'AddTicketSaleR', RemoveTicketSaleR: 'RemoveTicketSaleR' }),

    ...mapMutations({ AddCashierNameR: 'AddCashierNameR', RemoveCashierNameR: 'RemoveCashierNameR' }),

    ...mapMutations({ AddCasePushkinCardR: 'AddCasePushkinCardR', RemoveCasePushkinCardR: 'RemoveCasePushkinCardR' }),

    ...mapMutations({ AddFieldBarcodeR: 'AddFieldBarcodeR', RemoveFieldBarcodeR: 'RemoveFieldBarcodeR' })
  }
}
</script>
