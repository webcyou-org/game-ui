<template>
    <div class="container">
        <div class="box homeHeader">
            <ul class="list userList">
                <li>
                    <p class="image"><img src="~/assets/images/user/profile.jpg" alt="" /></p>
                </li>
            </ul>
            <div class="box right">
                <p class="text time">23:40</p>
                <p class="icon wifi"></p>
                <p class="icon battery"></p>
            </div>
        </div>
        <div class="box mainContents">
            <div class="wrap">
                <ul class="list homeMainMenuList">
                    <li
                        v-for="(menuItem, index) in mainMenuList"
                        :key="index"
                        :class="{ current: isListActive(index) }"
                        @mouseover="onListMouseover(index)"
                        @click.stop="onClickMainMenu(menuItem)"
                    >
                        <p class="title">
                            <span class="icon"></span>
                            <span class="name">{{ menuItem.title }}</span>
                        </p>
                        <p class="image"><img :src="menuItem.image" alt="" /></p>
                    </li>
                </ul>
                <ul class="list subMenuList">
                    <li>
                        <div class="box pic switchIcon">
                            <div class="pic controller">
                                <p class="pic left"></p>
                                <p class="pic right"></p>
                            </div>
                            <p class="text">ONLINE</p>
                        </div>
                    </li>
                    <li>
                        <div class="box pic switchMessage">
                            <p class="pic triangular"></p>
                        </div>
                    </li>
                    <li>
                        <div class="box pic switchBag">
                            <p class="pic bag"><span class="pic handle"></span></p>
                        </div>
                    </li>
                    <li>
                        <div class="box pic switchPhoto">
                            <p class="pic photo"><span></span></p>
                        </div>
                    </li>
                    <li>
                        <div class="box pic switchController">
                            <p class="pic singleController"><span></span></p>
                        </div>
                    </li>
                    <li>
                        <div class="box pic switchSetting">
                            <p class="pic switchSetting">
                                <span class="pic circle"></span><span class="pic line"></span
                                ><span class="pic line"></span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="box pic switchSleep">
                            <p class="pic switchSleep"><span></span></p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="box homeFooter">
            <p class="pic controller switch"><span class="leftBtn"></span><span class="rightBtn"></span></p>
            <ul class="list controllNavList">
                <li>
                    <p class="icon">✛</p>
                    <p class="text">オプション</p>
                </li>
                <li>
                    <p class="icon">Y</p>
                    <p class="text">ユーザー切替</p>
                </li>
                <li>
                    <p class="icon">X</p>
                    <p class="text">ソフトを終わる</p>
                </li>
                <li>
                    <p class="icon">A</p>
                    <p class="text">つづける</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Home extends Vue {
    mainMenuActiveNumber = 0
    mainMenuList = [
        {
            title: 'ゼルダの伝説 ブレス オブ ザ ワイルド',
            image: require('~/assets/images/pic_home_main_menu_1.jpg'),
            path: '/zelda_bow/'
        },
        {
            title: 'ゼルダの伝説 ブレス オブ ザ ワイルド',
            image: require('~/assets/images/pic_home_main_menu_1.jpg'),
            path: '/zelda_bow/'
        }
    ]

    isListActive(index): boolean {
        return index === this.mainMenuActiveNumber
    }

    onListMouseover(index: number) {
        this.mainMenuActiveNumber = index
    }

    onClickMainMenu(menuItem) {
        this.$router.push(menuItem.path)
    }
}
</script>

<!-- eslint-disable -->
<style scoped lang="scss">
@import "~assets/scss/base/mixin";

