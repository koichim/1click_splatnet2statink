Param(
[string]$arg1
)
$arg1=$arg1.Replace("splatnet2statink:","")
#$arg1=[System.Web.HttpUtility]::UrlDecode($arg1)
$arg1=[uri]::UnescapeDataString($arg1)
#C:\Users\koichi\splatnet2statink\splatnet2statink.exe "$arg1"
$arg_array=$arg1.split(" ")
C:\Users\koichi\splatnet2statink\splatnet2statink.exe $arg_array[0] $arg_array[1]

add-type -AssemblyName microsoft.VisualBasic
add-type -AssemblyName System.Windows.Forms

start-sleep -Milliseconds 500

#$ps = Get-Process | Where-Object {$_.Name -eq "chrome" -and $_.MainWindowTitle -eq "–³‘è - Google Chrome"}
#Get-Process | Where-Object {$_.Name -eq "chrome"} | Format-List *
#Write-Host $ps
$ps = Get-Process | Where-Object {$_.Name -eq "chrome" -and $_.MainWindowTitle -eq "–³‘è - Google Chrome"}

#start-sleep -S 60

foreach($process in $ps){
    [Microsoft.VisualBasic.Interaction]::AppActivate($process.ID);
    [System.Windows.Forms.SendKeys]::SendWait("^w")
}