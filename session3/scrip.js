Heloo = (a, b) => {
    a = 100, b = 200;
    console.log(a + b);
    var listNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log("Chieu dai mang la : " + listNumber.length);
    console.log("Phan tu co index bang 7 la : " + listNumber[7]);
    listNumber.splice(5, 1);
    console.log(listNumber);
    const map = listNumber.map(x => x * 3);
    console.log(map);
}
Heloo();

