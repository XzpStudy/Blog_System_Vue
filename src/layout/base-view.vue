<template>
    <div id="app">
        <el-container>
            <el-header id="admin-header-box">
                <top-header></top-header>
            </el-header>
            <el-container>
                <el-aside id="left-menu-list-box" width="200px">
                    <left-menu></left-menu>
                </el-aside>
                <el-container>
                    <el-main>
                        <div class="content">
                            <router-view></router-view>
                        </div>
                    </el-main>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>
<script>
    export default {
        mounted() {
            //动态设置侧边菜单的高度
            let leftMenuBox = document.getElementById('left-menu-list-box');
            let adminHeaderBox = document.getElementById('admin-header-box');
            let dy = window.innerHeight - adminHeaderBox.offsetHeight;
            console.log("dy ====> " + dy);
            if(leftMenuBox && adminHeaderBox){
                leftMenuBox.style.height = dy  + 'px';
            }
        }
    }
</script>
<style>
    .el-header{
        background-color: dodgerblue;
        line-height: 46px;
        height: 46px !important;
    }
    .el-aside {
        border-right: solid 1px #e6e6e6;
        line-height: 200px;
    }

    #left-menu-list-box .el-menu{
        border-right: none;
    }

    .el-main{
        padding: 3px;
    }

</style>