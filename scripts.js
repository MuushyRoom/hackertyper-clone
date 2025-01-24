


function startHack() {
  let cliNum = Math.floor(Math.random() *5);
  let hackNum = Math.floor(Math.random() * 21);
  let cli1 = document.getElementById("cli_1");
  let cli2 = document.getElementById("cli_2");
  let cli3 = document.getElementById("cli_3");
  let cli4 = document.getElementById("cli_4");
let cli5 = document.getElementById("cli_5");
let title = document.getElementById("resultTitle");

  if(cliNum == 0 ||cliNum == 4){
    //CLI 1
 
    document.getElementById("cli_1").scrollTop = document.getElementById("cli_1").scrollHeight 
    if(hackNum == 0){
      cli1.textContent += "      ";
    }else if(hackNum == 1){
    
      cli1.textContent += "Uploading payload.exe [███████████████████████████████████████] 100% \r\n";
      cli1.textContent += "Executing payload...\r\n ";
    }
    else if(hackNum == 2){
      cli1.textContent += "  Firewall Status: DISABLED  ";
      cli1.textContent += " \r\n";
    }
    else if(hackNum == 3){
      cli1.textContent += "[2095-24-23 69:23:24] [INFO] Initializing system...\r\n";
    }
    else if(hackNum == 4){
      cli1.textContent += "[2095-24-23 69:23:24] [DEBUG] Loading module 'CoreEncryption'\r\n";
    }else if(hackNum == 5){
      cli1.textContent += "  [2095-24-23 69:23:24] [INFO] Establishing remote connection...  ";
    }
    else if(hackNum == 6){
      cli1.textContent += "  [2095-24-23 69:23:24] [INFO] Connection terminated.  ";
      cli1.textContent += "[!] System Compromised. Admin privileges obtained.\r\n";
    }
    else if(hackNum == 7){
      cli1.textContent += "  Generating secure hash...  ";
      cli1.textContent += "Network Speed: 500Mbps up / 700Mbps down\r\n";
    }
    else if(hackNum == 8){
      cli1.textContent += "  Firewall Status: DISABLED  ";
    }
    else if(hackNum == 9){
      cli5.textContent += "\r\n[>] Downloading data...\r\n";
      cli5.textContent += "[>] 25% complete...\r\n";
      cli5.textContent += "[>] 50% complete...\r\n";
      cli5.textContent += "[>] 75% complete...\r\n";
      cli5.textContent += "\r\n[>] 100% complete.\r\n";
     
    }
    else if(hackNum == 10){
      cli1.textContent += "Network Speed: 500Mbps up / 700Mbps down\r\n";
      cli1.textContent += "$ sudo initiate_system_scan --target 192.168.0.1\r\n";
      cli1.textContent += "Scanning for vulnerabilities... \r\n";
    }
    else if(hackNum == 11){
      cli1.textContent += "  ";
    }
    else if(hackNum == 12){
      cli1.textContent += "  ";
    }
    else if(hackNum == 13){
      cli1.textContent += "\r\n";
      cli1.textContent += "";
      cli1.textContent += "\r\n";
    }
    else if(hackNum == 14){
      cli1.textContent += "\r\n";
    }
    else if(hackNum == 15){
      cli1.textContent += "[+] Port 22: Open\r\n";
    }
    else if(hackNum == 16){
      cli1.textContent += "[+] Access gained! \r\n ";
    }
    else if(hackNum == 17){
      cli1.textContent += "[+] Found SSH credentials: root:toor\r\n ";
    }
    else if(hackNum == 18){
      cli1.textContent += "[!] Exploiting vulnerability CVE-2025-12345\r\n";
    }
    else if(hackNum == 19){
      cli1.textContent += "[2095-24-23 69:23:24] [ALERT] Unauthorized access detected. Countermeasures activated.\r\n";
    }
    else if(hackNum == 20){
      cli1.textContent += "\r\n";
      cli1.textContent += "Packet_Tracer: █░░███░░███░░░░░██████░░ [0.52%-Diff]";
      cli1.textContent += "\r\n";
 
    }
  }

  
   else if(cliNum == 1 ||cliNum == 3){
    //CLI 2
    document.getElementById("cli_2").scrollTop = document.getElementById("cli_2").scrollHeight 
    if(hackNum == 0){
      cli2.textContent += "      ";
    }else if(hackNum == 1){
      cli2.textContent += "[████████████████████░░░░░░░░░░░░░░░░░] 45% complete... \r\n";
     
      cli2.textContent += "Executing payload...\r\n ";
    }
    else if(hackNum == 2){
      cli2.textContent += "[!] System Compromised. Admin privileges obtained.\r\n";
    }
    else if(hackNum == 3){
      cli2.textContent += "[2095-24-23 69:23:24] [INFO] Initializing system...\r\n";
    }
    else if(hackNum == 4){
      cli2.textContent += "\r\n[WARNING: SYSTEM INSTABILITY DETECTED]\r\n";
    }else if(hackNum == 5){
      cli2.textContent += "[███████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 72% complete...\r\n";
    }
    else if(hackNum == 6){
      cli2.textContent += "  [2095-24-23 69:23:24] [INFO] Connection terminated.  ";
    }
    else if(hackNum == 7){
      cli2.textContent += "  Generating secure hash...  ";
      cli2.textContent += "[+] Found SSH credentials: root:toor\r\n ";
    }
    else if(hackNum == 8){
      cli2.textContent += "  Firewall Status: DISABLED  ";
      cli2.textContent += "\r\n";
    }
    else if(hackNum == 9){
      cli2.textContent += "\r\n";
      cli2.textContent += "System CPU Usage: ██████████░░░░░░░ 63%";
      cli2.textContent += "\r\n";
    }
    else if(hackNum == 10){
      cli2.textContent += "Network Speed: 500Mbps up / 700Mbps down\r\n";
     
      cli2.textContent += "Scanning for vulnerabilities... \r\n";
    }
    else if(hackNum == 11){
      cli2.textContent += " \r\n ";
    }
    else if(hackNum == 12){
      cli2.textContent += "  \r\n";
    }
    else if(hackNum == 13){
      cli2.textContent += "\r\n";
      cli2.textContent += "";
      cli2.textContent += "\r\n";
    }
    else if(hackNum == 14){
      cli2.textContent += "\r\n";
    }
    else if(hackNum == 15){
      cli2.textContent += "[+] Port 22: Open\r\n";
      cli2.textContent += "$ sudo initiate_system_scan --target 192.168.0.1\r\n";
    }
    else if(hackNum == 16){
      cli2.textContent += "[+] Access gained! \r\n ";
    }
    else if(hackNum == 17){
      
    }
    else if(hackNum == 18){
      cli2.textContent += "[!] Exploiting vulnerability CVE-2025-12345\r\n";
    }
    else if(hackNum == 19){
      cli2.textContent += "[2095-24-23 69:23:24] [ALERT] Unauthorized access detected. Countermeasures activated.\r\n";
    }
    else if(hackNum == 20){
      cli2.textContent += "\r\n";
      cli2.textContent += "[Transferring Data ████████████████████████████████████████████] 100%";
      cli2.textContent += "[Data Transfer Complete. Covering tracks...]\r\n";
    }


  }
  //below this is countermeasures
  else  if(cliNum == 1  ||cliNum ==  2){
    //CLI 3
    document.getElementById("cli_3").scrollTop = document.getElementById("cli_3").scrollHeight 
    if(hackNum == 0){
      cli3.textContent += "      ";
    }else if(hackNum == 1){
      cli3.textContent += "Network Speed: 500Mbps up / 700Mbps down\r\n";
     
      cli3.textContent += "Uploading payload.exe [███████████████████████████████████████] 100% \r\n";
      cli3.textContent += "Scanning for vulnerabilities... \r\n";
      
    }
    else if(hackNum == 2){
      cli3.textContent += "[!] System Compromised. Admin privileges obtained.\r\n";
    }
    else if(hackNum == 3){
      cli3.textContent += "[2095-24-23 69:23:24] [INFO] Initializing system...\r\n";
    }
    else if(hackNum == 4){
      cli3.textContent += "[2095-24-23 69:23:24] [DEBUG] Loading module 'CoreEncryption'\r\n";
      cli3.textContent += "$ sudo initiate_system_scan --target 192.168.0.1\r\n";
    }else if(hackNum == 5){
      cli3.textContent += "  [2095-24-23 69:23:24] [INFO] Establishing remote connection...  ";
    }
    else if(hackNum == 6){
      cli3.textContent += "  [2095-24-23 69:23:24] [INFO] Connection terminated.  ";
    }
    else if(hackNum == 7){
      cli3.textContent += "  Generating secure hash...  ";
    }
    else if(hackNum == 8){
      cli3.textContent += "  Firewall Status: DISABLED  ";
    }
    else if(hackNum == 9){
      for(let i = 1; i <=25; i++){
        cli3.textContent += "----------------[Hack_Countermeasures_Activated!]----------------\r\n ";
        cli3.textContent += "----------------[Hack_Countermeasures_Activated!]----------------\r\n ";
        cli3.textContent += "----------------[Hack_Countermeasures_Activated!]----------------\r\n ";
        cli3.textContent += "----------------[Hack_Countermeasures_Activated!]----------------\r\n ";
        hackNum = 9;
      }
      title.textContent = "[System Control = ██████████████████████░░░░ 80%]";
    }
    else if(hackNum == 10){
      cli3.textContent += "$ deploy --malware payload.exe --target 192.168.1.100 \r\n";
      
      cli3.textContent += "Executing payload...\r\n ";
    }
    else if(hackNum == 11){
      cli3.textContent += "  ";
    }
    else if(hackNum == 12){
      for(let i = 1; i <=69; i++){
        cli3.textContent += "--------------------[System_Update: [Targeted!]]-----------------\r\n ";
        cli3.textContent += "--------------------[System_Update: [Targeted!]]-----------------\r\n ";
        cli3.textContent += "--------------------[System_Update: [Targeted!]]-----------------\r\n ";
        cli3.textContent += "--------------------[System_Update: [Targeted!]]-----------------\r\n ";
        hackNum = 12;
      }
     
    }
    else if(hackNum == 13){
      cli3.textContent += "\r\n";
      cli3.textContent += "RAM Usage: ████████████░░░░░░ 76%";
      cli3.textContent += "\r\n";
    }
    else if(hackNum == 14){
      cli3.textContent += "\r\n";
    }
    else if(hackNum == 15){
      cli3.textContent += "[+] Port 22: Open\r\n";
      cli3.textContent += "  Generating secure hash...  ";
      cli3.textContent += "[+] Access gained! \r\n ";
    }
    else if(hackNum == 16){
      cli3.textContent += "[+] Access gained! \r\n ";
    }
    else if(hackNum == 17){
      cli3.textContent += "[+] Found SSH credentials: root:toor\r\n ";
    }
    else if(hackNum == 18){
      cli3.textContent += "[!] Exploiting vulnerability CVE-2025-12345\r\n";
    }
    else if(hackNum == 19){
      cli3.textContent += "[2095-24-23 69:23:24] [ALERT] Unauthorized access detected. Countermeasures activated.\r\n";
    }
    else if(hackNum == 20){
      cli3.textContent += "\r\n";
      cli3.textContent += "[Data Transfer Complete. Covering tracks...]\r\n";
      cli3.textContent += "[Transferring Data ████████████████████████████████████████████] 100%\r\n";
      cli3.textContent += "[Rebooting system...]\r\n";
      cli3.textContent += "\r\n";
    }

    
  }
  //below this is a skull
  if(cliNum == 3 ||cliNum == 1){
    //CLI 4
    document.getElementById("cli_4").scrollTop = document.getElementById("cli_4").scrollHeight 
    if(hackNum == 0){
      cli4.textContent += "      ";
    }else if(hackNum == 1){
   
      cli4.textContent += "$ deploy --malware payload.exe --target 192.168.1.100 \r\n";
      cli4.textContent += "Uploading payload.exe [███████████████████████████████████████] 100% \r\n";
      cli4.textContent += "Executing payload...\r\n ";
    }
    else if(hackNum == 2){
      cli4.textContent += "[!] System Compromised. Admin privileges obtained.\r\n";
    }
    else if(hackNum == 3){
      cli4.textContent += " [2095-24-23 69:23:24] [INFO] Initializing system...\r\n";
    }
    else if(hackNum == 4){
      cli4.textContent += "\r\n";
      for(let i = 1; i <=69; i++){
        cli4.textContent += "                       \r\n ";
        cli4.textContent += "                    ███████████████████████████\r\n ";
        cli4.textContent += "                    ███████▀▀▀░░░░░░░▀▀▀███████\r\n ";
        cli4.textContent += "                    ████▀░░░░░░░░░░░░░░░░░▀████\r\n ";
        cli4.textContent += "                    ███│░░░░░░░░░░░░░░░░░░░│███\r\n ";
        cli4.textContent += "                    ██▌│░░░░░░░░░░░░░░░░░░░│▐██\r\n ";
        cli4.textContent += "                    ██░░└┐░░░░░░░░░░░░░░░┌┘░░██\r\n ";
        cli4.textContent += "                    ██░░┌┘▄▄▄▄▄░░░░░▄▄▄▄▄└┐░░██\r\n ";
        cli4.textContent += "                    ██▌░│██████▌░░░▐██████│░▐██\r\n ";
        cli4.textContent += "                    ███░│▐███▀▀░░▄░░▀▀███▌│░███\r\n ";
        cli4.textContent += "                    ██▀─┘░░░░░░░▐█▌░░░░░░░└─▀██\r\n ";
        cli4.textContent += "                    ██▄░░░▄▄▄▓░░▀█▀░░▓▄▄▄░░░▄██\r\n ";
        cli4.textContent += "                    ████▄─┘██▌░░░░░░░▐██└─▄████\r\n ";
        cli4.textContent += "                    █████░░▐█─┬┬┬┬┬┬┬─█▌░░█████\r\n ";
        cli4.textContent += "                    ████▌░░░▀┬┼┼┼┼┼┼┼┬▀░░░▐████\r\n ";
        cli4.textContent += "                    █████▄░░░└┴┴┴┴┴┴┴┘░░░▄█████\r\n ";
        cli4.textContent += "                    ███████▄░░░░░░░░░░░▄███████\r\n ";
        cli4.textContent += "                    ██████████▄▄▄▄▄▄▄██████████\r\n ";
        cli4.textContent += "                    █████████MuushyRoom████████\r\n ";
        cli4.textContent += "                    ███████████████████████████\r\n ";
        cli4.textContent += "                 \r\n ";
        hackNum = 4;
        title.textContent = "YOU ARE NOW HACKED!";
      }
      cli4.textContent += "\r\n";
    }else if(hackNum == 5){
      cli4.textContent += "\r\n";
    }
    else if(hackNum == 6){
      cli4.textContent += " [2095-24-23 69:23:24] [INFO] Connection terminated.  ";
    }
    else if(hackNum == 7){
      cli4.textContent += "  Generating secure hash...  ";
    }
    else if(hackNum == 8){
      cli4.textContent += "  Firewall Status: DISABLED  ";
    }
    else if(hackNum == 9){
      cli4.textContent += "$ deploy --malware payload.exe --target 192.168.1.100 \r\n";
      cli4.textContent += "\r\n";
      cli4.textContent += "\r\n";
    }
    else if(hackNum == 10){
      cli4.textContent += "Network Speed: 500Mbps up / 700Mbps down\r\n";
     
      cli4.textContent += "Scanning for vulnerabilities... \r\n";
    }
    else if(hackNum == 11){
      cli4.textContent += "  ";
    }
    else if(hackNum == 12){
      cli4.textContent += "$ sudo initiate_system_scan --target 192.168.0.1\r\n";
    }
    else if(hackNum == 13){
      cli4.textContent += "\r\n";
      cli4.textContent += "RAM Usage: ████████████░░░░░░ 76%";
      cli4.textContent += "\r\n";
    }
    else if(hackNum == 14){
      cli4.textContent += "\r\n";
    }
    else if(hackNum == 15){
      cli4.textContent += "[+] Port 22: Open\r\n";
    }
    else if(hackNum == 16){
      cli4.textContent += "[+] Access gained! \r\n ";
    }
    else if(hackNum == 17){
      cli4.textContent += "[+] Found SSH credentials: root:toor\r\n ";
    }
    else if(hackNum == 18){
      cli4.textContent += "[!] Exploiting vulnerability CVE-2025-12345\r\n";
    }
    else if(hackNum == 19){
      cli4.textContent += "[2095-24-23 69:23:24] [ALERT] Unauthorized access detected. Countermeasures activated.\r\n";
    }
    else if(hackNum == 20){
      cli4.textContent += "\r\n";
      cli4.textContent += "System CPU Usage: ██████████░░░░░░░ 63%";
      cli4.textContent += "\r\n";
    }

    
  }
   if(cliNum == 4 || cliNum == 3){
    //CLI 5
    document.getElementById("cli_5").scrollTop = document.getElementById("cli_5").scrollHeight 
    if(hackNum == 0){
      cli5.textContent += "      ";
    }else if(hackNum == 1){
      cli5.textContent += "$ deploy --malware payload.exe --target 192.168.1.100 \r\n";
      cli5.textContent += "[Stealth Mode Activated ███████████████████████████████████████] 100% \r\n";
      cli5.textContent += "[Rebooting system...]\r\n";
    }
    else if(hackNum == 2){
      cli5.textContent += "[!] System Compromised. Admin privileges obtained.\r\n";
      cli5.textContent += "Executing payload...\r\n ";
    }
    else if(hackNum == 3){
      cli5.textContent += "[2095-24-23 69:23:24] [INFO] Initializing system...\r\n";
    }
    else if(hackNum == 4){
      cli5.textContent += "[2095-24-23 69:23:24] [DEBUG] Loading module 'CoreEncryption'\r\n";
    }else if(hackNum == 5){
      cli5.textContent += "                                         [2095-24-23 69:23:24] [INFO] Establishing remote connection...  ";
    }
    else if(hackNum == 6){
      cli5.textContent += "          [2095-24-23 69:23:24] [INFO] Connection terminated.  ";
    }
    else if(hackNum == 7){
      cli5.textContent += "\r\n[>] Downloading data...\r\n";
      cli5.textContent += "[>] 25% complete...\r\n";
      cli5.textContent += "[>] 50% complete...\r\n";
      cli5.textContent += "[>] 75% complete...\r\n";
      cli5.textContent += "\r\n[>] 100% complete.\r\n";
      
      
      
    }
    else if(hackNum == 8){
      cli5.textContent += "                                  Firewall Status: DISABLED  ";
    }
    else if(hackNum == 9){
      cli5.textContent += "\r\n";
      cli5.textContent += "mrRobot.pak injected-to-server";
      cli5.textContent += "$ sudo initiate_system_scan --target 192.168.0.1\r\n";
      cli5.textContent += "\r\n";
    }
    else if(hackNum == 10){
      cli5.textContent += "Network Speed: 500Mbps up / 700Mbps down\r\n";
      
      cli5.textContent += "Scanning for vulnerabilities... \r\n";
    }
    else if(hackNum == 11){
      cli5.textContent += "          --> ";
    }
    else if(hackNum == 12){
      cli5.textContent += "            -->              ";
    }
    else if(hackNum == 13){
      cli5.textContent += "\r\n";
      cli5.textContent += "[██████████████████████████████████████] 99% complete...\r\n";
      cli5.textContent += "[██████████████████████████████████████] 99% complete...\r\n";
      cli5.textContent += "[ERROR: Infinite loop detected. Terminating...]\r\n";
    }
    else if(hackNum == 14){
      cli5.textContent += "\r\n";
    }
    else if(hackNum == 15){
      cli5.textContent += "[+] Port 22: Open\r\n";
    }
    else if(hackNum == 16){
      cli5.textContent += "[+] Access gained! \r\n ";
      cli5.textContent += "RAM Usage: ███████████████░░ 80%";
    }
    else if(hackNum == 17){
      cli5.textContent += "[+] Found SSH credentials: root:toor\r\n ";
    }
    else if(hackNum == 18){
      cli5.textContent += "[!] Exploiting vulnerability CVE-2025-12345\r\n";
    }
    else if(hackNum == 19){
      cli5.textContent += "[2095-24-23 69:23:24] [ALERT] Unauthorized access detected. Countermeasures activated.\r\n";
    }
    else if(hackNum == 20){
      cli5.textContent += "\r\n";
      cli5.textContent += "[!] Exploiting vulnerability CVE-2025-12345\r\n";
      cli5.textContent += "System CPU Usage: ██████████░░░░░░░ 63%";
      cli5.textContent += "\r\n";
    }
   
  }

  


console.log(cliNum);
  

  }

