<template>
  <!--Блок компонентов-->
  <div class="template-bckg">
      <div class="test_body">
          <div class="v-test">
            <vTicket />
            <div class="wrapper">
              <vButtonPanel />
            </div>
          </div>
          <div class="ticket_wrp">
              <vTicketFor />
          </div>
        </div>
        <hr>
        <div class="build-wrp">
          <div><h3>Шаблон билета для:</h3></div>
          <div class="v-build">
            <div class="v-build-components">
              <vBuilderForCitizen />
            </div>
            <div class="v-build-components">
              <vBuilderForDatamax />
            </div>
            <div class="v-build-components">
              <vBuilderForCustom />
            </div>
            <div class="v-build-components">
              <vBuilderForPDF />
            </div>
          </div>
        </div>
  </div>
</template>

<script>
import vTicket from '@/components/template-builder/v-ticket.vue'
import vButtonPanel from '@/components/template-builder/v-button-panel.vue'
import vTicketFor from '@/components/template-builder/v-ticket-for.vue'
import vBuilderForCitizen from '@/components/template-builder/v-builder-for-citizen.vue'
import vBuilderForDatamax from '@/components/template-builder/v-builder-for-datamax.vue'
import vBuilderForCustom from '@/components/template-builder/v-builder-for-custom.vue'
import vBuilderForPDF from '@/components/template-builder/v-builder-for-pdf.vue'

export default {
  name: 'v-template',
  components: {
    vTicket,
    vButtonPanel,
    vTicketFor,
    vBuilderForCitizen,
    vBuilderForDatamax,
    vBuilderForCustom,
    vBuilderForPDF
  },
  props: {}

}

</script>
