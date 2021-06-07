<template>
    <div>
        <ul class="list itemAcquisitionList" v-itemAcquisitionList>
            <li v-for="(item, index) in itemAcquisitionList" :key="index" :style="{transform: 'translate3d(0,' + item.y + 'px, 0)'}" :class="{isHide: !item.isShow}" key='index' v-itemAcquisitionListItem>
                <div class="wrap">
                    <p class="image item"><img src="" width="40" /></p>
                    <p class="name">アイテム名</p>
                </div>
            </li>
        </ul>
        <p @click.stop="onShowItemAcquisitionList({ name: 'テスト' })">ボタン</p>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { remove } from 'lodash'

@Component({
    directives: {
        itemAcquisitionList: {
            inserted: (element: any, binding: any, vnode: any) => {
                vnode.context.setElementData(element, binding)
            }
        },
        itemAcquisitionListItem: {
            inserted: (el: any, binding: any, vnode: any) => {
                el.addEventListener(
                    'animationend',
                    () => {
                        vnode.context.flowerGetListAnimationEnd(binding.value, el)
                    },
                    true
                )
            },
            update: (el: any, binding: any, vnode: any) => {
                const styles: any = (<any>el).currentStyle || (<any>document.defaultView).getComputedStyle(el, null)
                const RE_MAT = /matrix\(\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*\,\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*\)/
                const mat: any = styles['transform'].match(RE_MAT).slice(1)
                const f: number = parseInt(mat[5], 10)

                if (f > 65) {
                    el.style.opacity = 0
                }
            }
        }
    }
})
export default class ZeldaItemAcquisitionList extends Vue {
    // @ts-ignore 'element' が宣言されていますが、その値が読み取られることはありません
    private element
    // @ts-ignore 'binding' が宣言されていますが、その値が読み取られることはありません
    private binding

    public isShow: boolean = false
    public itemAcquisitionList: any[] = []

    public setElementData(element: any, binding: any): void {
        this.element = element
        this.binding = binding
    }

    // tslint:disable-next-line
    onShowItemAcquisitionList(item: any) {
        this.isShow = true

        this.itemAcquisitionList.push({
            item,
            y: 0,
            isShow: true
        })

        this.changeItemAcquisitionListTranslate(this.itemAcquisitionList.length)
    }

    flowerGetListAnimationEnd() {
        this.itemAcquisitionList = remove(this.itemAcquisitionList, (item, index) => {
            return index === 0
        })

        if (this.itemAcquisitionList.length < 2) {
            this.itemAcquisitionList = []
        }
    }

    changeItemAcquisitionListTranslate(index: number) {
        let count = index

        this.itemAcquisitionList.forEach(item => {
            item.y = count * 40
            count -= 1
        })
    }

    public onShowGetFlowerList(itemList: any) {
        itemList.forEach((item: any) => {
            const wrapElem = document.createElement('div')
            const imagePElem = document.createElement('p')
            const imgElem = document.createElement('img')
            const namePElem = document.createElement('p')

            wrapElem.classList.add('wrap')

            imagePElem.classList.add('image')
            imagePElem.classList.add('item')

            imgElem.src = item.images.center.s
            imgElem.width = 40

            imagePElem.appendChild(imgElem)

            namePElem.classList.add('name')
            namePElem.innerText = item.name

            wrapElem.appendChild(imagePElem)
            wrapElem.appendChild(namePElem)
        })
    }
}
</script>
<!-- eslint-disable -->
<style scoped lang="scss">
.itemAcquisitionList {
    z-index: 30;
    position: absolute;
    top: 160px;
    right: 120px;
    width: 195px;
    & > li {
        position: absolute;
        top: 0;
        width: 100%;
        border-radius: 5px;
        transition: all 0.6s;
        color: #fff;
        & > .wrap {
            position: relative;
            animation: item-acquisition-list-wrap 2.5s 1;
        }
        .image {
            &.item {
                position: absolute;
                left: -16px;
                bottom: 0;
                width: 32px;
                height: 32px;
                border-radius: 16px;
                background: rgba(73, 31, 19, 1);
                img {
                    width: 70%;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate3d(-50%, -50%, 0);
                }
            }
        }
        .name {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 4px 18px 4px 16px;
            background: linear-gradient(
                to right,
                rgba(73, 31, 19, 1) 0%,
                rgba(73, 31, 19, 1) 10%,
                rgba(73, 31, 19, 0.2) 100%
            );
            color: #fff;
            font-size: 11px;
            font-weight: bold;
        }
    }
}

@keyframes item-acquisition-list-wrap {
    0% {
        opacity: 0;
        transform: translate3d(20px, 0, 0);
    }
    10% {
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
