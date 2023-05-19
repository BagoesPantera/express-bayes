-- CreateTable
CREATE TABLE "Data" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "bahanPokok" TEXT NOT NULL,
    "cuaca" TEXT NOT NULL,
    "persediaan" TEXT NOT NULL,
    "kendaraan" TEXT NOT NULL,
    "prediksi" TEXT NOT NULL
);
