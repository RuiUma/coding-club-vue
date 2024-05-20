<script setup>
import SideBar from '@/components/home/SideBar.vue'
import MainContent from '@/components/home/MainContent.vue'

</script>

<template>
  <main>
    <el-container>

      <el-aside>
        <SideBar />
      </el-aside>

      <el-main>
        <MainContent />
      </el-main>
      
    </el-container>
    
    
  </main>
</template>
