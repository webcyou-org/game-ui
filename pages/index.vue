<template>
    <div class="container">
        <div>
            <h1 class="title">game-ui</h1>
            <ul class="list mainMenu">
                <li>
                    <nuxt-link to="/zelda_bow/">- ゼルダの伝説 ブレス オブ ザ ワイルド</nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
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
.list.mainMenu {
    margin-bottom: 50px;
}
.title {
    display: block;
    margin-bottom: 50px;
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-weight: 300;
    font-size: 24px;
    color: #35495e;
    letter-spacing: 1px;
}
</style>
