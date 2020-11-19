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

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user"></svg-icon>
        </span>
        <el-input
          ref="username"
          v-model="loginForm.username"
          :placeholder="$t('login.username')"
          type="text"
          tabindex="1"
          autocomplete="on"
        ></el-input>
      </el-form-item>

      <el-tooltip
        v-model="capsTooltip"
        content="Caps loack is on"
        placement="right"
        manual
      >
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password"></svg-icon>
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            :placeholder="$t('login.password')"
            name="password"
            tabindex="2"
            autocomplete="on"
            @keyup.native="checkCapslock"
            @blur="capsToltip = false"
            @keyup.enter.native="handleLogin"
          >
          </el-input>
          <span class="show-pwd" @click="showPwd">
            <svg-icon
              :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
            ></svg-icon>
          </span>
        </el-form-item>
      </el-tooltip>

      <el-button
        :loading="loading"
        type="primary"
        style="width: 100%;margin-bottom:30px;"
        @click.native.prevent="handleLogin"
        >{{ $t('login.logIn') }}</el-button
      >

      <div style="position:relative">
        <div class="tips">
          <span>{{ $t('login.username') }}:admin</span>
          <span>{{ $t('login.password') }}:{{ $t('login.any') }}</span>
        </div>
      </div>

      <el-button
        class="thirdparty-button"
        type="primary"
        @click="showDialog = true"
      >
        {{ $t('login.thirdparty') }}
      </el-button>
    </el-form>

    <el-dialog :title="$t('login.thirdparty')" :visible.sync="showDialog">
      {{ $t('login.thirdparty') }}
      <social-sign></social-sign>
    </el-dialog>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
