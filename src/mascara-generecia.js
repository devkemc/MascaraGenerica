const createRegex = (mask) => {
    const arrayCharMask = mask.split('').map((char) => char.charCodeAt())
    let numbersAtChar = 1
    let numbers = 0
    const regexArray = []
    const replaceValueArr = []
    const createPartionalRegex = ({charCode, itsLast = false}) => {
        const char = String.fromCharCode(charCode)
        regexArray.push(createSearchValue(numbers))
        replaceValueArr.push(createReplaceValue(itsLast ? '' : char))
        numbersAtChar++
    }
    const itsNumber = (number) => 47 < number && number < 58
    const createSearchValue = (amountNumbers) => `(\\d{${amountNumbers}})`
    const createReplaceValue = (char) => `$${numbersAtChar}${char}`
    arrayCharMask.forEach((charCode, index) => {
        itsNumber(charCode) ? numbers++ : (createPartionalRegex({charCode}), numbers = 0)
        if (arrayCharMask.length === index + 1) {
            createPartionalRegex({charCode, itsLast: true})
        }
    })
    return {searchValue: new RegExp(regexArray.join('')), replaceValue: replaceValueArr.join('')}
}

const inputs = document.querySelectorAll('[mask]')
inputs.forEach((input) => {
    input.addEventListener("input", addMask);
})
function addMask(input) {
    const mask = input.target.attributes.mask.value
    const maxLength = input.target.maxLength;
    const {searchValue, replaceValue} = createRegex(mask)
    const value = input.target.value;
    const valueWithoutPoint = input.target.value.replace(/([^0-9])+/g, "");
    value.length === maxLength ? input.target.value = valueWithoutPoint.replace(searchValue, replaceValue) : input.target.value = valueWithoutPoint
}
