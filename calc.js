
let core = document.querySelector(".main");
let result = document.querySelector(".show");
let operation = "";
let fistNum = 0;
let secNum = 0;
let done = 0;

core.addEventListener("click", function(event){
	let data = event.target.dataset.n;
	if (data >= "0" && data <= "9"){
		if(result.innerText === "0" || done === 1){
			result.innerText = "";
			done = 0;
		}
		result.innerText += event.target.dataset.n;
	}
	if(data === "div" || data === "times" || data === "minus" || data === "plus"){
		operation = data;
		fistNum = parseInt( result.innerText);
		result.innerText = "0";
	}
	if(data ==="calc"){
		secNum = parseInt( result.innerText);
		done = 1;
		switch (operation){
			case "div" :
				result.innerText = fistNum / secNum;
				break;
			case "times":
				result.innerText = fistNum * secNum;
				break;
			case "minus" :
				result.innerText = fistNum - secNum;
				break;
			case "plus":
				result.innerText = fistNum + secNum;
				break;
		}
		operation = "";
		fistNum = 0;
		secNum = 0;
	}
	if (data === "clear"){
		result.innerText = "0";
		operation = "";
		fistNum = 0;
		secNum = 0;
	}
	if (data === "del"){
		result.innerText = result.innerText.slice(0,-1);
	}
});
