<template>
    <ul class="list itemAcquisitionList">
        <li>
            <div class="wrap">
                <p class="image item"><img src="" width="40" /></p>
                <p class="name">アイテム名</p>
            </div>
        </li>
    </ul>
</template>
<!-- eslint-disable -->
<style scoped lang="scss">
.itemAcquisitionList {
    z-index: 30;
    position: absolute;
    top: 160px;
    right: 0;
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
