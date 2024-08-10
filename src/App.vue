<script setup lang="ts">
// import { ref } from 'vue'

// const arr = [...Array(500000).keys()]
// // 使用 `arr` 生成一组对象数组，格式为 [{ id_${number}: ${number} }]
// const arr_1 = arr.map((item) => {
//   return {
//     [`id_${item}`]: item,
//   }
// })
// // 对 `arr_1` 进行随机重新排序
// const arr_2 = arr_1.sort(() => Math.random() - 0.5)

// const arr_1_time = ref(0), arr_1_result = ref<boolean | null>(null)
// const arr_2_time = ref(0), arr_2_result = ref<boolean | null>(null)
// function hashValue(arr: any) {
//   let hash = 0
//   for (let str of arr) {
//     hash += hashCode(str)
//   }
//   return hash
// }
// function hashCode(str: any) {
//   let hash = 0
//   for (let i = 0; i < str.length; i++) {
//     const char = str.charCodeAt(i)
//     hash = (hash << 5) - hash + char
//     hash |= 0
//   }
//   return hash
// }

// const code_1_test = () => {
//   const start = performance.now()
//   arr_1_result.value = arr_1.sort().join() === arr_2.sort().join()
//   arr_1_time.value = performance.now() - start
// }

// const code_2_test = () => {
//   const start = performance.now()
//   arr_2_result.value = hashValue(arr_1) === hashValue(arr_2)
//   arr_2_time.value = performance.now() - start
// }

// const runTest = () => {
//   code_1_test()
//   code_2_test()
// }
import { Dialog, DataTable, QueryForm } from '@axm-pack/manage-render'
import { ref } from 'vue'

const showDialog = () => {
  const dialog = Dialog.init({
    title: 'Dialog Title',
    width: 400,
  })
}

const queryForm = ref({
  pageNum: 1,
  pageSize: 10,
})
const QueryFormNode = QueryForm<{ str?: string }>({
  modelValue: queryForm,
  formItems: [
    {
      key: 'str',
      label: 'String',
    },
  ],
  actions: [
    {
      type: 'primary',
      text: 'Submit',
      handler() {
        // TODO
        console.log(queryForm.value)
      },
    },
  ],
})

const tableData = ref([
  {
    str: '123123',
  },
])
const loading = ref(false)
const total = ref(0)

const DataTableNode = DataTable<{ str?: string }>({
  items: tableData,
  loading,
  total,
  pagination: {
    pageNum: () => queryForm.value.pageNum,
    pageSize: () => queryForm.value.pageSize,
  },
  columns: [
    {
      label: 'String',
      key: 'str',
    },
  ],
  dataFetch(pageNum, pageSize) {
    // TODO
    console.log(pageNum, pageSize)
  },
})
</script>

<template>
  <div class="flex justify-center items-center min-h-screen flex-col gap-[20px]">
    <btn @click="showDialog">click me</btn>
    <QueryFormNode />
    <DataTableNode />
    <!-- <div class="active:opacity-[.6] bg-emerald-500/20 text-emerald-500 p-[2px_8px] rounded-md" @click="runTest">run test</div>
    <div class="flex flex-col w-max gap-[10px]">
      <div class="flex items-start gap-[10px]">
        <div class="w-[25px] h-[25px] rounded-sm bg-orange-500/60 text-white grid place-content-center">1</div>
        <span>{{ arr_1_result }}</span>
        <span>{{ arr_1_time }}</span>
      </div>
      <div class="flex items-start gap-[10px]">
        <div class="w-[25px] h-[25px] rounded-sm bg-blue-500/60 text-white grid place-content-center">2</div>
        <span>{{ arr_2_result }}</span>
        <span>{{ arr_2_time }}</span>
      </div>
    </div> -->
  </div>
</template>
