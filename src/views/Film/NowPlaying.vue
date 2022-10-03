<template>
  <div >
    <!-- key 要唯一，计算机的识别码 为了解决渲染问题 -->
    <FilmList :list="list" :type="type" :key="'film' + list.length" ></FilmList>
  </div>
</template>

<script>
//导入正在热映 的请求方法
import { nowPlayingListData } from "@/api/api";
import FilmList from "@/components/FlimList.vue"

export default {
  data() {
    return {
      pageNum: 1,
      list: [],
      type: 1 ,
      pageSize:10,
      newdata: {
        films: [
          {
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
           {
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
            director: "张栾2",
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
            name: "哥，你好2",
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
         {
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
            name: "哥，你好3",
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
           {
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
            director: "张栾2",
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
            name: "哥，你好4",
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
          {
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
            name: "哥，你好5",
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
           {
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
            director: "张栾6",
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
            name: "哥，你好6",
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
          {
            actors: [
              {
                avatarAddress:
                  "https://pic.maizuo.com/usr/movie/af46993a79d581185576526064e225b8.jpg",
                name: "张栾7",
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
            director: "张栾7",
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
            name: "哥，你好7",
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
           {
            actors: [
              {
                avatarAddress:
                  "https://pic.maizuo.com/usr/movie/af46993a79d581185576526064e225b8.jpg",
                name: "张栾8",
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
            name: "哥，你好8",
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
         {
            actors: [
              {
                avatarAddress:
                  "https://pic.maizuo.com/usr/movie/af46993a79d581185576526064e225b8.jpg",
                name: "张栾9",
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
            name: "哥，你好9",
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
           {
            actors: [
              {
                avatarAddress:
                  "https://pic.maizuo.com/usr/movie/af46993a79d581185576526064e225b8.jpg",
                name: "张栾10",
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
            name: "哥，你好10",
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
          {
            actors: [
              {
                avatarAddress:
                  "https://pic.maizuo.com/usr/movie/af46993a79d581185576526064e225b8.jpg",
                name: "张栾11",
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
            name: "哥，你好11",
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
           {
            actors: [
              {
                avatarAddress:
                  "https://pic.maizuo.com/usr/movie/af46993a79d581185576526064e225b8.jpg",
                name: "张栾12",
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
            director: "张栾6",
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
            name: "哥，你好12",
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

        ],
      },
    };
  },
  async mounted() {
    this.list = this.newdata.films
  },
  components:{
    FilmList
  }
};
</script>