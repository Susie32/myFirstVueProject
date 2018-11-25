<template>
    <div>
        <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :lable="false">open</el-radio-button>
            <el-radio-button :lable="true">close</el-radio-button>
        </el-radio-group> -->
        <!-- <h5>{{menuList}}</h5> -->
        <el-menu router
        :default-active="$route.path" 
        theme="dark"
        >
            <!-- <menuTree :data="menuList"></menuTree> -->
            <template v-for="item in menuList" >
                <el-submenu :index="item.index" :key="item.menuID" v-if="!item.isContent">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    {{item.name}}
                </template>
                <menuTree :data="item.list"></menuTree>
                </el-submenu>
                <el-menu-item :index="item.index" :key="item.menuID" v-else>{{item.name}}</el-menu-item>
            </template>
        </el-menu>
    </div>
</template>

<script>
import menuTree from "@/components/myDemoMenuItem1/menuTree";
import menuUrlMap from "@/config/myDemoMenu";

export default {
  data () {
      return{
        isCollapse: false,
        menuList: [
        {
            pID: "1",
            name: "目录1",
            menuID: "m1",
            index:"/myDemoMenuItem1/test1",
            isContent: false,
            list: [
            {
                pID: "m1",
                name: "菜单1.1",
                menuID: "m11",
                index:"/myDemoMenuItem1/test1",
                isContent: true,
                list: []
            },
            {
                pID: "m1",
                name: "目录1.2",
                menuID: "",
                index:"/menu1.1",
                isContent: false,
                list: [
                {
                    pID: "m12",
                    name: "菜单1.2.1",
                    menuID: "m121",
                    index:"/myDemoMenuItem1/test2",
                    isContent: true,
                    list: []
                }
                ]
            }
            ]
        },
        {
            pID: "1",
            name: "目录2",
            menuID: "m2",
            index:"/menu2",
            isContent: false,
            list: [
            {
                pID: "m2",
                name: "菜单2.1",
                menuID: "m21",
                index:"/myDemoMenuItem1/test3",
                isContent: true,
                list: []
            },
            {
                pID: "m2",
                name: "菜单2.2",
                menuID: "m22",
                index:"/myDemoMenuItem1/test4",
                isContent: true,
                list: []
            }
            ]
        }
        ]
      }
    },
  components: {
    'menuTree': menuTree
  }
}
</script>
