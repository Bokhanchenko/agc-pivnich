<template>
  <div class="contacts-page">
    <div class="mb-2">
      <h2>{{ $t('routes.contacts') }}</h2>
    </div>

    <div class="item">
      <h3 class="label">Email:</h3>
      <div class="value">
        <el-link href="mailto:agk.pivnich@gmail.com">
          agk.pivnich@gmail.com
        </el-link>
      </div>
    </div>

    <div class="item">
      <h3 class="label">Адміністрація:</h3>
      <div class="value">
        <el-link href="tel:%2B380674449595">
          +38 (067) 444-95-95
        </el-link>
      </div>
    </div>

    <div class="item">
      <h3 class="label">Бухгалтерія:</h3>
      <div class="value">
        <el-link href="tel:%2B380673399595">
          +38 (067) 339-95-95
        </el-link>
      </div>
    </div>

    <div class="item">
      <h3 class="label">Охорона:</h3>
      <div class="value">
        <el-link href="tel:%2B380631146422">
          +38 (063) 114-64-22
        </el-link>
      </div>
    </div>

    <div class="item">
      <h3 class="label">Адреса:</h3>
      <div class="value">
        місто Київ, вулиця Миколи Закревського, 93
      </div>
      Код ЄДПРОУ: 25661903
    </div>

    <div class="item">
      <h3 class="label">Поштовий індекс: </h3>
      <div class="value">02232</div>
    </div>

    <div class="item">
      <h3 class="label">Код ЄДПРОУ</h3>
      <div class="value">25661903</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ElLink } from 'element-plus';

export default defineComponent({
  name: 'contacts-page',

  components: {
    ElLink
  }
});
</script>

<style scoped lang=scss>
.contacts-page {
  font-size: 1.4rem;

  .item {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }

  .label {
    margin-right: 20px;
    min-width: 200px;
  }
}
</style>
