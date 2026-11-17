# VanGym

Rastreador mobile de treinos feito com Expo, React Native e TypeScript. O app inicia em modo demonstração sem chaves Firebase e guarda o estado localmente com AsyncStorage.

## Rodar

```bash
npm install
npx expo start
```

Abra no Expo Go ou use `npm run android` / `npm run ios` com o ambiente nativo instalado.

## Firebase opcional

Copie `.env.example` para `.env` e preencha as quatro variáveis `EXPO_PUBLIC_FIREBASE_*` com as chaves de um app Firebase. Ative Email/Password em Authentication e publique `firestore.rules`. Apelidos são mapeados para e-mails internos `@vangym.app`; os dados do perfil e do plano são espelhados em `users/{uid}` no Firestore quando autenticado. O AsyncStorage continua como cache local e fallback offline.

O MVP inclui onboarding, escolha de personagem, planejamento semanal, memória/calibragem de cargas, arena com código de convite e métricas corporais. Com Firebase configurado, grupos e perfis sincronizam pelo Firestore; sem credenciais, os grupos funcionam em modo demonstração local.
