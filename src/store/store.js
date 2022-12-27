import { createStore } from 'vuex'
import converter from '@/modules/converter-modules/converter.js'
import constValue from '@/modules/template-modules/const-value.js'
import variableTicket from '@/modules/template-modules/variable-ticket.js'
import dataBase from '@/modules/template-modules/database.js'
import arrays from '@/modules/template-modules/arrays.js'

const store = createStore({
  modules: {
    converter,
    variableTicket,
    dataBase,
    constValue,
    arrays
  }
})

export default store
