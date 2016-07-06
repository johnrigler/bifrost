<?php

$array = file("middle_01.ans");
$target = array();
$count = 0;
$colors = array("[0;32m","[0;33m","[0;34m","[0;35m","[0;36m","[0m","");
$markup = array("<span class=font32m>","<span class=font33m>","<span class=font34m>","<span class=font35m>","<span class=font36m>","</span>","");

foreach($array as $line)
	{
	if(strlen($line)>2)
		{
		$check = explode(" ",$line);
		if($check[0] == 'PLAY')
			{
			$count = 0;
			$sec = $check[0];
			$task = "-";
			}


			if($check[0] == 'TASK')
				{
				$count = 0;
				$sec = $check[0];
				$task = rtrim(substr($check[1],1),']');
				//echo "$task\n";
				}
			else
				$newline = str_replace($colors,$markup,$line);
				$target[$sec][$task][$count] = $newline;
		}
	$count++;
	}

echo "<pre>";
print_r($target);
echo "</pre>";

?>
