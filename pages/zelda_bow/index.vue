<template>
    <div class="container">
        <div class="box home">
            <div class="box mainMenu">
                <p class="text">どのデータをロードしますか？</p>
                <ul class="list mainMenu">
                    <li
                        v-for="(menuItem, index) in zeldaMainMenuList"
                        :key="menuItem.date"
                        :class="{ active: isListActive(index) }"
                        @mouseover="onListMouseover(index)"
                        @click.stop="onClickList(menuItem)"
                    >
                        <p v-if="isListActive(index)" class="pic active top"></p>
                        <p v-if="isListActive(index)" class="pic active bottom"></p>
                        <div class="wrap">
                            <p class="image"><img :src="menuItem.image" /></p>
                            <div class="box detail">
                                <p class="text date">{{ menuItem.date }}</p>
                                <p class="title">{{ menuItem.title }}</p>
                                <p v-if="menuItem.isAutoSave" class="text autoSave">オートセーブ</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class ZeldaBOWHome extends Vue {
    zeldaMainMenuActiveNumber = 0
    zeldaMainMenuList = [
        {
            date: '2021/06/14 20:39',
            title: 'ハイラル城 - アイテム獲得',
            image: require('~/assets/images/pic_zelda_bow_main_menu_1.jpg'),
            path: '/zelda_bow/item',
            isAutoSave: true
        },
        {
            date: '2021/05/24 15:39',
            title: 'ハイラル城',
            image: require('~/assets/images/pic_zelda_bow_main_menu_2.jpg'),
            path: '/zelda_bow/item',
            isAutoSave: true
        },
        {
            date: '2021/04/10 10:39',
            title: 'ハイラル城',
            image: require('~/assets/images/pic_zelda_bow_main_menu_3.jpg'),
            path: '/zelda_bow/item',
            isAutoSave: false
        },
        {
            date: '2021/03/22 10:39',
            title: 'ハイラル城',
            image: require('~/assets/images/pic_zelda_bow_main_menu_4.jpg'),
            path: '/zelda_bow/item',
            isAutoSave: true
        },
        {
            date: '2021/02/10 10:39',
            title: 'ハイラル城',
            image: require('~/assets/images/pic_zelda_bow_main_menu_1.jpg'),
            path: '/zelda_bow/item',
            isAutoSave: false
        }
    ]

    isListActive(index): boolean {
        return index === this.zeldaMainMenuActiveNumber
    }

    onListMouseover(index: number) {
        this.zeldaMainMenuActiveNumber = index
    }

    onClickList(menuItem) {
        this.$router.push(menuItem.path)
    }
}
</script>
<!-- eslint-disable -->
<style scoped lang="scss">
.box.home {
    display: flex;
    justify-content: center;
    min-height: 100vh;
    background: url("~assets/images/bg_zelda_bow_home.jpg") no-repeat;
    background-size: cover;
    background-position: center top;
    &::before {
        z-index: 0;
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,0.5);
    }

    .box.mainMenu {
        position: relative;
        padding-top: 83px;
        z-index: 1;
        & > .text {
            color: #dee5d5;
            font-size: 20px;
            text-align: center;
        }
    }
    .list.mainMenu {
        width: 483px;
        margin-top: 25px;
        & > li {
            position: relative;
            display: block;
            height: 84px;
            padding: 2px;
            margin-bottom: 5px;
            border-radius: 4px;
            background: rgba(0,0,0,0.5);
            cursor: pointer;
            & > .wrap {
                position: relative;
                display: flex;
                height: 78px;
                padding: 2px;
                border: rgba(255,255,255,0.1) 1px solid;
                border-radius: 4px;
                .image {
                    position: relative;
                    width: 174px;
                    height: 78px;
                    &::before {
                        content: "";
                        display: block;
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        background: rgba(0,0,0,0.4);
                    }
                }
                .detail {
                    padding-left: 8px;
                    .text,
                    .title {
                        color: #f8f6df;
                    }
                    .text.date {
                        margin-top: 6px;
                        font-size: 13px;
                    }
                    .title {
                        margin-top: 2px;
                        font-size: 16px;
                    }
                    .text.autoSave {
                        position: absolute;
                        bottom: 2px;
                        right: 2px;
                        width: 94px;
                        height: 18px;
                        background: #2e3231;
                        color: #bcbdad;
                        font-size: 13px;
                        font-weight: bold;
                        line-height: 18px;
                        text-align: center;
                        &::before {
                            content: "";
                            position: absolute;
                            top: 0;
                            left: -6px;
                            display: block;
                            width: 0;
                            height: 0;
                            border-style: solid;
                            border-width: 0 1px 18px 6px;
                            border-color: transparent transparent #2e3231 transparent;
                        }
                    }
                }
            }

            &.active {
                box-shadow: 1px 1px 24px 1px rgba(255, 255, 232, 0.3);
                animation: item-active-box-shadow 1.5s infinite;
                & > .wrap .image::before {
                    display: none;
                }
                & > .pic.active {
                    position: absolute;
                    width: 100%;
                    &::before,
                    &::after {
                        content: "";
                        display: block;
                        position: absolute;
                        width: 0;
                        height: 0;
                        border-style: solid;
                        z-index: 2;
                    }
                    &::before {
                        left: 2px;
                    }
                    &::after {
                        right: 2px;
                    }
                    &.top {
                        top: 2px;
                        left: 0;
                        &::before {
                            border-width: 10px 10px 0 0;
                            border-color: #ffffe8 transparent transparent transparent;
                            animation: item-active-left-top 0.5s infinite;
                        }
                        &::after {
                            border-width: 0 10px 10px 0;
                            border-color: transparent #ffffe8 transparent transparent;
                            animation: item-active-right-top 0.5s infinite;
                        }
                    }
                    &.bottom {
                        bottom: 12px;
                        left: 0;
                        &::before {
                            border-width: 10px 0 0 10px;
                            border-color: transparent transparent transparent #ffffe8;
                            animation: item-active-left-bottom 0.5s infinite;
                        }
                        &::after {
                            border-width: 0 0 10px 10px;
                            border-color: transparent transparent #ffffe8 transparent;
                            animation: item-active-right-bottom 0.5s infinite;
                        }
                    }
                }
                & > .wrap {
                    border-color: #ffffe8;
                }
            }
        }
    }
}
@keyframes item-active-box-shadow {
    0% {
        box-shadow: 1px 1px 24px 1px rgba(255, 255, 232, 0.3);
    }
    50% {
        box-shadow: 4px 1px 24px 1px rgba(255, 255, 232, 0.4);
    }
    100% {
        box-shadow: 1px 1px 24px 1px rgba(255, 255, 232, 0.3);
    }
}
@keyframes item-active-left-top {
    0% {
        transform: translate3d(0, 0, 0);
    }
    50% {
        transform: translate3d(-3px, -3px, 0);
    }
    100% {
        transform: translate3d(0, 0, 0);
    }
}
@keyframes item-active-right-top {
    0% {
        transform: translate3d(0, 0, 0);
    }
    50% {
        transform: translate3d(3px, -3px, 0);
    }
    100% {
        transform: translate3d(0, 0, 0);
    }
}
@keyframes item-active-left-bottom {
    0% {
        transform: translate3d(0, 0, 0);
    }
    50% {
        transform: translate3d(-3px, 3px, 0);
    }
    100% {
        transform: translate3d(0, 0, 0);
    }
}
@keyframes item-active-right-bottom {
    0% {
        transform: translate3d(0, 0, 0);
    }
    50% {
        transform: translate3d(3px, 3px, 0);
    }
    100% {
        transform: translate3d(0, 0, 0);
    }
}
</style>
