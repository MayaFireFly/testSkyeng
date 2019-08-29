function Sum(){
    let numOne = document.getElementById("numOne").value;
    let numTwo = document.getElementById("numTwo").value;

    if(numOne && numTwo){

        let resultContainer = document.getElementById("result");
        let result = [];
        let bigNumber = [];
        let smNumber = [];
        let lenSm, lenBig;
        let remainder = 0;

        function pushNumInResult(num){
            let n = num.toString();
            remainder = 0;
            if(n.length > 1){
                n = n.split("");
                remainder = n[0];
                result.push(n[1]);
            }else{
                result.push(n);
            }            
        }

        if(numOne.length >= numTwo.length){
            lenBig = numOne.length;
            bigNumber = numOne.split("");
            lenSm = numTwo.length;
            smNumber = numTwo.split("");
        }else{
            lenBig = numTwo.length;
            bigNumber = numTwo.split("");
            lenSm = numOne.length;
            smNumber = numOne.split("");
        }

        for(let i = lenBig - 1, j = lenSm - 1; i >= -1; i--, j--){
            let num = 0;
            if(j > -1){
                num = Number(bigNumber[i]) + Number(smNumber[j]) + Number(remainder);                
                pushNumInResult(num);
            }else{
                if(Number(bigNumber[i])){
                    num = Number(bigNumber[i]) + Number(remainder);                    
                }else{
                    num = Number(remainder);                                   
                }               
                pushNumInResult(num);
            }              
        }

        result = result.reverse();
        if(result[0] == "0" || result[0] == 0){
            result.shift();
        }
        result = result.join("");  
    
        resultContainer.innerText = result;

    }else{
        alert("Введите числа для вычисления суммы");
    }    
}