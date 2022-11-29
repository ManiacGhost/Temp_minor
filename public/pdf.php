<?php
if(!empty($_POST['submit'])){
    $roll = $_POST['name'];
    $roll = $_POST['email'];
    $roll = $_POST['desig'];
    $roll = $_POST['qual'];
    $roll = $_POST['dep'];
    $roll = $_POST['doj'];
    $roll = $_POST['initdesig'];
    $roll = $_POST['pay'];
    $roll = $_POST['spc'];
    $roll = $_POST['addqual'];
    $roll = $_POST['higher'];

    require("fpdf.php");

    $pdf = new FPDF();
    $pdf->AddPage();

    $pdf->SetFont("Times New Roman","",14);
    $pdf->Cell(0,10,"JAYPEE INSTITUTE OF INFORMATION TECHNOLOGY",0,1,'C');

    $pdf->Output();


}
?>