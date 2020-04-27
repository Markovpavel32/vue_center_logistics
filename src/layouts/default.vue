<template>
    <div class="container">
      <b-navbar class="mt-md">
        <b-navbar-brand>
          <img src="../assets/MainLogo.svg" width="270" height="30"/>
        </b-navbar-brand>
        <b-navbar-nav class="ml-auto">
          <b-nav-item><b-icon icon="person-fill" variant="secondary"></b-icon>
            <span class="default__username">{{ username }}</span>
          </b-nav-item>
          <b-button class="default__exit_btn" variant="light">Выход</b-button>
        </b-navbar-nav>
      </b-navbar>
      <b-nav fill class="mt-sm">
        <b-nav-item :to="{name: 'application_log' }" active-class="default__active_link" link-classes="default__nav_link" class="">
          <span class="default__layout__nav_item">
            <span class="pr-xs pb-xs">
              <img src="../assets/application_log.svg" height="18" width="18"/>
            </span>
            {{'Журнал заявок'}}
          </span>
        </b-nav-item>
        <b-nav-item :to="{name: 'my_data' }" link-classes="default__nav_link" active-class="default__active_link">
          <span class="default__layout__nav_item">
            <span class="pr-xs pb-xs">
              <img src="../assets/my_data.png" height="18" width="18"/>
            </span>
            {{'Мои данные'}}
          </span>
        </b-nav-item>
        <b-nav-item :to="{name: 'documents_log' }" link-classes="default__nav_link" active-class="default__active_link">
          <span class="default__layout__nav_item">
            <span class="pr-xs pb-xs">
              <img src="../assets/documents_log.png" height="18" width="18" />
            </span>
            {{'Журнал документов'}}
          </span>
        </b-nav-item>
        <b-nav-item :to="{name: 'statistics' }" link-classes="default__nav_link" active-class="default__active_link">
          <span class="default__layout__nav_item">
            <span class="pr-xs pb-xs">
              <img src="../assets/statistics.png" height="18" width="18"/>
            </span>
            {{'Статистика и отчеты'}}
          </span>
        </b-nav-item>
        <b-nav-item :to="{name: 'disputes' }" link-classes="default__nav_link" active-class="default__active_link">
          <span class="default__layout__nav_item">
            <span class="pr-xs pb-xs">
              <img src="../assets/disputes.png" height="18" width="18"/>
            </span>
            {{'Споры'}}
          </span>
        </b-nav-item>
        <b-nav-item :to="{name: 'payment' }" link-classes="default__nav_link" active-class="default__active_link">
          <span class="default__layout__nav_item">
            <span class="pr-xs pb-xs">
              <img src="../assets/payment.png" height="18" width="18" />
            </span>
            {{'Оплата'}}
          </span>
        </b-nav-item>
      </b-nav>
      <router-view></router-view>
    </div>
</template>

<script>

import { axios_get } from '../lib/axios'
import { Auth } from '../components/login/data_presenters'

export default {
  name: 'default',
  created () {
    axios_get('/user_data')
      .then(res => new Auth().login(res.data, this.$store))
  },
  computed: {
    username () {
      return this.$store.state.login && this.$store.state.login.user.login
    }
  }
}
</script>
