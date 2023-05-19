const { PrismaClient } = require("@prisma/client");
const e = require("express");
const prisma = new PrismaClient();

class DataController {

  static async getDataAll(req, res) {
    const result = await prisma.data.findMany({});
    res.status(200).json(result);
  }

  static async predict(req, res) {
    let turun = 0, naik = 0;
    let varNaik = [];
    let varTurun = []
    let tempNaik = 0, tempTurun = 0;
    let hasilNaik = 1, hasilTurun = 1;

    const datas = await prisma.data.findMany({});
    for (let i = 0; i < datas.length; i++) {
        if (datas[i].prediksi == "Naik") {
            naik++
        }else{
            turun++
        }
    }

    // BAHAN POKOK ==============================================
    for (let i = 0; i < datas.length; i++) {
        if (datas[i].bahanPokok == req.body.bahanPokok && datas[i].prediksi == "Naik") {
            tempNaik++
        }else if (datas[i].bahanPokok == req.body.bahanPokok && datas[i].prediksi == "Turun"){
            tempTurun++
        }
    }
    varNaik.push(tempNaik/naik)
    varTurun.push(tempTurun/turun)
    tempNaik = 0
    tempTurun = 0;


     // CUACA ==============================================
     for (let i = 0; i < datas.length; i++) {
        if (datas[i].cuaca == req.body.cuaca && datas[i].prediksi == "Naik") {
            tempNaik++
        }else if (datas[i].cuaca == req.body.cuaca && datas[i].prediksi == "Turun"){
            tempTurun++
        }
    }
    varNaik.push(tempNaik/naik)
    varTurun.push(tempTurun/turun)
    tempNaik = 0
    tempTurun = 0;

     //PERSEDIAAN ==============================================
     for (let i = 0; i < datas.length; i++) {
        if (datas[i].persediaan == req.body.persediaan && datas[i].prediksi == "Naik") {
            tempNaik++
        }else if (datas[i].persediaan == req.body.persediaan && datas[i].prediksi == "Turun"){
            tempTurun++
        }
    }
    varNaik.push(tempNaik/naik)
    varTurun.push(tempTurun/turun)
    tempNaik = 0
    tempTurun = 0;

     // KENDARAAN ==============================================
     for (let i = 0; i < datas.length; i++) {
        if (datas[i].kendaraan == req.body.kendaraan && datas[i].prediksi == "Naik") {
            tempNaik++
        }else if (datas[i].kendaraan == req.body.kendaraan && datas[i].prediksi == "Turun"){
            tempTurun++
        }
    }
    varNaik.push(tempNaik/naik)
    varTurun.push(tempTurun/turun)
    tempNaik = 0
    tempTurun = 0;

    // PREDIKSI
    for (let i = 0; i < varNaik.length; i++) {
       hasilNaik *= varNaik[i]
       hasilTurun *= varTurun[i]
    }
    hasilNaik *= (naik/datas.length)
    hasilTurun *= (turun/datas.length)

    if(hasilNaik >= hasilTurun){
        console.log("Harga akan naik");
        res.status(200).json({"Result" : "Harga akan naik"});
    }else{
        console.log("Harga akan turun");
        res.status(200).json({"Result" : "Harga akan turun"});
    }


    console.log(naik, turun, varNaik, varTurun, hasilNaik, hasilTurun);
  }
}

module.exports = DataController;
