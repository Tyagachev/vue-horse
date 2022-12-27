<template>

    <div class="template-bckg">
        <div class="test_body">
            <div>
                <vTicketPdfVue />
            </div>
        </div>
    </div>

</template>

<script>
import vTicketPdfVue from './v-ticket-pdf.vue'

export default {
  name: 'v-template-pdf',
  components: {
    vTicketPdfVue
  }
}
</script>
