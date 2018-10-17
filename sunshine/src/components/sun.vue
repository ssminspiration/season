<template>
    <div>
        <h1>{{msg}}</h1>
        <h2>{{msg1}}</h2>
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg:'太阳神阿波罗',
            msg1:'智慧女神雅典娜'
        }
    },
    methods:{

    },
    created:function(){
        console.log(this.$router,'this.$router')
    }
}
</script>

