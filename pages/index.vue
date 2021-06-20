<template>
    <div class="container">
        <div class="box homeHeader">
            <ul class="list userList">
                <li></li>
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
                    <li class="current" @click.stop="onClickMainMenu()">
                        <p class="title">
                            <span class="icon"></span>
                            <span class="name">ゼルダの伝説 ブレス オブ ザ ワイルド</span>
                        </p>
                        <p class="image"><img src="~/assets/images/pic_home_main_menu_1.jpg" alt="" /></p>
                    </li>
                    <li @click.stop="onClickMainMenu()">
                        <p class="title">ゼルダの伝説 ブレス オブ ザ ワイルド</p>
                        <p class="image"><img src="~/assets/images/pic_home_main_menu_1.jpg" alt="" /></p>
                    </li>
                </ul>
                <ul class="list subMenuList">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
        <div class="box homeFooter">
            <p class="pic controller"></p>
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
    onClickMainMenu() {
        this.$router.push('/zelda_bow/')
    }
}
</script>

<!-- eslint-disable -->
<style scoped lang="scss">
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
        width: 264px;
        margin-left: 5px;
        border: 4px solid transparent;
        cursor: pointer;
        &.current {
            border: 4px solid #fff;
            box-shadow: 0 0 5px 3px rgba(66, 207, 198, 1);
            animation: main-menu-item-active-box-shadow 1s infinite;
            .title {
                display: block;
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
        width: 88px;
        height: 88px;
        margin: 0 11px;
        border-radius: 44px;
        background: #fff;
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
.box.homeFooter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 72px;
    border-top: #2d2d2d 1px solid;
}
@keyframes main-menu-item-active-box-shadow {
    0% {
        box-shadow: 0 0 5px 3px rgba(66, 207, 198, 1);
    }
    50% {
        box-shadow: 0 0 5px 3px rgba(58, 240, 217, 1);
    }
    100% {
        box-shadow: 0 0 5px 3px rgba(66, 207, 198, 1);
    }
}
</style>
