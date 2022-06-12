const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");
const fs = require('fs/promises')

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const dataFile = './external.js';
const utf8 = 'utf-8';

const promiseOutput = async (args) => {

  try {
    let hasil= [];
    const hasilIXX = await promiseTheaterIXX(fs.readFile(dataFile, utf8))
    const hasilVGC = await promiseTheaterVGC(fs.readFile(dataFile, utf8))
    hasil.push(hasilIXX)
    hasil.push(hasilVGC)

    if (args === 'marah') {
      const hitungHasilIXX = hasil[0].filter((a) => a.hasil == 'marah')
      const hitungHasilVGC = hasil[1].filter((a) => a.hasil == 'marah')
      return hitungHasilIXX.length + hitungHasilVGC.length
    }
    else {
      const hitungHasilIXX = hasil[0].filter((a) => a.hasil == 'tidak marah')
      const hitungHasilVGC = hasil[1].filter((a) => a.hasil == 'tidak marah')
      return hitungHasilIXX.length + hitungHasilVGC.length
    }
  }
  catch(err) {
    return err
  }
};

module.exports = {
  promiseOutput,
};
