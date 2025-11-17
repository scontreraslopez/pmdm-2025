#!/bin/bash

repos_file="repos.txt"

if [ ! -f "$repos_file" ]; then
  echo "El archivo $repos_file no existe."
  exit 1
fi

while IFS= read -r repo; do
  [[ -z "$repo" || "$repo" =~ ^# ]] && continue
  echo "Clonando $repo ..."
  git clone "$repo"
done < "$repos_file"

echo "✅ Todos los repositorios han sido descargados."