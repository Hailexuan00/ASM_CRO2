var img = [];
for (var i = 0; i < 6; i++) {
    img[i] = new Image(); // tao vung nho anh
    img[i].src = "./Anh/" + i + ".JPG"
    var index = 0;
}
function next() {
    index++;
    if (index > img.length - 1) {
        index = 0;
    }
    var anh = document.getElementById("anh");
    anh.src = img[index].src;

}
function prev() {
    index--;
    if (index < 0) {
        index = img.length - 1;
    }
    document.getElementById("anh");
    anh.src = img[index].src
}

function kiemTra() {
    var msv = document.getElementById("msv");
    if (msv.value.length == 0) {
        alert("ban chua nhap ma sinh vien")
        document.getElementById("msv").style.backgroundColor="red"
    }

    var name = document.getElementById("name")
    if (name.value.length == 0) {
        alert("ban chua nhap ho va ten")
    }
    var email = document.getElementById("email");
    if (email.value.length == 0) {
        alert("ban chua nhap email")
    }

    var genders = document.getElementsByName("gender")
    if (!genders[0].checked && !genders[1].checked) {
        alert("ban chua chon gioi tinh")
    }
    var loai = document.getElementById("quoctich");
    if (loai.value.length == 0) {
        alert("moi ban nhap quoc tich")
    }

}



const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const priceFilter = document.getElementById('priceFilter');
const totalPriceElement = document.getElementById('totalPrice');

// Function to update total price
function updateTotal() {
    let total = 0;
    document.querySelectorAll('tbody tr').forEach(row => {
        const checkbox = row.querySelector('input[type="checkbox"]');
        const quantityInput = row.querySelector('input[type="number"]');
        const price = parseInt(row.dataset.price);
        const quantity = parseInt(quantityInput.value);
        const totalRow = row.querySelector('td:last-child');

        if (checkbox.checked && quantity > 0) {
            const rowTotal = price * quantity;
            totalRow.textContent = rowTotal;
            total += rowTotal;
        } else {
            totalRow.textContent = 0;
        }
    });
    totalPriceElement.textContent = total;
}

// Enable/Disable quantity input based on checkbox
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        const row = this.closest('tr');
        const quantityInput = row.querySelector('input[type="number"]');
        quantityInput.disabled = !this.checked;
        quantityInput.value = this.checked ? 1 : 0; // Default value when checked
        updateTotal();
    });
});

// Update total when quantity is changed
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', updateTotal);
});

// Filter items by price range
priceFilter.addEventListener('change', function () {
    const filterValue = this.value;
    document.querySelectorAll('tbody tr').forEach(row => {
        const price = parseInt(row.dataset.price);
        if (filterValue === 'all' ||
            (filterValue === 'below300' && price < 300) ||
            (filterValue === '300to600' && price >= 300 && price <= 600) ||
            (filterValue === 'above600' && price > 600)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});
