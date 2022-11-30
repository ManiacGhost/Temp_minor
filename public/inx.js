submit_button.js();

const { PDFDocument } = require('pdf-lib');
const { readFile, writeFile } = require('fs/promises');

async function createPdf(input, output)
{
    try{
        const pdfDoc = await PDFDocument.load(await readFile(input));

        const fieldnames = pdfDoc.getForm().getFields().map(f => f.getName());
        console.log({ fieldnames });

        const form = pdfDoc.getForm();

        form.getTextField('Text-viyCwNmf93').setText({consout_name});
        form.getTextField('Text-uZW5I-RnXc').setText('Assistant teacher');
        
        
        const pdfBytes = await pdfDoc.save();

        await writeFile(output, pdfBytes);
        console.log('PDF created');
    }
    catch(err){
        console.log(err);
        }
    
}
    createPdf('appraisal.pdf','output.pdf');