.container {
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: #ebebeb;
}
.box.homeHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 34px 30px 0;
    .list.userList {
        & > li {
            width: 60px;
            height: 60px;
            border-radius: 30px;
            background: #fff;
            cursor: pointer;
            .image {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 60px;
                height: 60px;
                & > img {
                    width: 54px;
                    border-radius: 100%;
                }
            }
        }
    }
    .box.right {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        & > .icon {
            margin-left: 24px;
        }
        .text.time {
            font-size: 20px;
            font-weight: bold;
            color: #333;
        }
        .icon.wifi {
            @include getWifi(16px);

            transform: translate(-25%);
            margin-bottom: -20px;
        }
        .icon.battery {
            position: relative;
            width: 33px;
            height: 20px;
            padding: 3px;
            border: 3px solid #333;
            &::before,
            &::after {
                content: "";
                display: block;
                position: absolute;
            }
            &::before {
                left: 2px;
                top: 2px;
                width: 23px;
                height: 10px;
                background: #333;
            }
            &::after {
                right: -6px;
                top: 4px;
                width: 3px;
                height: 6px;
                background: #333;
            }
        }
    }
}
.box.mainContents {
    display: flex;
    align-items: center;
    flex: 1 1 100%;
    padding: 0 0 0 66px;
    & > .wrap {
        width: 100%;
        padding-top: 5px;
    }
}
.list.homeMainMenuList {
    display: flex;
    & > li {
        position: relative;
        width: 272px;
        margin-left: -2px;
        border: 4px solid transparent;
        border-radius: 4px;
        cursor: pointer;
        .image {
            border: 4px solid transparent;
        }
        &.current {
            border-color: #3af0d9;
            box-shadow: 0 3px 5px 1px rgba(0, 0, 0, 0.2);
            animation: main-menu-item-active-border-color 1s infinite;
            .title {
                display: block;
            }
            .image {
                border: 4px solid #fff;
            }
        }
        .title {
            display: none;
            position: absolute;
            top: -40px;
            left: -40px;
            width: 500px;
            font-size: 28px;
            color: #00bed0;
        }
    }
}
.list.subMenuList {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    & > li {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 88px;
        height: 88px;
        margin: 0 11px;
        border-radius: 44px;
        background: #fff;
        box-shadow: 0 0 2px 1px #e4e4e4;
        cursor: pointer;
        &:first-child {
            background: #e70012;
        }
        .box.pic.switchIcon {
            .pic.controller {
                display: flex;
                justify-content: center;
                .pic.left,
                .pic.right {
                    position: relative;
                    width: 13px;
                    height: 29px;
                    &::before,
                    &::after {
                        content: "";
                        display: block;
                        position: absolute;
                        width: 6px;
                        height: 6px;
                        border-radius: 100%;
                    }
                }
                .pic.left {
                    margin-right: 2px;
                    border: #fffefd 2px solid;
                    border-top-left-radius: 7px;
                    border-bottom-left-radius: 7px;
                    background: #e7060e;
                    &::before {
                        top: 4px;
                        left: 2px;
                        background: #fffefd;
                    }
                }
                .pic.right {
                    margin-left: 2px;
                    border-top-right-radius: 7px;
                    border-bottom-right-radius: 7px;
                    background: #fffefd;
                    &::before {
                        top: 12px;
                        left: 3px;
                        background: #e7060e;
                    }
                }
            }
            .text {
                margin-top: 4px;
                color: #fffefd;
                font-size: 8px;
                font-weight: bold;
                text-align: center;
            }
        }
        .box.pic.switchMessage {
            position: relative;
            width: 42px;
            height: 35px;
            margin-top: -4px;
            border: 4px solid #ff3342;
            border-radius: 6px;
            &::before,
            &::after {
                content: "";
                display: block;
                position: absolute;
                border-bottom: 4px solid #ff3342;
            }
            &::before {
                top: 17px;
                width: 100%;
            }
            &::after {
                top: 22px;
                left: 2px;
                width: 14px;
            }
            .pic.triangular {
                position: absolute;
                top: 26px;
                left: 12px;
                width: 10px;
                height: 10px;
                border-right: 4px solid #ff3342;
                border-bottom: 4px solid #ff3342;
                background: #fff;
                transform: rotate(45deg);
            }
        }
        .box.pic.switchBag {
            margin-top: 4px;
            .pic.bag {
                position: relative;
                width: 42px;
                height: 28px;
                border-bottom: 4px solid #ffa300;
                box-shadow: -9px -16px 0 -12px #ffa300, 9px -16px 0 -12px #ffa300;
                &::before,
                &::after {
                    content: "";
                    display: block;
                    position: absolute;
                    top: -4px;
                    width: 4px;
                    height: 31px;
                    background: #ffa300;
                }
                &::before {
                    left: 0;
                    transform: rotate(4deg);
                }
                &::after {
                    right: 0;
                    transform: rotate(-4deg);
                }
                .pic.handle {
                    display: block;
                    position: absolute;
                    top: -12px;
                    left: 12px;
                    width: 18px;
                    height: 18px;
                    border: 4px solid #ffa300;
                    border-bottom: none;
                    border-top-left-radius: 6px;
                    border-top-right-radius: 6px;
                }
            }
        }
        .box.pic.switchPhoto {
            .pic.photo {
                position: relative;
                width: 48px;
                height: 33px;
                border: 4px solid #1775fb;
                &::before,
                &::after {
                    content: "";
                    display: block;
                    position: absolute;
                    bottom: 0;
                    box-sizing: border-box;
                }
                &::before {
                    left: 5px;
                    width: 18px;
                    height: 21px;
                    border: 4px solid #1775fb;
                    border-bottom: none;
                    border-top-left-radius: 8px;
                    border-top-right-radius: 8px;
                }
                &::after {
                    left: 19px;
                    width: 14px;
                    height: 14px;
                    border: 4px solid #1775fb;
                    border-bottom: none;
                    border-top-left-radius: 8px;
                    border-top-right-radius: 8px;
                }
                & > span {
                    position: absolute;
                    left: 12px;
                    bottom: 0;
                    display: block;
                    width: 11px;
                    height: 7px;
                    background: #fff;
                    z-index: 1;
                }
            }
        }
        .box.pic.switchController {
            .pic.singleController {
                position: relative;
                width: 24px;
                height: 48px;
                border: 4px solid #707879;
                border-top-right-radius: 10px;
                border-bottom-right-radius: 10px;
                transform: rotate(45deg);
                &::before {
                    content: "";
                    display: block;
                    position: absolute;
                    bottom: 8px;
                    left: 4px;
                    width: 8px;
                    height: 8px;
                    background: #707879;
                    border-radius: 100%;
                    box-shadow: 0 -20px 0 -2px #707879, 0 -11px 0 -2px #707879, -4px -16px 0 -2px #707879, 4px -16px 0 -2px #707879;
                }
            }
        }
        .box.pic.switchSetting {
            .pic.switchSetting {
                position: relative;
                margin-top: -2px;
                span {
                    display: block;
                }
                .pic.circle {
                    position: relative;
                    width: 30px;
                    height: 30px;
                    border: 4px solid #707879;
                    border-radius: 100%;
                    background: #fff;
                    z-index: 10;
                }
                .pic.line {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    &::before,
                    &::after {
                        content: "";
                        display: block;
                        position: absolute;
                        top: -21px;
                        width: 4px;
                        height: 42px;
                        margin-left: -2px;
                        background: #707879;
                        z-index: 1;
                    }
                    &::after {
                        transform: rotate(90deg);
                    }
                    & + .pic.line::before {
                        transform: rotate(45deg);
                    }
                    & + .pic.line::after {
                        transform: rotate(-45deg);
                    }
                }
            }
        }
        .box.pic.switchSleep {
            .pic.switchSleep {
                position: relative;
            }
        }
    }
}
.list.controllNavList {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    & > li {
        display: flex;
        align-items: center;
        margin-left: 40px;
        font-size: 21px;
        & > .icon {
            width: 26px;
            height: 26px;
            border-radius: 50%;
            background: #2d2d2d;
            font-size: 16px;
            color: #ebebeb;
            text-align: center;
            line-height: 26px;
        }
        & > .text {
            margin-left: 12px;
        }
    }
}
.pic.controller.switch {
    position: relative;
    width: 70px;
    height: 30px;
    margin-left: 24px;
    border-top: 4px solid #2d2d2d;
    border-bottom: 4px solid #2d2d2d;
    border-left: 14px solid #2d2d2d;
    border-right: 14px solid #2d2d2d;
    border-radius: 6px;
    &::before,
    &::after {
        content: "";
        display: block;
        position: absolute;
        width: 5px;
        height: 5px;
        background: #ebebeb;
        border-radius: 2px;
    }
    &::before {
        top: 3px;
        left: -9px;
    }
    &::after {
        bottom: 3px;
        right: -9px;
    }
    & > .leftBtn,
    & > .rightBtn {
        display: block;
        position: absolute;
        width: 3px;
        height: 3px;
        box-shadow: 0 -3px 1px 0 #ebebeb, 0 3px 1px 0 #ebebeb, 3px 0 1px 0 #ebebeb, -3px 0 1px 0 #ebebeb;
    }
    & > .leftBtn {
        top: 15px;
        left: -8px;
    }
    & > .rightBtn {
        top: 4px;
        right: -8px;
    }
}
.box.homeFooter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 72px;
    border-top: #2d2d2d 1px solid;
}
@keyframes main-menu-item-active-border-color {
    0% {
        border-color: #3af0d9;
    }
    50% {
        border-color: #00beca;
    }
    100% {
        border-color: #3af0d9;
    }
}
</style>
