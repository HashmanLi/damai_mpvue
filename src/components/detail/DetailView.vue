<template>
<div class="wrapper1">
   <div class="view" v-if="isLoaded">       <!-- v-if 与 v-show -->
       <div class="show">
           <!-- background-image: url('https://pimg.dmcdn.cn/perform/project/1482/148269_n.jpg?_t=1525767115952?1531855707719'); background-color: rgb(231, 231, 231); -->
          
			<div style= "overflow:hidden">
				<div class="blur_bg" :style="blurStyle">
			</div>
           </div>
            <div class="float">
                <img  :src="showData.project_basic_info.project_pic" alt="" class="img">
                <div class="main">
                        <p class="title">{{showData.project_basic_info.project_name}}</p>
                        <p class="city">{{showData.project_basic_info.city_name}}</p>
                        <p class="price">
                            <span>{{formatYuan}}</span>元
                        </p>
                </div>
            </div>
           <div class="below">
           </div>
       </div>
       <div class="top_info">
           <div class="support_ways">
               <ul>
                   <li v-for="(item, index) in support_ways" :key="index"><i>&#xe62b;</i>{{item}}
                   </li>
               </ul>
           </div>
           <div class="time">{{showData.project_basic_info.show_time}}<i>&#xe631;</i></div>
           <div class="location">
               <span>{{showData.venue.venue_name}}</span>
               <div class="map"></div>
           </div>
       </div>
       <div class="intro">
           <div class="head">介绍</div>
           <div class="main">{{showData.project_summary.description}}</div>
           <div class="more">更多图文详情<i>&#xe631;</i></div>
       </div>
       <div class="need_to_konw">
           <div class="head">购票须知</div>
           <div class="main">
               <ul>
                   <li v-for="(item, index) in showData.ticket_notes" :key="index">
                       <span class="label">{{item.name}}</span>
                       <span class="describe">{{item.description}}</span>
                   </li>
               </ul>
           </div>
           <div class="more">更多购票须知<i>&#xe631;</i></div>
       </div>
   </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            isLoaded: false,
            showData: {},
            blurStyle: {
                backgroundImage: "",
                backgroundColor: "rgb(231, 231, 231)",
                backgroundPosition: "center"
            },
            support_ways: ["快递", "蚂蚁花呗", "电子钱包", "超级票"]
        }
    },
    computed: {
        formatYuan() {
            if (Object.keys(this.showData).length != 0) {
                let str = this.showData.project_basic_info.price_range
                return str.substr(0, str.length - 1)
            }
        }
    },
    methods: {
        getData() {
            wx.showLoading({
                title: "加载中..."
            })
            wx.request({
                url: `https://damaimaitian.oss-cn-beijing.aliyuncs.com/v1/proj/${this
                    .$root.$mp.query.id || 156985}`,
                success: res => {
                    this.isLoaded = true
                    this.showData = res.data
                    wx.hideLoading()
                }
            })
        }
    },
    mounted() {
        // let id = this.$route.query.id
        // indexModel.getDetailFromId(id).then(res => {
        //     this.showData = res.data
        //     this.blurStyle.backgroundImage = `url(${res.data.project_basic_info
        //         .project_pic || ""})`
        //     this.isLoaded = true
        //     Indicator.close()
        //     setTimeout(() => {
        //         // console.log(1)
        //         new BScroll(this.$refs.wrapper)
        //     }, 20)
        // })
    }
}
</script>

