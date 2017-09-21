<template>
    <div id="app">
        <!--
        <ProductList></ProductList>
        --> 
        <Cart></Cart>
    </div>
</template>

<script>
import Cart from './components/Cart.vue';
//import ProductList from './components/ProductList.vue';
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
export default {
    data() {
        return {
            
        }   
    },
   
    components: {
        Cart,
       // ProductList
    },
}

</script>
<style lang="scss">

</style>