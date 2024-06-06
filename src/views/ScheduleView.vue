<script setup>
import {ref, onMounted} from 'vue'

import {sendEmail} from '@/config/http/index'

import {info, warn, success, error} from '@/utils/toast';
const dateValue = ref(new Date())

const displayTime = ref(false)

const scheduledTime = ref('')

const emailAddress = ref('')
const userName = ref('')

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



const onUpdate = () => {
    console.log(dateValue.value);
    displayTime.value = true
}


let dateTimeList = []


onMounted(async () => {
    dateTimeList = [
    {
        date: '20240610',
        timeList: [
            '08:00',
            '09:00'
        ]
    }
]
})


const onClick = (timeItem) => {
    scheduledTime.value = timeItem.timeLabel
}

const onSubmit = () => {

    if (scheduledTime.value.trim() === '' || emailAddress.value.trim() === '' || userName.value.trim() === '') {
        console.log('empty fileds');
        console.log(scheduledTime.value);
        console.log(emailAddress.value);
        console.log(userName.value);
        // info('info', 'there is still empty fileds')
        return
    }
    const strDate = '' + dateValue.value
    console.log(strDate.substring(0,16) + scheduledTime.value + strDate.substring(24))
    fetch('/proxy/api/email', {
        method:'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            targetEmailAddress: emailAddress.value,
            type: "customer",
            scheduledTime: strDate.substring(0,16) + scheduledTime.value + strDate.substring(24),
            customerName: userName.value
        })
    }).then(response => response.json()).then(res => {
        console.log(res);
    })
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
    <br>
    <el-row>
        <el-col :span="6">
            <Calendar v-model="dateValue" dateFormat="dd/mm/yy" inline @update:model-value="onUpdate" >
                <template #date="slotProps">
                    <strong v-if="confirmDisable(slotProps.date.day, slotProps.date.month,slotProps.date.year)" >{{ slotProps.date.day }}</strong>
                    <span style="text-decoration: line-through" v-else>{{ slotProps.date.day }}</span>
                </template>
            </Calendar>
        </el-col>

        <el-col :span="3">

        </el-col>

        <el-col :span="6" v-show="displayTime">
            <el-select v-model="scheduledTime" placeholder="Select Time" >
                <el-option v-for="item in timeList" @click="onClick(item)" :value="item.timeLabel" :disabled="item.disabled">{{ item.timeLabel }}</el-option>
            </el-select>
        </el-col>
        <el-col :span="3">

        </el-col>
        <el-col :span="6" v-show="displayTime">
            <InputGroup>
                <InputGroupAddon>
                    <i class="pi pi-envelope"></i>
                </InputGroupAddon>
                <InputText placeholder="Email Address" v-model="emailAddress" />
            </InputGroup>
            <br>
            <InputGroup>
                <InputGroupAddon>
                    <i class="pi pi-user"></i>
                </InputGroupAddon>
                <InputText placeholder="Name" v-model="userName" />
            </InputGroup>
            <br>
            <Button label="Submit" @click="onSubmit" />
        </el-col>
    </el-row>
    
</template>


