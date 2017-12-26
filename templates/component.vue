<template>
 <q-modal ref="layoutModal" :content-css="{minWidth: '80vw', minHeight: '80vh'}">
      <q-modal-layout>
        <q-toolbar slot="header">
          <q-btn flat @click="$refs.layoutModal.close()">
            <q-icon name="keyboard_arrow_left" />
          </q-btn>
          <q-toolbar-title>
            Header
          </q-toolbar-title>
        </q-toolbar>

     
        <div class="layout-padding">
          <h1>Modal</h1>

          <q-btn color="primary" @click="$refs.layoutModal.close()">Close</q-btn>
          <p class="caption" v-for="n in 15">This is a Modal presenting a Layout.</p>
        </div>
      </q-modal-layout>
</q-modal>
</template>

<script>
import {
  Toast,
  Ripple,
  QBtn,
  QIcon,
  QModal,
  QModalLayout,
  QToolbar,
  QToolbarTitle,
  QSearch,
  QList,
  QItem,
  QItemSide,
  QItemMain
} from 'quasar'
export default {
    components: {
    QBtn,
    QIcon,
    QModal,
    QModalLayout,
    QToolbar,
    QToolbarTitle,
    QSearch,
    QList,
    QItem,
    QItemSide,
    QItemMain
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
