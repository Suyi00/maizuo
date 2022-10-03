<template>
  <div>
    <div class="detail">
      <div class="img">
        <img :src="film.poster" />
      </div>
      <div>
        <div>{{ film.name }}</div>
        <div>{{ film.category }}</div>
        <div>{{ film.premiereAt | parsePremiereAt }}上映</div>
        <div>{{ film.nation }} | {{ film.runtime }}分钟</div>
        <div>{{ film.synopsis }}</div>
      </div>

      <!-- <div>
        <Swiper :key="'actors_' + film.actors.length">
          <div
            v-for="(item, index) in film.actors"
            :key="index"
            class="swiper-slide"
          >
            <img v-lazy="item.avatarAddress" alt="" />
            <div>
              <span> {{ item.name }} </span>
              <p>{{ item.role }}</p>
            </div>
          </div>
        </Swiper>
      </div> -->
      <div class="actors">

        <div class="actors-title-bar">
           <p class="actors-title-btext">演职人员</p> 
        </div>
        <div class="row-scroll-wrapper actors-list"  style="height:140px;background: rgb(255,255,255);">
          <ul class="row-scroll-items-nav">
            <li v-for="(item ,index) in film.actors"  :key="index" class="row-scroll-item">
              <div class="actors-item" style="text-align: center;">
                <div class="lazy-img actors-img" style="width: 85px; height: 85px; background: rgb(249, 249, 249);">
                  <div class="padding" style="width: 85px; height: 85px; background: rgb(249, 249, 249);">
                    <img :src="item.avatarAddress" alt="img" width="64px">
                  </div>
                </div>
                <span class="actors-name">{{item.name}}</span>
                <span class="actors-role">{{item.role}}</span>
              </div>
            </li>
          </ul>
        </div>

      </div>

      <div class="photos">
        <div class="photos-title-bar">
          <span class="photos-title-text">剧照</span>
          <span class="photos-to-all" v-if="film.actors.length">全部（{{film.actors.length}}）
            <i class="iconfont icon-quanju_liebiaojiantou" style="font-size: 13px;"></i>
          </span>
        </div>

        <div class="row-scroll-wrapper photos-list" style="height:140px;background:rgb(255,255,255)">
          <ul class="row-scroll-items-nav">
            <li class="row-scroll-item photos-item-wrap" style="width: 150px; min-width: 150px;">
              <div class="photos-item">
                <div class="lazy-img photos-img" style="width: 150px; height: 100px; background: rgb(249, 249, 249);">
                  <div class="pading" 
                  style="width: 150px; height: 100px; background: rgb(249, 249, 249);" 
                  v-for="(item ,index) in film.actors" 
                  :key="index">
                    <img :src="item.avatarAddress" alt="img" width="64px">
                  </div>
              
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <a href="">
        <div>选座购票</div>
      </a>


    </div>
  </div>
</template>

