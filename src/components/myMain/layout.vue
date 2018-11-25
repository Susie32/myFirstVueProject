<template>
<div class='layout'>
    <div id="k_header">
        <headerBar></headerBar>
    </div>
    <div id="body">
        <router-view />
    </div>
    <div id="footer">
        <!-- <router-view /> -->
    </div>
</div>
</template>

<script>
import headerBar from "@/components/myMain/headerBar";
export default {
  name: "mainLayout",
  components: { headerBar }
};
</script>

<style scoped>
#layout {
  height: 100%;
  display: flex;
  flex-direction: column;
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