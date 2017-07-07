<?php
require_once('../mysqli_connect.php);
$query = "select first_name, last_name, email, city, state, phone, from students";

$response = @mysqli_query($dbc, $query);
if($response) {
echo '<table align = "left"
cellspacing="5" cellpadding="8"> 
<tr><td align="left"><b>First Name</b></td>
<tr><td align="left"><b>Last Name</b></td>
<tr><td align="left"><b>Email</b></td>
<tr><td align="left"><b>City</b></td>
<tr><td align="left"><b>State</b></td>
<tr><td align="left"><b>Phone</b></td>';
while($row = mysqli_fetch_array_($response)) {
echo '<tr><td align="left">'.
$row['first_name'] . '</td><td align="left">'.
$row['last_name'] . '</td><td align="left">'.
$row['Email'] . '</td><td align="left">'.
$row['City'] . '</td><td align="left">'.
$row['State'] . '</td><td align="left">'.
$row['Phone'] . '</td><td align="left">'.
echo '</tr>';
}
echo '</table>';
} else {
echo "Couldnt issue database entry";
echo mysqli_error($dbc);
}
mysqli_close($dbc);
?>

