// Problem 1:
const reverseStr = (str) => {
    return str.split('').reverse().join('');
};
alert(reverseStr(prompt('Problem 1: Enter a string')));

// Problem 2:
const arr = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3];
alert(
    'Problem 2: \n' +
        arr.filter((item, index) => {
            return arr.indexOf(item) === index;
        })
);

// Problem 3:
const arr3 = [1, 2, 3, 5, 6, 4, 1, 2, 1, 6, 3, 5, 3];
const freq = {};
arr3.forEach((num) => {
    if (num in freq) freq[num]++;
    else freq[num] = 1;
});

const findMax = (obj) => {
    let max = 0;
    let maxKey;
    for (key in obj) {
        if (max < obj[key]) {
            maxKey = key;
            max = obj[key];
        }
    }

    return {
        value: Number.parseInt(maxKey),
        count: max,
    };
};

// console.log(findMax(freq));

// Problem 4:
const listEl = document.querySelector('.contact-list');
const nameEl = document.querySelector('input[name="name"]');
const phoneEl = document.querySelector('input[name="phone"]');
const searchEl = document.querySelector('input[name="search"]');
const addBtn = document.querySelector('.add-btn .btn');
const searchBtn = document.querySelector('#search');
const deleteBtn = document.querySelector('#delete');

const render = (data) => {
    const dataByName = data.sort((a, b) => {
        if (a.name < b.name) return -1;
        return 1;
    });

    listEl.innerHTML = dataByName
        .map(
            (info) => `
                <li class="contact-item">
                    <p class="name">${info.name}</p>
                    <p class="phone">${info.phone}</p>
                </li>
            `
        )
        .join('');
};

window.onload = () => render(data);

addBtn.addEventListener('click', () => {
    const name = nameEl.value;
    const phone = phoneEl.value;

    data.push({ name, phone });
    render(data);

    nameEl.value = '';
    phoneEl.value = '';
});

searchBtn.addEventListener('click', () => {
    const value = searchEl.value.toLowerCase();
    const results = data.filter((info) => info.name.includes(value) || info.phone.includes(value));
    render(results);
});

deleteBtn.addEventListener('click', () => {
    const results = [];

    data.map((info) =>
        results.filter((user) => user.phone == info.phone).length > 0 ? null : results.push(info)
    );

    data = results;
    render(data);
});
