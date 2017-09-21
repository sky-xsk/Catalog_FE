<template>
    <div id="cart">
        <h1>前端开发大全</h1>
        <!--借用其他的接口写的一个小例子，主要体现的是axios的部分用法，没有细分组件！-->
         <ul>
             <li v-for="item in arrs" :key="item.number">
                 <ul>
                     <li v-for="items in item.pageC1" :key="items.number">
                        <h3 v-if="items.pageT2!=='我的链接'">{{items.pageT2}}</h3>
                        <ul class="xsk_areas">
                            <li v-for="itemss in items.pageC2" :key="itemss.number">
                                 <div class="imgs" v-if="itemss.Img"><img :src="itemss.Img"  width="100" heigth="100"></div>
                                 <div class="imgs" v-if="!itemss.Img" style="line-height:100px;">暂无图标</div>
                                <h4><a :href="itemss.Href" target="_blank">{{itemss.Name}}</a></h4>
                                <p>{{itemss.Title}}</p>
                            </li>
                        </ul>
                    </li>
                 </ul>
             </li>
        </ul>
    </div>
</template>

<script>
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
import shop from '../api/shop.js'
export default {
    data() {
        return {
            arrs:[],
        }   
    },
    computed: {
      
    },
    
    methods:{
        gets(){
            shop.List().then(res => {
                this.arrs = res;
                console.log(res)
             }, err => {
                console.log(err); 
            });
        }
    },
    mounted(){
       this.gets();
    },
    
}

</script>
<style lang="scss" scoped="scoped">
#cart{
    background: #eeeeee;
}
h1{font-size: 24px;text-align: center; background: #333; color: #fff; height: 50px; line-height: 50px;}
h3{font-size: 20px; text-align:center; border-bottom: 1px solid #339966; height: 40px; line-height: 40px; font-weight: bold; padding-bottom: 5px; }
.xsk_areas{ width: 100%; overflow: hidden;}
.xsk_areas>li{ float: left; width: 25%; text-align: center; margin-top: 30px; margin-bottom: 30px; height: 200px; box-sizing: border-box;}
.xsk_areas>li p{font-size: 14px; color: #666; line-height: 24px;  }
.imgs{text-align: center; border-radius:50%; width: 100px; height: 100px; overflow: hidden; margin: 0 auto; border: 2px solid #ccc; }
h4 a{font-weight: blod; font-size: 24px; color:#339966; display: block; margin-top: 20px;} 


</style>