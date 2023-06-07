<template>
    <div>
        <FilmList :list="list" :type="type" :key="'film' + list.length"></FilmList>
    </div>
</template>

<script>
import FilmList from "@/components/FlimList.vue"
export default {
    data (){
        return{
            pageNum:1,
            list: [] ,
            type:2,
            newdata:{
                films:[
                    {
                        actors:[
                            {avatarAddress: "https://pic.maizuo.com/usr/movie/b3f933009cae81f908037a9cfcf83fbb.jpg",name: "黄力加",role: "导演"},
                            {avatarAddress: "https://pic.maizuo.com/usr/movie/6997a0a6bc57ef24d236923f755a9723.jpg",name: "李诚儒",role: "演员"},
                            {avatarAddress: "https://pic.maizuo.com/usr/movie/c08970fe6008eb48e8142f03a4f634d5.jpg",name: "石文中",role: "演员"},
                            {avatarAddress: "https://pic.maizuo.com/usr/movie/5633dc45c205911b9d866a07e193bbed.jpg",name: "黑妹",role: "演员"},
                            {avatarAddress: "https://pic.maizuo.com/usr/movie/382fadfcd55f5b5b0c0ac7c751d5b2dc.jpg",name: "邓凯匀",role: "演员"}
                        ],
                        category: "剧情|历史",
                        director: "黄力加",
                        filmId: 6073,
                        filmType: {name: "2D", value: 1},
                        isPresale: true,
                        isSale: false,
                        item: {name: "2D", type: 1},
                        language: "",
                        name: "诗巫风云",
                        nation: "中国大陆",
                        poster: "https://pic.maizuo.com/usr/movie/a15dd891a48b52c70c517881afb18f81.jpg",
                        premiereAt: 1663891200,
                        runtime: 92,
                        synopsis: "黄乃裳峥嵘半生重归故土，却遭人陷害被冠上令他深恶痛绝的罪名——破坏禁烟运动，众人皆知此案实则为袁世凯政府清除异己之私。海内外各界人士纷纷声援救助，看似已成定局的判决将如何能够扭转......",
                        timeType: 3,
                        videoId: ""
                    },
                    {
                        actors:[
                            {avatarAddress: "https://pic.maizuo.com/usr/movie/b3f933009cae81f908037a9cfcf83fbb.jpg",name: "黄力加",role: "导演"},
                            {avatarAddress: "https://pic.maizuo.com/usr/movie/6997a0a6bc57ef24d236923f755a9723.jpg",name: "李诚儒",role: "演员"},
                            {avatarAddress: "https://pic.maizuo.com/usr/movie/c08970fe6008eb48e8142f03a4f634d5.jpg",name: "石文中",role: "演员"},
                            {avatarAddress: "https://pic.maizuo.com/usr/movie/5633dc45c205911b9d866a07e193bbed.jpg",name: "黑妹",role: "演员"},
                            {avatarAddress: "https://pic.maizuo.com/usr/movie/382fadfcd55f5b5b0c0ac7c751d5b2dc.jpg",name: "邓凯匀",role: "演员"}
                        ],
                        category: "剧情|历史",
                        director: "黄力加",
                        filmId: 6073,
                        filmType: {name: "2D", value: 1},
                        isPresale: true,
                        isSale: false,
                        item: {name: "2D", type: 1},
                        language: "",
                        name: "诗巫风云2",
                        nation: "中国大陆",
                        poster: "https://pic.maizuo.com/usr/movie/a15dd891a48b52c70c517881afb18f81.jpg",
                        premiereAt: 1663891200,
                        runtime: 92,
                        synopsis: "黄乃裳峥嵘半生重归故土，却遭人陷害被冠上令他深恶痛绝的罪名——破坏禁烟运动，众人皆知此案实则为袁世凯政府清除异己之私。海内外各界人士纷纷声援救助，看似已成定局的判决将如何能够扭转......",
                        timeType: 3,
                        videoId: ""
                    },
                    {
                        actors:[
                            {avatarAddress: "https://pic.maizuo.com/usr/movie/b3f933009cae81f908037a9cfcf83fbb.jpg",name: "黄力加",role: "导演"},
                            {avatarAddress: "https://pic.maizuo.com/usr/movie/6997a0a6bc57ef24d236923f755a9723.jpg",name: "李诚儒",role: "演员"},
                            {avatarAddress: "https://pic.maizuo.com/usr/movie/c08970fe6008eb48e8142f03a4f634d5.jpg",name: "石文中",role: "演员"},
                            {avatarAddress: "https://pic.maizuo.com/usr/movie/5633dc45c205911b9d866a07e193bbed.jpg",name: "黑妹",role: "演员"},
                            {avatarAddress: "https://pic.maizuo.com/usr/movie/382fadfcd55f5b5b0c0ac7c751d5b2dc.jpg",name: "邓凯匀",role: "演员"}
                        ],
                        category: "剧情|历史",
                        director: "黄力加",
                        filmId: 6073,
                        filmType: {name: "2D", value: 1},
                        isPresale: true,
                        isSale: false,
                        item: {name: "2D", type: 1},
                        language: "",
                        name: "诗巫风云3",
                        nation: "中国大陆",
                        poster: "https://pic.maizuo.com/usr/movie/a15dd891a48b52c70c517881afb18f81.jpg",
                        premiereAt: 1663891200,
                        runtime: 92,
                        synopsis: "黄乃裳峥嵘半生重归故土，却遭人陷害被冠上令他深恶痛绝的罪名——破坏禁烟运动，众人皆知此案实则为袁世凯政府清除异己之私。海内外各界人士纷纷声援救助，看似已成定局的判决将如何能够扭转......",
                        timeType: 3,
                        videoId: ""
                    },
                    {
                        actors:[
                            {avatarAddress: "https://pic.maizuo.com/usr/movie/b3f933009cae81f908037a9cfcf83fbb.jpg",name: "黄力加",role: "导演"},
                            {avatarAddress: "https://pic.maizuo.com/usr/movie/6997a0a6bc57ef24d236923f755a9723.jpg",name: "李诚儒",role: "演员"},
                            {avatarAddress: "https://pic.maizuo.com/usr/movie/c08970fe6008eb48e8142f03a4f634d5.jpg",name: "石文中",role: "演员"},
                            {avatarAddress: "https://pic.maizuo.com/usr/movie/5633dc45c205911b9d866a07e193bbed.jpg",name: "黑妹",role: "演员"},
                            {avatarAddress: "https://pic.maizuo.com/usr/movie/382fadfcd55f5b5b0c0ac7c751d5b2dc.jpg",name: "邓凯匀",role: "演员"}
                        ],
                        category: "剧情|历史",
                        director: "黄力加",
                        filmId: 6073,
                        filmType: {name: "2D", value: 1},
                        isPresale: true,
                        isSale: false,
                        item: {name: "2D", type: 1},
                        language: "",
                        name: "诗巫风云4",
                        nation: "中国大陆",
                        poster: "https://pic.maizuo.com/usr/movie/a15dd891a48b52c70c517881afb18f81.jpg",
                        premiereAt: 1663891200,
                        runtime: 92,
                        synopsis: "黄乃裳峥嵘半生重归故土，却遭人陷害被冠上令他深恶痛绝的罪名——破坏禁烟运动，众人皆知此案实则为袁世凯政府清除异己之私。海内外各界人士纷纷声援救助，看似已成定局的判决将如何能够扭转......",
                        timeType: 3,
                        videoId: ""
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

                ],
            },
        }
    },
     mounted (){
        this.list = this.newdata.films;
        // console.log(this.list);
    },
     components:{
    FilmList
  }
}
</script>