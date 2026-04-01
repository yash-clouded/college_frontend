import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const extractPdfText = async (filePath, outputFileName) => {
  try {
    const fileBuffer = fs.readFileSync(filePath);
    const uint8Array = new Uint8Array(fileBuffer);
    const pdf = await pdfjsLib.getDocument({ data: uint8Array }).promise;
    
    let text = "";
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map((item) => item.str).join(" ");
      text += pageText + "\n";
    }

    // Save to JSON file
    const outputPath = path.join(
      __dirname,
      "..",
      "src",
      "content",
      outputFileName
    );

    // Create directory if it doesn't exist
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Write the text content as a JSON file
    fs.writeFileSync(
      outputPath,
      JSON.stringify({ content: text }, null, 2)
    );

    console.log(`✓ Extracted: ${outputFileName}`);
    return text;
  } catch (error) {
    console.error(`Error extracting ${filePath}:`, error.message);
    throw error;
  }
};

(async () => {
  try {
    const publicDir = path.join(__dirname, "..", "public");

    console.log("Extracting PDF text...\n");

    await extractPdfText(
      path.join(publicDir, "about-college-connects.pdf"),
      "about.json"
    );

    await extractPdfText(
      path.join(publicDir, "privacy-policy.pdf"),
      "privacy.json"
    );

    await extractPdfText(
      path.join(publicDir, "terms-and-conditions.pdf"),
      "terms.json"
    );

    console.log("\n✓ All PDFs extracted successfully!");
  } catch (error) {
    console.error("Failed to extract PDFs:", error);
    process.exit(1);
  }
})();
