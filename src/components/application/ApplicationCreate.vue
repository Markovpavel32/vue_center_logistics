<template>
  <div>
    <b-card bg-variant="light">
      <i @click="$emit('close', false)" class="icon-remove ml-auto d-flex flex-row-reverse clickable"></i>
      <div class="d-flex justify-content-between">
        <b-card-title>
          <span class="mr-default">{{ title }}</span>
          <slot name="status"></slot>
        </b-card-title>
        <div>
          <slot name="actions"></slot>
        </div>
      </div>
      <application-appointment-create v-if="type === 'appointment'" :model="model" :is_edit_mode="is_edit_mode"></application-appointment-create>
      <application-to-issue-create v-if="type === 'to_issue'" :model="model" :is_edit_mode="is_edit_mode"></application-to-issue-create>
      <application-delivery-create v-if="type === 'delivery'" :model="model"></application-delivery-create>
      <products-table v-if="type !== 'delivery'"
                      :is_edit_mode="is_edit_mode"
                      @remove_product="remove_product"
                      :model.sync="model"
                      :products="products"
                      :is_details="is_details"
                      :is_products_loading="is_products_loading"
                      :key="item && item.id"></products-table>
      <div class="row justify-content-between" v-if="type !== 'delivery' && !model.it_return">
        <div class="col-sm-2" >
          <b-button v-if="is_edit_mode" variant="primary" @click="modal_show = !modal_show" squared>Добавить товар</b-button>
        </div>
        <div class="col-sm-2" >
          <b-button v-if="model.document_lines.length && is_edit_mode" variant="warning" @click="create_application" squared>Создать заявку</b-button>
        </div>
      </div>
    </b-card>
    <product-add @add="add" v-if="modal_show" :modal_show="modal_show" @change="modal_show = $event"></product-add>
  </div>
</template>

<script>
import moment from 'moment'
import ProductAdd from '../product/ProductAdd'
import { AjaxOperator } from '../../lib/axios'
import ProductsTable from '../product/ProductsTable'
import ApplicationAppointmentCreate from './ApplicationAppointmentCreate'
import ApplicationToIssueCreate from './ApplicationToIssueCreate'
import Application from './data_presenters'
import ApplicationDeliveryCreate from './ApplicationDeliveryCreate'

export default {
  name: 'application-create',
  components: {
    ApplicationDeliveryCreate,
    ApplicationToIssueCreate,
    ApplicationAppointmentCreate,
    ProductsTable,
    ProductAdd
  },
  props: {
    type: {
      required: true,
      type: String
    },
    title: {
      required: false,
      default: 'Новая заявка',
      type: String
    },
    item: {
      required: false,
      type: Object
    },
    is_edit_mode: {
      required: false,
      type: Boolean,
      default: true
    },
    is_details: {
      required: false,
      type: Boolean
    }
  },
  data () {
    return {
      moment,
      model: {
        document_date: moment(new Date()).format('DD.MM.YYYY'),
        document_number: '',
        scheduled_date: '',
        document_lines: [],
        self_delivery: false
      },
      products: [],
      modal_show: false,
      is_products_loading: false
    }
  },

  async created () {
    if (this.item) {
      this.model = {
        ...this.model,
        document_date: moment(this.item.document_date).format('DD.MM.YYYY'),
        document_number: this.item.document_number,
        scheduled_date: moment(this.item.scheduled_date).format('DD.MM.YYYY'),
        customer_id: this.item.id
      }
      if (this.item.consignee_name) {
        this.query = this.item.consignee_name
        this.consignee_list.push({ name: this.item.consignee_name, id: this.item.consignee_id })
      }

      if (this.item.it_return) {
        this.model.it_return = true
      }

      this.is_products_loading = true

      await new AjaxOperator(`/application_log/${this.type}/products`, this.$store, 'products')
        .get({
          params: {
            id: this.item.id
          }
        })
        .then(data => {
          this.products = data.result
          this.model.document_lines = data.result
          this.is_products_loading = false
        })
    }
  },

  methods: {
    add (product) {
      this.products.push(product)
      this.model.document_lines.push({ 'product': product.id, unit: product.product_detail_id, quantity: 0 })
    },

    create_application () {
      let data = this.prepare_data()
      new AjaxOperator(`/application_log/${this.type}`)
        .post(data)
        .then(result => this.$emit('close', false))
    },

    remove_product (index) {
      this.products.splice(index, 1)
      this.model.document_lines.splice(index, 1)
    },

    prepare_data (data = {}) {
      const application = new Application(this.model, this.$store.state)
      switch (this.type) {
        case 'appointment':
          data = application.appointment
          break
        case 'to_issue':
          data = application.to_issue
      }
      return data
    }
  }
}
</script>
