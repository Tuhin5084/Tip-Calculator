document.getElementById('calculate').addEventListener('click', function(){

    let bill = document.getElementById('billAmount');
    let item = document.getElementById('item-select');
    let people = document.getElementById('noOfPeople');


    if(bill.value == '' || item.value == '' || people.value == ''){
        alert("Please Enter Three Input Field First Then Click Calculate");
    }

    else{
        const billAmountTotal = bill.value;

        const billAmountTotalInt = parseFloat(billAmountTotal);

        const noOfPeopleTotal = people.value;

        const noOfPeopleTotalInt = parseFloat(noOfPeopleTotal);

        const choseItem = item.value;

        const choseItemInt = parseFloat(choseItem);

        const perPersonBill = parseFloat((billAmountTotalInt / noOfPeopleTotalInt).toFixed(2));

        const perPersonTip = parseFloat(((billAmountTotalInt / noOfPeopleTotalInt) * choseItemInt).toFixed(2));

        let perPersonTotalBill = perPersonBill + perPersonTip;

        document.getElementById('bill').style.display = 'block';
        document.getElementById('Tip').style.display = 'block';
        document.getElementById('billAndTip').style.display = 'block';

        document.getElementById('bil').innerText = perPersonBill + ' TK';
        document.getElementById('tip').innerText = perPersonTip + ' TK';
        document.getElementById('totalBill').innerText = perPersonTotalBill + ' TK';
        
        bill.value = "";
        people.value = "";
        item.value = "";
    }
})