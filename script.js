document.getElementById('financeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;

    const transaction = {
        description,
        amount,
        type
    };

    addTransaction(transaction);
    updateTransactionList();
    clearForm();
});

let transactions = [];

function addTransaction(transaction) {
    transactions.push(transaction);
}

function updateTransactionList() {
    const transactionList = document.getElementById('transactionList');
    transactionList.innerHTML = '';

    transactions.forEach(transaction => {
        const listItem = document.createElement('li');
        listItem.textContent = `${transaction.description} - ${transaction.amount} (${transaction.type})`;
        transactionList.appendChild(listItem);
    });
}

function clearForm() {
    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
    document.getElementById('type').value = 'income';
}