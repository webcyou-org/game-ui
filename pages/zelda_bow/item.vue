<template>
    <div class="container">
        <p class="btn primary" @click.stop="onClickRefresh">
            <a href="javascript:void(0)">ボタン</a>
        </p>
        <ul class="list itemViewList">
            <li
                v-for="item in itemList"
                :key="item.id"
                class="pic item"
                :style="item.style"
                @click.stop="onClickItem(item)"
            >
                <img :src="item.image" alt="" />
            </li>
        </ul>
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
        for (let i = 0; i <= this.ITEM_DISPLAY_LENGTH; i++) {
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
    }
}
</style>
