<template>
  <q-page class="bg flex flex-center">
    <div class="row">
      <div class="col-12 text-center">
        <img src="img1.png" class="index-img">

      </div>
      <div class="col-12">
        <div class="text-center text-info  text-h4">جیلدار برکس کمپنی
        </div>
      </div>
    </div>
    <div class="text-center">
      <q-btn size="1.4rem" to="first_calculator" rounded class="header_bg text-white"
        label="ٹوٹل رقم نکالنے والا کیلکولیٹر" />
      <q-btn size="1.47rem" to="second_calculator" rounded class="header_bg text-white q-mt-md q-px-lg"
        label="اینٹیں نکالنے والا کیلکولیٹر" />
      <q-btn size="1.49rem" to="third_calculator" rounded class="header_bg text-white q-mt-md q-px-lg"
        label="ریٹ نکالنے والا کیلکولیٹر" />
    </div>
    <q-item-lable class="text-info ">Designed & Developed by: <span class="text-white text-weight-bold">Shakeel
        Ahmad</span>
    </q-item-lable>


  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
