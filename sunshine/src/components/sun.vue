<template>
    <div>
        <h1>{{msg}}</h1>
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg:'太阳神阿波罗'
        }
    },
    methods:{

    },
    created:function(){
        console.log(this.$router,'this.$router')
    }
}
</script>

