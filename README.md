# 1click_splatnet2statink

1. Install <a href="https://www.tampermonkey.net/">Tampermonkey</a> and user script <a href="https://github.com/koichim/1click_splatnet2statink/raw/master/s2s_button_in_statink.user.js">s2s_button_in_statink.user.js</a>
2. Download <a href="https://github.com/frozenpandaman/splatnet2statink/releases">splanet2statink.exe</a> and put it in (splatnet2statink path) and run it to configure your Nintendo account
3. Download <a href="https://github.com/koichim/1click_splatnet2statink/blob/master/splatnet2statink_protocol.ps1">splatnet2statink_protocol.ps1</a> to (splatnet2statink path)
4. add following resistory entories,
<pre>
HKEY_CLASSES_ROOT
   splatnet2statink
      (Default) = "URL:splatnet2statink"
      URL Protocol = ""
      DefaultIcon
         (Default) = "(splatnet2statink path)\splatnet2statink.exe,1"
      shell
         open
            command
               (Default) = C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe -ExecutionPolicy RemoteSigned -File (splatnet2statink path)\splatnet2statink_protocol.ps1 "%1"
</pre>
