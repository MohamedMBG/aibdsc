@echo off
setlocal
cd /d "%~dp0"
title AIBDSC - Stopping

echo ==========================================================
echo   Stopping AIBDSC Management Platform
echo ==========================================================
echo.

docker compose down

echo.
echo ==========================================================
echo   The system has stopped. Your data is safe.
echo   Run START_SYSTEM.bat whenever you want to use it again.
echo ==========================================================
echo.
pause
