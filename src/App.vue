<!--START 模板-->
<template>
  <section id="app">

    <!--START 公共头部-->
    <section id="header" :class="isCollapse?'isC':''">

      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">

        <el-menu-item index="1" v-model="isCollapse" @click="isCollapse=!isCollapse">点我</el-menu-item>

        <el-menu-item index="2">处理中心</el-menu-item>
        <el-submenu index="3">
          <template slot="title">我的工作台</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
          <el-menu-item index="3-3">选项3</el-menu-item>
          <el-submenu index="3-4">
            <template slot="title">选项4</template>
            <el-menu-item index="3-4-1">选项1</el-menu-item>
            <el-menu-item index="3-4-2">选项2</el-menu-item>
            <el-menu-item index="3-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="4" disabled>消息中心</el-menu-item>
        <el-menu-item index="5"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>

        <!--<el-menu-item index="5" @click="peeling">换肤</el-menu-item>-->
      </el-menu>

    </section>
    <!--END 公共头部-->


    <!--START 公共左侧边栏-->
    <section id="leftSider">

      <happy-scroll :class="['happy-scroll-1',isCollapse&&screenWidth>=700?'isC':'',isCollapse&&screenWidth<700?'isCS':'']" hide-horizontal resize color="transparent">

        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <span slot="title">分组一</span>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>

        </el-menu>

      </happy-scroll>

    </section>
    <!--END 公共左侧边栏-->


    <!--START 右侧路由盒子-->
    <section id="rightMainBox" :class="isCollapse?'isC':''">
      <router-view/>
    </section>
    <!--END 右侧路由盒子-->

  </section>
</template>
<!--END 模板-->



<!--START 样式-->
<style scoped>
  /*#app{background: #0000ff;}*/
</style>
<!--END 样式-->



<!--START 脚本-->
<script type="text/ecmascript-6">
  export default {
    name: 'App',
    data(){
      return {
        activeIndex: '1',
        isCollapse: false,
        screenWidth: document.body.clientWidth
      };
    },
    mounted() {
      const that = this;
      if(that.screenWidth<700){
        that.isCollapse=true;
      }
      window.onresize = () => {//监听屏幕大小的变化
        return (() => {
          window.screenWidth = document.body.clientWidth;
          that.screenWidth = window.screenWidth;
          if(that.screenWidth<700){
            that.isCollapse=true;
          }else{
            that.isCollapse=false;
          }
        })()
      }
    },
    methods:{
      handleSelect(key, keyPath){
        console.log(key, keyPath);
      },
      handleOpen(key, keyPath){
        console.log(key, keyPath);
      },
      handleClose(key, keyPath){
        console.log(key, keyPath);
      },
      peeling(){//换肤测试
        var link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = 'static/theme/theme-default.css';
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(link);
      }
    }
  };
</script>
<!--END 脚本-->
