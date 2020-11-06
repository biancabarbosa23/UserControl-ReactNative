# UserControl-ReactNative

Aplicativo mobile utilizando React Native[EXPO] feito para cadastrar e gerenciar usuários por nivel de acesso, utilizando autenticação, conexão com o MondoDB.
- Nivel de acesso administrativo (999) - Tem acesso a listagem, desativação e alteraração dos usuarios cadastrados.
- Nivel de acesso Comum (1) - Tem acesso somente a seu perfil, podendo modifica-lo.
- Nivel de acesso desabilitado (0) -  Não tem acesso a plataforma.

## Começando

Necessario o backend rodando

### Requisitos

 - Node
 - React Native
 - [Backend](https://github.com/biancabarbosa23/UserControl-NodeJS.git)
 
### Iniciando 
```
$ git clone https://github.com/biancabarbosa23/UserControl-ReactNative.git
```
```
$ cd UserControl-ReactNative
```
```
$ npm install
```
```
$ expo start
```

### Configuração

- Baixar o Backend 
- Iniciar o servidor 
- Alterar o localhost


## Testes

- Faça um cadastro na apliacação e edite seu perfil. 

- Administradores podem listar e alterar os demais usuarios clicando sobre eles. 
- Para desativar ou ativar algum usuario basta arrastar o usuario para a esquerda na lista de usuarios. 

## Bugs a corrigir

-´[BUG] Visualização da imagem do usuário na listagem

## Autores

* **Bianca Alves**

## Licença
 
 - Nenhuma

