# 🧪 Como Testar o Sistema

## Opção 1: Modo de Desenvolvimento (Mais Fácil)

O projeto já está configurado com **modo de desenvolvimento** que permite entrar
com **qualquer número de telefone** sem validar na API.

### Passos:

1. **Certifique-se que o arquivo `.env.local` existe** no diretório `frontend/`:
   ```bash
   cd frontend
   # O arquivo .env.local já deve existir com NEXT_PUBLIC_DEV_MODE=true
   ```

2. **Inicie o servidor**:
   ```bash
   npm run dev
   ```

3. **Acesse**: http://localhost:3000

4. **Na tela de login**, digite **qualquer número** (ex: `27998479940` ou
   `11999887766`)

5. **Clique em "Acessar Cardápio"** → Você entrará automaticamente como "Usuário
   Teste"

---

## Opção 2: Testar com API Real

Se quiser testar com a API real, você precisa de um número válido cadastrado no
sistema.

### Passos:

1. **Desative o modo de desenvolvimento**:
   ```bash
   cd frontend
   # Edite .env.local e mude para:
   NEXT_PUBLIC_DEV_MODE=false
   ```

2. **Reinicie o servidor**:
   ```bash
   npm run dev
   ```

3. **Use um número válido** que está cadastrado na API:
   - Exemplo: `+5527998479940` (formato completo)
   - Ou apenas: `27998479940` (o sistema adiciona +55 automaticamente)

4. **Se o número for válido**, você verá o nome do usuário retornado pela API
5. **Se não for válido**, verá a mensagem: "Usuário não encontrado"

---

## 🔍 Como Verificar se Está em Modo Dev

Quando estiver em modo de desenvolvimento, você verá no console do navegador
(F12) que a validação está sendo mockada.

---

## 🚀 Para Produção

Antes de fazer deploy:

1. **Remova ou desative** o modo de desenvolvimento:
   ```bash
   # Em .env.local ou variáveis de ambiente de produção:
   NEXT_PUBLIC_DEV_MODE=false
   ```

2. **Ou remova completamente** a variável para usar sempre a API real

---

## 💡 Dica

Se você quiser testar com um nome específico em modo dev, edite o arquivo
`frontend/lib/auth.ts` na linha que retorna o usuário mockado:

```typescript
user: {
  name: 'Seu Nome Aqui', // Altere aqui
}
```
