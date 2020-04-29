<template>
<div>
  <page-header title="Заявки на грузопревозку">
    <template slot="actions">
      <b-button variant="warning" squared class="d-flex align-items-center" @click="is_create = !is_create">
        <img src="../../assets/plus-warning-filled.png" width="24" hight="24"/>
        <span>Создать заявку</span>
      </b-button>
    </template>
  </page-header>
  <application-create type="delivery"
                      title="Новая заявка на грузоперевозку"
                      @close="is_create = $event"
                      v-if="is_create"></application-create>
</div>
</template>

<script>
// import { axios_get } from '../../lib/axios'
import PageHeader from '../common/PageHeader'
import ApplicationCreate from '../application/ApplicationCreate'

export default {
  name: 'application-log-delivery',
  components: { PageHeader, ApplicationCreate },
  data () {
    return {
      pending: false,
      current_page: 1,
      data: {},
      total_rows: 0,
      per_page: 20,
      is_create: false
    }
  },

  // created () {
  //   this.toggle_pending()
  //   axios_get('application_log/delivery')
  //     .then(res => {
  //       this.data = res.data
  //       this.total_rows = this.data.length
  //       this.toggle_pending()
  //     })
  //     .catch(e => {
  //       if (e.response.status === 404) this.$router.push({ name: 'login', params: { error_text: 'Войдтите в личный кабинет' } })
  //     })
  // },

  methods: {
    toggle_pending () {
      this.pending = !this.pending
    }
  }
}
</script>
