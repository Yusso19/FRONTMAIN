function calc(type) {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let res = 0;

    if (document.getElementById("num1").value === "" ||
        document.getElementById("num2").value === "") {
        document.getElementById("result").value = "Əvvəlcə iki ədəd daxil edin!";
        return;
    }

    switch (type) {
        case "adda": res = n1 + n2; break;
        case "sub": res = n1 - n2; break;
        case "mul": res = n1 * n2; break;
        case "div":
            if (n2 === 0) {
                res = "0-a bölmək olmaz!";
            } else {
                res = n1 / n2;
            }
            break;
    }

    document.getElementById("result").value = res;
}
