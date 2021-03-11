module.exports = function toReadable (number) {
  let stringa = String(number);
    let readable = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };
    let map = new Map(Object.entries(readable));
    if (number < 21) {
        return map.get(stringa);
    } else if (number < 100) {
        let arr = stringa.split("");
        if (arr[1] == 0) {
            return map.get(stringa);
        } else {
            let tens = arr[0] * 10;
            return map.get(String(tens)) + " " + map.get(arr[1]);
        }
    } else if (number < 1000) {
        let arr_hund = stringa.split("");
        if (arr_hund[1] == 0 && arr_hund[2] == 0) {
            return map.get(arr_hund[0]) + " hundred";
        } else if (arr_hund[2] == 0) {
            let tens_hund = arr_hund[1] * 10;
            return (
                map.get(arr_hund[0]) + " hundred " + map.get(String(tens_hund))
            );
        } else if (arr_hund[1] == 0) {
            return map.get(arr_hund[0]) + " hundred " + map.get(arr_hund[2]);
        } else if (arr_hund[1] == 1 && arr_hund[2] !== 0) {
            let hund = arr_hund.shift();
            let join = arr_hund.join("");
            return map.get(hund) + " hundred " + map.get(join);
        } else {
            let tens_hund = arr_hund[1] * 10;
            return (
                map.get(arr_hund[0]) +
                " hundred " +
                map.get(String(tens_hund)) +
                " " +
                map.get(arr_hund[2])
            );
        }
    }
}
