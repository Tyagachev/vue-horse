import constValue from './const-value'

export default {
  state: {
    setValueWidthTicket: '',
    setValueHeightTicket: '',
    /*
    *Управление высотой и шириной билета
    */
    resultTicketWidth: '',
    resultTicketHeight: '',
    /*
    *Управление шириной корешка и контроля
    */
    resultWidthRootlet: '',
    resultWidthControl: '',
    blackLabel: ''
  },
  modules: {
    constValue
  }
}
