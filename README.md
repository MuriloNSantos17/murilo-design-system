# Murilo Design System

Design system para aplicações React, desenvolvido com TypeScript, Stitches e
Radix UI. O projeto reúne tokens de design, componentes reutilizáveis e uma
documentação interativa no Storybook.

[Documentação (Storybook)](https://murilonsantos17.github.io/murilo-design-system/) ·
[Repositório](https://github.com/MuriloNSantos17/murilo-design-system)

## Pacotes

Este repositório é um monorepo gerenciado com npm workspaces e Turborepo.

| Pacote | Versão | Descrição |
| --- | --- | --- |
| [`@murilo-nsantos-ui/react`](https://www.npmjs.com/package/@murilo-nsantos-ui/react) | 5.0.0 | Componentes React e configuração de estilos |
| [`@murilo-nsantos-ui/tokens`](https://www.npmjs.com/package/@murilo-nsantos-ui/tokens) | 3.0.0 | Cores, tipografia, espaçamentos, raios e alturas de linha |
| `@murilo-nsantos-ui/eslint-config` | 3.0.0 | Configuração interna do ESLint |
| `@murilo-nsantos-ui/ts-config` | 3.0.0 | Configurações internas do TypeScript |

## Componentes

- `Avatar`
- `Box`
- `Button`
- `CheckBox`
- `Heading`
- `MultiStep`
- `Text`
- `TextArea`
- `TextInput`

Os componentes aceitam as propriedades nativas dos respectivos elementos e,
quando disponível, variantes tipadas de aparência e tamanho.

## Instalação

Instale a biblioteca de componentes:

```bash
npm install @murilo-nsantos-ui/react
```

Para consumir somente os tokens:

```bash
npm install @murilo-nsantos-ui/tokens
```

O pacote de componentes requer React 18 na aplicação.

## Uso

```tsx
import {
  Box,
  Button,
  Heading,
  Text,
  TextInput,
} from '@murilo-nsantos-ui/react'

export function SignInForm() {
  return (
    <Box
      as="form"
      css={{
        display: 'flex',
        flexDirection: 'column',
        gap: '$4',
        maxWidth: 400,
      }}
    >
      <Heading as="h1" size="lg">
        Entrar
      </Heading>

      <Text size="sm">
        Informe seu e-mail para acessar sua conta.
      </Text>

      <TextInput type="email" placeholder="voce@exemplo.com" />

      <Button type="submit" variant="primary" size="md">
        Continuar
      </Button>
    </Box>
  )
}
```

### Tokens

Os tokens podem ser usados diretamente em JavaScript ou TypeScript:

```ts
import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@murilo-nsantos-ui/tokens'

const cardStyle = {
  backgroundColor: colors.gray800,
  borderRadius: radii.md,
  padding: space[6],
}
```

Nos componentes, os mesmos valores ficam disponíveis pela propriedade `css`
com o prefixo `$`:

```tsx
<Box css={{ backgroundColor: '$gray800', padding: '$6' }}>
  <Text css={{ color: '$gray100' }}>Conteúdo</Text>
</Box>
```

## Desenvolvimento

### Pré-requisitos

- Node.js 18 ou superior
- npm

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/MuriloNSantos17/murilo-design-system.git
cd murilo-design-system
npm install
```

Inicie os pacotes em modo de desenvolvimento:

```bash
npm run dev
```

O Storybook estará disponível em `http://localhost:6006`.

### Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Executa os pacotes em modo de desenvolvimento |
| `npm run build` | Gera os builds dos pacotes e do Storybook |
| `npm run changeset` | Cria um registro de alteração para versionamento |
| `npm run version-packages` | Atualiza as versões e os changelogs |
| `npm run release` | Compila e publica os pacotes no npm |

## Estrutura

```text
.
├── packages/
│   ├── docs/           # Documentação e exemplos no Storybook
│   ├── eslint-config/  # Configuração compartilhada do ESLint
│   ├── react/          # Componentes React
│   ├── tokens/         # Design tokens
│   └── ts-config/      # Configurações compartilhadas do TypeScript
├── .changeset/         # Versionamento dos pacotes
├── .github/workflows/  # Publicação dos pacotes e da documentação
├── package.json
└── turbo.json
```

## Versionamento e publicação

O projeto utiliza [Changesets](https://github.com/changesets/changesets) para
gerenciar versões e changelogs. Ao alterar um pacote publicável, execute
`npm run changeset`, descreva a mudança e inclua o arquivo gerado no commit.

Os fluxos do GitHub Actions publicam a documentação no GitHub Pages e os
pacotes no npm após alterações na branch `main`.

## Licença

Distribuído sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE).
