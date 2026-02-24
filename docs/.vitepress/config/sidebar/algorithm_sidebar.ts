import {algorithmDataStructure} from "./algorithm/algorithm_sidebar_datastructure";
import {algorithmDataAlgorithm} from "./algorithm/algorithm_sidebar_algorithm";

export function algorithmSidebar() {
    return [
        {
            text: "数据结构",
            collapsed: false,
            items: algorithmDataStructure
        },
        {
            text: "算法",
            collapsed: false,
            items: algorithmDataAlgorithm
        }
    ]
}
