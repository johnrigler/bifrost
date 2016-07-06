<?php

$stdout_l = array();
$count = 0;
$rcnext = 0;
$stdout_lines = 0;
$goodkeys = array ( 'stderr','stdout','msg','unreachable','status','changed','rc' );

while (false !== ($line = fgets(STDIN))) {
	if($rcnext==1)
	{
	$easykeys['errormessage'] = $line;
	$rcnext = 0;
	$count = 0;
	continue;
	}
	else
	{	
	 if($count == 0)
	 {
	 $easykeys = array();
	 $subkeys = array();

   	 $pipebomb = explode("|",$line);  // my little joke, the results of exploding on a pipe
	 $target = rtrim($pipebomb[0]);
	 $status = explode(" ",$pipebomb[1]);
	 $easykeys['status'] = $status[1];
	

	 if(count($pipebomb) == 3)
		{
		list($rc,$trash) = explode(" ",substr($pipebomb[2],4));
		$rcnext = 1;
		}
	 }
	}
	if($count > 0)
	 {
	 $colonbomb = explode(':',$line); // same, but with colon
	 $end = trim($line);
	 $key = trim(trim($colonbomb[0]),'"');

        if(array_search($key,$goodkeys))
                $easykeys[$key] = $value;
                        else
                        $subkeys[$key] = $value;

//	 if($key == 'stdout_lines')$stdout_lines++;

//	if($stdout_lines > 0)	
//		$stdout_l []= $line;

	 if(count($colonbomb) == 2)
	 	$value = trim(trim($colonbomb[1]),',');  /// normal line, not stdout_lines

/*	if($end == ']')
		{
	//	$initial['stdout_lines'] = $stdout_l;
	//	unset($stdout_l); 
	//	$stdout_lines = 0;
		echo "xxxxxxxxxx $target xxxxxxxxxxx";
		print_r($initial);
		}
*/

	if($end == '}')
		{
		$count = -1;
		$rcnext = 0;
		echo "------- $target";
		print_r($easykeys);
		echo "sub....";
		print_r($subkeys);
		}


	}

$count++;
}
 

?>
