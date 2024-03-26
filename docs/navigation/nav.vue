<script setup>
import { data } from './navdata';

</script>

<template>
    <div v-for="group in data" :key="group">
        <div class="main-container"> <!-- 包含上面的type字符串 -->
            <div class="type"> {{ group["type"] }} </div>
            <div class="group">
                <div v-for="item in group['items']">
                    <div class="card">
                        <div class="card-left">1111</div>
                        <div class="card-right">
                            <div>{{ item['title'] }}</div>
                            <div class="desc">
                                {{ item['desc'] }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.group {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(3, minmax(0px, 1fr));
    justify-content: center;
    margin-top: 1%;
}

.type {
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
}

.card {
    border-radius: 10px;
    border-width: 1px;
    min-height: 100px;
    padding: 20px;
    background-color: #e7e7e711;
    /* 垂直居中 */
    display: flex;
    align-items: center;
}

.card-left {
    display: inline-block;
    padding-right: 20px;
}

.card-right {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
}

.main-container {
    /* border: #e7e7e7 1px dashed; */
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 2%;
    margin-bottom: 2%;
}

.desc {
    color: gray;
    font-size: 12px;
    /* 设置文本只显示一行，父容器（card-right）中同样也需要设置，不然没效果 */
    text-overflow: ellipsis;
    overflow: hidden;
}
</style>