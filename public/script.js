window.onload=function(){
    document.getElementById("download")
    .addEventListener("click",()=>{
        const invoice = this.document.getElementById("invoice");
        console.log(invoice);
        console.log(window);
        var opt = {
            margin: 1,
            filename: 'myfile.pdf',
            image: { type: 'jpeg', quality:0.98},
            html2canvas: { scale:5},
            jsPDF: { unit: 'mm', format: 'a2', orientation: 'landscape' }
        

        }
        html2pdf().from(invoice).set(opt).save();
    })
}