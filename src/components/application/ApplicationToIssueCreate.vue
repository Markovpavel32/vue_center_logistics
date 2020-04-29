<template>
  <div>
    <div class="row mb-default">
      <div class="col-sm-3">
        <label class="d-flex align-items-center">
          <span class="mr-default">Дата заявки:</span>
          <b-input class="col-sm-6" :value="model.document_date" disabled></b-input>
        </label>
      </div>
      <div class="col-sm-4">
        <label class="d-flex align-items-center">
          <span class="mr-default">Номер заявки:</span>
          <b-input class="col-sm-7"
                   required
                   v-model="model.document_number"
                   placeholder="Укажите номер заявки"
                   :disabled="!is_edit_mode"></b-input>
        </label>
      </div>
      <div class="col-sm-5">
        <label class="d-flex align-items-center">
          <span class="mr-default">Дата доставки:</span>
          <date-picker v-model="model.scheduled_date"
                       class="form-control"
                       :config="datepicker_options"
                       :disabled="!is_edit_mode"></date-picker>
        </label>
      </div>
    </div>
    <div class="row mb-default">
      <div class="col-sm-3">Самостоятельно доставлю груз</div>
      <div class="col-sm-1">
        <div class="d-flex">
          <b-checkbox v-model="model.self_delivery" :disabled="!is_edit_mode"></b-checkbox>
        </div>
      </div>
    </div>
    <div class="row mb-default d-flex align-items-center">
      <div class="col-sm-2">Грузополучатель:</div>
      <b-input v-if="!is_edit_mode" class="col-sm-6 pl-0" v-model="query" disabled/>
      <vue-bootstrap-typeahead v-else class="col-sm-6 pl-0"
                               v-model="query"
                               :serializer="item => item.consignee_name"
                               :data="consignee_list"
                               @hit="model.consignee = $event.id"
                               >
        <template slot="suggestion" slot-scope="{ data }">
          <div>
            {{ data.consignee_name }}
          </div>
          <div class="text-secondary">
            <small>{{ data.consignee_address }}</small>
          </div>
        </template>
      </vue-bootstrap-typeahead>
      </div>
      <div class="row mb-default">
        <div class="col-sm-2">Примечание:</div>
        <b-textarea v-model="model.note" class="col-sm-10" :disabled="!is_edit_mode"></b-textarea>
      </div>
  </div>
</template>

<script>
import debounce from 'lodash.debounce'
import { AjaxOperator } from '../../lib/axios'

export default {
  name: 'application-to-issue-create',
  props: {
    model: {
      type: Object,
      required: true
    },
    is_edit_mode: Boolean
  },
  data () {
    return {
      datepicker_options: {
        format: 'DD.MM.YYYY',
        locale: 'ru'
      },
      consignee_list: [],
      query: ''
    }
  },

  watch: {
    query: debounce(function (new_query) {
      new AjaxOperator(`/application_log/to_issue/consignees`, this.$store, 'consignees').get({
        params: {
          name: new_query
        }
      })
        .then(response => {
          this.consignee_list = response.result
        })
    }, 500)
  }
}
</script>
