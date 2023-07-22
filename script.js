
const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')


let numberOfPeople = Number(numberOfPeopleDiv.innerText)


const calculateBill = () => {
  const billAmount = Number(billInput.value)  

  const tipPercentage = Number(tipInput.value) / 100
  
  const totalTipAmount = tipPercentage * billAmount

  const totalAmount = totalTipAmount + billAmount

  const perPersonAmount = totalAmount / numberOfPeople

  perPersonTotalDiv.innerText = `$${perPersonAmount.toFixed(2)}`

}

const increasePeople = () => {
  numberOfPeople += 1

  numberOfPeopleDiv.innerText = numberOfPeople

  calculateBill()
}

const decreasePeople = () => {
  if(numberOfPeople > 1){
    numberOfPeople -= 1
  }

  numberOfPeopleDiv.innerText = numberOfPeople

  calculateBill()

}
