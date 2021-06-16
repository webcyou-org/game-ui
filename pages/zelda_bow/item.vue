<template>
    <div class="container">
        <p class="btn primary" @click.stop="onPushAcquisition">
            <a href="javascript:void(0)">ボタン</a>
        </p>
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
    onPushAcquisition() {
        this.$nuxt.$emit('zeldaItemAcquisition', {
            name: '焼きりんご',
            image: dataurl.apple,
            timeStamp: Date.now(),
            y: 0
        })
    }
}
</script>
<!-- eslint-disable -->
<style scoped lang="scss">
.container {
    min-height: 100vh;
    background: #878b3f;
}
</style>
