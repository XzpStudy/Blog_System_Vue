<template>
    <div>
        <el-menu
                default-active="0"
                unique-opened
                class="el-menu-vertical">
            <!--遍历菜单内容-->
            <!--有俩种菜单，第一种没有子菜单的，第二种有子菜单的-->
            <template v-for="(item,index) in menuList">
                <router-link :to="item.path" v-if="!item.children&&!item.hidden" :key="index.toString()">
                    <el-menu-item :index="index.toString()">
                        <i :class="item.icon"></i>
                        <span slot="title">{{item.name}}</span>
                    </el-menu-item>
                </router-link>
                <el-submenu :index="index.toString()" v-if="item.children&&!item.hidden" :key="index.toString()">
                    <template slot="title">
                        <i :class="item.icon"></i>
                        <span slot="title">{{item.name}}</span>
                    </template>
                    <router-link :to="item.path + '/' + subItem.path" v-for="(subItem,subIndex) in item.children" :key="subIndex.toString()">
                        <el-menu-item :index="(index + '-' + subIndex).toString()" v-if="!subItem.hidden">
                            <i :class="subItem.icon"></i>
                            <span slot="title">{{subItem.name}}</span>
                        </el-menu-item>
                    </router-link>
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>
<script>
    import {routes} from '../router';

    export default {
        data() {
            return {
                menuList: []
            }
        },
        mounted() {
            let menuList = routes[0];
            this.menuList = menuList.children;
            console.log(this.menuList);
        }
    }
</script>
<style>
    .el-menu-vertical a{
        text-decoration: none;
    }
</style>