<script>
import Swiper from "@/components/Swiper.vue";
import { moiveDetailDta } from "@/api/api";
//引入 moment 的时间包
import moment from "moment";
export default {
  data() {
    return {
      film: '',
      newdata: {
        films: {
          actors: [
            {
              avatarAddress:
                "https://pic.maizuo.com/usr/movie/b3f933009cae81f908037a9cfcf83fbb.jpg",
              name: "黄力加",
              role: "导演",
            },
            {
              avatarAddress:
                "https://pic.maizuo.com/usr/movie/6997a0a6bc57ef24d236923f755a9723.jpg",
              name: "李诚儒",
              role: "演员",
            },
            {
              avatarAddress:
                "https://pic.maizuo.com/usr/movie/c08970fe6008eb48e8142f03a4f634d5.jpg",
              name: "石文中",
              role: "演员",
            },
            {
              avatarAddress:
                "https://pic.maizuo.com/usr/movie/5633dc45c205911b9d866a07e193bbed.jpg",
              name: "黑妹",
              role: "演员",
            },
            {
              avatarAddress:
                "https://pic.maizuo.com/usr/movie/382fadfcd55f5b5b0c0ac7c751d5b2dc.jpg",
              name: "邓凯匀",
              role: "演员",
            },
          ],
          category: "剧情|历史",
          director: "黄力加",
          filmId: 6073,
          filmType: { name: "2D", value: 1 },
          isPresale: true,
          isSale: false,
          item: { name: "2D", type: 1 },
          language: "",
          name: "诗巫风云",
          nation: "中国大陆",
          poster:
            "https://pic.maizuo.com/usr/movie/a15dd891a48b52c70c517881afb18f81.jpg",
          premiereAt: 1663891200,
          runtime: 92,
          synopsis:
            "黄乃裳峥嵘半生重归故土，却遭人陷害被冠上令他深恶痛绝的罪名——破坏禁烟运动，众人皆知此案实则为袁世凯政府清除异己之私。海内外各界人士纷纷声援救助，看似已成定局的判决将如何能够扭转......",
          timeType: 3,
          videoId: "",
        },
        filmes: {
          actors: [
            {
              avatarAddress:
                "https://pic.maizuo.com/usr/movie/af46993a79d581185576526064e225b8.jpg",
              name: "张栾",
              role: "导演",
            },
            {
              avatarAddress:
                "https://pic.maizuo.com/usr/movie/7be380f850bafaf66e5133915ee63bc1.jpg",
              name: "马丽",
              role: "陆春丽",
            },
            {
              avatarAddress:
                "https://pic.maizuo.com/usr/movie/7473171dfa35d0fba57818ee1d43f22a.jpg",
              name: "常远",
              role: "小伍",
            },
            {
              avatarAddress:
                "https://pic.maizuo.com/usr/movie/164dd1b5511460986861db8726a6c817.jpg",
              name: "魏翔",
              role: "伍红旗",
            },
            {
              avatarAddress:
                "https://pic.maizuo.com/usr/movie/9db69a519c13e7d47a784834419c9422.jpg",
              name: "贾冰",
              role: "强哥",
            },
          ],
          filmId: 6082,
          director: "张栾",
          category: "喜剧|剧情",
          filmType: {
            name: "2D",
            value: 1,
          },
          grade: "7.9",
          isPresale: true,
          isSale: false,
          item: {
            name: "2D",
            type: 1,
          },
          language: "",
          name: "哥，你好",
          nation: "中国大陆",
          poster:
            "https://pic.maizuo.com/usr/movie/f85b53cad68c6c0c2cba934107f2199e.jpg",
          premiereAt: 1662681600,
          runtime: 111,
          synopsis:
            "马丽常远魏翔金牌喜剧阵容联手中秋送欢乐！与父亲老伍（魏翔 饰）终年不合的小伍（常远 饰）阴差阳错回到80年代，意外搅黄了父亲与母亲大陆（马丽 饰）的初次相遇。为了纠正这个错误，他想尽办法一次次重返过去，鼓励老妈追老爸，让人啼笑皆非的闹剧不断上演。父母相遇相恋的命运，是否会因为小伍的干预而转变？尘封在父亲心里的秘密，又将如何慢慢揭开……",
          timeType: 3,
          videoId: "",
        },
      },
    };
  },
  mounted() {
    this.film =this.newdata.films;
    console.log(this.film);
  },
  filters: {
    parsePremiereAt: function (value) {
      //value 也就是 film.premiereAt 的单位是秒，而js是毫秒
      return moment(value * 1000).format("YYYY-MM-DD");
    },
  },
  components: {
    Swiper,
  },
  created (){
    this.eventBus.$emit('footernav',false);
    // if( this.film.actors.length>0 ) {
      
    // } 

  },
  beforeDestroy (){
    this.eventBus.$emit('footernav',true)
  }
};
</script>

<style lang="scss" scoped>
.detail {
  .photos{
    .row-scroll-wrapper{
      overflow-x: auto;
      overflow-y: hidden;
      height: 100PX;
    }
    .photos-title-bar{
      span{
        height: 22.5px;
        line-height: 22px;
        display: inline-block;
      }
      .photos-title-text{
        font-size: 16px;
        text-align: left;
        color: #191a1b;
      }
      .photos-to-all{
        font-size: 13px;
        color: #797d82;
        float: right;
      }
      height: 62px;
      widows: 100%;
      padding: 15px;
    }
    margin-top:10px;
    margin-bottom: 60px;
    background-color: #fff;
  }
  .actors {
    margin-top: 10px;
    background-color: #fff;

    .row-scroll-wrapper{
      .row-scroll-items-nav{
        .row-scroll-item{
          .photos-item{
            .lazy-img{
              .lazy-img-wrap{
                img{
                  left: 0;
                }
                .target-img{
                  width: 100%;
                  position: absolute;
                  top: 50%;
                }
              }
              .padding{
                display: flex;
                justify-content: center;
                align-items: center;
                -webkit-box-pack: center;
                -webkit-box-align: center;
              }
              position: relative;
            }
          }
          position: relative;
          margin-right: 10px;
          width: auto!important;
          cursor: pointer;
          display: block;
          float: left;
          width: 105px;
        }
        display: flex;
        justify-content: flex-start;
        position: relative;
        width: 100%;
        margin: 0;
        padding-left: 15px;
        list-style: none;
      }
      overflow-x: auto;
      overflow-y: hidden;
      height: 150px;

      .row-scroll-items-nav{
        .row-scroll-item{
          .actors-item{
            .actors-role{
              display: block;
              font-size: 10px;
              color: #797d82;
            }
            .actors-name{
              display: block;
              text-align: center;
              padding-top: 10px;
              font-size: 12px;
              color: #191a1b;
              width: 85px;
              height: 18px;
              display: block;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
          position: relative;
          margin-right: 10px;
          cursor: pointer;
          display: block;
          float: left;
        }
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        justify-content: flex-start;
        position: relative;
        width: 100%;
        margin: 0;
        padding-left: 15px;
        list-style: none;

        float: left;
        width: 105px;
      }
    }

    .actors-title-bar{
      width: 100%;
      padding: 15px;

      .actors-title-text {
        font-size: 16px;
        text-align: left;
        color: #191a1b;
        display: inline-block;
        height: 22.5px;
        line-height: 22px;
      }
    }
  
  }


  .img {
    width: 100%;
    height: 260px;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .swiper-slide {
    display: flex;
    img {
      width: 80px;
    }
  }
}
</style>