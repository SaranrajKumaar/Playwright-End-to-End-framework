const excelJs = require("exceljs");

async function writeExcelTest(searchText, updatetext, change, path) {

  const workBook = new excelJs.Workbook();
  await workBook.xlsx.readFile(path);

  const sheet = workBook.getWorksheet("Fruits");

  // find cell containing searchText
  const output = await readExcel(sheet, searchText);

  if (output.rows === -1) {
    console.log("Text not found");
    return;
  }

  // move row/column if needed
  const newRow = output.rows + (change.rowChange || 0);
  const newCol = output.column + (change.colChange || 0);

  // update price cell
  sheet.getCell(newRow, newCol).value = updatetext;

  // save excel
  await workBook.xlsx.writeFile(path);

  console.log("Excel updated successfully");
}


async function readExcel(sheet, searchText){

  let output = { rows: -1, column: -1 };

  sheet.eachRow((row, rowNumber) => {
    row.eachCell((cell, colNumber) => {

      let cellVal = cell.value;

      // 🔹 FIX: handle objects / richText / numbers
      if (cellVal && typeof cellVal === "object") {
        if (cellVal.text) cellVal = cellVal.text;
        else if (cellVal.richText)
          cellVal = cellVal.richText.map(t => t.text).join("");
      }

      // 🔹 FIX: safe compare (trim + lowercase)
      if (
        cellVal &&
        String(cellVal).trim().toLowerCase() ===
        String(searchText).trim().toLowerCase()
      ) {
        output.rows = rowNumber;
        output.column = colNumber;
      }

    });
  });

  return output;
}


// update price next to fruit
writeExcelTest('Kivi', 500, { rowChange:0, colChange:1 }, "./files/download.xlsx");
