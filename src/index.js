
module.exports = function toReadable (number) {
    number = String(number)
    const units = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    }
    const dozens ={
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    }
    if(number === '0'){
        return 'zero'
    }
    if(number < 20){
        return number = units[number]
    }else if(number >= 20 && number < 100){
        return number = (dozens[number[0]] + ' ' + units[number[1]]).trim()
    }else if((+(number[1] + number[2])) >= 20 && number >= 100 && number < 1000){
        return number = (units[number[0]] + ' ' + 'hundred' + ' ' + dozens[number[1]] + ' ' + units[number[2]]).trim()
    }else if((+(number[1] + number[2])) < 20 && number >= 100 && number < 1000){
        return number = (units[number[0]] + ' ' + 'hundred' + ' ' + units[(+(number[1] + number[2]))]).trim()
    }

}