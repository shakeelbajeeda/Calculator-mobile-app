<template>
  <q-page class="bg">
    <div class="text-center text-info  text-h4 q-pt-md">جیلدار برکس کمپنی
    </div>
    <div class="text-center text-white text-h5 q-pt-xl">ٹوٹل رقم نکالنے والا کیلکولیٹر</div>
    <div class="q-mx-md q-mt-lg">
      <q-form @reset="onReset">
        <q-input filled type="number" v-model="calculator.first_value" label="اینٹیں لیکھیں "
          class="bg-white q-mt-sm" />
        <q-input filled type="number" v-model="calculator.second_value" label="ریٹ لیکھیں" class="bg-white q-mt-lg" />
        <q-input filled type="number" disable v-model="calculator.output" class="bg-white q-mt-lg" />
        <q-btn size="1.3rem" @click="calculate" class="header_bg btn_length q-mt-lg text-white" label="حساب لگائیں" />
        <q-btn size="1.3rem" @click="reset" class="header_bg btn_length q-mt-lg text-white" label="Clear" />


      </q-form>
    </div>

  </q-page>
</template>
<script>

export default {
  data() {
    return {
      calculator: {
        first_value: null,
        second_value: null,
        output: null
      }
    }
  },
  methods: {
    reset() {
      this.calculator.first_value = null;
      this.calculator.second_value = null;
      this.calculator.output = null;
    },
    calculate() {
      var bricks = this.calculator.first_value;
      var rate = this.calculator.second_value;
      if (bricks && rate) {
        var total = rate / 1000 * bricks;
        total = total.toFixed(2);
        this.calculator.output = total
      }
      else {
        this.calculator.output = null

      }
    }
  },
  watch: {
    'calculator.first_value': function () {
      this.calculate()
    },
    'calculator.second_value': function () {
      this.calculate()
    }
  }
}
</script>
