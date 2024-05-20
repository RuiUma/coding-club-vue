<script setup>
import {ref} from 'vue'

const dateValue = ref(new Date())

const displayTime = ref(false)

const onUpdate = () => {
    console.log(dateValue.value);
    displayTime.value = true
}

const timeList = ref([

    {
        timeLabel: '08:00',
        disabled: true
    },
    {
        timeLabel: '12:15',
        disabled: false
    }
])
</script>



<template> 
    <el-row>
        <el-col :span="10">
            <Calendar v-model="dateValue" dateFormat="dd/mm/yy" inline showWeek @update:model-value="onUpdate" />
        </el-col>

        <el-col :span="10" v-show="displayTime">
            <Button v-for="item in timeList" :disabled="item.disabled">{{ item.timeLabel }}</Button>
        </el-col>
    </el-row>
    
</template>