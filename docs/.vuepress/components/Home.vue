<template>
  <div class="home">
    <!-- <div>header</div> -->
    <div class="home-content">
      <div class="home-content-item" v-for="item in mock" :key="item.title">
        <router-link :to="item.path" class="item-title">
          {{ item.title }}
        </router-link>
        <div class="home-text-wrap" @click="$router.push(item.path)">
          <img :src="item.icon" class="home-img" alt="load error" />
          <span class="home-text">{{ item.info }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mockData from '../mock'

export default {
  computed: {
    mock() {
      return mockData.home.card
    },
  },
}
</script>
<style scoped>
.home {
  padding: 20px;
}
.home-content {
  display: inline-grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: repeat(3, 170px);
  grid-gap: 40px;
}
.home-content-item {
  align-items: center;
  height: 180px;
  transform: scale(1);
  transition: transform 0.6s ease;
}
.home-content-item:hover {
  cursor: pointer;
  transform: scale(1.2);
  transition: transform 0.9s ease;
}

.home-content-item:hover .item-title {
  border-color: #2fb6fa;
  color: #2fb6fa;
  cursor: pointer;
}

.item-title {
  border-left: 6px solid #3eaf7c;
  padding-left: 16px;
}

.home-text-wrap {
  display: inline-grid;
  padding-top: 20px;
  grid-template-columns: 20% 70%;
}
.home-text {
  color: #999;
  font-size: 14px;
  line-height: 1.7;
  width: 100%;
  overflow: hidden;
}
.home-img {
  width: 48px;
  height: auto;
  transform: translateY(0);
  transition: transform 0.6s ease;
}
.home-content-item:hover .home-img {
  transform: translateY(20px);
  transition: transform 0.9s ease;
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
