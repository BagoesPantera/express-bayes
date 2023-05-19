const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const data = [
  {
    bahanPokok: "Baik",
    cuaca: "Baik",
    persediaan: "Banyak",
    kendaraan: "Baik",
    prediksi: "Turun",
  },
  {
    bahanPokok: "Baik",
    cuaca: "Baik",
    persediaan: "Banyak",
    kendaraan: "Rusak",
    prediksi: "Turun",
  },
  {
    bahanPokok: "Baik",
    cuaca: "Baik",
    persediaan: "Kurang",
    kendaraan: "Rusak",
    prediksi: "Naik",
  },
  {
    bahanPokok: "Rusak",
    cuaca: "Buruk",
    persediaan: "Kurang",
    kendaraan: "Rusak",
    prediksi: "Turun",
  },
  {
    bahanPokok: "Rusak",
    cuaca: "Baik",
    persediaan: "Banyak",
    kendaraan: "Baik",
    prediksi: "Turun",
  },
  {
    bahanPokok: "Rusak",
    cuaca: "Buruk",
    persediaan: "Kurang",
    kendaraan: "Baik",
    prediksi: "Turun",
  },
  {
    bahanPokok: "Baik",
    cuaca: "Buruk",
    persediaan: "Kurang",
    kendaraan: "Rusak",
    prediksi: "Naik",
  },
  {
    bahanPokok: "Baik",
    cuaca: "Buruk",
    persediaan: "Banyak",
    kendaraan: "Baik",
    prediksi: "Naik",
  },
  {
    bahanPokok: "Baik",
    cuaca: "Buruk",
    persediaan: "Banyak",
    kendaraan: "Rusak",
    prediksi: "Naik",
  },
  {
    bahanPokok: "Rusak",
    cuaca: "Baik",
    persediaan: "Banyak",
    kendaraan: "Rusak",
    prediksi: "Turun",
  },
  {
    bahanPokok: "Rusak",
    cuaca: "Buruk",
    persediaan: "Kurang",
    kendaraan: "Baik",
    prediksi: "Naik",
  },
];

async function main() {
  data.forEach(async (data) => {
    await prisma.data.create({
      data: data,
    });
  });
  console.log("Seed data success");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });