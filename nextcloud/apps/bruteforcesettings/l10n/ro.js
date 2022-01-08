OC.L10N.register(
    "bruteforcesettings",
    {
    "Brute-force settings" : "Setări pentru forță-brută",
    "Whitelist IPs" : "IP-uri permise",
    "Brute Force Protection is meant to protect Nextcloud servers from attempts to\nguess user passwords in various ways. Besides the obvious \"*let's try a big\nlist of commonly used passwords*\" attack, it also makes it harder to use\nslightly more sophisticated attacks via the reset password form or trying to\nfind app password tokens.\n\nIf triggered, brute force protection makes requests coming from an IP on a\nbruteforce protected controller with the same API slower for a 24 hour period.\n\nWith this app, the admin can exempt an IP address or range from this\nprotection which can be useful for testing purposes or when there are false\npositives due to a lot of users on one IP address." : "Protecția împotriva atacurilor de tip Brute Force este proiectat să protejeze serverul Nextcloud împotriva încercărilor de\na ghici parola utilizatorilor în moduri variate. În afară de metoda evidentă de \"hai să încercăm o listă lungă de parole cunoscute\" această protecție este gândită și pentru portejarea împotriva unor atacuri mai sofisticate precum atacurile ce folosesc formularul de resetare a parolei sau prin încercarea de a găsi tokenul de parolă al aplicației.\n\nDacă este activată, protecția împotriva atacurilor de tip Brute Force ce provin de la aceleași adrese IP ce se conectează la același controler va încetini acest controler pe o perioadă de 24 de ore.\n\nCu această aplicație administratorul de sistem poate adăuga în lista de excepții anumite intervale de adrese IP, lucru ce poate fii folositor pentru desfășurarea unor teste sau pentru momentul în care există mai mulți utilizatori ce folosesc aceași adresă IP.",
    "Brute-force IP whitelist" : "IP-uri permise pentru forță-brută",
    "To whitelist IP ranges from the brute-force protection specify them below. Note that any whitelisted IP can perform authentication attempts without any throttling. For security reasons, it is recommended to whitelist as few hosts as possible or ideally even none at all." : "Pentru a adăuga adrese de IP permise te rog sa le specifici mai jos. De asemenea ține cont ca orice adresa de IP adăugată se va putea autentifica fără nici o restricție. Din pc. de vedere al securității limitează pe cat de mult posibil adresele de IP adăugate, sau, ideal, nu adaugă nici una.",
    "Add new whitelist" : "Adaugă o nouă listă de ip-uri permise",
    "Add" : "Adaugă",
    "Delete" : "Șterge"
},
"nplurals=3; plural=(n==1?0:(((n%100>19)||((n%100==0)&&(n!=0)))?2:1));");
