<template>
  <div class="payment-page">
    <div class="mb-2">
      <h2>{{ $t('routes.payment') }}</h2>
    </div>

    <div class="mb-4">
      <div class="mb-2">
        <h3>{{ $t('payment.tariffs') }} (2022 рік)</h3>
      </div>

      <div class="content">
        <div>
          <div class="label">{{ $t('payment.dues') }}:</div>
          <div class="value">{{membership}} грн / місяць</div>
        </div>
        <div>
          <div class="label">{{ $t('payment.electricity') }}:</div>
          <div class="value">{{electricity}} грн / кіловат</div>
        </div>
      </div>
    </div>

    <div class="mb-4">
      <div class="mb-2">
        <h3>{{ $t('payment.title') }}</h3>
      </div>

      <div class="content">
        <div>
          <div class="label">{{ $t('payment.currentAccount') }}:</div>
          <div class="value">{{ currentAccountUBAN }}</div>
        </div>
        <div>
          <div class="label">{{ $t('payment.edrpou') }}:</div>
          <div class="value">{{ edrpou }}</div>
        </div>
<!--        <div>-->
<!--          <div class="label">{{ $t('payment.bankCode') }}:</div>-->
<!--          <div class="value">МФО 322669</div>-->
<!--        </div>-->
        <div>
          <div class="label">{{ $t('payment.bankName') }}:</div>
          <div class="value">AT КБ "ПРИВАТБАНК"</div>
        </div>
        <div>
          <div class="label">{{ $t('payment.recipientOfPayment') }}:</div>
          <div class="value">АГК "Північ"</div>
        </div>
        <div>
          <div class="label">{{ $t('payment.purposeOfPayment') }}:</div>
          <div class="value">
            № (боксу),
            <span title="Приклад - (01.2021-06.2021)">
              (період оплати) ...,
            </span>
            <span title="Приклад - 1260грн">
              Ч.В. (членські внески) ...грн,
            </span>
            <span title="Приклад - 5000-4800=200кв = 390грн">
              Е.Е. (електро енергія, поточні-попередні) ...грн
            </span>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="pg-2-0">
        <h3>{{ $t('payment.template') }}</h3>
      </div>

      <div class="mb-2">
        <a href="/files/requisites-2022.jpg" target="blank">
          Реквізити для оплати PDF
        </a>
      </div>

      <div>
        <img src="/files/requisites-2022.jpg" alt="Payment template">
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { $t } from '@/modules/core';

export default defineComponent({
  name: "PaymentPage",

  data () {
    return {
      membership: '300',
      electricity: '1.95',
      currentAccountUBAN: 'UA383052990000026003015026949',
      edrpou: '25661903'
    };
  },

  methods: {
    $t
  }
});
</script>

<style scoped lang=scss>
.payment-page {
  .content {
    & > div {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 10px;
    }

    .label {
      width: 180px;
      font-weight: bold;
    }
  }

  img {
    display: block;
    max-width: 100%;
  }
}
</style>
