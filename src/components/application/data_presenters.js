import moment from 'moment'

export default class Application {
  constructor (value, state) {
    this.value = value
    this.state = state
  }

  get appointment () {
    const data = {
      document_date: moment(this.value.document_date, 'DD.MM.YYYY', 'ru').format('YYYY-MM-DDThh:mm:ss.SSSZ'),
      scheduled_date: moment(this.value.scheduled_date, 'DD.MM.YYYY', 'ru').format('YYYY-MM-DDThh:mm:ss.SSSZ'),
      document_number: this.value.document_number,
      document_lines: [...this.value.document_lines],
      it_return: this.value.it_return
    }
    return this.value.id ? { ...data, document_id: this.value.id } : data
  }

  get to_issue () {
    const data = {
      document_date: moment(this.value.document_date, 'DD.MM.YYYY', 'ru').format('YYYY-MM-DDThh:mm:ss.SSSZ'),
      scheduled_date: moment(this.value.scheduled_date, 'DD.MM.YYYY', 'ru').format('YYYY-MM-DDThh:mm:ss.SSSZ'),
      document_number: this.value.document_number,
      document_lines: [...this.value.document_lines],
      need_delivery: !this.value.self_delivery,
      consignee: this.value.consignee
    }
    return this.value.id ? { ...data, document_id: this.value.id } : data
  }
}
