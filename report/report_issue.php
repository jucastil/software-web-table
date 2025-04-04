<?php


function died($error) {
    echo "<html>";
    echo "<div align=\"center\"><img src=\"../athena-blue.jpg\" alt=\"MPIBP logo\">";
    echo "<p align=\"center\"><h1>There were error(s) with your input.</h1>";
    echo "These errors appear below.<br /><br />";
    echo $error."<br /><br />";
    echo "Please go back and fix these errors.<br /><br />";
    echo "<button type=\"button\" style=\"background-color:red; border-radius:8px; width: 100px; height: 50px; \"onClick=\"window.location ='../index.html'\">Back to main</button></DIV>";
    echo "</html>";
    exit();
}

// POST data (all together)
$p_username = $_POST['username'];
$p_group    = $_POST['group'];
$p_swgroup  = $_POST['sw-groupe'];
$p_sw       = $_POST['sw'];
$p_webaddr  = $_POST['web-address'];
$p_email    = $_POST['email'];
$p_issues   = $_POST['describe-issues'];

// REQUIRED
$required = array('username', 'group', 'sw-groupe', 'sw', 'web-address', 'email');
foreach ($required as $field) {
    if (empty($_POST[$field])) {
        died('<b>Some submission fields are empty</b><br> Please fill all the fields');
    }
}

$email_to = $p_email . ", jucastil@biophys.mpg.de";
$email_regex = "/([a-zA-Z0-9!#$%&’?^_`~-])+@([a-zA-Z0-9-])+/";
if (!preg_match($email_regex, $email_to)) {
    died('<b>email address seems to be incorrect or wrongly written</b>');
}

// Send email using sendemail command
$email_subject = "Report issue : submitted by " . $p_username . " created";
$email_message = "Submitted: ".date("Y-m-d")."\n";
$email_message .= "Time: ".date("H:i")."\n";
$email_message .= " ..............\n";
$email_message .= "Username: " . $p_username . "\n";
$email_message .= "Group: " . $p_group . "\n";
$email_message .= "SW group" . $p_swgroup . ".sh \n";
$email_message .= "SW name: " . $p_sw . "\n";
$email_message .= "Reference Web address: " . $p_webaddr . "\n";
$email_message .= "Issues: " . $p_issues . "\n";
$email_message .= " \n";
$email_message .= "Your report has been submitted. \n";
$email_message .= "To get an update, please write to: Juan.Castillo@biophys.mpg.de \n";

$mail_command = "sendemail -f 'softwarereport@biophys.mpg.de' -t '$email_to' -u '$email_subject' -s smtp.biophys.mpg.de -o 'reply-to=Juan.Castillo@biophys.mpg.de' -o tls=auto -m '$email_message'";
exec($mail_command, $output, $result);

$email_status = ($result == 0) ? 'Email sent successfully' : 'Email sending failed: ' . implode("\n", $output);

?>


<html>
    <head>
        <title>Report submitted</title>
        <style>
            .my_text {
                font-family: Arial, Helvetica, sans-serif;
                font-size: 20px;
                font-weight: bold;
            }
        </style>
    </head>
<br><br>
<DIV ALIGN="center"> <img src="../img/athena-transparent.png" alt=""></DIV>
<DIV ALIGN="center" class="my_text"><H1><B>Thank you for your input</B></H1></DIV>
<DIV ALIGN="center" class="my_text">Software Report system<br><br><br></DIV>
<DIV ALIGN="center" class="my_text"><p><?php echo $email_status; ?></p><p><?php echo $db_status; ?></p></DIV>
<DIV ALIGN="center"><button type="button" style="background-color:yellow; border-radius:8px; width: 150px; height: 50px;" onClick="window.location ='../index.html'">Back to main</button></DIV>
</html>
