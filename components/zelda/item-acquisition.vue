<template>
    <div>
        <ul class="list itemAcquisitionList">
            <li v-for="(item, index) in itemAcquisitionList" :key="item.timeStamp" :style="{transform: 'translate3d(0,' + item.y + 'px, 0)'}" v-itemAcquisitionListItem>
                <div class="wrap">
                    <p class="image item"><img :src="item.image" width="100%" /></p>
                    <p class="name">{{ item.name }}</p>
                </div>
            </li>
        </ul>
        <p class="btn primary" @click.stop="onPushAcquisition({ name: 'テスト' })"><a href="javascript:void(0)">ボタン</a></p>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { remove } from 'lodash'
import { dataurl } from '~/config/dataurl'

@Component({
    directives: {
        itemAcquisitionListItem: {
            inserted: (element: any, _binding: any, vnode: any) => {
                element.addEventListener(
                    'animationend',
                    () => {
                        vnode.context.itemAnimationEnd(vnode)
                    },
                    true
                )
            }
        }
    }
})
export default class ZeldaItemAcquisitionList extends Vue {
    public itemAcquisitionList: any[] = []

    onPushAcquisition(item: any) {
        this.itemAcquisitionList.push({
            name: '焼きりんご',
            image: dataurl.apple,
            timeStamp: Date.now(),
            y: 0
        })
        this.changeItemAcquisitionListTranslate(this.itemAcquisitionList.length)
    }

    itemAnimationEnd(vnode) {
        remove(this.itemAcquisitionList, item => {
            return item.timeStamp === vnode.key
        })

        if (this.itemAcquisitionList.length <= 1) {
            this.itemAcquisitionList = []
        }
        this.$forceUpdate()
    }

    changeItemAcquisitionListTranslate(index: number) {
        let count = index

        this.itemAcquisitionList.forEach(item => {
            item.y = count * 60
            count -= 1
        })
    }
}
</script>
<!-- eslint-disable -->
<style scoped lang="scss">
.list.itemAcquisitionList {
    z-index: 30;
    position: absolute;
    top: 130px;
    right: 60px;
    width: 195px;
    & > li {
        position: absolute;
        top: 0;
        width: 100%;
        transition: all 0.6s;
        color: #fff;
        & > .wrap {
            position: relative;
            animation: item-acquisition-list-wrap 5s 1;
        }
        .image {
            &.item {
                position: absolute;
                left: -19px;
                bottom: -5px;
                width: 50px;
                height: 50px;
                img {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate3d(-50%, -50%, 0);
                    z-index: 1;
                }
            }
        }
        .name {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 26px;
            padding-left: 40px;
            border-top-left-radius: 13px;
            border-bottom-left-radius: 13px;
            background: linear-gradient(
                to right,
                rgba(0, 0, 0, 0.5) 0%,
                rgba(0, 0, 0, 0.3) 40%,
                rgba(0, 0, 0, 0.05) 100%
            );
            color: #fff;
            font-size: 15px;
            font-weight: bold;
            line-height: 27px;
            text-align: left;
        }
    }
}

@keyframes item-acquisition-list-wrap {
    0% {
        opacity: 0;
        transform: translate3d(20px, 0, 0);
    }
    5% {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
    90% {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
    100% {
        opacity: 0;
        transform: translate3d(20px, 0, 0);
    }
}
</style>
