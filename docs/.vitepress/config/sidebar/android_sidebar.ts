import {androidBasic} from "./android/android_sidebar_basic";
import {androidAnimation} from "./android/android_sidebar_animation";
import {androidJetpack} from "./android/android_sidebar_jetpack";
import {androidOpenSource} from "./android/android_sidebar_opensource";
import {androidKotlin} from "./android/android_sidebar_kotlin";

export function androidSidebar() {
    return [
        {
            text: "安卓基础",
            collapsed: false,
            items: androidBasic,
        },
        {
            text: "View & 动画",
            collapsed: false,
            items: androidAnimation,
        },
        {
            text: "Jetpack",
            collapsed: false,
            items: androidJetpack,
        },
        {
            text: "Koltin",
            collapsed: false,
            items: androidKotlin,
        },
        {
            text: "开源三方库",
            collapsed: false,
            items: androidOpenSource,
        },
    ];
}