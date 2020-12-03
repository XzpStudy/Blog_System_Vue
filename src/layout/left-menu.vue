<template>
    <div>
        <el-menu
                default-active="1-1"
                class="el-menu-vertical-demo">
            <!--遍历菜单内容-->
            <!--有俩种菜单，第一种没有子菜单的，第二种有子菜单的-->
            <template v-for="(item,index) in menuList">
                <el-menu-item index="1" v-if="!item.children" :key="index">
                    <i :class="item.icon"></i>
                    <span slot="title">{{item.name}}</span>
                </el-menu-item>
                <el-submenu v-else index="2" :key="index">
                    <template slot="title">
                        <i :class="item.icon"></i>
                        <span slot="title">{{item.name}}</span>
                    </template>
                </el-submenu>
            </template>

            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>运营</span>
                </template>
                <el-menu-item index="2-1">
                    <i class="el-icon-menu"></i>
                    <span slot="title">子导航一</span>
                </el-menu-item>
                <el-menu-item index="2-2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">子导航二</span>
                </el-menu-item>
                <el-menu-item index="2-3">
                    <i class="el-icon-menu"></i>
                    <span slot="title">子导航三</span>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>用户</span>
                </template>
                <el-menu-item index="3-1">
                    <i class="el-icon-menu"></i>
                    <span slot="title">子导航一</span>
                </el-menu-item>
                <el-menu-item index="3-2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">子导航二</span>
                </el-menu-item>
                <el-menu-item index="3-3">
                    <i class="el-icon-menu"></i>
                    <span slot="title">子导航三</span>
                </el-menu-item>
            </el-submenu>
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
<style></style>