<style lang="scss" scoped>
/* rem => *200rpx */
.wrapper1 {
    height: 100%;
    width: 100%;
    overflow: hidden;
    background: #eee;
    .view {
        width: 100%;
        .show {
            height: 380rpx;
            width: 100%;
            display: flex;
            flex-direction: column;
            position: relative;
            .blur_bg {
                height: 1.42 * 200rpx;
                width: 100%;
                filter: saturate(1) brightness(1) blur(0.1 * 200rpx)
                    contrast(0.8);
            }
            .float {
                height: 1.42 * 200rpx;
                display: flex;
                flex-direction: row;
                width: 95%;
                position: absolute;
                top: 0.3 * 200rpx;
                left: 0.12 * 200rpx;
                color: #fff;
                // z-index: 1;
                .img {
                    width: 210rpx;
                    height: 282rpx;
                    /* 340 458 */
                }
                .main {
                    padding-left: 0.12 * 200rpx;
                    width: 2.3 * 200rpx;
                    .title {
                        margin-bottom: 0.09 * 200rpx;
                    }
                    .price {
                        font-size: 0.12 * 200rpx;
                        margin-top: 0.45 * 200rpx;
                        color: #999;
                        font-weight: 800;
                        font-family: Yahei;
                        position: absolute;
                        bottom: -0.04 * 200rpx;
                        span {
                            font-size: 0.2 * 200rpx;
                            color: #ff1268;
                            margin-right: 0.05 * 200rpx;
                        }
                    }
                }
            }
            .below {
                flex: 1;
                background: #fff;
            }
        }
        .top_info {
            background: #fff;
            color: #666;
            .support_ways,
            .time,
            .location {
                border-top: 1px solid #eee;
                padding-left: 0.12 * 200rpx;
                font-size: 15px;
            }
            .support_ways {
                height: 0.45 * 200rpx;
                background: rgb(248, 248, 248);
                ul {
                    display: flex;
                    flex-direction: row;
                    height: 0.45 * 200rpx;
                    align-items: center;
                    li {
                        margin-right: 0.14 * 200rpx;
                        color: #999;
                        font-size: 0.12 * 200rpx;
                        i {
                            font-family: "iconfont";
                            margin-right: 0.04 * 200rpx;
                            color: #ff1268;
                            display: inline-block;
                        }
                    }
                }
            }
            .time {
                height: 0.43 * 200rpx;
                line-height: 0.43 * 200rpx;
                i {
                    font-family: "iconfont";
                    // font-size: 0.12 * 200rpx;
                    float: right;
                    padding-right: 0.1 * 200rpx;
                }
            }
            .location {
                height: 0.51 * 200rpx;
                display: flex;
                align-items: center;
                flex-direction: row;
                position: relative;
                .map {
                    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAC+lBMVEUAAAD39Pf49/j///H58+389/f99vn9/fr////z8/Pz8/P////z8/Py6fLz8/P09PTy8vLz8/Px6vPu59z////x6fH4+Pjz7/Pr4tn////z8/Px6fH+6s/////z8/P////////x6fHy8PL06vT09PT09PTy6fLy8vL////y8vLm6u7y6fLz8/Pj5Oj19fXk2c7////i6e7W1tby8vLz8/Pj6e7g4OD////////s5ezj6u/////z6fP////96c7////y6PL////i4uL96M3x6fH////+6c7p6en/687////////75Mb////96M796c796c3+6s3////Y2Nn96c723bz76M/86c3tyZ/////R1dH86s786c7i6u7k29v////c1tzk6u796c/04Mjy8vL////86M3x6PHi6e0iIiL96c7z6fLj6u7x6fP09PT+/f3s7O3m5ub4+Pjh4uLv7+/b29vY2dnt7u7x8fHi6/DZ2trX19f54sP29vbk5OTr6+vo6Oji6e7X2Nj6+vrq4+rU1NTg5+vc3N3z6vTf39/Y19n858v12rjy6vXd5eng4ODa2Nr+6s/w5/Dq6urb5Ofd3t7d2d3O19vk6/DU1tbc0s302LXt0LPz1rItLS7s5Ozw5evw5Onn4efW3+LR29/R09L65Mb44L/y07D8/Pzy5+7u5u7V29zi3tb75snt1sjz4MXSzMXt0r/03L3t0bmgo6Rub2/v4uXj4+Pf4ODf2d/K1trX1Nfu2M3Ozsru2Lvtzq8+Pj7k3eTh2+Hq3t/n2trg1tTTzsr24sjx2rymp6rvzqdpYlk4ODk4NjTh5OPh4Nvv3tvZ1NnJ1Njj3NDP0c3m2svXzsjn2MPj07323bzs17zo1bzuzqyamZp3eHlDQ0Ph5ebs4eXY4OTe1t/P2dzK0tXu2tPu2b7WzL7HuKSwo5KGe25cVk9ZVE1LS0xVUErx6vbZ4eTW3d/i4t3Xz9fg1cXcy7Ktqq6yqKiooabjx6SNjY1/goRlaGkgViiKAAAAY3RSTlMAMywFHxIOCwLt6lJS5tfFt5FSEwbvf3osH/n08O/k17e3oZF1dHT07N/f1tLKhh/5+fTz7+zr5eLV0sjGoZGQhoSEhIJ0UVAzFPT08+rl5eLf39nZ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);
                    background-size: contain;
                    width: 0.25 * 200rpx;
                    height: 0.25 * 200rpx;
                    position: absolute;
                    right: 0.1 * 200rpx;
                }
            }
        }
        .intro {
            background: #fff;
            // @include border(1px 0 1px 0);
            border: 1px 0 1px 0 solid #eee;
            margin: 0.1 * 200rpx 0 0.1 * 200rpx 0;
            .head {
                height: 0.5 * 200rpx;
                padding: 0 0.12 * 200rpx 0 0.12 * 200rpx;
                line-height: 0.5 * 200rpx;
                font-weight: 800;
            }
            .main {
                // height: .32*200rpx;
                padding: 0 0.12 * 200rpx 0.15 * 200rpx 0.12 * 200rpx;
                font-size: 0.13 * 200rpx;
                line-height: 0.19 * 200rpx;
                color: #666;
                border-bottom: 1px solid #eee;
            }
            .more {
                height: 0.45 * 200rpx;
                color: #ff1268;
                line-height: 0.45 * 200rpx;
                text-align: center;
                font-size: 0.12 * 200rpx;
                i {
                    font-family: "iconfont";
                    display: inline-block;
                }
            }
        }
        .need_to_konw {
            @extend .intro;
            .head {
                @extend .head;
            }
            .main {
                ul {
                    li {
                        display: flex;
                        flex-direction: row;
                        margin-bottom: 0.09 * 200rpx;
                        .label {
                            margin-right: 0.16 * 200rpx;
                            width: 0.52 * 200rpx;
                        }
                        .describe {
                            flex: 1;
                        }
                    }
                }
            }
            .more {
                @extend .more;
            }
        }
    }
}
</style>