# FindMyPack

Monólito com API Java/Spring Boot, interface React/Vite e PostgreSQL. O ambiente de desenvolvimento, os testes e a geração das imagens são executados com Docker Compose; não é necessário instalar Java, Node.js ou PostgreSQL na máquina.

## Executar

Requer Docker com Docker Compose v2.

```powershell
docker compose up --build
```

- Interface: http://localhost:5173
- API: http://localhost:8080/api/health
- PostgreSQL: `localhost:5432` (banco/usuário/senha: `findmypack`)

O Vite encaminha `/api` ao serviço Spring Boot. A API consulta o PostgreSQL no endpoint de saúde, então a resposta também confirma a conexão com o banco.

## Testes e imagens de produção

Os testes também rodam em containers Compose:

```powershell
docker compose --profile test run --build --rm test-backend
docker compose --profile test run --build --rm test-frontend
docker compose --profile test down
```

Para compilar as imagens de produção localmente:

```powershell
docker compose --profile production build backend frontend-prod
```

## Trabalho assíncrono em três worktrees

Cada pessoa deve trabalhar em uma worktree e branch próprios, mantendo alterações pequenas e focadas. Abra um PR para `main` quando o trabalho estiver pronto; outra pessoa deve revisar e aprovar. Resolva conversas e aguarde os checks obrigatórios antes do merge. Não compartilhe branches de trabalho entre worktrees.

O GitHub protege `main` com regra ativa: exige PR e uma aprovação, checks de backend, frontend e imagens de produção aprovados, e bloqueia exclusão e force-push. Não há bypass configurado para administradores. O workflow publica imagens no GHCR somente após os checks passarem em uma atualização de `main` (merge do PR).

O workflow de publicação deixa as imagens em `ghcr.io/<owner>/findmypack/{backend,frontend}`. O destino para executar essas imagens em produção não foi especificado; configure o ambiente `production` e o passo de entrega ao host/plataforma de destino antes de conectar um deploy de runtime.

Veja [CONTRIBUTING.md](CONTRIBUTING.md) para detalhes do fluxo e dos comandos.
