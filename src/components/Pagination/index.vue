<template>
  <div class="pageContainer">
    <div class="fr page">
      <div class="sui-pagination clearfix pagination">
        <button
          :disabled="pageNo==1"
          class="prev disabled"
          @click="$emit('getPageNo',pageNo - 1)"
        >上一页</button>
        <button v-if="startNumAndEndNum.start>=2"  @click="$emit('getPageNo',1)">1</button>
        <button v-if="startNumAndEndNum.start>=3" class="dotted">···</button>
        <button
          v-for="page in  startNumAndEndNum.end"
          :key="page"
          v-show="page>=startNumAndEndNum.start"
          :class="{active:pageNo==page}"
          @click="$emit('getPageNo',page)"
        >{{page}}</button>
        <button v-if="startNumAndEndNum.end < totalPage - 1" class="dotted">···</button>
        <button v-if="startNumAndEndNum.end < totalPage"  @click="$emit('getPageNo',totalPage)" >{{ totalPage }}</button>
        <button
          :disabled="pageNo==totalPage"
          class="next"
          @click="$emit('getPageNo',pageNo + 1)"
        >下一页</button>
        <button style="margin-left: 30px">共 {{ total }} 条</button>
      </div>

    </div>
  </div>

</template>

<script>

export default {
  name: 'PaginationCom',
  props:['pageNo','pageSize','total','continues'],
  computed:{
    totalPage(){
      return Math.ceil(this.total/this.pageSize);
    },
    startNumAndEndNum(){
      let start = 0;
      let end = 0;
      let pageNo = this.pageNo
      if(this.continues > this.total){
        start = 1;
        end = this.totalPage;
      }else{
        //如果No小于分页容量
        if(this.pageNo < this.continues){
          start = 1;
          end = this.continues;
        }else if(this.totalPage - this.pageNo + 1 < this.continues){
          start = this.totalPage - this.continues + 1;
          end = this.totalPage;
        }else{
          start = this.pageNo - parseInt(this.continues/2);
          end = this.pageNo + parseInt(this.continues/2);
        }
      }
      return {start,pageNo,end}
    },
  }
}
</script>

<style lang="less" scoped>
.pageContainer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  .page {
    width: 733px;
    height: 66px;
    //overflow: hidden;

    .sui-pagination {
      margin: 18px 0;

      ul {
        margin-left: 0;
        margin-bottom: 0;
        vertical-align: middle;
        //width: 490px;
        //float: left;

        li {
          line-height: 18px;
          display: inline-block;

          a {
            position: relative;
            float: left;
            line-height: 18px;
            text-decoration: none;
            background-color: #fff;
            border: 1px solid #e0e9ee;
            margin-left: -1px;
            font-size: 14px;
            padding: 9px 18px;
            color: #333;
          }

          &.active {
            a {
              background-color: #fff;
              color: #e1251b;
              border-color: #fff;
              cursor: default;
            }
          }

          &.prev {
            a {
              background-color: #fafafa;
            }
          }

          &.disabled {
            a {
              color: #999;
              cursor: default;
            }
          }

          &.dotted {
            span {
              margin-left: -1px;
              position: relative;
              float: left;
              line-height: 18px;
              text-decoration: none;
              background-color: #fff;
              font-size: 14px;
              border: 0;
              padding: 9px 18px;
              color: #333;
            }
          }

          &.next {
            a {
              background-color: #fafafa;
            }
          }
        }
      }

      div {
        color: #333;
        font-size: 14px;
        float: right;
        width: 241px;
      }
    }
  }
  .pagination {
    text-align: center;
    button {
      margin: 0 5px;
      background-color: #f4f4f5;
      color: #606266;
      outline: none;
      border-radius: 2px;
      padding: 0 4px;
      vertical-align: top;
      display: inline-block;
      font-size: 13px;
      min-width: 35.5px;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      border: 0;

      &[disabled] {
        color: #c0c4cc;
        cursor: not-allowed;
      }

      &.active {
        cursor: not-allowed;
        background-color: #409eff;
        color: #fff;
      }
    }
  }
}

</style>
