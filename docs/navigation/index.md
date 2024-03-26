---
# layout: page
# lastUpdated: false
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

# 导航

<script setup>
    // import navi from "./nav.vue"
    import { NAV_DATA } from './navdata';
</script>
<style src="./index.scss"></style>
<!-- <navi /> -->
<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

<br />
