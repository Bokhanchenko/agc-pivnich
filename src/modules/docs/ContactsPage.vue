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
        <el-link href="tel:%2B380674449595">+38 (067) 444-95-95</el-link>
      </div>
    </div>

    <div class="item">
      <h3 class="label">Бухгалтерія:</h3>
      <div class="value">
        <div>
          <el-link href="tel:%2B380673399595">+38 (067) 339-95-95</el-link>
        </div>
        <div class="pg-2">
          Пн: 17:00 - 19:00 <br>
          Вт: 17:00 - 19:00 <br>
          Ср: 17:00 - 19:00 <br>
          Чт: 11:00 - 12:00
        </div>
      </div>
    </div>

    <div class="item">
      <h3 class="label">Охорона:</h3>
      <div class="value">
        <el-link href="tel:%2B380631146422">+38 (063) 114-64-22</el-link>
      </div>
    </div>

    <div class="item">
      <h3 class="label">Адреса:</h3>
      <div class="value">місто Київ, вулиця Миколи Закревського, 93</div>
    </div>

    <div class="item">
      <h3 class="label">Поштовий індекс: </h3>
      <div class="value">02232</div>
    </div>

    <div class="item">
      <h3 class="label">Код ЄДПРОУ</h3>
      <div class="value">25661903</div>
    </div>

    <div class="mt-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2536.1780347888707!2d30.629090201165695!3d50.53085908083818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4d126d44e3357%3A0x848a905b62f1b1fa!2zItCh0LXQstC10YAiINCz0LDRgNCw0LbQvdGL0Lkg0LrQvtC-0L_QtdGA0LDRgtC40LIsINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1suk!2sua!4v1634749054889!5m2!1suk!2sua"
        width="100%"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
      />
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
  * {
    font-size: 1.4rem;
  }

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
