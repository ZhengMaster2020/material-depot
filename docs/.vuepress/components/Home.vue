<template>
  <div class="home">
    <div>header</div>
    <div class="home-content">
      <div class="home-content-item" v-for="item in 6" :key="item">
        <router-link to="/home" class="item-title">{{ item }} ADS</router-link>
        <p class="home-text">
          {{ item }} 以 Markdown 为中心的项目结构以
          Markdown为中心的项目结构，以最少的配置帮助你专注于写作。
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
}
</script>
<style scoped>
.home {
  display: grid;
  padding: 20px;
}
.home-content {
  display: inline-grid;
  grid-template-columns: 33% auto 33%;
  grid-template-rows: repeat(3, 170px);
  grid-gap: 40px;
}
.home-content-item {
  display: grid;
  align-items: center;
}
.item-title {
  border-left: 6px solid #3eaf7c;
  padding-left: 16px;
}
.item-title:hover {
  border-color: #4e6e8e;
  color: #4e6e8e;
  cursor: pointer;
}
.home-text {
  color: #4e6e8e;
  line-height: 1.7;
}
</style>
<style>
/*修改滚动条样式 S*/
::-webkit-scrollbar {
  width: 9px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: rgb(239, 239, 239);
  border-radius: 2px;
}
::-webkit-scrollbar-thumb {
  background: #bfbfbf;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #888;
}
/*修改滚动条样式 E*/
</style>
