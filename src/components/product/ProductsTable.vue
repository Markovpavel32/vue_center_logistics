<template>
  <div>
    <b-table
      id="products_table"
      v-if="products.length || is_details"
      :items="products"
      :busy="is_products_loading"
      :fields="fields"
      :per-page="per_page"
      style="{background-color: transparent}"
      class="products_table">
      <template v-slot:table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Загрузка...</strong>
        </div>
      </template>
      <template v-slot:cell(number)="data">
        <span>{{ get_row_number(data.index) }}</span>
      </template>
      <template v-slot:cell(quantity)="data">
        <b-input v-model="model.document_lines[data.index].quantity" :disabled="!is_edit_mode"></b-input>
      </template>
      <template v-slot:cell(remove)="row">
        <i class="icon-remove clickable" @click="$emit('remove_product', row.index)"></i>
      </template>
    </b-table>
    <b-pagination v-model="current_page"
                  :total-rows="total_rows"
                  :per-page="per_page"
                  aria-controls="products_table"></b-pagination>
  </div>
</template>

<script>
export default {
  name: 'products-table',
  props: {
    model: {
      required: true,
      type: Object
    },
    products: {
      required: true,
      type: Array
    },
    is_edit_mode: {
      required: true,
      type: Boolean,
      default: true
    },
    is_products_loading: {
      required: true,
      type: Boolean
    },
    is_details: {
      required: true,
      type: Boolean
    }
  },

  data () {
    return {
      current_page: 1,
      per_page: 20,
      default_fields: [
        {
          label: '',
          key: 'number'
        },
        {
          key: 'vendor_code',
          label: 'Артикул',
          class: 'products_table__vendor_code_column'
        },
        {
          key: 'barcode',
          label: 'Штрих-код единицы',
          class: 'products_table__barcode_column'
        },
        {
          key: 'name',
          label: 'Наименование товара',
          class: 'products_table__name_column'
        },
        {
          key: 'quantity',
          label: 'Количество',
          class: 'products_table__quantity_column'
        },
        {
          key: 'product_detail_name',
          label: 'Един. измерения',
          class: 'products_table__product_detail_name_column'
        }
      ],
      remove_field: [{
        key: 'remove',
        label: 'Удалить'
      }]
    }
  },
  computed: {
    fields () {
      return this.is_edit_mode ? this.default_fields.concat(this.remove_field) : this.default_fields
    },

    total_rows () {
      return this.products.length
    }
  },
  methods: {
    get_row_number (index) {
      return index + 1 + (this.current_page - 1) * this.per_page
    }
  }
}
</script>

<style scoped>
.table-hover tbody tr:hover {
  background-color: transparent;
}
</style>
