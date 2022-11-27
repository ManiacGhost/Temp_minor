function generatepdf()
{
    const element = document.getElementById("invoice");

    html2pdf()
    .from(element)
    .save()
}