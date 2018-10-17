<template>
    <div id="app">
        <div class="header">
            <ul>
                <li>
                    <router-link to='/spring'>春</router-link>
                </li>
                <li>
                    <router-link to='/summer'>夏</router-link>
                </li>
                <li>
                    <router-link to='/autumn'>秋</router-link>
                </li>
                <li>
                    <router-link to='/winter'>冬</router-link>
                </li>
            </ul>
        </div>
        <div class="content">
            <sun></sun>
            <router-view></router-view>
        </div>
        <div class="footer">

        </div>
    </div>
</template>

<script>
import sun from '@/components/sun';
export default {
  name: 'App',
  data(){
      return {

      }
  },
  components:{
      sun,
  }
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    #app .header{
        
        background-color: yellowgreen;
        line-height: 60px;
    }
     #app .header ul{
        width: 1200px;
        height: 60px;
        margin:0 auto;
        background-color: pink;
        height:100%;
        display:flex;
        justify-content: space-around;
     }
     #app .header ul li{
         list-style: none;
         width: 80px;
         height:100%;
         background-color: skyblue;
         color:#fff;
         text-align:center;
     }
</style>
