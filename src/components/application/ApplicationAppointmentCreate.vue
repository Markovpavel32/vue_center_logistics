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
          <span class="mr-default">Плановая дата выдачи:</span>
          <date-picker v-model="model.scheduled_date"
                       class="form-control"
                       :config="datepicker_options"
                       :disabled="!is_edit_mode"></date-picker>
        </label>
      </div>
    </div>
    <c-radio-row :model="model" :fields="radio_fields" title="Заявка является возвратом?" :disabled="!is_edit_mode"></c-radio-row>
    <div v-if="model.it_return" class="row mb-default">
      <div class="d-flex align-items-center col-sm-12">
        <span class="mr-default">Откуда осуществляется возврат:</span>
        <b-input class="col-sm-8" :value="model.return_adsress"></b-input>
      </div>
    </div>
    <div class="row mb-default">
      <div class="col-sm-2">Примечание:</div>
      <b-textarea v-model="model.note" class="col-sm-10" :disabled="!is_edit_mode"></b-textarea>
    </div>
  </div>
</template>

<script>
import CRadioRow from '../common/_lib/CRadioRow'

export default {
  name: 'application-appointment-create',
  components: { CRadioRow },
  props: {
    model: {
      type: Object,
      required: true
    },
    is_edit_mode: Boolean
  },
  data () {
    return {
      radio_fields: [{
        value: true,
        label: 'Да',
        property: 'it_return'
      },
      {
        value: false,
        label: 'Нет',
        property: 'it_return'
      }],
      datepicker_options: {
        format: 'DD.MM.YYYY',
        locale: 'ru'
      }
    }
  }
}
</script>

<style scoped>

</style>
