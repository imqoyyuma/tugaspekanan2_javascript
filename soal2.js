let productBin = {
    requestId: null,
    data: [
        {
            id: 100000057465,
            storageId: 10000008207,
            code: "A01-01-01-A",
            productId: 110000081009,
            productName: "FloBrand-DressBSPink",
            productCode: "FBR00040101",
            quantity: 76,
            createdTime: "2021-12-21T13:54:48Z",
        },
        {
            id: 100000057466,
            storageId: 10000002181,
            code: "A01-01-01-B",
            productId: 110000081009,
            productName: "FloBrand-DressBSPink",
            productCode: "FBR00040101",
            quantity: 71,
            createdTime: "2021-12-21T13:54:48Z",
        },
        {
            id: 100000065224,
            storageId: 10000008884,
            code: "Tgt00-A-A-01",
            productId: 110000081009,
            productName: "FloBrand-DressBSPink",
            productCode: "FBR00040101",
            quantity: 10,
            createdTime: "2022-02-08T10:35:19Z",
        },
    ],
    message: "success",
};

// Buatlah sebuah program javascript untuk menjumlahkan quantity dari semua storageId untuk produk tersebut
// Hint : Gunakan metode Pengulangan, Array dan Object keys (silakan cari referensi cara mendapatkan value dari json)
// jumlahkan quantity dari productCode FBR00040101

let totalQty = 0;

for (let i = 0; i < productBin.data.length; i++) {
    if (
        productBin.data[i].productCode == "FBR00040101" &&
        productBin.data[i].productName == "FloBrand-DressBSPink"
    ) {
        totalQty = totalQty + productBin.data[i].quantity;
    } else {
        console.log(
            `Maaf, kode produk "FBR00040101 (FloBrand-DressBSPink)" tidak ditemukan.`
        );
    }
}
console.log(
    `Jumlah total Qty dari kode produk "FBR00040101 (FloBrand-DressBSPink)" secara keseluruhan adalah sebanyak ${totalQty} unit.`
);
