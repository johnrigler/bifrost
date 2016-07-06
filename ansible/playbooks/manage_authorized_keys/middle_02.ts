Script started on Mon 07 Mar 2016 05:30:28 PM EST

PLAY ***************************************************************************

TASK [setup] *******************************************************************
[0;31mfatal: [hnbaixmon.kdc.capitalone.com]: UNREACHABLE! => {"changed": false, "msg": "ERROR! SSH encountered an unknown error during the connection. We recommend you re-run the command using -vvvv, which will enable SSH debugging output to help diagnose the issue", "unreachable": true}[0m
[0;31mfatal: [normandy.kdc.capitalone.com]: UNREACHABLE! => {"changed": false, "msg": "ERROR! SSH encountered an unknown error during the connection. We recommend you re-run the command using -vvvv, which will enable SSH debugging output to help diagnose the issue", "unreachable": true}[0m
[0;32mok: [aquifer664.kdc.capitalone.com][0m
[0;31mfatal: [sd2n2v4.kdc.capitalone.com]: FAILED! => {"changed": false, "failed": true, "module_stderr": "", "module_stdout": "ksh: /usr/bin/python:  not found\r\n", "msg": "MODULE FAILURE", "parsed": false}[0m
[0;31mfatal: [icebird.kdc.capitalone.com]: FAILED! => {"changed": false, "failed": true, "module_stderr": "", "module_stdout": "  File \"/home/aaa/.ansible/tmp/ansible-tmp-1457389829.3-247528891766385/setup\", line 360\r\n    return dict((_convert(k), _convert(v)) for k, v in node.items())\r\n                                             ^\r\nSyntaxError: invalid syntax\r\n", "msg": "MODULE FAILURE", "parsed": false}[0m
[0;31mfatal: [cruise.kdc.capitalone.com]: FAILED! => {"changed": false, "failed": true, "module_stderr": "", "module_stdout": "ERROR:root:code for hash md5 was not found.\r\nTraceback (most recent call last):\r\n  File \"/opt/freeware/lib/python2.7/hashlib.py\", line 139, in <module>\r\n    globals()[__func_name] = __get_hash(__func_name)\r\n  File \"/opt/freeware/lib/python2.7/hashlib.py\", line 91, in __get_builtin_constructor\r\n    raise ValueError('unsupported hash type ' + name)\r\nValueError: unsupported hash type md5\r\nERROR:root:code for hash sha1 was not found.\r\nTraceback (most recent call last):\r\n  File \"/opt/freeware/lib/python2.7/hashlib.py\", line 139, in <module>\r\n    globals()[__func_name] = __get_hash(__func_name)\r\n  File \"/opt/freeware/lib/python2.7/hashlib.py\", line 91, in __get_builtin_constructor\r\n    raise ValueError('unsupported hash type ' + name)\r\nValueError: unsupported hash type sha1\r\nERROR:root:code for hash sha224 was not found.\r\nTraceback (most recent call last):\r\n  File \"/opt/freeware/lib/python2.7/hashlib.py\", line 139, in <module>\r\n    globals()[__func_name] = __get_hash(__func_name)\r\n  File \"/opt/freeware/lib/python2.7/hashlib.py\", line 91, in __get_builtin_constructor\r\n    raise ValueError('unsupported hash type ' + name)\r\nValueError: unsupported hash type sha224\r\nERROR:root:code for hash sha256 was not found.\r\nTraceback (most recent call last):\r\n  File \"/opt/freeware/lib/python2.7/hashlib.py\", line 139, in <module>\r\n    globals()[__func_name] = __get_hash(__func_name)\r\n  File \"/opt/freeware/lib/python2.7/hashlib.py\", line 91, in __get_builtin_constructor\r\n    raise ValueError('unsupported hash type ' + name)\r\nValueError: unsupported hash type sha256\r\nERROR:root:code for hash sha384 was not found.\r\nTraceback (most recent call last):\r\n  File \"/opt/freeware/lib/python2.7/hashlib.py\", line 139, in <module>\r\n    globals()[__func_name] = __get_hash(__func_name)\r\n  File \"/opt/freeware/lib/python2.7/hashlib.py\", line 91, in __get_builtin_constructor\r\n    raise ValueError('unsupported hash type ' + name)\r\nValueError: unsupported hash type sha384\r\nERROR:root:code for hash sha512 was not found.\r\nTraceback (most recent call last):\r\n  File \"/opt/freeware/lib/python2.7/hashlib.py\", line 139, in <module>\r\n    globals()[__func_name] = __get_hash(__func_name)\r\n  File \"/opt/freeware/lib/python2.7/hashlib.py\", line 91, in __get_builtin_constructor\r\n    raise ValueError('unsupported hash type ' + name)\r\nValueError: unsupported hash type sha512\r\nTraceback (most recent call last):\r\n  File \"/home/aaa/.ansible/tmp/ansible-tmp-1457389830.42-229874250727195/setup\", line 320, in <module>\r\n    AVAILABLE_HASH_ALGORITHMS[algorithm] = getattr(hashlib, algorithm)\r\nAttributeError: 'module' object has no attribute 'md5'\r\n", "msg": "MODULE FAILURE", "parsed": false}[0m
[0;31mfatal: [janie.kdc.capitalone.com]: UNREACHABLE! => {"changed": false, "msg": "ERROR! SSH encountered an unknown error during the connection. We recommend you re-run the command using -vvvv, which will enable SSH debugging output to help diagnose the issue", "unreachable": true}[0m
[0;32mok: [hurley.kdc.capitalone.com][0m
[0;31mfatal: [kdcnim01.kdc.capitalone.com]: FAILED! => {"changed": false, "failed": true, "module_stderr": "", "module_stdout": "  File \"/home/aaa/.ansible/tmp/ansible-tmp-1457389833.37-28542002415852/setup\", line 360\r\n    return dict((_convert(k), _convert(v)) for k, v in node.items())\r\n                                             ^\r\nSyntaxError: invalid syntax\r\n", "msg": "MODULE FAILURE", "parsed": false}[0m
[0;31mfatal: [nigel2.kdc.capitalone.com]: FAILED! => {"changed": false, "failed": true, "module_stderr": "", "module_stdout": "Traceback (most recent call last):\r\n  File \"/home/aaa/.ansible/tmp/ansible-tmp-1457389829.38-47111002451384/setup\", line 337, in ?\r\n    from compiler import ast, parse\r\nImportError: No module named compiler\r\n", "msg": "MODULE FAILURE", "parsed": false}[0m
[0;32mok: [radius.kdc.capitalone.com][0m
[0;31mfatal: [plmcduck.kdc.capitalone.com]: UNREACHABLE! => {"changed": false, "msg": "ERROR! SSH encountered an unknown error during the connection. We recommend you re-run the command using -vvvv, which will enable SSH debugging output to help diagnose the issue", "unreachable": true}[0m
[0;31mfatal: [pdcjumpstart.kdc.capitalone.com]: UNREACHABLE! => {"changed": false, "msg": "ERROR! SSH encountered an unknown error during the connection. We recommend you re-run the command using -vvvv, which will enable SSH debugging output to help diagnose the issue", "unreachable": true}[0m
[0;31mfatal: [devcaps01.kdc.capitalone.com]: UNREACHABLE! => {"changed": false, "msg": "ERROR! SSH encountered an unknown error during the connection. We recommend you re-run the command using -vvvv, which will enable SSH debugging output to help diagnose the issue", "unreachable": true}[0m
[0;31mfatal: [stealth.kdc.capitalone.com]: UNREACHABLE! => {"changed": false, "msg": "ERROR! SSH encountered an unknown error during the connection. We recommend you re-run the command using -vvvv, which will enable SSH debugging output to help diagnose the issue", "unreachable": true}[0m
[0;31mfatal: [utah.kdc.capitalone.com]: UNREACHABLE! => {"changed": false, "msg": "ERROR! SSH encountered an unknown error during the connection. We recommend you re-run the command using -vvvv, which will enable SSH debugging output to help diagnose the issue", "unreachable": true}[0m
[0;31mfatal: [drdns1.kdc.capitalone.com]: UNREACHABLE! => {"changed": false, "msg": "ERROR! SSH encountered an unknown error during the connection. We recommend you re-run the command using -vvvv, which will enable SSH debugging output to help diagnose the issue", "unreachable": true}[0m
[0;31mfatal: [bourne.kdc.capitalone.com]: UNREACHABLE! => {"changed": false, "msg": "ERROR! SSH encountered an unknown error during the connection. We recommend you re-run the command using -vvvv, which will enable SSH debugging output to help diagnose the issue", "unreachable": true}[0m
[0;32mok: [kdcinfo.kdc.capitalone.com][0m
[0;31mfatal: [drdns2.kdc.capitalone.com]: UNREACHABLE! => {"changed": false, "msg": "ERROR! SSH encountered an unknown error during the connection. We recommend you re-run the command using -vvvv, which will enable SSH debugging output to help diagnose the issue", "unreachable": true}[0m

TASK [command] *****************************************************************
[0;36mskipping: [hurley.kdc.capitalone.com][0m
[0;36mskipping: [radius.kdc.capitalone.com][0m
[0;36mskipping: [kdcinfo.kdc.capitalone.com][0m
[0;33mchanged: [aquifer664.kdc.capitalone.com][0m

TASK [debug] *******************************************************************
[0;32mok: [hurley.kdc.capitalone.com] => {
    "ansible_python_version": "2.7.5"
}[0m
[0;32mok: [radius.kdc.capitalone.com] => {
    "ansible_python_version": "2.7.5"
}[0m
[0;36mskipping: [kdcinfo.kdc.capitalone.com][0m
[0;32mok: [aquifer664.kdc.capitalone.com] => {
    "ansible_python_version": "2.6.6"
}[0m

NO MORE HOSTS LEFT *************************************************************

PLAY RECAP *********************************************************************
[0;33maquifer664.kdc.capitalone.com[0m : [0;32mok[0m[0;32m=[0m[0;32m3[0m    [0;33mchanged[0m[0;33m=[0m[0;33m1[0m    unreachable=0    failed=0   
[0;31mbourne.kdc.capitalone.com[0m  : ok=0    changed=0    [0;31munreachable[0m[0;31m=[0m[0;31m1[0m    failed=0   
[0;31mcruise.kdc.capitalone.com[0m  : ok=0    changed=0    unreachable=0    [0;31mfailed[0m[0;31m=[0m[0;31m1[0m   
[0;31mdevcaps01.kdc.capitalone.com[0m : ok=0    changed=0    [0;31munreachable[0m[0;31m=[0m[0;31m1[0m    failed=0   
[0;31mdrdns1.kdc.capitalone.com[0m  : ok=0    changed=0    [0;31munreachable[0m[0;31m=[0m[0;31m1[0m    failed=0   
[0;31mdrdns2.kdc.capitalone.com[0m  : ok=0    changed=0    [0;31munreachable[0m[0;31m=[0m[0;31m1[0m    failed=0   
[0;31mhnbaixmon.kdc.capitalone.com[0m : ok=0    changed=0    [0;31munreachable[0m[0;31m=[0m[0;31m1[0m    failed=0   
[0;32mhurley.kdc.capitalone.com[0m  : [0;32mok[0m[0;32m=[0m[0;32m2[0m    changed=0    unreachable=0    failed=0   
[0;31micebird.kdc.capitalone.com[0m : ok=0    changed=0    unreachable=0    [0;31mfailed[0m[0;31m=[0m[0;31m1[0m   
[0;31mjanie.kdc.capitalone.com[0m   : ok=0    changed=0    [0;31munreachable[0m[0;31m=[0m[0;31m1[0m    failed=0   
[0;32mkdcinfo.kdc.capitalone.com[0m : [0;32mok[0m[0;32m=[0m[0;32m1[0m    changed=0    unreachable=0    failed=0   
[0;31mkdcnim01.kdc.capitalone.com[0m : ok=0    changed=0    unreachable=0    [0;31mfailed[0m[0;31m=[0m[0;31m1[0m   
[0;31mnigel2.kdc.capitalone.com[0m  : ok=0    changed=0    unreachable=0    [0;31mfailed[0m[0;31m=[0m[0;31m1[0m   
[0;31mnormandy.kdc.capitalone.com[0m : ok=0    changed=0    [0;31munreachable[0m[0;31m=[0m[0;31m1[0m    failed=0   
[0;31mpdcjumpstart.kdc.capitalone.com[0m : ok=0    changed=0    [0;31munreachable[0m[0;31m=[0m[0;31m1[0m    failed=0   
[0;31mplmcduck.kdc.capitalone.com[0m : ok=0    changed=0    [0;31munreachable[0m[0;31m=[0m[0;31m1[0m    failed=0   
[0;32mradius.kdc.capitalone.com[0m  : [0;32mok[0m[0;32m=[0m[0;32m2[0m    changed=0    unreachable=0    failed=0   
[0;31msd2n2v4.kdc.capitalone.com[0m : ok=0    changed=0    unreachable=0    [0;31mfailed[0m[0;31m=[0m[0;31m1[0m   
[0;31mstealth.kdc.capitalone.com[0m : ok=0    changed=0    [0;31munreachable[0m[0;31m=[0m[0;31m1[0m    failed=0   
[0;31mutah.kdc.capitalone.com[0m    : ok=0    changed=0    [0;31munreachable[0m[0;31m=[0m[0;31m1[0m    failed=0   


Script done on Mon 07 Mar 2016 05:30:45 PM EST
