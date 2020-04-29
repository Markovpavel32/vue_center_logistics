<template>
  <div>
    <div>
      <div class="row mb-default">
        <div class="d-flex align-items-center col-sm-6">
          <span class="mr-default col-sm-4 text-right">Пункт загрузки:</span>
        </div>
      </div>
      <div class="row mb-default">
        <div class="d-flex align-items-center col-sm-6">
          <span class="mr-default col-sm-4 text-right">Выберите из списка</span>
          <b-input class="col-sm-10" :value="model.name" placeholder="Укажите наименование товара"></b-input>
        </div>
      </div>
      <div class="row mb-default">
        <div class="d-flex align-items-center col-sm-6">
          <span class="mr-default col-sm-4 text-right">Контактое лицо</span>
          <b-input class="col-sm-10" :value="model.name" placeholder="Ф.И.О."></b-input>
        </div>
      </div>
      <div class="row mb-default">
        <div class="d-flex align-items-center col-sm-6">
          <span class="mr-default col-sm-4 text-right">Телефон</span>
          <b-input class="col-sm-10" :value="model.name" placeholder="+7..."></b-input>
        </div>
      </div>
      <div class="row mb-default">
        <div class="d-flex align-items-center col-sm-6">
          <span class="mr-default col-sm-4 text-right">Пункт выгрузки:</span>
        </div>
      </div>
      <div class="row mb-default">
        <div class="d-flex align-items-center col-sm-6">
          <span class="mr-default col-sm-4 text-right">Выберите из списка</span>
          <b-input class="col-sm-10" :value="model.name" placeholder="Укажите наименование товара"></b-input>
        </div>
      </div>
      <div class="row mb-default">
        <div class="d-flex align-items-center col-sm-6">
          <span class="mr-default col-sm-4 text-right">Контактое лицо</span>
          <b-input class="col-sm-10" :value="model.name" placeholder="Ф.И.О."></b-input>
        </div>
      </div>
      <div class="row mb-default">
        <div class="d-flex align-items-center col-sm-6">
          <span class="mr-default col-sm-4 text-right">Телефон</span>
          <b-input class="col-sm-10" :value="model.name" placeholder="+7..."></b-input>
        </div>
      </div>
      <div class="row mb-default">
        <div class="d-flex align-items-center col-sm-6">
          <span class="mr-default col-sm-4 text-right">Заявка на выдачу</span>
          <b-input class="col-sm-10" :value="model.name" placeholder="Выберите из списка"></b-input>
        </div>
      </div>
      <div class="row mb-default">
        <div class="d-flex align-items-center col-sm-6">
          <span class="mr-default col-sm-4 text-right">Дата подачи груза</span>
          <b-input class="col-sm-10" :value="model.name" placeholder="01.01.20"></b-input>
        </div>
      </div>
      <div class="row mb-default">
        <div class="d-flex align-items-center col-sm-6">
          <span class="mr-default col-sm-4 text-right">Загрузка</span>
          <b-checkbox class="no-padding" v-model="model.self_delivery" :disabled="!is_edit_mode"></b-checkbox>
        </div>
      </div>
      <div class="row mb-default">
        <div class="d-flex align-items-center col-sm-6">
          <span class="mr-default col-sm-4 text-right">Коментарий</span>
          <b-textarea v-model="model.note" class="col-sm-10" :disabled="!is_edit_mode"></b-textarea>
        </div>
      </div>
      <div class="row mb-default">
        <div class="d-flex align-items-center col-sm-6">
          <span class="mr-default col-sm-4 text-right">Характеристики груза:</span>
        </div>
      </div>
      <div class="row mb-default">
        <div class="d-flex align-items-center col-sm-6">
          <span class="mr-default col-sm-4 text-right">Категория</span>
          <b-input class="col-sm-10" :value="model.name" placeholder="Укажите категорию товара"></b-input>
        </div>
      </div>
      <div class="row mb-default">
        <div class="d-flex align-items-center col-sm-4">
          <span class="mr-default col-sm-6 text-right" style="margin-right: 21px">Вес, кг</span>
          <b-input class="col-sm-4" :value="model.group"></b-input>
        </div>
        <div class="d-flex align-items-center col-sm-3 mr-default">
          <span class="col-sm-6">Объем, м2</span>
          <b-input class="col-sm-6" :value="model.group"></b-input>
        </div>
        <div class="d-flex align-items-center col-sm-4">
          <span class="col-sm-6">Оценочная стоимость, руб</span>
          <b-input class="col-sm-6" :value="model.group"></b-input>
        </div>
      </div>
      <div class="row mb-default">
        <div class="col-sm-6">
          <div class="offset-sm-4 col-sm-4">
            <b-button class="pl-default" variant="primary" squared>Создать</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'application-delivery-create',
  props: {
    model: {
      required: true,
      type: Object
    }
  }
}
</script>
