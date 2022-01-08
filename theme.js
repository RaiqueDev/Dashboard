const light = document.getElementById('light');

let Logo = document.querySelector('.Logo');

let pD = document.querySelector('.p-Dashboard');
let pP = document.querySelector('.p-Profile');
let pM = document.querySelector('.p-Messages');
let pT = document.querySelector('.p-Transactions');
let pMW = document.querySelector('.p-Mywallet');
let pPY = document.querySelector('.p-Payment');
let pI = document.querySelector('.p-Investment');
let pR = document.querySelector('.p-Reports');

let pS = document.querySelector('.p-Settings');
let pSU = document.querySelector('.p-Support');

let pLog = document.querySelector('.p-Logout');


light.addEventListener('change', () => {
	document.body.classList.toggle('body-light');
	

	document.querySelector(".main").classList.toggle('light-main');
	document.querySelector(".container_main").classList.toggle('container_main-light');
	document.querySelector(".container").classList.toggle('light-container');

	document.querySelector(".header").classList.toggle('light-header');

	document.querySelector(".total_balance").classList.toggle('total_balance-light');
	document.querySelector(".total_expence").classList.toggle('total_expence-light');
	document.querySelector(".total_savings").classList.toggle('total_savings-light');

	document.querySelector(".box_outlay").classList.toggle('box_outlay-light');
	document.querySelector(".aside").classList.toggle('light-aside');

	document.querySelector(".boxincome_graphic").classList.toggle('boxincome_graphic-light');
	document.querySelector(".boxincome_LatestTransactions").classList.toggle('boxincome_LatestTransactions-light');

	document.querySelector(".Card").classList.toggle('Card-light');
	document.querySelector(".Anallytics").classList.toggle('Anallytics-light');

	Logo.classList.toggle('Logo-light')

	pD.classList.toggle('p-Dashboard-light');
	pP.classList.toggle('p-Profile-light');
	pM.classList.toggle('p-Messages-light');
	pT.classList.toggle('p-Transactions-light');
	pMW.classList.toggle('p-Mywallet-light');
	pPY.classList.toggle('p-Payment-light');
	pI.classList.toggle('p-Investment-light');
	pR.classList.toggle('p-Reports-light');

	pS.classList.toggle('p-Settings-light');
	pSU.classList.toggle('p-Support-light');

	pLog.classList.toggle('p-Logout-light');

	document.querySelector(".fa-chart-pie").classList.toggle('fa-chart-pie-light');

	document.querySelector(".nav").classList.toggle('light-nav');

});

// .container_main body-light main