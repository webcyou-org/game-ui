<template>
    <div class="container">
        <div>
            <Logo />
            <h1 class="title">game-ui</h1>
            <zelda-item-acquisition-list></zelda-item-acquisition-list>
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
export default class Home extends Vue {}
</script>

<!-- eslint-disable -->
<style scoped lang="scss">
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #878b3f;
    text-align: center;
}
.title {
    display: block;
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}
</style>
