<template>
    <div class="container">
        <ul class="list itemViewList">
            <li
                v-for="item in itemList"
                :key="item.id"
                class="pic item"
                :style="item.style"
                @click.stop="onClickItem(item)"
            >
                <p class="text name" v-itemName>{{ item.name }}</p>
                <p class="img"><img :src="item.image" alt="" /></p>
            </li>
        </ul>
        <p class="icon ap-refresh" @click.stop="onClickRefresh"></p>
        <zelda-item-acquisition-list></zelda-item-acquisition-list>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { zeldaBOWItemList } from '~/config/zelda-bow-item-list'
import ZeldaItemAcquisitionList from '~/components/zelda/item-acquisition.vue'

interface IItem {
    id: number
    name: string
    image: string
    style: object
}

@Component({
    components: {
        ZeldaItemAcquisitionList
    },
    directives: {
        itemName: {
            inserted: (element: any) => {
                const rect = element.getBoundingClientRect()
                if (rect.width > 66) {
                    const rectWidth = Math.floor(rect.width)
                    element.style.marginLeft = `-${(rectWidth - 66) / 2}px`
                }
            }
        }
    }
})
export default class ZeldaBOWItem extends Vue {
    ITEM_DISPLAY_LENGTH: number = 10
    itemList: IItem[] = []

    created() {
        this.createItemList()
    }

    createItemList(): void {
        const maxRandomLength: number = zeldaBOWItemList.length
        for (let i = 0; i < this.ITEM_DISPLAY_LENGTH; i++) {
            const pushItem = zeldaBOWItemList[Math.floor(Math.random() * maxRandomLength)]
            this.itemList.push({
                id: i,
                name: pushItem.name,
                image: pushItem.image,
                style: this.getItemRandPosition()
            })
        }
    }

    onClickRefresh(): void {
        this.itemList = []
        this.createItemList()
    }

    onClickItem(item): void {
        this.$nuxt.$emit('zeldaItemAcquisition', {
            name: item.name,
            image: item.image,
            timeStamp: Date.now(),
            y: 0
        })
        this.removeItem(item)
    }

    removeItem(item): void {
        this.itemList.splice(this.itemList.indexOf(item), 1)
    }

    getItemRandPosition() {
        return {
            left: `${Math.floor(Math.random() * 100)}%`,
            bottom: `${Math.floor(Math.random() * 100)}%`
        }
    }
}
</script>
<!-- eslint-disable -->
<style scoped lang="scss">
.container {
    min-height: 100vh;
    background: url("~assets/images/bg_zelda_bow_green.jpg") no-repeat;
    background-size: cover;
    background-position: center;
}
.list.itemViewList {
    position: absolute;
    bottom: 0;
    left: 10%;
    width: 80%;
    height: 45%;
    & > li {
        position: absolute;
        .text.name {
            position: absolute;
            top: -43px;
            height: 28px;
            padding: 0 14px;
            border-radius: 4px;
            background: rgba(0, 0, 0, 0.5);
            color: #f2f5e4;
            font-size: 14px;
            font-weight: bold;
            line-height: 28px;
            white-space: nowrap;
            z-index: -1;
            opacity: 0;
            transition: opacity 0.3s;
            &::before {
                content: "";
                display: block;
                position: absolute;
                bottom: -10px;
                left: 50%;
                width: 0;
                height: 0;
                margin-left: -5px;
                border-style: solid;
                border-width: 10px 5px 0 5px;
                border-color: rgba(0, 0, 0, 0.5) transparent transparent transparent;
            }
        }
        &:hover .text.name {
            z-index: 10;
            opacity: 1;
        }
    }
}
.icon.ap-refresh {
    position: absolute;
    bottom: 30px;
    left: 30px;
    padding: 10px;
    border: #fff 4px solid;
    border-radius: 24px;
    font-size: 24px;
    color: #fff;
    cursor: pointer;
}
</style>
