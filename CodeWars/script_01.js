/* Вы пишете код для управления светофорами в вашем городе.
Вам нужна функция для обработки каждого изменения с зеленого на желтый, на красный,
а затем снова на зеленый. Завершите функцию, которая принимает строку в качестве аргумента,
представляющую текущее состояние источника света, и возвращает строку, представляющую состояние,
в которое свет должен измениться. Например, когда вход зеленый, выход должен быть желтым.
 */

function updateLight(current) {

    if (current === "green") {
        return "yellow";
    } else {
        if (current === "yellow") {
            return "red";
        } else {
            if (current === "red") {
                return "green";
            }
        }
    }
}
console.log('через case :)');

function updateLight_2(current) {
    let result = '';
    switch (current) {
        case 'green' : result = "yellow";
        break;
    }
    return result;
}
console.log(updateLight("green"));
console.log(updateLight_2("green"));