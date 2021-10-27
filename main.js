var operation = "add";

function TurnAdd() { operation = "add"; }
function TurnSub() { operation = "subtract"; }
function TurnDivide() { operation = "divide"; }
function TurnMult() { operation = "multi"; }

function Calculate()
{
    if(operation == "add")
    {
        var num1 = parseInt(document.getElementById("input1").value);
        var num2 = parseInt(document.getElementById("input2").value);

        var result = num1 + num2;
        document.getElementById("ans").innerHTML = result;
        console.log("Answer : " + result);
    }

    if(operation == "subtract")
    {
        var num1 = parseInt(document.getElementById("input1").value);
        var num2 = parseInt(document.getElementById("input2").value);

        var result = num1 - num2;
        document.getElementById("ans").innerHTML = result;
        console.log("Answer : " + result);
    }

    if(operation == "multi")
    {
        var num1 = parseInt(document.getElementById("input1").value);
        var num2 = parseInt(document.getElementById("input2").value);

        var result = num1 * num2;
        document.getElementById("ans").innerHTML = result;
        console.log("Answer : " + result);
    }

    if(operation == "divide")
    {
        var num1 = parseInt(document.getElementById("input1").value);
        var num2 = parseInt(document.getElementById("input2").value);

        var result = num1 / num2;
        document.getElementById("ans").innerHTML = result;
        console.log("Answer : " + result);
    }
}