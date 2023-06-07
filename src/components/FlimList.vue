<template>
  <div class="list scroll" :style="{ height: height + 'px' }">
    <Loading v-if="loading"></Loading>
    <div>
      <div
        class="item"
        v-for="(item, index) in data"
        :key="index"
        @click="goDetail(item.filmId)"
      >
        <div class="left">
          <!-- 冒号 ： 表示动态属性 -->
          <img v-lazy="item.poster" />
        </div>
        <div class="middle">
          <div>{{ item.name }}</div>
          <div v-if="type == 1">
            <span>观众评分 </span>
            <span class="grade">{{ item.grade }}</span>
          </div>
          <!-- parseAvtors 是过滤器 方法名 -->
          <div>主演：{{ item.actors | parseAvtors }}</div>
          <div>{{ item.nation }} | {{ item.runtime }}分钟</div>
        </div>
        <div class="right">
          <span v-if="type == 1">购票</span>
          <span v-else>预购</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { nowPlayingListData, comingSoonListData } from "@/api/api";
import BScroll from "better-scroll";
import Loading from "@/components/Loading.vue";
export default {
  data() {
    return {
      loading: true,
      height: 0,
      bs: null,
      pageNum: 1,
      flag: true, //控制 是否继续 下滑。加载更多
    };
  },
  mounted() {
    this.height = document.documentElement.clientHeight - 100;
  },
  updated(){
     this.bs = new BScroll(".scroll", {
      pullUpLoad: true,
      pullDownRefresh: true,
      click: true,
    });
    this.bs.on("pullingUp", () => {
      this.getData();
      this.bs.finishPullUp();
    });
    this.bs.on("pullingDown", () => {
      this.getData();
      this.bs.finishPullDown();
    });
  },
  methods: {
    getData: async function () {
      if (this.flag) {
        this.pageNum++;
        if (this.type == 1) {
          var ret = await nowPlayingListData(this.pageNum);
        } else {
          var ret = await comingSoonListData(this.pageNum);
        }
        //如果请求的数据数量 小于< 10 ，就停止发送请求
        if (ret.data.data.film.length < 10) {
          this.flag = false;
        }
        this.data = this.data.concat(ret.data.data.films)
      }
    },

    goDetail: function (filmId) {
      this.$router.push({ name: "detail", params: { filmId } });
    },
  },
  props: ["list", "type"],
  components: {
    Loading,
  },
  created() {
    this.data = this.list;
    //判断是否获取到数据，获取到 去除 loading组件
    if (this.data.length > 0) {
      this.loading = false;
    } else {
      this.loading = true;
    }
  },
  // 过滤器 过滤 actors 中的 name
  filters: {
    parseAvtors: function (value) {
      let actors = "";
      value.forEach((element) => {
        actors += element.name + " ";
      });
      return actors;
    },
  },
};
</script>

<style lang="scss" scoped>
.scroll {
  overflow: hidden;
}

.list {
  margin-bottom: 50px;

  .item {
    margin-top: 15px;
    padding-bottom: 15px;
    display: flex;
    color: #797d82;
    font-size: 13px;
    border-bottom: 1px solid #ededed;

    .left {
      width: 77px;
      height: 100px;
      margin-left: 20px;
      img {
        width: 66px;
        height: 100%;
      }
    }

    .middle {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 55%;

      div:nth-of-type(1) {
        color: #191a1b;
        font-size: 16px;
      }

      div:nth-of-type(3) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .grade {
        color: #ffb232;
        font-size: 14px;
      }
    }

    .right {
      width: 15%;
      display: flex;
      align-items: center;
      margin-right: 20px;

      span {
        border: 1px solid #ff5f16;
        background: white;
        color: #ff5f16;
        border-radius: 2px;
        height: 25px;
        line-height: 25px;
        font-size: 13px;
        width: 50px;
        text-align: center;
      }
    }
  }
}
</style>