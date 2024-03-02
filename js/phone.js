const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones);
}


const displayPhones = phones => {
    // console.log(phones);

    const PhoneContainer = document.getElementById('phone-container');
    // clear phone container cards before adding new cards
    PhoneContainer.textContent = '';

    // display show all button if there are more than 12 phones
    const showAllContainer = document.getElementById('show-all-container');
    if(phones.length > 12){
        showAllContainer.classList.remove('hidden');
    }
    else{
        showAllContainer.classList.add('hidden');
    }

    phones = phones.slice(0,12);

    phones.forEach(phone => {
        console.log(phone);
        // 2 create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-base-100 p-4 shadow-xl`;
        // 3 set innerHTML
        phoneCard.innerHTML = `<figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
        </div>
        </div>`
        // 4 append child
        PhoneContainer.appendChild(phoneCard);
    })
}


const handleSearch = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText);
}

const handleSearch2 = () => {
    const searchField = document.getElementById('search-field2');
    const searchText = searchField.value;
    loadPhone(searchText);
}
// loadPhone();