<template>
  <div class="menuTree">
    <!-- <li v-for="(menu,index) in data" :key="index">
      <span :index="menu.menuID" :key="menu.pID" v-if="menu.IsContent">
        {{menu.name}} <br />
      </span>
      <span v-else :index="menu.menuID" :key="menu.pID">
        <el-menu class="el-menu-vertical">
          <i class="el-icon-plus"></i>
          {{menu.name}}<br />
        </el-menu>
        <menuTree :data="menu.list"></menuTree>
      </span>
    </li> -->
    <!--导航菜单-折叠功能-->
    <template v-for="menu in data">
      <el-submenu :index="menu.index" :key="menu.menuID" v-if="!menu.isContent">
          <template slot="title">
              <i class="el-icon-plus"></i>
              {{menu.name}}</template>
          <menuTree :data="menu.list"></menuTree>
      </el-submenu>
      <el-menu-item v-else :index="menu.index" :key="menu.menuID">
          {{menu.name}}
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  props: ["data"],
  name: "menuTree"
};
</script>

<style>
/* .el-icon-plus {
  background-color: blue;
} */
</style>

