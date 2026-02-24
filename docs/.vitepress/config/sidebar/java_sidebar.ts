import {javaBasic} from "./java/java_sidebar_basic";
import {javaConcurrent} from "./java/java_sidebar_concurrent";

export function javaSidebar() {
    return [
        {
            text: "Java基础",
            collapsed: false,
            items: javaBasic,
        },
        {
            text: "并发编程",
            collapsed: false,
            items: javaConcurrent
        },
    ]
}

