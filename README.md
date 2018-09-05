# vue-accordions
A accordion component for vue.js

## Installation
**Using npm**
``` bash
npm install vue-accordions --save
# or
cnpm install vue-accordions --save
```
## Usage
**In main.js**
``` js
import Vue from 'vue'
import accordion from 'vue-accordions'

Vue.use(accordion)

// new Vue({ // ... })
```

``` html
<accordion :data="imgList" @jump="jumpTo"/>
```

``` js
export default {
  data(){
    return {
      imgList: [
        {title: '' , src: ''},
        {title: '' , src: ''},
        //...
      ]
    }
  }
}
```


## Properties
| 属性 | 类型 | 说明 | 可选值 | 是否必需 |
| :----: | :----: | :----: | :----: | :----: |
| w | Number | 容器宽度 | 1200 (默认) | 否 |
| h | Number | 容器高度 | 266 (默认) | 否 |
| gap | Number | 折叠间隔 | 100 (默认) | 否 |
| data | Array of object | 展示的图片数据 | 实例默认使用的是演示数据 , 设置 data 属性以覆盖 | 是 |

**注：**
1. 在 `data` 属性中 （对象数组类型） ， 你必须为每个对象提供 `src` 属性 ，作为每张图片的地址。其他有用的数据，你可以视你所需去添加。

## Events
**@jump**
> 点击某张展示图片时触发句柄
``` html
<accordion @jump="jumpTo"/>
```

``` js
export default {
  data(){
    return {}
  },
  methods: {
    jumpTo(info){
      // `info` is the data of curr img which you setted the `data` prop , you can use this
      // do somethig when you click foo img
    }
  }
}
```

## Logs
> 2018/9/5
1. init package