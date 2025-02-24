# Usa uma imagem base do Node.js (versão 16)
FROM node:16

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos de dependências (package.json e package-lock.json)
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código para o contêiner
COPY . .

# Expõe a porta 3000 (a mesma que o React usa)
EXPOSE 3000

# Comando para rodar o servidor de desenvolvimento
CMD ["npm", "start"]