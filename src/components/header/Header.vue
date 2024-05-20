<script setup>
import {ref} from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()


const menuItems = ref([
    {
        label: 'Home',
        path: '/home'
    },
    {
        label: 'About',
        path: '/about'
    },
    {
        label: 'Schedule',
        path: '/schedule'
    }
])
const activeIndex = ref(0)

const onTabChange = () => {
    console.log(activeIndex.value);
    router.push(menuItems.value[activeIndex.value].path)

}

</script>

<template >
    <div>
        <TabMenu v-model:activeIndex="activeIndex" :model="menuItems" @tab-change="onTabChange" />
    </div>
    
</template>