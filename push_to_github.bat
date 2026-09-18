@echo off
title Push S9 vers GitHub
echo ========================================================
echo         Envoi du projet S9 vers GitHub Pages
echo ========================================================
echo.

set "GIT_EXE=C:\Users\moham\AppData\Local\GitHubDesktop\app-3.6.2\resources\app\git\cmd\git.exe"

echo [1/3] Verification de la branche locale...
"%GIT_EXE%" branch -M main

echo [2/3] Verification de l'adresse distante...
"%GIT_EXE%" remote set-url origin https://github.com/mo74meed/S9.git

echo [3/3] Envoi vers GitHub...
"%GIT_EXE%" push -u origin main

echo.
if %ERRORLEVEL% equ 0 (
    echo ========================================================
    echo   SUCCES : Votre projet S9 est a jour sur GitHub !
    echo   https://mo74meed.github.io/S9/
    echo ========================================================
) else (
    echo ========================================================
    echo   NOTE : Si la fenetre de connexion GitHub apparait,
    echo   validez la connexion, ou utilisez GitHub Desktop :
    echo   Cliquez sur 'Push origin' dans l'application GitHub Desktop.
    echo ========================================================
)
echo.
pause
