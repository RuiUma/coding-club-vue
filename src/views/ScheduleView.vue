<script setup>
import {ref, onMounted} from 'vue'
import {sendEmail} from '@/config/http/index'
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
let dateTimeList = []


onMounted(async () => {
    dateTimeList = [
    {
        date: '20240604',
        timeList: [
            '08:00',
            '09:00'
        ]
    }
]
})



const onClick = (timeItem) => {
    console.log('click');
    const strDate = '' + dateValue.value


    // sendEmail({
    //         targetEmailAddress: 'theoneuma9@gmail.com',
    //         type: "customer",
    //         scheduledTime: strDate.substring(0,16) + timeItem.timeLabel + strDate.substring(24)
    //     }).then(({data}) => {
    //         console.log(data);
    //     })

    fetch('/proxy/api/email', {
        method:'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            targetEmailAddress: 'theoneuma9@gmail.com',
            type: "customer",
            scheduledTime: strDate.substring(0,16) + timeItem.timeLabel + strDate.substring(24)
        })
    }).then(response => response.json()).then(res => {
        console.log(res);
    })
    // fetch('http://127.0.0.1:8788/api/email/sendEmail', {
    //     method:'POST',
    //     mode: "no-cors",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //         targetEmailAddress: 'theoneuma9@gmail.com',
    //         type: "customer",
    //         scheduledTime: strDate.substring(0,16) + timeItem.timeLabel + strDate.substring(24)
    //     })
    // }).then((response) => {
    //     try {
    //         response.json()
    //     } catch (error) {
    //         response.text()
    //     }
    // }).then((data) => {
    //     console.log(data);
    // }).catch(e => {
    //     console.log(e);
    // })

    // const resText = await response.text()
    // console.log(resText);

    // console.log(1111111111111);
    // const resjson = await response.json()
    
    // console.log(resjson);
}

const confirmDisable = (day, month, year) => {
    month += 1
    if (month < 10){
        month = '0' + month
    }

    if (day < 10) {
        day = '0' + day
    }
    let res = false

    const str = ''+year+month+day
    
    dateTimeList.forEach((val) => {
        if (val.date == str) {
            res = true
        }
    })

    return res
}

</script>



<template> 
    <el-row>
        <el-col :span="10">
            <Calendar v-model="dateValue" dateFormat="dd/mm/yy" inline @update:model-value="onUpdate" >
                <template #date="slotProps">
                    <strong v-if="confirmDisable(slotProps.date.day, slotProps.date.month,slotProps.date.year)" >{{ slotProps.date.day }}</strong>
                    <span style="text-decoration: line-through" v-else>{{ slotProps.date.day }}</span>
                </template>
            </Calendar>
        </el-col>

        <el-col :span="8" v-show="displayTime">
            <Button v-for="item in timeList" @click="onClick(item)" :disabled="item.disabled">{{ item.timeLabel }}</Button>
        </el-col>
        <el-col :span="6" v-show="displayTime">

        </el-col>
    </el-row>
    
</template>