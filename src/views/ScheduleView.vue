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

const onClick = (timeItem) => {
    console.log('click');
    const strDate = '' + dateValue.value
    fetch('http://127.0.0.1:8788/api/email/sendEmail', {
        method:'POST',
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            targetEmailAddress: 'theoneuma9@gmail.com',
            type: "customer",
            scheduledTime: strDate.substring(0,16) + timeItem.timeLabel + strDate.substring(24)
        })
    }).then((response) => {
        console.log('get Response');
        console.log(response);
        
    })
}

</script>



<template> 
    <el-row>
        <el-col :span="10">
            <Calendar v-model="dateValue" dateFormat="dd/mm/yy" inline showWeek @update:model-value="onUpdate" />
        </el-col>

        <el-col :span="10" v-show="displayTime">
            <Button v-for="item in timeList" @click="onClick(item)" :disabled="item.disabled">{{ item.timeLabel }}</Button>
        </el-col>
    </el-row>
    
</template>