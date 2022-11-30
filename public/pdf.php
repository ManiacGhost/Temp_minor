<?php
if(!empty($_POST['submit'])){
    $Roll = $_POST['name'];
    $Email = $_POST['email'];
    $Desig = $_POST['desig'];
    $Qual = $_POST['qual'];
    $Dep = $_POST['dep'];
    $Doj = $_POST['doj'];
    $Init = $_POST['initdesig'];
    $Pay = $_POST['pay'];
    $Spc = $_POST['spc'];
    $Addqual = $_POST['addqual'];
    $High = $_POST['higher'];
    
    require("fpdf.php");

    $pdf = new FPDF();
    $pdf->AddPage();

    $pdf->SetFont("Times New Roman","",14);
    $pdf->Cell(0,10,"JAYPEE INSTITUTE OF INFORMATION TECHNOLOGY",0,1,'C');

    $pdf->Output();


}
?>