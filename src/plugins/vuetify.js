import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VTextField,
  VIcon,
  VGrid,
  VToolbar,
  VForm,
  VTabs,
  VDivider,
  transitions
} from 'vuetify'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VForm,
    VTextField,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VTabs,
    VDivider,
    transitions
  },
})
