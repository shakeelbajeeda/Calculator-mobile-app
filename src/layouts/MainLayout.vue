<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="header_bg">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          Jaildar Bricks Company
        </q-toolbar-title>

        <div>
          <q-avatar class="avatar" text-color="white">JD</q-avatar>
        </div>
      </q-toolbar>
    </q-header>
    <q-footer>
      <q-tabs v-model="tab" dense class="header_bg">
        <q-tab name="/" icon="home" label="Home" @click="this.$router.push('/')" />
        <q-tab name="/first_calculator" icon="calculate" @click="this.$router.push('/first_calculator')"
          label="first" />
        <q-tab name="/second_calculator" icon="calculate" @click="this.$router.push('/second_calculator')"
          label="Second" />
        <q-tab name="/third_calculator" icon="calculate" @click="this.$router.push('/third_calculator')"
          label="Third" />
      </q-tabs>
    </q-footer>

    <q-drawer class="header_bg" v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header class="text-white text-weight-bold">
          All Calculators
        </q-item-label>

        <EssentialLink class="text-white text-weight-bold" v-for="link in essentialLinks" :key="link.title"
          v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'ٹوٹل رقم نکالنے والا کیلکولیٹر',
    caption: 'Total Money',
    icon: 'calculate',
    link: '/first_calculator'
  },
  {
    title: 'اینٹیں نکالنے والا کیلکولیٹر',
    caption: 'Total Bricks',
    icon: 'calculate',
    link: '/second_calculator'
  },
  {
    title: 'ریٹ نکالنے والا کیلکولیٹر',
    caption: 'Rate',
    icon: 'calculate',
    link: '/third_calculator'
  },

]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },
  data() {
    return {
      tab: this.$route.path
    }
  },
  setup() {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
