# Delete old folder
Remove-Item -Recurse -Force .\src

# Upadate components
Copy-Item -Recurse .\example\src\ src

