<template>
<div class="headerBar">
    <div class="logo">
    header_log
    </div>
    <div class="menu">
        <ul>
            <li v-for="(item,index) in menuList" :key="index" :class="activeMenu===item.id?'active':''" @click="changeMenu(item.id)">
                {{item.name}}
            </li>
        </ul>
    </div>   
</div>        

</template>

<script>
import menu_url_map from '@/config/menu';

export default {
    name:'headerBar',
    data(){
        return{
            activeMenu: '',
            menuList: [
                {name: '标题1',id:'01'},
                {name: '标题2',id:'02'},
                {name: '标题3',id:'03'},
                {name: '标题4',id:'04'}
            ]
        }
    },
    methods:{
        changeMenu(index){
            this.activeMenu=index;
            if(index===-1){
                this.$router.push('/home');
            }
            else{
                this.$router.push(menu_url_map[index]);
            }
        }
    }
}
</script>


<style scoped>
.headerBar {
    background-image: linear-gradient(-179deg, #d0d3f5 0%, #496bf3 100%);
    width: 100%;
    display: flex;
    flex-direction: row
    
}
.logo{
        padding: 10px 20px 0 20px;
        font-size: 18px;
        color: #ffffff;
        letter-spacing: 0.42px;
        font-weight: bold;
        display: inline-block
        
    }
.menu{
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start
}
ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    align-items: flex-end;
    flex-wrap: wrap
}
li{
    margin-top: 6px;
    font-size: 14px;
    color:darkred;
    letter-spacing: 0.33px;
    cursor: pointer;
    padding: 0 19px;
    height: 34px;
    line-height: 34px;
    text-align: center
}
.active{
    background-image: linear-gradient(-179deg, #091ad8 0%, #aa91a8 100%);
    border-radius: 2px 2px 0px 0px
}

:not(.active):hover{
    border-bottom: 1px solid #0cdd2f
}

</style>
