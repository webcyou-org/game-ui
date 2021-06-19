<template>
    <div class="container">
        <p class="btn primary" @click.stop="onPushAcquisition">
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
import { dataurl } from '~/config/dataurl'
import ZeldaItemAcquisitionList from '~/components/zelda/item-acquisition.vue'

@Component({
    components: {
        ZeldaItemAcquisitionList
    }
})
export default class ZeldaBOWItem extends Vue {
    itemList = [
        {
            id: 1,
            name: '焼きりんご',
            image: dataurl.apple,
            style: this.getItemRandPosition()
        },
        {
            id: 2,
            name: '焼きりんご',
            image: dataurl.apple,
            style: this.getItemRandPosition()
        },
        {
            id: 3,
            name: '焼きりんご',
            image: dataurl.apple,
            style: this.getItemRandPosition()
        },
        {
            id: 4,
            name: '焼きりんご',
            image: dataurl.apple,
            style: this.getItemRandPosition()
        },
        {
            id: 5,
            name: '焼きりんご',
            image: dataurl.apple,
            style: this.getItemRandPosition()
        },
        {
            id: 6,
            name: '焼きりんご',
            image: dataurl.apple,
            style: this.getItemRandPosition()
        }
    ]

    onPushAcquisition() {
        this.$nuxt.$emit('zeldaItemAcquisition', {
            name: '焼きりんご',
            image: dataurl.apple,
            timeStamp: Date.now(),
            y: 0
        })
    }

    onClickItem(item) {
        this.$nuxt.$emit('zeldaItemAcquisition', {
            name: item.name,
            image: item.image,
            timeStamp: Date.now(),
            y: 0
        })
        this.removeItem(item)
    }

    removeItem(item) {
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
