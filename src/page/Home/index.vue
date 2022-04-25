<template>
  <div>
    <TypeNav></TypeNav>
    <listContainer></listContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import Brand from '@/page/Home/Brand'
import Floor from '@/page/Home/Floor'
import Like from '@/page/Home/Like'
import listContainer from '@/page/Home/ListContainer'
import Rank from '@/page/Home/Rank'
import Recommend from '@/page/Home/Recommend'
import TypeNav from '@/components/TypeNav'

export default {
  name: 'Home',
  components:{
    Brand,
    Floor,
    Like,
    listContainer,
    Rank,
    Recommend,
    TypeNav,
  }
}
</script>

<style scoped>

</style>
