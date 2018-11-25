<template>
<div class='body'>
    <el-row type="flex" justify="center">
        <el-col :span="5" class='leftNav'> 
            <leftNav></leftNav>            
        </el-col>
        <el-col :span='19' class='mainPage'>
            <mainPage></mainPage>
            <router-view />
        </el-col>
    </el-row>
</div>
</template>

<script>
import leftNav from "@/components/myDemoMenuItem1/leftNav";
import mainPage from "@/components/myDemoMenuItem1/mainPage";
export default {
  name: "bodyLayout",
  components: { mainPage, leftNav }
};
</script>

<style scoped>
#layout {
height: 100%;
display: flex;
flex-direction: column
}
.el-col {
  border-radius: 0px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.headerBar {
  background: steelblue;
  height: 2sm;
}
.leftNav {
  background: rgb(6, 131, 233);
}
.mainPage {
  background: rgb(152, 174, 192);
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.bg-purple {
  background: #d3dce6;
}
</style>