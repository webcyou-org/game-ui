<template>
    <div class="container">
        <div class="box home">
            <div class="box mainMenu">
                <p class="text">どのデータをロードしますか？</p>
                <ul class="list mainMenu">
                    <li>
                        <div class="wrap">
                            <p class="image"><img src="~assets/images/pic_zelda_bow_main_menu.jpg" /></p>
                            <div class="box detail">
                                <p class="text date">2021/03/14 20:39</p>
                                <p class="title">ハイラル城</p>
                                <p class="text autoSave">オートセーブ</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="wrap">
                            <p class="image"><img src="~assets/images/pic_zelda_bow_main_menu.jpg" /></p>
                            <div class="box detail">
                                <p class="text date">2021/03/14 20:39</p>
                                <p class="title">ハイラル城</p>
                                <p class="text autoSave">オートセーブ</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="wrap">
                            <p class="image"><img src="~assets/images/pic_zelda_bow_main_menu.jpg" /></p>
                            <div class="box detail">
                                <p class="text date">2021/03/14 20:39</p>
                                <p class="title">ハイラル城</p>
                                <p class="text autoSave">オートセーブ</p>
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
import ZeldaItemAcquisitionList from '~/components/zelda/item-acquisition.vue'

@Component({
    components: {
        ZeldaItemAcquisitionList
    }
})
export default class ZeldaBOWHome extends Vue {}
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
            display: block;
            height: 84px;
            padding: 2px;
            margin-bottom: 5px;
            border-radius: 4px;
            background: rgba(0,0,0,0.5);
            & > .wrap {
                position: relative;
                display: flex;
                height: 78px;
                padding: 2px;
                border: rgba(255,255,255,0.1) 1px solid;
                border-radius: 4px;
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
        }
    }
}
</style>
