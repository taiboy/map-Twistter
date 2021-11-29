<template>
  <q-layout view="lHr lpR fFf">
    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />
        <q-toolbar-title class="text-weight-bold">
          <span class="gt-sm">{{ $route.name }}</span>
          <q-icon
            class="header-icon q-pa-md lt-md"
            name="fas fa-cloud-showers-heavy"
            size="sm"
            color="primary"
          />
        </q-toolbar-title>
        <q-toggle
          :false-value="this.$q.dark.set(theme)"
          :true-value="this.$q.dark.set(theme)"
          v-model="theme"
          :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"
          color="black"
          class="text-center"
          size="md"
        />
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="left"
      side="left"
      :width="283"
      bordered
      show-if-above
    >
      <q-icon
        class="q-pa-md"
        name="fas fa-cloud-showers-heavy"
        size="lg"
        color="primary"
      />
      <q-list>
        <q-item
          to="/"
          v-ripple
          clickable
          exact
        >
          <q-item-section avatar>
            <q-icon name="map" size="md" />
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">Map</q-item-section>
        </q-item>

        <q-item
          to="/home"
          v-ripple
          clickable
          exact
        >
          <q-item-section avatar>
            <q-icon name="home" size="md" />
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">Home</q-item-section>
        </q-item>

        <q-item
          to="/about"
          v-ripple
          clickable
          exact
        >
          <q-item-section avatar>
            <q-icon name="help" size="md" />
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">About</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-drawer show-if-above v-model="right" side="right" bordered>
      <q-input
        placeholder="Search Qwitter"
        class="q-ma-md"
        outlined
        rounded
        dense
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
      <q-list
        separator
        padding
      >
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">行方不明</q-item-label>
            <q-item-label class="text-weight-bold">迷子 太郎</q-item-label>
            <q-item-label caption>荒川区町屋付近</q-item-label>
            <q-item-label caption><a href="https://www.city.arakawa.tokyo.jp/a013/bousai/jishinnisonaete/chokaibetsu.html">荒川区避難所</a></q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5分前</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">行方不明</q-item-label>
            <q-item-label class="text-weight-bold">何処 花子</q-item-label>
            <q-item-label caption>北千住駅近く</q-item-label>
            <q-item-label caption><a href="https://0312.yanoshin.jp/rescue/index/35.749412/139.805108/%E5%B8%B8%E7%A3%90%E7%B7%9A/%E5%8C%97%E5%8D%83%E4%BD%8F%E9%A7%85">北千住避難所</a></q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>7分前</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">行方不明</q-item-label>
            <q-item-label class="text-weight-bold">神隠 次郎</q-item-label>
            <q-item-label caption>墨田区</q-item-label>
            <q-item-label caption><a href="https://www.city.sumida.lg.jp/anzen_anshin/bousai/hinanjo/hinannoruuru.html">墨田区避難所</a></q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>1時間前</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  created () {
    this.theme = JSON.parse(localStorage.getItem('theme'))
  },
  data () {
    return {
      left: false,
      right: false,
      theme: ''
    }
  },
  watch: {
    theme () {
      localStorage.setItem('theme', JSON.stringify(this.theme))
    }
  }
}
</script>

<style lang="sass">
  .header-icon
    position: absolute
    bottom: 0
    left: 50%
    transform: translateX(-50%)
</style>
