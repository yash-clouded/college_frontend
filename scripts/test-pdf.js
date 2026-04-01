import pdfParse from "pdf-parse/legacy/build/pdf.js";
import getDocument from "pdf-parse/lib/pdf.js";

console.log("pdfParse:", typeof pdfParse);
console.log("Keys:", Object.keys(pdfParse || {}));
