<script setup>
import axios from "axios";
import { ref, onMounted } from "vue"

const jobs = ref([
  {
    "Id": 1,
    "Name": "Test abcde",
    "StartTime": "2024-01-23"
  },
  {
    "Id": 2,
    "Name": "Test abcde112312",
    "StartTime": "2026-5-23"
  },
  {
    "Id": 3,
    "Name": "Test abcdeaaaa",
    "StartTime": "2031-01-23"
  },
])

// onMounted(async () => {
//   const result = await axios.post("/api/user/workflow_job/query_page", {
//     "Limit": 10 // 只获取前十条
//   })
//   jobs.value = result.data.Data.Rows
// })

</script>

<template>
  <div class="w-screen h-screen overflow-hidden">
    <div class="btn">
      BUTTON
    </div>
  </div>
</template>