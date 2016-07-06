<head>
<link rel="stylesheet" type="text/css" href="style.css">
 <meta http-equiv="refresh" content="10">


<?php

function prettyprint_r( $array ) {

echo "<pre>";
print_r ( $array );
echo "</pre>";


}


if ($_GET['cmd'])
	{
	$cmd=$_GET['cmd'];
	}

?>

</head>

<?php
// map this directory

$dir = opendir(".");

include '.onload.php';

$filedirs = array();

while(false != ($readfile = readdir($dir))) 
{


//$pattern = '/^.*_[0-9][0-9]\.php$/'; // Only capture numbered php files.
//$pattern2 = '/^.*_[0-9][0-9]\.bash$/'; // Only capture numbered bash files.
//$stat = 	'/^.*_[0-9][0-9]\.stat$/'; // Only capture numbered stat files.
//$typescript = 	'/^.*_[0-9][0-9]\.ts$/'; // Only capture numbered typescript files.
$match = 	'/^.*_[0-9][0-9]\.*/';
//$xmatch = '/*\.php/';


if(is_file($readfile) == 1)
  {
	if(preg_match($match,$readfile))
		{
		$files [] = $readfile;
		}
	}


if(is_dir($readfile) == 1)$dirs [] = $readfile;
}


asort($files);
asort($dirs);

prettyprint_r($files);

$target = array();

?>

<div class=heading>

<?php

// Draw out the path

$length = strlen($_SERVER[DOCUMENT_ROOT]);
$cwd = getcwd();

if ($cwd[1] == ":") 
        {
        $path = explode('\\',substr($cwd,$length));
        }
        else
        {
        $path = explode('/',substr($cwd,$length));
        }

unset($path[0]);

$breadcrumb = "";

?>

<div class=menu>

<?php

for($x = 1 ; $x < count($path) ; $x++)
  { 
    $breadcrumb = $breadcrumb . "/" . $path[$x];
//  echo "[<a href=$breadcrumb >" . $path[$x] . "</a>]";

// This is a comment that explains breadcrumbs, but it doesn't
// it really explains comments.

  echo "[<a href='$breadcrumb' title='";
//  include "$path[$x]/desc.php";
   $descfile = $_SERVER[DOCUMENT_ROOT] . $breadcrumb . "/desc.php";
   include "$descfile";
  echo "'>" . $path[$x] . "</a>]";
  }

  $last = count($path); 
  $thispage = $path[$last];
  echo "<bold>[$thispage]</bold>";
?>

<hr>


<?php


foreach ($dirs as $dir)
  { 
				if($dir=='.')continue;
				if($dir=='..')continue;

        echo "[<a href='$dir'>$dir</a>]";
  }

?>

</div>
</div>

<hr>

<?php

foreach ($files as $file)
  {
  list($base,$type) = explode(".",$file);
  list($section,$number) = explode("_",$base);
  $target[$section][$number][$type] = $file;
  }

function arraytotable($array) {

$keys=array_keys($array);
$somecol=$array[$keys[0]];

print_r($somecol);

echo "<table border=1>";

	echo "<th>";
foreach($array as $key=>$record)
	{
	echo "<th>$key</th>";
	}
	$count=0;
foreach($array as $record)
	{
	$thisrow = $keys[$count];
	echo "<tr><td>$thisrow</td>";
	
	foreach($record as $key2=>$cell)
		{
		echo "<td>$cell</td>";
		}
	//print_r($record);
	echo "</td></tr>";
	$count++;
	}

echo "</table>";

}

function section ($name,$section) {

  echo "<div class=$name>\n";
    foreach ($section as $key=>$element)
      {
	include "$element[php]";


	echo "<hr>";
		$value=`cat $element[bash]`;
	$result=`$value`;
	echo "<pre>";
	$lines = explode("\n",$result);
	echo "<br>";
 

        echo "<hr>";
                $value=`cat $element[ts]`;
        echo "<pre>";
        $lines = explode("\n",$value);
	echo "</pre>";
        echo "<br>";

	//$line = $lines[4];
	//prettyprint_r($lines);

        $count=0;	

	foreach ($lines as $line)			# Deal with colors in bash
    {

    /**///  Start: Replace font codes with markup
    $line = str_replace('[0;31m','<span class=font31m>',$line);
    $line = str_replace('[0;32m','<span class=font32m>',$line);
    $line = str_replace('[0;33m','<span class=font33m>',$line);
    $line = str_replace('[0;36m','<span class=font36m>',$line);
    $line = str_replace('[01;31m','<span class=font31m>',$line);
    $line = str_replace('[01;32m','<span class=font32m>',$line);
    $line = str_replace('[01;34m','<span class=font34m>',$line);
    $line = str_replace('[40;31;01m','<span class=font35m>',$line);
	$line = str_replace(']0m;','</span>',$line);
	$line = str_replace(']0;','',$line);
	$line = str_replace('[0m','</span>',$line);
	$line = str_replace(chr(27) . '<','<',$line);
    /**///  End: Replace font codes with markup


//	$line = preg_replace('/\[K/','',$line);
	echo $line;
	if($count == 0)echo "<br>";
	$count++;


//	prettyprint_r($pieces);

	}

	$countstat = count($element[stat]);
	if($countstat==1)
	{
	$target = array();
	$stat_blob=`cat $element[stat]`;
	$stat_array = explode("\n",$stat_blob);
	$header = array_shift($stat_array);
	list($title,$body) = explode("|",$header);
	$fields = explode(",",$body);
	echo "<h1>$title</h1>";	
	echo "<hr>"; 
	foreach($stat_array as $stat_line)
		{
		if(strlen($stat_line) != 0)
			{
			list($row,$columns) = explode("|",$stat_line);
			$column_array = explode(",",$columns);
			$count=0;
			foreach($column_array as $column)
				{
				$key = $fields[$count];
				$target[$row][$key] = $column;
				$count++;
				}
			}
		}

	arraytotable($target);
			
	}

  echo "</pre>";
	echo "<hr>";

      }
  echo "</div>\n";
  }

?>
<div id="wrap">
  <div id="main">

<?php

/**///Start: Define sections for CSS
section("top",$target[top]);
section("left",$target[left]);
section("middle",$target[middle]);
section("right",$target[right]);
/**///End: Define sections for CSS
?>
	</div>
</div>

<div id=footer>
<?php
echo "<hr>";
section("bottom",$target[bottom]);
?>
</div>
