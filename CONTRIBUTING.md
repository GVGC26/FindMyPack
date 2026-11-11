# Contribuição

## Worktrees e branches

- Mantenha uma worktree e uma branch exclusivas por pessoa; não faça commits diretamente em `main`.
- Use branches curtas e focadas, por exemplo `feat/<assunto>` ou `fix/<assunto>`.
- Atualize sua branch com `main` antes de pedir revisão e não force-push depois de uma aprovação sem avisar o revisor.
- Abra um PR para `main`, descreva o que mudou e como foi validado, e peça uma aprovação de outra pessoa.
- O merge só é permitido depois da aprovação, da resolução das conversas e da aprovação dos checks obrigatórios.

## Ambiente e testes

Execute aplicação, dependências e testes por Docker Compose. Não é necessário iniciar ferramentas Java, Node.js ou PostgreSQL diretamente no host.

```powershell
docker compose up --build
docker compose --profile test run --build --rm test-backend
docker compose --profile test run --build --rm test-frontend
docker compose --profile test down
```

O workflow de CI executa os testes em PRs para `main` e publica imagens no GHCR após a atualização de `main`. A publicação das imagens não configura, por si só, um host de produção.
