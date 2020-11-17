<template>
  <div class="login-container">
    <el-form
      :model="loginForm"
      ref="loginForm"
      :rules="loginRules"
      class="login-form"
      autocomplete="on"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">{{ $t('login.title') }}</h3>
        <lang-select class="set-language"></lang-select>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
