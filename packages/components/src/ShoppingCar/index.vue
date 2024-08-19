<script setup lang="ts">
import { ref, computed } from 'vue'

// 要渲染的数据
const goods = ref([
  {
    id: 1,
    goods_name: '华为手环',
    goods_price: 169,
    goods_num: 1,
    checked: true
  },
  {
    id: 2,
    goods_name: '索尼耳机',
    goods_price: 163,
    goods_num: 1,
    checked: true
  },
  {
    id: 3,
    goods_name: '小米汽车',
    goods_price: 1890,
    goods_num: 1,
    checked: false
  },
  {
    id: 4,
    goods_name: 'iPhone14',
    goods_price: 1699,
    goods_num: 1,
    checked: true
  }
])

// 全选/非全选
const isSelectAll = computed({
  get() {
    return goods.value.every((item) => item.checked)
  },
  set(val) {
    goods.value.forEach((item) => (item.checked = val))
  }
})

// 选中的商品个数
const selectNum = computed(() => {
  return goods.value.filter((item) => item.checked).length
})

// 删除某一件商品
const deleteItem = (id: number) => {
  if (window.confirm('是否删除该商品')) goods.value = goods.value.filter((item) => item.id !== id)
}

// 删除选中的商品
const deleteSelectItem = () => {
  if (window.confirm('是否删除选中的商品'))
    goods.value = goods.value.filter((item) => !item.checked)
}

// 合计价格
const totalPrice = computed(() => {
  let total = 0
  for (const item of goods.value) {
    if (item.checked) {
      total += item.goods_num * item.goods_price
    }
  }
  return total
})
</script>

<template>
    <div id="shoppingcart">
      <table>
        <!-- 表头 -->
        <tr>
          <td>
            <input type="checkbox" v-model="isSelectAll" />
            全选
          </td>
          <td>商品</td>
          <td>单价（元）</td>
          <td>数量</td>
          <td>小记（元）</td>
          <td>操作</td>
        </tr>

        <tr v-for="item in goods" :key="item.id">
          <td><input type="checkbox" v-model="item.checked" /></td>
          <td>{{ item.goods_name }}</td>
          <td>{{ item.goods_price }}</td>
          <td>
            <button @click="item.goods_num > 0 ? item.goods_num-- : ''">-</button>
            <input type="text" v-model="item.goods_num" class="ipt" />
            <button @click="item.goods_num++">+</button>
          </td>
          <td>{{ item.goods_num * item.goods_price }}</td>
          <td>
            <button class="danger" @click="deleteItem(item.id)">删除</button>
          </td>
        </tr>
      </table>

      <footer class="footer">
        <div class="footer-left">
          <input type="checkbox" v-model="isSelectAll" />
          <span>全选</span>
          <a @click="deleteSelectItem">删除选中的商品</a>
          <span>共{{ goods.length }}件商品，已选择{{ selectNum }}件</span>
        </div>
        <div class="footer-right">
          <div>
            合计(不含运费): <span>¥ {{ totalPrice }}</span>
          </div>
          <button>去结算</button>
        </div>
      </footer>
    </div>
</template>

<style scoped src="./shopping-cart.css"></style>
