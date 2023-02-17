import {reactive, computed, toRefs} from 'vue';

function plusCalculator() {
    let state = reactive({
        num1: 0,
        num2: 0,
        result: computed(() => state.num1 + state.num2)
    });

    return toRefs(state); // 반응형으로 선언된 num1, num2 result가 외부 function에서 작동
}

export {
    plusCalculator
};