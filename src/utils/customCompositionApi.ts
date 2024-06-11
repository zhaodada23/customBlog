import {ref, reactive, onUnmounted, provide} from "vue";
import _ from "lodash"

export const globalResizeEventKey = 'global-resize'

export enum BreakPoint {
    SM = 640, // small
    MD = 768, // medium
    // LG = 1024, // large
    XL = 1280 // extra large
}

const getBreakPoint = (width: number | string) => {
    let windowWidth: number

    if (typeof width === "number") {
        windowWidth = width
    } else if (typeof width === "string") {
        windowWidth = Number(width.split('px')[0])
    } else {
        console.error('width must be a number or string end width `px`.')
        return BreakPoint.SM
    }
    switch (true) {
        case (windowWidth < BreakPoint.SM):
            return BreakPoint.SM
        case (windowWidth < BreakPoint.MD):
            return BreakPoint.MD
        case (windowWidth < BreakPoint.XL):
            return BreakPoint.XL
        default:
            return BreakPoint.XL
    }
}

const useGlobalResizeProvide = () => {
    const windowSize = reactive({width: window.innerWidth, height: window.innerHeight});
    const breakPoint = ref<BreakPoint>(BreakPoint.SM)
    const resizeHandle = _.debounce((e: UIEvent) => {
        windowSize.height = window.innerHeight;
        windowSize.width = window.innerWidth;

        breakPoint.value = getBreakPoint(windowSize.width)

        window.dispatchEvent(new Event(globalResizeEventKey, e))
    }, 300)

    provide("windowSize", windowSize);
    provide("breakPoint", breakPoint);

    window.addEventListener('resize', resizeHandle)

    onUnmounted(() => {
        window.removeEventListener('resize', resizeHandle)
    })

    return {
        windowSize, breakPoint
    }
}

export {useGlobalResizeProvide}