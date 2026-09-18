@echo off
title Push Recensement S9 vers GitHub
echo ========================================================
echo       Envoi du projet Recensement S9 vers GitHub
echo ========================================================
echo.

set "GIT_EXE=C:\Users\moham\AppData\Local\GitHubDesktop\app-3.6.2\resources\app\git\cmd\git.exe"

echo [1/3] Verification de la branche locale...
"%GIT_EXE%" branch -M main

echo [2/3] Verification de l'adresse distante...
"%GIT_EXE%" remote set-url origin https://github.com/mo74meed/recensement-s9.git

echo [3/3] Envoi vers GitHub (veuillez valider la connexion si demandee)...
"%GIT_EXE%" push -u origin main

echo.
if %ERRORLEVEL% equ 0 (
    echo ========================================================
    echo   SUCCES : Votre projet a ete publie sur GitHub !
    echo   https://github.com/mo74meed/recensement-s9
    echo ========================================================
) else (
    echo ========================================================
    echo   NOTE : Si le depot n'existe pas encore sur votre compte :
    echo   1. Creez le depot sur https://github.com/new avec le nom : recensement-s9
    echo   2. Relancez ce fichier !
    echo ========================================================
)
echo.
pause
