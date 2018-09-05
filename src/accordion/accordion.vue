<template>
  <div class="accordion" :style="{width: w + 'px' , height: h + 'px'}">
    <ul>
      <li v-for="(v,i) in stylelist" :key="i" :style="v.style" @mousemove="move(i)" @click="go(v.data)"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "accordion",
  data(){
    return {
      stylelist: []
    }
  },
  props: {
    w : {
      type: Number,
      default: 1200
    },
    h : {
      type: Number,
      default: 266
    },
    gap: {  // 折叠间隔
      type: Number,
      default: 100
    },
    data: {
      type: Array,
      default: function(){
        return new Array(
          {title: '1' , src: "../images/1.jpg"},
          {title: '2' , src: "../images/2.jpg"},
          {title: '3' , src: "../images/3.jpg"},
          {title: '4' , src: "../images/4.jpg"},
          {title: '5' , src: "../images/5.jpg"}
        )
      }
    }
  },
  computed: {
    len: function(){
      return this.data.length
    },
    mainWidth: function(){  // 主图宽度
      var w = this.w,
          gap = this.gap;

      return w - gap * ( this.len -1 )
    },
    offset : function(){
      return this.mainWidth - this.gap;
    }
  },
  created(){
    //初始化 布局
    for (var i =0 ; i< this.len ; i++){
      var o = {
        style: {
          backgroundImage: "url(" + this.data[i].src +")",
          backgroundSize: "100% 100%",
          height: this.h + 'px',
          width: this.mainWidth + 'px',
        },
        data: this.data[i]
      }

      if(i==0){
        o.style.left = 0;
      }else{
        o.style.left = i* this.gap + this.offset + "px";
      }

      this.stylelist.push(o)
    }

  },
  methods: {
    move(curr){
      //重新计算样式
      //核心算法：
      // i <= curr 时 left = i * 100 + "px"
      // i > curr 时 left = i * 100 + 700 + "px";
      // `this.gap` 为 折叠间隔
      // `this.offset` 为 ( 主图宽度 - 折叠间隔 ) 
      
      for(var i=0; i < this.stylelist.length ; i++){
    
        if( i<= curr ){
          this.stylelist[i].style.transition = "left 1s";//利用css3过渡属性实现动画效果
          this.stylelist[i].style.left = i * this.gap + "px";
        }else{
          this.stylelist[i].style.transition = "left 1s";
          this.stylelist[i].style.left = i * this.gap + this.offset + "px";
        }
      }
    },
    go(info){
      this.$emit('jump' , info)
    }
  }
}
</script>

<style lang="scss" scoped>
  ul,li{
    margin :0;
    padding:0;
    list-style:none;
  }
  
  .accordion{
    border:1px solid #bbb;
    margin : 0px auto;
    position:relative;
    overflow:hidden;

    ul{
      li{
        position:absolute;
      }
    }
    
  }
  
</style>
